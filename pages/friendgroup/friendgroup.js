// pages/friendgroup/friendgroup.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image: "/images/iconfont-kefu.png",
    modalHidden: false,
    groupname0: "1",
    friendgroup: [
      { groupname: "470332587", groupnumber: "44" },
      { groupname: "1209654821", groupnumber: "33" }
    ],
    bookList: [
      { ISBN13: "9787113250348", image: "http://tangwenwen.top/img/9787113250348.jpg", bookName: "计算机科学与技术导论", author: "王建国", press: "中国铁道出版社", publishData: "2019-01-01" },
      { ISBN13: "1", image: "", bookName: "", author: "", press: "", publishData: "" },
      { ISBN13: "1", image: "", bookName: "", author: "", press: "", publishData: "" },
      { ISBN13: "1", image: "", bookName: "", author: "", press: "", publishData: "" },
      { ISBN13: "1", image: "", bookName: "", author: "", press: "", publishData: "" }


    ]
  },



  goTogroup: function (e) {
    var groupname1 = e.currentTarget.dataset.id
    console.log(groupname1)
    this.setData({
      groupname0: groupname1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //显示弹窗
  buttonTap: function () {
    // var isbn1 = e.currentTarget.dataset.id;
    // console.log(isbn1);
    this.setData({
      modalHidden: true,
      // isbn:isbn1
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