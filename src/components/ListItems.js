import React,{useState} from 'react';
import {View,Text} from 'react-native';
import {toDp} from '../../src/utils/styleMethods'
import { Avatar, Accessory,BottomSheet} from 'react-native-elements';
function ListItem(props){
    let {title,isAvatar}=props;
    const [isVisible, setIsVisible] = useState(false);
    const list = [
        { title: '男' },
        { title: '女' },
        {
          title: 'Cancel',
          containerStyle: { backgroundColor: 'red' },
          titleStyle: { color: 'white' },
          onPress: () => setIsVisible(false),
        },
      ];
    return(
        <View>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingTop:toDp(15),paddingBottom:toDp(15),borderBottomWidth:1,borderBottomColor:'#ccc'}}>
            <Text style={{fontSize:toDp(12)}}>
               {title}
            </Text>
            {
                isAvatar?
                <Text style={{fontSize:toDp(12)}}>
                    <Avatar
                    rounded
                    size="large"
                    source={{
                    uri:
                        'https://profile.csdnimg.cn/8/F/0/2_xiangchizhaji',
                    }}
              /></Text>:<Text style={{fontFamily:'iconfont',fontSize:toDp(12)}}>&#xe9ed;</Text>
            }
        </View>

        {/* <BottomSheet isVisible={false}>
        {list.map((l, i) => (
            <ListItem key={i} containerStyle={l.containerStyle} onPress={l.onPress}>
                <ListItem.Content>
                <ListItem.Title style={l.titleStyle}><Text>{l.title}</Text></ListItem.Title>
                </ListItem.Content>
            </ListItem>
            ))}
        </BottomSheet> */}
        </View>
    )
}
export default ListItem;