module.exports = app => {
  const router = require('express').Router()

  const mongoose = require('mongoose')
  const Category = require('../../models/Category')
  const Article = require('../../models/Article')
  const Hero = require('../../models/Hero')
  const Video = require('../../models/Video')
  const Guide = require('../../models/Guide')

  //向数据库导入英雄数据
  router.get('/heroes/init', async (req, res) => {
   await Hero.deleteMany({})
    const rawData = [{
      "name": "热门",
      "heroes": [{
        "name": "后羿",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg"
      }, {
        "name": "铠",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/193/193.jpg"
      }, {
        "name": "亚瑟",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg"
      }, {
        "name": "甄姬",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/127/127.jpg"
      }, {
        "name": "孙悟空",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg"
      }, {
        "name": "鲁班七号",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/112/112.jpg"
      }, {
        "name": "妲己",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/109/109.jpg"
      }, {
        "name": "安琪拉",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/142/142.jpg"
      }, {
        "name": "韩信",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/150/150.jpg"
      }, {
        "name": "庄周",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/113/113.jpg"
      }]
    }, {
      "name": "战士",
      "heroes": [{
        "name": "赵云",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/107/107.jpg"
      }, {
        "name": "墨子",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/108/108.jpg"
      }, {
        "name": "钟无艳",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/117/117.jpg"
      }, {
        "name": "吕布",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/123/123.jpg"
      }, {
        "name": "夏侯惇",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/126/126.jpg"
      }, {
        "name": "曹操",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/128/128.jpg"
      }, {
        "name": "典韦",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/129/129.jpg"
      }, {
        "name": "宫本武藏",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/130/130.jpg"
      }, {
        "name": "达摩",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/134/134.jpg"
      }, {
        "name": "老夫子",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/139/139.jpg"
      }, {
        "name": "关羽",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/140/140.jpg"
      }, {
        "name": "程咬金",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/144/144.jpg"
      }, {
        "name": "露娜",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/146/146.jpg"
      }, {
        "name": "花木兰",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/154/154.jpg"
      }, {
        "name": "橘右京",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/163/163.jpg"
      }, {
        "name": "亚瑟",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg"
      }, {
        "name": "孙悟空",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg"
      }, {
        "name": "刘备",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/170/170.jpg"
      }, {
        "name": "钟馗",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/175/175.jpg"
      }, {
        "name": "杨戬",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/178/178.jpg"
      }, {
        "name": "雅典娜",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/183/183.jpg"
      }, {
        "name": "哪吒",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/180/180.jpg"
      }, {
        "name": "铠",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/193/193.jpg"
      }, {
        "name": "苏烈",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/194/194.jpg"
      }, {
        "name": "裴擒虎",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/502/502.jpg"
      }, {
        "name": "狂铁",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/503/503.jpg"
      }, {
        "name": "孙策",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/510/510.jpg"
      }, {
        "name": "李信",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/507/507.jpg"
      }, {
        "name": "盘古",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/529/529.jpg"
      }, {
        "name": "云中君",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/506/506.jpg"
      }, {
        "name": "曜",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/522/522.jpg"
      }, {
        "name": "马超",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/518/518.jpg"
      }]
    }, {
      "name": "法师",
      "heroes": [{
        "name": "小乔",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/106/106.jpg"
      }, {
        "name": "墨子",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/108/108.jpg"
      }, {
        "name": "妲己",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/109/109.jpg"
      }, {
        "name": "嬴政",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/110/110.jpg"
      }, {
        "name": "高渐离",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/115/115.jpg"
      }, {
        "name": "孙膑",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/118/118.jpg"
      }, {
        "name": "扁鹊",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/119/119.jpg"
      }, {
        "name": "芈月",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/121/121.jpg"
      }, {
        "name": "周瑜",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/124/124.jpg"
      }, {
        "name": "甄姬",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/127/127.jpg"
      }, {
        "name": "武则天",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/136/136.jpg"
      }, {
        "name": "貂蝉",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/141/141.jpg"
      }, {
        "name": "安琪拉",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/142/142.jpg"
      }, {
        "name": "露娜",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/146/146.jpg"
      }, {
        "name": "姜子牙",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/148/148.jpg"
      }, {
        "name": "王昭君",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/152/152.jpg"
      }, {
        "name": "张良",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/156/156.jpg"
      }, {
        "name": "不知火舞",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/157/157.jpg"
      }, {
        "name": "钟馗",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/175/175.jpg"
      }, {
        "name": "诸葛亮",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/190/190.jpg"
      }, {
        "name": "干将莫邪",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/182/182.jpg"
      }, {
        "name": "女娲",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/179/179.jpg"
      }, {
        "name": "杨玉环",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/176/176.jpg"
      }, {
        "name": "弈星",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/197/197.jpg"
      }, {
        "name": "米莱狄",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/504/504.jpg"
      }, {
        "name": "司马懿",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/137/137.jpg"
      }, {
        "name": "沈梦溪",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/312/312.jpg"
      }, {
        "name": "上官婉儿",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/513/513.jpg"
      }, {
        "name": "嫦娥",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/515/515.jpg"
      }, {
        "name": "西施",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/523/523.jpg"
      }]
    }, {
      "name": "坦克",
      "heroes": [{
        "name": "廉颇",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/105/105.jpg"
      }, {
        "name": "庄周",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/113/113.jpg"
      }, {
        "name": "刘禅",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/114/114.jpg"
      }, {
        "name": "钟无艳",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/117/117.jpg"
      }, {
        "name": "白起",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/120/120.jpg"
      }, {
        "name": "芈月",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/121/121.jpg"
      }, {
        "name": "吕布",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/123/123.jpg"
      }, {
        "name": "夏侯惇",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/126/126.jpg"
      }, {
        "name": "达摩",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/134/134.jpg"
      }, {
        "name": "项羽",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/135/135.jpg"
      }, {
        "name": "程咬金",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/144/144.jpg"
      }, {
        "name": "刘邦",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/149/149.jpg"
      }, {
        "name": "亚瑟",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg"
      }, {
        "name": "牛魔",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/168/168.jpg"
      }, {
        "name": "张飞",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/171/171.jpg"
      }, {
        "name": "太乙真人",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/186/186.jpg"
      }, {
        "name": "东皇太一",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/187/187.jpg"
      }, {
        "name": "铠",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/193/193.jpg"
      }, {
        "name": "苏烈",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/194/194.jpg"
      }, {
        "name": "梦奇",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/198/198.jpg"
      }, {
        "name": "孙策",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/510/510.jpg"
      }, {
        "name": "嫦娥",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/515/515.jpg"
      }, {
        "name": "猪八戒",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/511/511.jpg"
      }]
    }, {
      "name": "刺客",
      "heroes": [{
        "name": "赵云",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/107/107.jpg"
      }, {
        "name": "阿轲",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/116/116.jpg"
      }, {
        "name": "李白",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/131/131.jpg"
      }, {
        "name": "貂蝉",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/141/141.jpg"
      }, {
        "name": "韩信",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/150/150.jpg"
      }, {
        "name": "兰陵王",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/153/153.jpg"
      }, {
        "name": "花木兰",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/154/154.jpg"
      }, {
        "name": "不知火舞",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/157/157.jpg"
      }, {
        "name": "娜可露露",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/162/162.jpg"
      }, {
        "name": "橘右京",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/163/163.jpg"
      }, {
        "name": "孙悟空",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg"
      }, {
        "name": "百里守约",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg"
      }, {
        "name": "百里玄策",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/195/195.jpg"
      }, {
        "name": "裴擒虎",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/502/502.jpg"
      }, {
        "name": "元歌",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/125/125.jpg"
      }, {
        "name": "司马懿",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/137/137.jpg"
      }, {
        "name": "上官婉儿",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/513/513.jpg"
      }, {
        "name": "云中君",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/506/506.jpg"
      }, {
        "name": "马超",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/518/518.jpg"
      }]
    }, {
      "name": "射手",
      "heroes": [{
        "name": "孙尚香",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/111/111.jpg"
      }, {
        "name": "鲁班七号",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/112/112.jpg"
      }, {
        "name": "马可波罗",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/132/132.jpg"
      }, {
        "name": "狄仁杰",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/133/133.jpg"
      }, {
        "name": "后羿",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg"
      }, {
        "name": "李元芳",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/173/173.jpg"
      }, {
        "name": "虞姬",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/174/174.jpg"
      }, {
        "name": "成吉思汗",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/177/177.jpg"
      }, {
        "name": "黄忠",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/192/192.jpg"
      }, {
        "name": "百里守约",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg"
      }, {
        "name": "公孙离",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/199/199.jpg"
      }, {
        "name": "伽罗",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/508/508.jpg"
      }, {
        "name": "蒙犽",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/524/524.jpg"
      }]
    }, {
      "name": "辅助",
      "heroes": [{
        "name": "庄周",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/113/113.jpg"
      }, {
        "name": "刘禅",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/114/114.jpg"
      }, {
        "name": "孙膑",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/118/118.jpg"
      }, {
        "name": "姜子牙",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/148/148.jpg"
      }, {
        "name": "牛魔",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/168/168.jpg"
      }, {
        "name": "张飞",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/171/171.jpg"
      }, {
        "name": "蔡文姬",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/184/184.jpg"
      }, {
        "name": "太乙真人",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/186/186.jpg"
      }, {
        "name": "大乔",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/191/191.jpg"
      }, {
        "name": "鬼谷子",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/189/189.jpg"
      }, {
        "name": "明世隐",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/501/501.jpg"
      }, {
        "name": "杨玉环",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/176/176.jpg"
      }, {
        "name": "盾山",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/509/509.jpg"
      }, {
        "name": "瑶",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/505/505.jpg"
      }, {
        "name": "鲁班大师",
        "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/525/525.jpg"
      }]
      }]
    for (let cat of rawData) {
      if (cat.name === "热门") { 
        //跳过
        continue
      }
      // 找到当前分类在数据库中对应的数据
      const category = await Category.findOne({
        name:cat.name
      })

      cat.heroes = cat.heroes.map(hero => {
        hero.categories = [category]
        return hero
      })
      //录入英雄数据
      await Hero.insertMany(cat.heroes)

    }
    
    res.send(await Hero.find())

  })
  //向数据库导入文章数据（前端数据渲染接口另写）
  router.get('/news/init', async (req, res) => {
    const parent = await Category.findOne({
      name: '新闻分类'
    })

    const cats = await Category.find().where({
      parent: parent
    }).lean() // 获取分类
    const newsTitles = ["元宵福利到 峡谷好热闹！",
      "2月4日全服不停机更新公告",
      "觉醒之战即将再度开启！鬼谷子全屏大，露娜无限连",
      "【已修复】自定义赛事蓝方伤害数值异常问题说明",
      "【已修复】关于部分召唤师点券充值未到账、点券到账延迟等问题说明",
      "觉醒之战即将再度开启！鬼谷子全屏大，露娜无限连",
      "新皮肤爆料丨AI意识觉醒，机器少女妲己绚丽登场！",
      "王者荣耀祝各位召唤师春节快乐！",
      "《王者荣耀》获App store推荐，带你领略五岳东方之美！",
      "五城战队团年饭，队友线下团聚回顾",
      "【已修复】关于部分召唤师点券充值未到账、点券到账延迟等问题说明",
      "【已修复】自定义赛事蓝方伤害数值异常问题说明",
      "“想玩英雄”三个都一样？违规，警告封号！",
      "2月4日全服不停机更新公告", "2月1日全服不停机更新公告"
    ]
    const newsList = newsTitles.map(title => {
      const randomCats = cats.slice(0).sort((a, b) => Math.random() - 0.5)
      return {
        categories: randomCats.slice(0, 2),
        title: title,
      }
    })
    await Article.deleteMany({}) //清空原来的测试数据
    await Article.insertMany(newsList)
    res.send(newsList)
  })


  // 新闻数据接口
  router.get('/news/list', async (req, res) => {
    // const parent = await Category.findOne({
    //   name:'新闻资讯'
    // }).populate({
    //   path: 'children',
    //   populate: {
    //     path:'newsList'
    //   }

    // }).lean()
    const parent = await Category.findOne({
      name: '新闻分类'
    })
    //使用聚合查询
    const cats = await Category.aggregate([{
        $match: {
          parent: parent._id
        }
      },
      {
        $lookup: {
          from: 'articles', // articles表
          localField: '_id',
          foreignField: 'categories', // 通过id关联categories
          as: 'newsList' // 别名
        }
      },
      {
        $addFields: {
          newsList: {
            $slice: ['$newsList', 5]
          }
        }
      }
    ])

    //热门数据的处理
    const subCats = cats.map(v => v._id)
    cats.unshift({
      name: '热门',
      newsList: await Article.find().where({
        categories: {
          $in: subCats
        }
      }).populate('categories').limit(5).lean()
    })
    cats.map(cat => {
      cat.newsList.map(news => {
        news.categoryName = (cat.name === '热门') ? news.categories[0].name : cat.name
        return news
      })
      return cat
    })
    res.send(cats)

  })

  //获取6条英雄数据
  router.get('/heroes_6/list', async (req, res) => {
    const heroes = await Hero.find().limit(6)
    res.send(heroes)
  })

   // 英雄数据接口
   router.get('/heroes/list', async (req, res) => {


    const parent = await Category.findOne({
      name: '英雄分类'
    })
    //使用聚合查询
    const cats = await Category.aggregate([{
        $match: {
          parent: parent._id
        }
      },
      {
        $lookup: {
          from: 'heroes', // heroes
          localField: '_id',
          foreignField: 'categories', // 外键
          as: 'heroList' // 别名
        }
      }
    ])

    //热门数据的处理
    const subCats = cats.map(v => v._id)
    cats.unshift({
      name: '热门',
      heroList: await Hero.find().where({
        categories: {
          $in: subCats
        }
      }).limit(10).lean()
    })
    res.send(cats)

  })

  // 文章详情接口
  router.get('/articles/:id', async (req, res) => {
    const data = await Article.findById(req.params.id).lean()
    data.related = await Article.find().where({
      categories: {
        $in : data.categories
      }
    }).limit(2)
    res.send(data)

  })

  // 英雄详情接口
  router.get('/heroes/:id', async (req, res) => {
    const data = await Hero.findById(req.params.id)
      .populate('categories items1 items2 partners.hero restrained.hero  restraints.hero  introductions.hero heroGuides.hero').lean()
    res.send(data)
  })


  // 首页视频数据接口
  router.get('/videos/list', async (req, res) => {


    const parent = await Category.findOne({
      name: '视频分类'
    })
    //使用聚合查询
    const cats = await Category.aggregate([{
        $match: {
          parent: parent._id
        }
      },
      {
        $lookup: {
          from: 'videos', // heroes
          localField: '_id',
          foreignField: 'categories', // 外键
          as: 'videoList' // 别名
        }
      },
      {
        $addFields: {
          videoList: {
            $slice: ['$videoList', 4]
          }
        }
      }
    ])
    res.send(cats)

  })

  // 攻略中心精品栏目数据接口
  router.get('/wonderful_sections/list', async (req, res) => {


    const parent = await Category.findOne({
      name: '精品栏目'
    })
    //使用聚合查询
    const cats = await Category.aggregate([{
        $match: {
          parent: parent._id
        }
      },
      {
        $lookup: {
          from: 'videos', // heroes
          localField: '_id',
          foreignField: 'categories', // 外键
          as: 'videoList' // 别名
        }
      },
      {
        $addFields: {
          videoList: {
            $slice: ['$videoList', 4]
          }
        }
      }
    ])
    res.send(cats)

  })

  // 攻略中心赛事精品数据接口
  router.get('/wonderful_matches/list', async (req, res) => {


    const parent = await Category.findOne({
      name: '赛事精品'
    })
    //使用聚合查询
    const cats = await Category.aggregate([{
        $match: {
          parent: parent._id
        }
      },
      {
        $lookup: {
          from: 'videos', // heroes
          localField: '_id',
          foreignField: 'categories', // 外键
          as: 'videoList' // 别名
        }
      },
      {
        $addFields: {
          videoList: {
            $slice: ['$videoList', 4]
          }
        }
      }
    ])
    res.send(cats)

  })

// 攻略中心精彩视频数据接口
router.get('/wonderful_videos/list', async (req, res) => {


  const parent = await Category.findOne({
    name: '精彩视频'
  })
  //使用聚合查询
  const cats = await Category.aggregate([{
      $match: {
        parent: parent._id
      }
    },
    {
      $lookup: {
        from: 'videos', // heroes
        localField: '_id',
        foreignField: 'categories', // 外键
        as: 'videoList' // 别名
      }
    },
    {
      $addFields: {
        videoList: {
          $slice: ['$videoList', 4]
        }
      }
    }
  ])
  res.send(cats)

})

    // 视频详情接口
    router.get('/videos/:id', async (req, res) => {
      const data = await Video.findById(req.params.id).lean()
      data.related = await Video.find().where({
        categories: {
          $in : data.categories
        }
      }).limit(2)
      res.send(data)
    })

    // 图文攻略数据接口
    router.get('/guides/list', async (req, res) => {


      const parent = await Category.findOne({
        name: '图文攻略'
      })
      //使用聚合查询
      const cats = await Category.aggregate([{
          $match: {
            parent: parent._id
          }
        },
        {
          $lookup: {
            from: 'guides',
            localField: '_id',
            foreignField: 'categories', // 外键
            as: 'guideList' // 别名
          }
        },
        {
          $addFields: {
            videoList: {
              $slice: ['$guideList', 20]
            }
          }
        }
      ])
      //热门数据的处理
      const subCats = cats.map(v => v._id)
      cats.unshift({
        name: '热门',
        guideList: await Guide.find().where({
          categories: {
            $in: subCats
          }
        }).limit(10).lean()
      })
      res.send(cats)
    })
  // 攻略详情接口
  router.get('/guides/:id', async (req, res) => {
    const data = await Guide.findById(req.params.id).lean()
    data.related = await Guide.find().where({
      categories: {
        $in : data.categories
      }
    }).limit(2)
    res.send(data)
  })


    // 赛事中心数据接口
    router.get('/matches/list', async (req, res) => {
      const parent = await Category.findOne({
        name: '赛事中心'
      })
      //使用聚合查询
      const cats = await Category.aggregate([{
          $match: {
            parent: parent._id
          }
        },
        {
          $lookup: {
            from: 'articles', // articles表
            localField: '_id',
            foreignField: 'categories', // 通过id关联categories
            as: 'matchList' // 别名
          }
        },
        {
          $addFields: {
            newsList: {
              $slice: ['$matchList', 10]
            }
          }
        }
      ])
      res.send(cats)
  
    })
  
  app.use('/web/api', router)
}