//引入mockjs
const Mock = require('mockjs')
// 获取 mock.Random 对象
const Random = Mock.Random;


const homeData = function () {

    const recomList = [];


    for (let i = 0; i < 8; i++) {

        let newsObj = {

            title: Random.ctitle(2, 6),

            gameType: Random.ctitle(2, 3),

            people: Random.integer(1000, 10000)

        }

        recomList.push(newsObj)
    }

    const recentList = [];

    for (let i = 0; i < 5; i++) {

        let recentObj = {

            title: Random.ctitle(2, 6),
        }
        recentList.push(recentObj)

    }


    return {

        recomList: recomList,

        recentList: recentList,

    }

}

Mock.mock('/news/api', 'post', homeData)