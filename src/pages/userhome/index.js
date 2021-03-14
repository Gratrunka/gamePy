import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Linking,ImageBackground} from 'react-native';
import {Avatar,Accessory} from 'react-native-elements'
import {toDp} from '../../utils/styleMethods'
import Header from '../../components/Header'
// import style from './index.less'

function UserHome(){
    const styles = StyleSheet.create({
        
        userCard:{
           flexDirection:'row',alignItems:'center',justifyContent:'flex-start',
           height:toDp(70),padding:toDp(10),backgroundColor:'#FEFEFE'
        },
        follower:{flexDirection:'row',alignItems:'center',justifyContent:'space-around',height:toDp(50)},
        folloerItems:{}
      });
      const bindMySteamCount =()=>{
          console.log('绑定账号');
          let baidu = 'https://baidu.com'
          let url = `https://steamcommunity.com/openid/login?openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.return_to=http%3A%2F%2Flocalhost:1122%2Fauth`;
            Linking.openURL(baidu)
      }
    return (
        <View style={{backgroundColor:'#fff'}}>
           {/* 头部区域 */}
           <Header></Header>
           {/* <View style={styles.header}>
               <View style={styles.header}><Text>数1据</Text><Text>动态</Text></View>
               <View style={styles.header}><Text>1</Text><Text>2</Text><Text>3</Text></View>
           </View> */}
           {/* 玩家社区卡片 */}
           <View>
                <View style={styles.userCard}>
                   <Avatar rounded title="MD" size="large" 
                   source={{
                        uri:
                        'https://i1.hdslb.com/bfs/face/99153cfb45dc4d5d805c90c70de3a3d49419c1c9.jpg@140w_140h_1c.webp',
                    }}/>
                   <View style={{paddingLeft:toDp(10)}}>
                       <Text style={{fontSize:toDp(20)}}>玩家姓名</Text>
                       <Text style={{marginTop:toDp(5),color:'#ccc'}}>个性签名或者Id</Text>
                    </View>
                </View>
                    
               <View style={styles.follower}>
                    <View style={{alignItems:'center'}}>
                        <Text>4</Text>
                        <Text style={{fontSize:toDp(12)}}>关注</Text>
                        
                    </View>
                    <View style={{alignItems:'center'}}>
                        <Text>5</Text>
                        <Text>粉丝</Text>
                        
                    </View>
               </View>
           </View>
           {/* 点击绑定steam账号 */}
           
               
                <ImageBackground source={require("../../assets/img/steam.png")} style={{width: '100%', height: toDp(150),position:'relative'}}>
                
                        <TouchableOpacity onPress={bindMySteamCount}>
                            
                                <Text  >点击绑定steam账号</Text>
                            
                        </TouchableOpacity>
               
                </ImageBackground>
           
           
           {/* <TouchableOpacity onPress={bindMySteamCount}>
                        
                            <Text>点击绑定steam账号</Text>
                        
            </TouchableOpacity> */}

            {/* 拥有游戏 */}
            <View>
                <View style={{flexDirection:'row',justifyContent:'space-between',
                alignItems:'center',marginLeft:toDp(5),backgroundColor:'#F7F8FA',height:toDp(40)}}>
                    <Text style={{fontSize:toDp(16),flex:1}}>拥有游戏</Text>
                    <Text  style={{fontSize:toDp(16),flex:1}}>心愿单</Text>
                </View>
                {/* 这里是一个列表 */}
            </View>
        </View>
    )
}

export default UserHome;