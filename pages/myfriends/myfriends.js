Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookname: "计算机科学与技术导论(第2版普通高等教育十三五规划教材)",
    author: "王建国",
    isbn: "9787121337062",
    press: "电子工业出版社",
    bookimg:"http://tangwenwen.top/img/9787113250348.jpg",

    modalHidden: true,
     bookisbn: "1",
    bookList1: [
      { ISBN13: "9789889955915", image: "/images/book-icon.png", bookName: "数据库挖掘", author: "斯塔夫", bookKind: "88", press: "华理出版社", publishData: "1" },
    ],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
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
  //点击确认
  modalConfirm: function () {
    // do something
    this.setData({
      modalHidden: true
    })
  },

  saoma: function () {
    var myThis = this;
    wx.scanCode({
      onlyFromCamera: false,
      scanType: ['qrCode', 'barCode'],
      success: function (res) {
        console.log(res);
        myThis.setData({
          bookisbn: res.result,
          modalHidden: false,
        })

    
        
        //利用isbn码res.result获取书的书名、作者、书类、出版社和出版日期
        wx.request({
          url: '',
          success(res) {
            // 获取成功确定是否提交
            

            wx.showModal({
              title: '提示',
              content: 'isbn:' + res.result + "\r\n" + res.charSet,
              success: function (res) {
                if (res.confirm) {
                  console.log('用户点击确定')
                } else if (res.cancel) {
                  console.log('用户点击取消')
                }
              }
            })
          },
          //获取失败提示
          fail: function () {

          }
        })
      },
      //无法扫描提示
      fail: function (err) {
        console.log(err);
        wx.showToast({
          title: '扫描',
          icon: 'success',
          duration: 2000
        })
      }

    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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