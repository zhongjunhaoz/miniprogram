// miniprogram/pages/index/index.js
const app = getApp()
import { dateFormat } from '../../lib/utils'
const globalData = app.globalData
import { jscode2session, getEmotionByOpenidAndDate, addEmotion } from '../../lib/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeEmotion: 'serene',
    todayEmotion: '',
    avatarUrl: globalData.avatarUrl,
    nickname: globalData.nickname,
    emotions: ['serene', 'hehe', 'ecstatic', 'sad', 'terrified'],
    colors: {
      serene: '#64d9fe',
      hehe: '#d3fc1e',
      ecstatic: '#f7dc0e',
      sad: '#ec238a',
      terrified: '#ee1aea'
    },
    daysStyle: [],
    auth: -1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 封装一下获取用户权限的方法
  getScope(success, fail, name = 'scope.userInfo') {
    wx.getSetting({
      success: (res) => {
        if (res.authSetting[name]) {
          typeof success === 'function' && success()
        } else {
          typeof fail === 'function' && fail()
        }
      },
      fail: () => {},
      complete: () => {}
    }); 
  },
  getUserInfo() {
    if (!globalData.nickname || !globalData.avatarUrl) {
      this._getUserInfo((res) => {
        this.setData({
          nickname: res.nickname,
          avatarUrl: res.avatarUrl
        })
        globalData.nickname = res.nickname
        globalData.avatarUrl = res.avatarUrl
      })
    }
    const that = this
    let openid = wx.getStorageSync('openid')
    function callback() {
      that.setData({
        auth: 1,
        openid
      })
      if (globalData.currentMonthData && globalData.currentMonthData.length) {
        const now = new Date()
      } else {
        that.setCalendarColor()
      }
      if (openid) {
        callback()
      } else {
        this.getUserOpenId((res) => {
          openid = res.result.openid
          callback()
        }, () => {
          this.setData({
            auth: 0
          })
        })
      }
    }
  },
  getUserOpenId(success, fail) {
    wx.login({
      success: (res) => {
        jscode2session(res.code).then((res) => {
          let { openid = '', session_key = ''} = res.result || {}
          if (openid && session_key) {
            wx.setStorage({
              key: 'openid',
              data: openid
            })
            typeof success === 'function' && success(res)
          } else {
            typeof fail === 'function' && fail()
          }
        })
      },
      fail: () => {},
      complete: () => {}
    });
      
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
