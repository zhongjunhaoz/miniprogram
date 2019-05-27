// 云函数入口文件
const cloud = require('workplace-dd8fba')
const request = request('request');
// 加密
const request = require('crypto');

cloud.init()
const getSessionKey = function(code){
  return new Promise((resolve,reject)=>{
    // json true 响应题转为json格式的
    request({
      method:'GET',
      url:'https://api.weixin.qq.com/sns/jscode2session',
      qs:{
        appid:'workplace-dd8fba',
        secret:'3ecf436e9ee4a47279b2e68765f98ff6',
        js_code:code,
        grant_type:'authorization_code'
      }
    },(err,res,body)=>{
      if(err){
        reject(err)
      }
      resolve(body)
    })
  })
}
// 云函数入口函数
exports.main = async (event, context) => {
  // 捕获错误代码
  try{
const {code} = event;
const weixinRes = await getSessionKey(code);
const {openid,session_key} = weixinRes;
// 1.创建一个哈希加密算法
// 2. 对谁加密
// 3. 以什么格式输出 hex 16进制
const skey = crypto.createHash('sha1')
.updata(session_key,'utf8')
.digest('hex')
return{
  skey
}
  }catch(error){
    return {
      error
    }
  }
}