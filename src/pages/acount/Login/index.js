import  React,{useState,useMemo,useEffect} from 'react';
import { View, Text,StatusBar, TouchableOpacity,StyleSheet,SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,Button,ThemeProvider } from 'react-native-elements';
import {toDp} from '../../../utils/styleMethods'
import validator from '../../../utils/validator'
import request from '../../../utils/request'
import { ACCOUT_LOGIN} from '../../../utils/pathMap'
import {Toast} from 'teaset'

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';

function Login(prop){
    //提醒props被注册了，不知道为什么
    const [phoneNumber,setPhoneNumber]=useState('13629488193')
    const [phoneValid,setValid]=useState(true)
    const [btnDisabled,setbtnDisabled]=useState(false)
    const [showLogin,isShowLogin]=useState(true)
    const [btnText,setBtnText]=useState('获取验证码')
    const changePhoneNumber = useMemo(()=>{
       return (e)=>{
        //    console.log(this);
           setPhoneNumber(e) 
            console.log(e);
       }
    },[phoneNumber])
    const getConfirmCode =  ()=>{
        // 先验证手机号的合法性
        // 发送到后台对应接口，获取验证码
        console.log(validator);
        setbtnDisabled(true);
        setTime();
        // setBtnText('重新获取')
        if(validator.validatePhone(phoneNumber)){
            Toast.message('msg')
            console.log('hefa11');
            setValid(true)
           request.post('/user/login',{tel:phoneNumber}).then((res)=>{
               console.log(res.data);
               if(res.data.code==200){
                isShowLogin(false)
                
               }
               
           }).catch((err)=>{
               console.log(err);
               console.log('shibai');
           })
            
           
        }else{
            console.log('unhefa');
            setValid(false)
        }
    }
    // 渲染登录界面
    const renderLogin = () =>{
        return(
            // 为什么这里没有括号就没有办法访问呢
            <View>
                        <View>
                            <Text style={{fontSize:40,marginTop:toDp(30)}}>
                            验证码登录
                            </Text>
                            <Input
                            placeholder='请输入您的手机号'
                            maxLength={11}
                            keyboardType="phone-pad"
                            value={phoneNumber}
                            leftIcon={{ type: 'font-awesome', name: 'phone' }}
                            onChangeText={(e)=>changePhoneNumber(e)}
                            errorMessage={phoneValid?'':'手机号码格式不正确'}
                            onSubmitEditing={getConfirmCode}
                            style={{color:'#ccc'}}
                            /> 
                        </View>
                        {/* 按钮 */}
                        <View >
                        < TouchableOpacity>
                            <ThemeProvider theme={theme}>
                                    <Button
                                        title={btnText}
                                        type="outline"
                                        disabled={btnDisabled}
                                        onPress={getConfirmCode}                     
                                />
                            </ThemeProvider>
                        </TouchableOpacity>  
                        </View> 
            </View>
                )
        
    }
    // 关于验证码的数据
    const styles = StyleSheet.create({
        root: {flex: 1, padding: 20},
        title: {textAlign: 'center', fontSize: 30},
        codeFieldRoot: {marginTop: 20},
        cell: {
          width: 50,
          height: 40,
          lineHeight: 38,
          fontSize: 34,
          borderBottomWidth: 2,
          borderColor: '#00000030',
          textAlign: 'center',
        },
        focusCell: {
          borderColor: '#000',
         
        },
      });
      const CELL_COUNT = 6;
      const [value, setValue] = useState('');
      const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
      const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
      });
    // 填写验证码页面
    const renderVerify = () =>{
        return (
            (
            <View>
                <Text style={{fontSize:40,marginTop:toDp(30)}}>请填写验证码</Text>
                <Text>已发送到：+86 {phoneNumber}</Text>
                <View>
                    <SafeAreaView style={styles.root}>
                        {/* <Text style={styles.title}>Verification</Text> */}
                        <CodeField
                            ref={ref}
                            {...props}
                            value={value}
                            onChangeText={setValue}
                            cellCount={CELL_COUNT}
                            rootStyle={styles.codeFieldRoot}
                            keyboardType="number-pad"
                            textContentType="oneTimeCode"
                            onSubmitEditing={submitVeriCode}
                            renderCell={({index, symbol, isFocused}) => (
                            <Text
                                key={index}
                                style={[styles.cell, isFocused && styles.focusCell]}
                                onLayout={getCellOnLayoutHandler(index)}>
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                            )}
                        />
                    </SafeAreaView>
                    <View style={{marginTop:toDp(50)}}>
                        <ThemeProvider theme={theme}>
                            <Button
                                title={btnText}
                                type="outline"
                                disabled={btnDisabled}
                                onPress={getConfirmCode}                     
                            />
                        </ThemeProvider>
                    </View>
                </View>
                
            </View>
            
            )
        )
    }
    // 验证码倒计时
    const setTime=()=>{
        let count = 2;
        setBtnText(`重新获取${count}秒`)
        let timeId = setInterval(()=>{
            count--;
            setBtnText(`重新获取${count}秒`)
            if(count==0){
                clearInterval(timeId);
                setbtnDisabled(false)
                setBtnText('重新获取')
            }
        },1000)
    }
    useEffect(()=>{
        if(value.length==CELL_COUNT){
            console.log('tijiao');
            submitVeriCode()
        }
    },[value])
    // 提交验证码
    const submitVeriCode=()=>{
        // 先校验长度，把手机号码和验证码一起发送到后台，根据isNew字段
        // 新用户跳转到完善用户信息，老用户跳转到个人主页
        request.post('/user/loginVerify').then((res)=>{
            if(res.data.isNew){
                // 新用户，编辑完善个人信息
                console.log('新用户');
                // 跳转过去补全信息
                prop.navigation.navigate("Tabbar")
               }else{
                //    老用户 回到个人信息页面
                console.log('老用户');
               }
        })
        
    }
    const goback=()=>{
        prop.navigation.navigate('Tabbar')
    }
    const buttonstyle = StyleSheet.create({
        mybutton:{
           color:'red',
            
        }
    })
    const theme = {
        colors: {
            primary: '#000',
          },
      };
    return(
        <View>
            <View style={{
            backgroundColor:'#000',position:'absolute',height:100+'%',width:100+'%',
            opacity:0.6,left:0,top:0}}>
        </View>
        <View>
            {/* 状态栏 */}
            <StatusBar backgroundColor="transparent" translucent={true}></StatusBar>
            {/* 主题内容 */}
            <View style={{backgroundColor:'white',width:'100%',height:'100%',position:'relative', left:0,top:0,padding:toDp(20)}}>
                <TouchableOpacity onPress={goback}>
                <View style={{marginTop:toDp(10)}}><Text style={{fontFamily:'iconfont',fontSize:toDp(30)}}>&#xe9ec;</Text></View>
                           
                        
                </TouchableOpacity>

               
                {/* 标题 */}
                <Text style={{fontWeight:"700",fontSize:30,marginTop:toDp(10)}} >
                gamePy
                </Text>
                {/* 输入框和按钮（被切换部分 */}
                <View>
                    {showLogin?renderLogin():renderVerify()}

                </View>
            </View>
        </View>
        </View>
    )
}

export default Login;