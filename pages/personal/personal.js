// pages/personal/personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  nickName0:"",
  avatarUrl0:"",
  groupName:"",
  ownUserid0: "211",
  isbn: "",
  bookname: "计算机科学与技术导论",
  author: "王建国",
  press: "中国铁道出版社",
  bookimg: "http://tangwenwen.top/img/9787113250348.jpg",
  publishdata: "2019-01-01",
  readerobject: "本科及以上",
  modalHidden2: true,
  modalHidden3: true,
  lendmodalHidden:false,
  tolendmodalHidden: false,
    lendbookList: [
      { ISBN13: "9787113250348", image: "http://tangwenwen.top/img/9787113250348.jpg", bookName: "计算机科学与技术导论", author: "王建国", press: "中国铁道出版社", publishData: "2019-01-01", ownUserid: "33", lend: "0" },
      { ISBN13: "1", image: "", bookName: "", author: "", press: "", publishData: "", ownUserid: "3", lend: "0" },
      { ISBN13: "2", image: "", bookName: "", author: "", press: "", publishData: "", ownUserid: "4", lend: "1" },
      { ISBN13: "3", image: "", bookName: "", author: "", press: "", publishData: "", ownUserid: "5", lend: "0" },
      { ISBN13: "4", image: "", bookName: "", author: "", press: "", publishData: "", ownUserid: "6", lend: "1" }
    ],

  tolendbookList: [
    { ISBN13: "9787113250348", image: "http://tangwenwen.top/img/9787113250348.jpg", bookName: "计算机科学与技术导论", author: "王建国", press: "中国铁道出版社", publishData: "2019-01-01", lendUserid: "33", lend: "0" },
    { ISBN13: "1", image: "", bookName: "", author: "", press: "", publishData: "", lendUserid: "3", lend: "0" },
    { ISBN13: "2", image: "", bookName: "", author: "", press: "", publishData: "", lendUserid: "4", lend: "1" },
    { ISBN13: "3", image: "", bookName: "", author: "", press: "", publishData: "", lendUserid: "5", lend: "0" },
    { ISBN13: "4", image: "", bookName: "", author: "", press: "", publishData: "", lendUserid: "6", lend: "1" }
    ]
  },
  
  onGotUserInfo: function (e) {
    // console.log(e)
    var that = this;
   
    console.log(e.detail.userInfo)
    console.log(e.detail.userInfo.nickName)
   
    this.setData({
      nickName0: e.detail.userInfo.nickName,
      avatarUrl0: e.detail.userInfo.avatarUrl
    })
  },


  //已借图书显示弹窗
  lendbuttonTap: function () {
    this.setData({
      lendmodalHidden: true,
    })
  },
  //已借图书点击取消
  lendmodalCandel: function () {
    // do something
    this.setData({
      lendmodalHidden: false
    })
  },
  //已借图书点击确认
  lendmodalConfirm: function () {
    // do something
    this.setData({
      lendmodalHidden: false
    })
  },


  //通过点击书籍获取的isbn和用户账号ownUserid0来取得书籍的所有信息
  goToDetailPage: function (e) {
    var that = this;
    var isbn1 = e.currentTarget.dataset.isbn
    var ownUserid1 = e.currentTarget.dataset.ownuser
    that.setData({
      isbn: isbn1,
      ownUserid0: ownUserid1
    })
    console.log(that.data.isbn)
    console.log(that.data.ownUserid0)
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

  //显示已借图书详细信息弹窗
  buttonTap2: function () {
    this.setData({
      modalHidden2: false,
    })
  },

  //点击取消已借图书详细信息弹窗
  modalCandel2: function () {
    // do something
    this.setData({
      modalHidden2: true
    })
  },
  //点击借阅图书 通过书的isbn和持有者账号ownUserid0来将图书的lend置0，并将数据库里的lenduserid置空
  modalConfirm2: function () {
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
  //借出图书显示弹窗
  tolendbuttonTap: function () {
    this.setData({
      tolendmodalHidden: true,
    })
  },
  //借出图书点击取消
  tolendmodalCandel: function () {
    // do something
    this.setData({
      tolendmodalHidden: false
    })
  },
  //借出图书点击确认
  tolendmodalConfirm: function () {
    // do something
    this.setData({
      tolendmodalHidden: false
    })
  },
// 显示添加书圈弹窗
  groupbuttonTap: function () {
    this.setData({
      modalHidden3: false,
    })
  },
  // 书圈输入框事件
  groupNameInput: function (e) {
    this.setData({
      groupName: e.detail.value
    })
  },


  //添加书圈点击取消
  modalCandel3: function () {
    this.setData({
      modalHidden3: true
    })
  },
  //添加书圈点击确认
  modalConfirm3: function () {
    var that=this;
    console.log(that.data.groupName)
    // 将用户添加到所输入的书圈
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
    var that = this;
    console.log(this.data.lendbookList[0]);
    // 通过用户ID显示所有用户借阅的图书给与lendbookList[]
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

    // 通过用户ID显示所有用户借出的图书给与tolendbookList[]
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