// 动漫相关的api接口，都封装到这个模块中
import request from '@/utils/request'

// 向外按需导出一个api函数
export const getComicListAPI = function(_page, _limit) {
  return request.get('/articles', {
    params: {
      _page,
      _limit
    }
  })
}
