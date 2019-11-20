//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    bookname: "1",
    author: "1",
    isbn: "1",
    press: "1",
    bookimg: "1",
    //设置弹窗一开始为隐藏
    modalHidden: true,   
   
    bookisbn:"1",
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

  //显示弹窗
  buttonTap: function () {
    this.setData({
      modalHidden: false
    })
  },
  //点击取消
  modalCandel: function () {
    // do something
    this.setData({
      modalHidden: true
    })
  },
  //点击确认 将书的isbn和用户的openid一起录入到数据库
  modalConfirm: function () {
    wx.request({
      url: '',
      method: 'GET',
      header: {
        'Content-Type': 'application/json',
      },
      data: {

      },
      success(res) {
        that.setData({

        });

      },
      fail: function () {
      }
    })
  },

   //扫码函数
  saoma: function () {
    var myThis = this;
    var bookisbn='';
    wx.scanCode({
      onlyFromCamera:false,
      scanType:['qrCode','barCode'],
      success:function(res){
        myThis.setData({
          bookisbn: res.result,
        })
       
        //利用isbn码res.result获取书的书名、作者、书类、出版社和出版日期
         wx.request({
					 url: 'http://localhost:8080/wechat/servlet/IndexServlet',
					 method:'GET',
					 header: {
						 'Content-Type': 'application/json',
					 },
					 data:{
						 thisisbn:myThis.data.bookisbn,
					 },
         success(res) {
					 console.log(res.data);
           var myThis1 = this;
           myThis.setData({
             bookname: res.data.bookname,
             author: res.data.author,
             isbn: res.data.isbn,
             press: res.data.press,
             bookimg: res.data.imgpath,
             modalHidden: false,
           })
          // 获取成功确定是否提交
          // wx.showModal({
          // title: '扫码结果',
					// 	content: '书名:' + res.data.bookname+ "\r\n" + 'author:' + res.data.author + "\r\n" + 'isbn:' + res.data.isbn + "\r\n" + 'press:' + res.data.press + "\r\n",
          //  success: function (res) {
          //   if (res.confirm) {
          //   console.log('用户点击确定')
            
          //   }else if (res.cancel) {
          //   console.log('用户点击取消')
          //   }
          //  }
          // })
          },
         //获取失败提示
          fail: function (){

          }
        })  
 },
//无法扫描提示
      fail:function(err){
        console.log(err);
        wx.showToast({
          title: '扫描',
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
