//设计稿宽度/元素的宽度 = 手机屏幕/手机中元素的宽度
// 手机中元素的宽度=
import {Dimensions} from 'react-native'
export const srcreenWidth = Math.round(Dimensions.get('window').width)
export const srcreenHeight = Math.round(Dimensions.get('window').height)

export const  toDp = (elePx)=>srcreenWidth*elePx/375