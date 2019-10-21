Page({
  /**
   * 页面的初始数据
   */
  data: {
		userid: 1 ,

    bookList: [
      { ISBN13: "", image: "", bookName: "", author: "", press: "", publishData: "" },
    ]
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
		console.log(this.data.bookList[0]);
		wx.request({
			url: 'http://localhost:8080/wechat/servlet/mybookServlet',
			method: 'GET',
			header: {
				'Content-Type': 'application/json',
			},
			data: {
				userid: that.data.userid,
			},
			success(res) {
				that.setData({
						  'bookList[0].ISBN13': res.data.isbn,
              'bookList[0].image': res.data.imgpath,
				 	    'bookList[0].bookName': res.data.bookname,
				  	 	'bookList[0].author': res.data.author,
			  	 	 	'bookList[0].press': res.data.press,
				  		'bookList[0].publishData': res.data.publishData
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