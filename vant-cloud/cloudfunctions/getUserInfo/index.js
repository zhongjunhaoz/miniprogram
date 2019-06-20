// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'workplace - dd8fba'

cloud.init()
// 获取数据库句柄
const db = cloud.database({ env })

// 云函数入口函数
exports.main = async (event, context) => {
  const groupNum = await db.collection('user-group').where({
    userId:cloud.getWXContext().OPENID
  })
  .get()

  const storeUser = await db.collection('user').where({
    openId:cloud.getWxContext().OPENID
  })
  .get()

  return {
    groupNum:groupNum.data.length,
    // 少了一行代码
    storeUser: storeUser.data[0]
  }
}