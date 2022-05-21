// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //存储用户信息
userInfo:{},
isData:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
var that =this;
wx.getStorage({
  key: 'userInfo',
  success: function(res) {
    console.log("我的页面获取的用户信息",res.data)
    that.setData({
      userInfo:res.data
    })
  }
})
    //获取本地缓存是否已经有user信息 如果有，那么直接跳转到首页
    wx.getStorage({
      key: 'userInfo',
      success(res) {
        //跳转到首页
        wx.switchTab({
          url: '/pages/index/index'
        })
      }
    })
  },
  //点击注册时，跳转到注册页面
  toRegister: function () {
    wx.navigateTo({
      url: '/pages/register/register',
    })
  }
  ,
  // 跳转登录页面
  toLogin: function () {
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },
  
  onTabItemTap(e) {
    console.log("eeee", e);
    var that = this;
    //2.获取本地缓存是否存在token
    wx.getStorage({
      key: 'token',
      success: function (res) {
        that.setData({
          isData: false
        })
      },
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