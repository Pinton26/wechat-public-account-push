/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx35dc105a25c40893',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '06c4348610b5beabf6645cdd8ae23a86',

  TIAN_API: {
    // 天行API KEY，如果使用天行API则需要填写此项
    key: '0698b45c3eb555d393b61a84374953cc',
    
    /** 天行API相关，需要config中配置 TIAN_API_KEY  */
    // 早安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    morningGreeting: true,
  
    // 天行天气（展示未来N天，最多7天）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: 3,
  },
  
   SWITCH: {
    /** 每日天气 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: true,

    /** 节假日 */
    // 下一休息日综合提醒, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    holidaytts: true,

    /** 每日N句 */
    // 金山每日一句, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    CIBA: true,
    
    // 每日一言, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    oneTalk: true,
    
    // 土味情话(彩虹屁), 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    earthyLoveWords: true,
    
    // 朋友圈文案, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    momentCopyrighting: true,
    
    // 毒鸡汤, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    poisonChickenSoup: true,

  
    /** 生日消息和节日消息 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    birthdayMessage: true,

  },
  
  PROVINCE: '广东省',
  CITY: '广州市',

  USERS: [
    {
      // 想要发送的人的名字
      name: '奶糖',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ooxRR57wENvMeXmsyeTowPLNNT7o',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'em9Ttsn8-mEeWTZv15BmfKiZ5JxnuUjeF9sOnwrcKEM',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-26',
      province: '广东',
      city: '广州',
      openUrl: 'https://weibo.com/hot/search',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '奶哈', year: '1996', date: '07-04',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '奶哈', year: '1996', date: '08-17',        
        },
        {
          type: '*生日', name: '奶糖', year: '1995', date: '12-26',        
        },
        {
          type: '生日', name: '奶糖', year: '1995', date: '12-26',        
        },
        {
          type: '节日', name: '相恋纪念日', year: '2020', date: '10-10',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2020-10-10' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '1995-12-26' },
         // 奶哈生日
        { keyword: 'ex_day', date: '1996-08-17' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'Sml58XWomVd8r2tgY_gF-zDa45hTSdR_fKMy6u4stf0',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ooxRR57wENvMeXmsyeTowPLNNT7o',
    }
  ],

}

module.exports = USER_CONFIG

