// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'workplace-dd8fba'
cloud.init()
const db = cloud.database({env})
// 云函数入口函数
exports.main = async (event, context) => {
  const userInfo = event.userInfo

  // 查询有无该用户的openid
  const checkUser = await db.collection('user').where({
    openId:userInfo.openId
  })
  .get()
  if(checkUser.data.length>0){
    await db.collection('user').doc(checkUser.data[0]._id)
    .update({
      data:{
        avatarUrl: event.avatarUrl,
        nickName: event.nickName,
        sex: event.sex
      }
    })
  } else{
    const insertResult = await db.collection('user').add({
      data:{
        avatarUrl:event.avatarUrl,
        nickName:event.nickName,
        sex:event.sex,
        name:'',
        openId:event.userInfo.openId,
        createTime:new date()
      }
    })
    .then(res =>{
      return db.collection('user-group').add({
        data:{
          group:res._id,
          userId:userInfo.openId,
          invalid:false
        }
      })
    })
  }

}