export default function getCouponsData(){
    const data = [
        {
            id: 1,
            CouponTitle:'新用户红包',
            outOffDate:'2024.05.20 23:59',
            CouponPrice: 10,
            CouponWay:"无门槛",
            CouponRange:'全部商品可用'
        },
        {
            id: 2,
            CouponTitle:'冰淇淋红包',
            outOffDate:'2024.05.20 23:59',
            CouponPrice: 5.2,
            CouponWay:"满12可用",
            CouponRange:'仅冰淇淋可用'
        },
        {
            id: 3,
            CouponTitle:'会员爆红包',
            outOffDate:'2024.01.20 23:59',
            CouponPrice: 13.14,
            CouponWay:"满52可用",
            CouponRange:'全部商品可用'
        },
        {
            id: 4,
            CouponTitle:'零食',
            outOffDate:'2024.03.20 23:59',
            CouponPrice: '8.5折',
            CouponWay:"满50可用",
            CouponRange:'仅零食可用'
        },
        {
            id: 5,
            CouponTitle:'立减红包',
            outOffDate:'2024.01.22 23:59',
            CouponPrice: 3,
            CouponWay:"满3立减",
            CouponRange:'全部商品可用'
        },
    ]
    return data
}
