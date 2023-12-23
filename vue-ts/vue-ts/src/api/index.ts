// 没有使用，也会警告
import type { Banner } from '../models/banner'
import http from './http.ts'
// ts 有完整的编译阶段 ts->js->
// 后端api 业务代码 广告位
export async function useBanner() {
    // 前端也有数据校验了，要说不，为用户负责
    // http.get<>泛型 返回值的类型是 Banner 数组
    // resolve
    const { banners } = await http.get<{banners: Banner[]}>('/banner', { type : 1 })
    return banners
}

