//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    bookisbn:"1",
    bookList1: [
      { ISBN13: "9789889955915", image: "/images/book-icon.png", bookName: "数据库挖掘", author: "斯塔夫", bookKind: "88", press: "华理出版社", publishData: "1" },
    ],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
   //扫码函数
  saoma: function () {
    var myThis = this;
    
    wx.scanCode({
      
      onlyFromCamera:false,
      scanType:['qrCode','barCode'],
      success:function(res){
        console.log(res);
        console.log(res.result);
        myThis.setData({
          bookisbn: res.result,
        })

        // 确定是否提交
        wx.showModal({
          title: '提示',
          content: bookisbn,
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      },
//扫描失败提示
      fail:function(err){
        console.log(err);
        wx.showToast({
          title: '扫描失败',
          icon: 'success',
          duration: 2000
        })
      }

    })
    
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
