export default function  getData(){
    const fooddata = [
        {
            id: 1,
            Foodname:"可爱多",
            img:"/src/assets/picture/可爱多.jpg",
            category:"冰淇淋",
            kinds:[
              {
                id: 11,
                name:"草莓味",
                image:'/src/assets/可爱多/草莓味.jpg',
                price:5,
                count: 0,
              },
              {
                id: 12,
                name:"非常草莓味",
                image:'/src/assets/可爱多/非常草莓味.jpg',
                price:6,
                count: 0,
              },
              {
                id: 13,
                name:"非常曲奇奶风味",
                image:'/src/assets/可爱多/非常曲奇奶风味.jpg',
                price:6,
                count: 0,
              },
              {
                id: 14,
                name:"芒果酸奶味",
                image:'/src/assets/可爱多/芒果酸奶味.jpg',
                price:5,
                count: 0,
              },
              {
                id: 15,
                name:"巧克力味",
                image:'/src/assets/可爱多/巧克力味.jpg',
                price:5,
                count: 0,
              },
              {
                id: 16,
                name:"香芋牛奶味",
                image:'/src/assets/可爱多/香芋牛奶味.jpg',
                price:5,
                count: 0,
              },
            ],
        },
        {
            id: 2,
            Foodname:"溜溜梅",
            img:"/src/assets/picture/溜溜梅.jpg",
            category:"零食",
            kinds:[
              {
                id: 21,
                name:"九制梅",
                image:'/src/assets/溜溜梅/九制梅.jpg',
                price:3,
                count: 0,
              },
              {
                id: 22,
                name:"清梅",
                image:'/src/assets/溜溜梅/清梅.jpg',
                price:3,
                count: 0,
              },
              {
                id: 23,
                name:"乌梅",
                image:'/src/assets/溜溜梅/乌梅.jpg',
                price:3,
                count: 0,
              },
              {
                id: 24,
                name:"雪梅",
                image:'/src/assets/溜溜梅/雪梅.jpg',
                price:3,
                count: 0,
              },
              {
                id: 25,
                name:"咖啡梅",
                image:'/src/assets/溜溜梅/咖啡梅.jpg',
                price:3,
                count: 0,
              },
              {
                id: 26,
                name:"话梅",
                image:'/src/assets/溜溜梅/话梅.jpg',
                price:3,
                count: 0,
              },
              {
                id: 27,
                name:"情人梅",
                image:'/src/assets/溜溜梅/情人梅.jpg',
                price:3,
                count: 0,
              },
              {
                id: 28,
                name:"凤梨梅",
                image:'/src/assets/溜溜梅/凤梨梅.jpg',
                price:3,
                count: 0,
              },
              {
                id: 29,
                name:"绿茶梅",
                image:'/src/assets/溜溜梅/绿茶梅.jpg',
                price:3,
                count: 0,
              }
            ],
        },
        {
            id: 3,
            Foodname:"奥利奥",
            img:"/src/assets/picture/奥利奥.jpg",
            category:"零食",
            kinds:[
                {
                  id: 31,
                  name:"草莓味夹心",
                  image:'/src/assets/奥利奥/草莓味夹心.jpg',
                  price:4,
                  count: 0,
                },
                {
                  id: 32,
                  name:"红丝绒缤纷豆味",
                  image:'/src/assets/奥利奥/红丝绒缤纷豆味.jpg',
                  price:4,
                  count: 0,
                },
                {
                  id: 33,
                  name:"巧克力夹心原味",
                  image:'/src/assets/奥利奥/巧克力夹心原味.jpg',
                  price:4,
                  count: 0,
                },
                {
                  id: 34,
                  name:"轻甜夹心",
                  image:'/src/assets/奥利奥/轻甜夹心.png',
                  price:4,
                  count: 0,
                },
                {
                  id: 35,
                  name:"树莓味+蓝莓味",
                  image:'/src/assets/奥利奥/树莓味+蓝莓味.jpg',
                  price:4,
                  count: 0,
                },
              ],
        },
        {
            id: 4,
            Foodname:"麻辣王子",
            img:"/src/assets/picture/麻辣王子.jpg",
            category:"辣条",
            kinds:[
                {
                  id: 41,
                  name:"单包麻辣王子",
                  image:'/src/assets/麻辣王子/单包麻辣王子.png',
                  price:1,
                  count: 0,
                },
                {
                  id: 42,
                  name:"单袋麻辣王子",
                  image:'/src/assets/麻辣王子/单袋麻辣王子.png',
                  price:5,
                  count: 0,
                },
                {
                  id: 43,
                  name:"麻辣王子大礼包",
                  image:'/src/assets/麻辣王子/麻辣王子大礼包.jpg',
                  price:10,
                  count: 0,
                },
                {
                  id: 44,
                  name:"单箱麻辣王子",
                  image:'/src/assets/麻辣王子/单箱麻辣王子.jpg',
                  price:20,
                  count: 0,
                },
              ],
        },
        {
            id: 5,
            Foodname:"麻辣王子",
            img:"/src/assets/picture/麻辣王子.jpg",
            category:"辣条",
            kinds:[
                   {
                  id: 51,
                  name:"单包麻辣王子",
                  image:'/src/assets/麻辣王子/单包麻辣王子.png',
                  price:1,
                  count: 0,
                },
                {
                  id: 52,
                  name:"单袋麻辣王子",
                  image:'/src/assets/麻辣王子/单袋麻辣王子.png',
                  price:5,
                  count: 0,
                },
                {
                  id: 53,
                  name:"麻辣王子大礼包",
                  image:'/src/assets/麻辣王子/麻辣王子大礼包.jpg',
                  price:10,
                  count: 0,
                },
                {
                  id: 54,
                  name:"单箱麻辣王子",
                  image:'/src/assets/麻辣王子/单箱麻辣王子.jpg',
                  price:20,
                  count: 0,
                }
              ],
        },
        {
            id: 6,
            Foodname:"麻辣王子",
            img:"/src/assets/picture/麻辣王子.jpg",
            category:"辣条",
            count: 0,
            kinds:[]
        },
        {
            id: 7,
            Foodname:"麻辣王子",
            img:"/src/assets/picture/麻辣王子.jpg",
            category:"辣条",
            count: 0,
            kinds:[]
        },
        {
            id: 8,
            Foodname:"麻辣王子",
            img:"/src/assets/picture/麻辣王子.jpg",
            category:"辣条",
            count: 0,
            kinds:[]
        },
        {
            id: 9,
            Foodname:"麻辣王子",
            img:"/src/assets/picture/麻辣王子.jpg",
            category:"辣条",
            count: 0,
            kinds:[]
        },
        {
            id: 10,
            Foodname:"麻辣王子",
            img:"/src/assets/picture/麻辣王子.jpg",
            category:"辣条",
            count: 0,
            kinds:[]
        },
    ]
    return fooddata
}
