import http from '../utils/http';

export async function getBanner(){
    const { banners } = await http.get('/banner',{type:1});
    return banners
}

export async function getSearchSugget(keywords) {
	const { result } = await http.get('/search', { keywords })
	return result
}