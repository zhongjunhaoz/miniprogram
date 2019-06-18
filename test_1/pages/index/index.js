//index.js
//获取应用实例
var app = getApp();
var mtabW;
Page({
  data: {
    tabs: ["综合与绘画", "艺术喷漆"],
    activeIndex: 0,
    slideOffset: 0,
    tabW: 0
  },
  //事件处理函数
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.windowWidth)
        mtabW = res.windowWidth / 2; //设置tab的宽度
        that.setData({
          tabW: mtabW
        })
      }
    });

  },
 
  bindChange: function (e) {
    console.log(e)
    var current = e.detail.current;
    var offsetW = current * mtabW; //2种方法获取距离文档左边有多少距离
    this.setData({
      activeIndex: current,
      slideOffset: offsetW
    });

  }

})