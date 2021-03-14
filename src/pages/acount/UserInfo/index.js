import React from 'react';
import {View,Text} from 'react-native';
import {toDp} from '../../../utils/styleMethods'
import ListItem from '../../../components/ListItems'

function UserInfo (){
    return(
        <View style={{padding:toDp(20)}}>
            {/* 头部区域 */}
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <View>
                   <Text style={{fontFamily:'iconfont',fontSize:toDp(15)}}>&#xe600;</Text>
                </View>
                <View>
                    <Text style={{fontSize:toDp(15)}}>修改个人资料</Text>
                </View>
                <View>
                    <Text style={{fontSize:toDp(15)}}>保存</Text>
                </View>
            </View>
            {/* 可编辑区域
             */}
            <View>
                <ListItem title="个人头像" isAvatar></ListItem>
                <ListItem title="个人昵称"></ListItem>
                <ListItem title="个人签名"></ListItem>
                <ListItem title="性别"></ListItem>
                <ListItem title="生日"></ListItem>
                <ListItem title="邮箱"></ListItem>
            </View>
        </View>
    )
}

export default UserInfo;