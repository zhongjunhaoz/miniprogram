//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    songLists: []
  },
  //事件处理函数
  onLoad: function () {
    const songLists = wx.getStorageSync('songLists');

    if(songLists && songLists.length){
      this.setData({
        songLists
      });
      wx.hideLoading();
      return false;
    }

    // 请求数据
    wx.request({
      url: app.globalData.API_BASE + '/top/list',
      data:{
        idx: 1
      },
      success: res =>{
        // console.log(res);
        if(res.statusCode === 200){
          this.setData({
            songLists: res.data.playlist.tracks
            
          })
          // undefined
          wx.setStorageSync('songLists', res.data.playlist.tracks);
          wx.hideLoading();
        }
     
        
      }
    })

  },

  handlePlayAudio (event) {
    const audioId = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: `../play/play?id=${audioId}`
    })
    console.log(audioId);
    console.log(event)
  }

})
