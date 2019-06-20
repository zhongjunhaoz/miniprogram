Page({
  data: {
    city: '澳门',
    imgUrls: [
      'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4083232698,3490975569&fm=26&gp=0.jpg',
      'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1317692644,1328141290&fm=26&gp=0.jpg',
      'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3496620154,3742562087&fm=26&gp=0.jpg'
    ],
    items: []
  },
  onLoad () {
    let that = this
    wx.request({
      url: 'https://www.easy-mock.com/mock/5ca2c29464930718b239eb94/lm/new-movie-list',
      success: function(res) {
        console.log(res)
        that.setData({
          items: res.data.data.movieList
        })
      }
    })
  },
  onPullDownRefresh() {
    console.log(1234)
  },
  onReachBottom() {
    console.log(6666)
  }
})