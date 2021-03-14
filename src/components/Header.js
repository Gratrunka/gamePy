import React from 'react'
import {View,Text,StatusBar,StyleSheet} from 'react-native'
import {toDp} from '../../src/utils/styleMethods'


function Header (props){
    const styles = StyleSheet.create({
        header:{
            flexDirection:'row',alignItems:'center',justifyContent:'space-between',height:toDp(50),backgroundColor:'#FEFEFE',
            paddingLeft:toDp(10),paddingTop:toDp(5)
        },
        content:{
            fontSize:toDp(20),
            paddingRight:toDp(10)
        },
        icon:{
            paddingRight:toDp(10),
            fontFamily:'iconfont',
            fontSize:toDp(20)
        }

        
      });
      return (
    
        <View >
          {/* 状态栏 */}
          <StatusBar backgroundColor="transparent" translucent={true}></StatusBar>
          <View >
             <View style={styles.header}>
                    <View style={styles.header}>
                        <Text style={styles.content}>数据</Text>
                        <Text style={styles.content}>动态</Text>
                    </View>
                    <View style={styles.header}>
                        <Text style={styles.icon}>&#xe611;</Text>
                    </View>
            </View>
          </View>
            
        </View>
        
        )
} 

export default Header;