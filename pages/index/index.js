// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    abc: "渲染",
    //轮播图片容器
    bannerData: [],
    //导航图片容器
    navData: [],
    //项目数据容器
    proData: [],
    //后台图片路径
    httpImageUrl: "http://rbv2dehtn.hn-bkt.clouddn.com/meirong/img/",
    //后台请求路径
    httpUrl: "http://127.0.0.1:8080/"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //在index页面加载函数中发送请求
    var that = this;
    //1.发送请求，获取轮播图信息
    wx.request({
      url: that.data.httpUrl + 'image/queryImageByType', //发送请求
      data: {
        imagetype: 'banner'//传递数据
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {

        console.log("数据：", res.data)
        if (res.data.code == 0) {  //说明请求成功，把返回的数据，
          that.setData({
            //设置给data中的bannerData
            bannerData: res.data.data
          })
        } else {  //失败  提示   失败原因
        }
      }
    })
    //2.发送请求，获取导航菜单信息 继续在声明周期函数中定义。除了参数传递的值不同  imagetype: 'nav'
    wx.request({
      url: that.data.httpUrl + 'image/queryImageByType', //仅为示例，并非真实的接口地址
      data: {
        imagetype: 'nav'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        if (res.data.code == 0) {  //说明请求成功，把返回的数据，设置给data
          that.setData({
            navData: res.data.data
          })
        } else {  //失败  提示   失败原因

        }
      }
    })
    //3333
    wx.request({
      url: that.data.httpUrl + 'project/getProinfos', //发送请求

      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log("获取项目信息", res.data)
        if (res.data.code == 0) {  //说明请求成功，把返回的数据，设置给data
          that.setData({
            proData: res.data.data
          })
        } else {  //失败  提示   失败原因

        }

      }
    })
  },
  /**
   * 自定义函数，点击Project跳转详情
   */
  toProDetails:function(e){
    console.log(e)
    console.log(e.currentTarget.dataset.id)
    //跳转到项目详情页面并携带当前项目的id
    wx.navigateTo({
      url: '/pages/toProDetails/toProDetails?id='+e.currentTarget.dataset.id,
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