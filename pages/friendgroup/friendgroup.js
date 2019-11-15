// pages/friendgroup/friendgroup.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image: "/images/iconfont-kefu.png",
    modalHidden: false,
    modalHidden2: true,
    groupname0: "1",
    bookname: "计算机科学与技术导论",
    author: "王建国",
    isbn: "9787113250348",
    press: "中国铁道出版社",
    bookimg: "http://tangwenwen.top/img/9787113250348.jpg",
    bookkind: "计算机类",
    publishdata: "2019-01-01",
    readerobject: "本科及以上",
    ownUserid0:"211",
    friendgroup: [
      // { groupName: "470332587", nowNumber: "44" },
      { groupName: "470332587" },
      { groupName: "1209654821" },
    ],
    bookList: [
      { ISBN13: "9787113250348", image: "http://tangwenwen.top/img/9787113250348.jpg", bookName: "计算机科学与技术导论", author: "王建国", press: "中国铁道出版社", publishData: "2019-01-01", ownUserid:"33",lend:"0"},
      { ISBN13: "1", image: "", bookName: "", author: "", press: "", publishData: "", ownUserid: "3", lend: "0"},
      { ISBN13: "2", image: "", bookName: "", author: "", press: "", publishData: "", ownUserid: "4", lend: "1"},
      { ISBN13: "3", image: "", bookName: "", author: "", press: "", publishData: "", ownUserid: "5", lend: "0"},
      { ISBN13: "4", image: "", bookName: "", author: "", press: "", publishData: "", ownUserid: "6", lend: "1"}


    ]
  },


// 点击获取书圈号码groupname0，用它获取该书群中的所有图书信息赋予bookList
  goTogroup: function (e) {
    var that = this;
    var groupname1 = e.currentTarget.dataset.id
    that.setData({
      groupname0: groupname1,
    })
    console.log(that.data.groupname0)
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

  //显示弹窗
  buttonTap: function () {
    this.setData({
      modalHidden: true,
    })
  },
  //点击取消
  modalCandel: function () {
    // do something
    this.setData({
      modalHidden: false
    })
  },
  //点击确认
  modalConfirm: function () {
    // do something
    this.setData({
      modalHidden: false
    })
  },

  //点击取消图书详细信息
  modalCandel2: function () {
    // do something
    this.setData({
      modalHidden2: true
    })
  },
  //点击借阅图书 通过书的isbn和持有者账号ownUserid0来将图书的lend置1，并将当前用户的账号给与数据库里的lenduserid
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

  //显示弹窗
  buttonTap2: function () {
    // var isbn1 = e.currentTarget.dataset.id;
    // console.log(isbn1);
    this.setData({
      modalHidden2: false,
      // isbn:isbn1
    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示 通过用户的ID获取所有朋友群组的信息赋予friendgroup[]
   */
  onShow: function () {
    var that = this;
    console.log(this.data.friendgroup);
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