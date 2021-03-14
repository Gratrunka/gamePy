import React,{useState} from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import {toDp,srcreenWidth,srcreenHeight} from '../../utils/styleMethods'
import Header from '../../components/Header'
import { Avatar, Accessory,BottomSheet} from 'react-native-elements';
import Swiper from 'react-native-swiper';
function Home(props){
    
    const styles = StyleSheet.create({
        wrapper: {
           flex: 1,backgroundColor:"#ff0000"
     
        },swiperView:{
            width:srcreenWidth,height:200,backgroundColor:"#000000"
        },swiperStyle:{
            backgroundColor:"#00ff00"
        },slide1: {
            justifyContent: 'center',alignItems: 'center',backgroundColor: '#0000ff',flex: 1
        },slide2: {
            flex: 1,justifyContent: 'center',},
        slide3: {
            flex: 1,
        },
            text: {
            color: '#fff',fontSize: 30,fontWeight: 'bold'
        },
        bannerImg: {
            height: srcreenWidth*40/75,
            width: srcreenWidth,
        },
        // 条目的样式
        items:{
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            padding:toDp(8),
            borderTopWidth:4,
            borderBottomWidth:4,
            borderColor:'red',
            height:toDp(90),
            width:srcreenWidth
        },
        title:{
            justifyContent:'space-between',
            
            borderTopWidth:4,
            borderBottomWidth:4,
            borderColor:'red',
            flex:2
        },
        ti_text:{
            height:toDp(40),
           overflow:'overflow',
           
            fontSize:toDp(15),
            overflow:'hidden'
        },

        bottom:{
            flexDirection:'row'
        },
        img:{
            width:toDp(140),
            height:toDp(70)
        }
    })
    
    return(
        <View style={{backgroundColor:'#FEFEFE'}}>
            <Header></Header>
           <Text>Home112</Text>
           <View style={styles.wrapper}>

               <View style={styles.swiperView}>
               <Swiper style={styles.swiperStyle}
                           showsButtons={false}//左右两边的< >箭头是否显示
                           horizontal={true}//是否水平滚动，默认true
                           loop={true}//是否轮播，默认true
                           index={1}//当前默认第几页，默认0
                        //    onIndexChanged={this._onIndexChanged}//当前滚动到第几页的事件
                           autoplayTimeout = {1}  //轮播的时间
                           autoplay={true}//是否自动轮播，默认false
                           autoplayDirection={true}//是否反向轮播，默认true 左->右
                           showsPagination = {true}  //是否显示dot
                           dot = {<View style={{width:8,height:8,backgroundColor:'#fff',marginRight: 5}}></View>} //指定dot
                           paginationStyle = {{bottom: 10}} //dot的位置
                           activeDot = {<View style={{width:8,backgroundColor:'yellow',marginRight: 5}} />} //选中的dot的样式
 
                   >
                       <View style={styles.slide1} >
                           {/* <Text style={styles.text}>Hello Swiper{srcreenWidth}</Text> */}
                           <Image source={require('../../assets/img/header1.jpg')} style={styles.bannerImg} />
                           {/* 炼金工房20周年纪念作品 与传说的炼金术士们建造「炼金工房」的城镇 与形形色色的人物们相处交织而成的「日常感」、
                            藉由造镇拓展自身世界的「兴奋感」 */}
                       </View>
                       <View style={styles.slide2} >
                           {/* <Text style={styles.text}>Beautiful</Text> */}
                           <Image source={require('../../assets/img/header2.jpg')} style={styles.bannerImg} />
                       </View>
                       <View style={styles.slide3}>
                           {/* <Text style={styles.text}>And simple</Text> */}
                           <Image source={require('../../assets/img/header3.jpg')} style={styles.bannerImg} />
                       </View>
                   </Swiper>
               </View>
               {/* 接下来的条目 */}
               <View style={styles.items}>
                   <View style={styles.title}>
                       <Text style={styles.ti_text}>炼金工房20周年纪念作品 与传说的炼金术士们建造「炼金工房」的城镇 与形形色色的人物们相处交织而成的「日常感」、
                            藉由造镇拓展自身世界的「兴奋感」</Text>
                       <View style={styles.bottom}>
                           <Text>作者</Text>
                           <Text>评论</Text>
                       </View>
                   </View>
                   <View>
                       <Image source={require('../../assets/img/header2.jpg')} style={styles.img}></Image>
                   </View>

               </View>
               <View style={styles.items}>
                   <View >
                       <Text>标题文字一大推</Text>
                       <View>
                           <Text>作者</Text>
                           <Text>评论</Text>
                       </View>
                   </View>
                   <View>
                       <Image source={require('../../assets/img/header2.jpg')} style={styles.img}></Image>
                   </View>

               </View>
           </View>
        </View>

       
    )
}
export default Home;