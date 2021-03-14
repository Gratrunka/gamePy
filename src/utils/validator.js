//利用正则校验手机号

export default{
    validatePhone(phone){
        const reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/; 
        return reg.test(phone)
    }
}