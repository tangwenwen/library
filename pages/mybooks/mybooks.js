Page({
  /**
   * 页面的初始数据
   */
    //bookname:书名,author：作者,isbn,press：出版社,bookkind：书类,bookimg：书图片,publishdata：出版日期,readerobject：适宜人群
  data: {
    modalHidden: true,
    bookname: "计算机科学与技术导论",
    author: "王建国",
    isbn: "9787113250348",
    press: "中国铁道出版社",
    bookimg:"http://tangwenwen.top/img/9787113250348.jpg",
    bookkind: "计算机类",
    publishdata: "2019-01-01",
    readerobject: "本科及以上",
		userid: 1 ,
    lend: 0,
    
    bookList: [
      { ISBN13: "9787113250348", image: "http://tangwenwen.top/img/9787113250348.jpg", bookName: "计算机科学与技术导论", author: "王建国", press: "中国铁道出版社", publishData: "2019-01-01", bookKind:"计算机类" }
    ]
  },

  //显示弹窗
  buttonTap: function () {
    // var isbn1 = e.currentTarget.dataset.id;
    // console.log(isbn1);
    this.setData({
      modalHidden: false,
      // isbn:isbn1
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
 
  goToDetailPage: function (e) {
    var that = this;
    var isbn1 = e.currentTarget.dataset.isbn
    that.setData({
      isbn: isbn1
    })
    console.log(that.data.isbn)
//通过点击书籍获取的isbn和用户的账号来取得书籍的所有信息并显示书籍是否已借出
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