开发流程和工艺


1. 细化模块，api模块
    request 封装好
module.exports = {
    api列表....
}
如果代码重复 请封装

2. 前后端分离 
    后端API 看文档
    url method data
    前后端怎么配合？

3. UI 选框架 

//前后端的配合
 // 大厂API接口的约定 
// code 0 没有问题
        if(res.data.code === 0){
          this.setData({
          banners:res.data
        })
      }


1.  没有后台API怎么办？
easy-mork  自己构建  如果觉得云开发有点难，选择easy-mork
request 方法改写 database


2.  weui(推荐) / vant
界面 小程序就是切页面

3. 将每个页面 每个功能封一个函数  unit
写代码 设定一个任务
两到三周 上线小程序

小米商城  快狗打车 丁香医车 优衣库 有赞优选 小红书 51信用卡助手 毛豆二手车 
携程 马蜂窝 京东商城 美团外卖 口碑 摩拜单车 青桔单车 思否课堂 二维火点餐 58同城二手房 微博鲜知 新浪新闻
小米有品 网易云课堂 肯德基 拉勾网 滴滴出行 爱奇艺 美丽说 蘑菇屋 沪江英语 拼多多 