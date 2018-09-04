import { asyncRouterMap, constantRouterMap } from '@/router'
import Layout from '@/views/layout/Layout'

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
// function hasPermission(roles, route) {
//   if (route.meta && route.meta.roles) {
//     return roles.some(role => route.meta.roles.indexOf(role) >= 0)
//   } else {
//     return true
//   }
// }

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param rolesjj
 */
// function filterAsyncRouter(asyncRouterMap, roles) {
//   const accessedRouters = asyncRouterMap.filter(route => {
//     if (hasPermission(roles, route)) {
//       if (route.children && route.children.length) {
//         route.children = filterAsyncRouter(route.children, roles)
//       }
//       return true
//     }
//     return false
//   })
//   console.log(accessedRouters)
//   return accessedRouters
// }

function filterAsyncRouter(asyncRouterMap, roles) {
  console.log(roles)
  const accessedRouters = [
    {
      path: '/pom', // pom = purchase order management
      component: Layout,
      redirect: '/pom/poDetail',
      name: 'pom',
      meta: {
        title: 'pom',
        icon: 'cart_1'
      },
      children: [
        { path: 'po-detail', component: () => import('@/views/pom/poDetail'), name: 'poDetail', meta: { title: 'poDetail' }},
        { path: 'po-sub', component: () => import('@/views/pom/poSub'), name: 'poSub', meta: { title: 'poSub' }}
      ]
    }
  ]
  return accessedRouters
}

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      console.log('state.addRouters', routers)
      state.routers = constantRouterMap.concat(routers)
      console.log('state.routers', state.routers)
    }
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {
        const { roles } = data
        let accessedRouters = null
        // if (roles.indexOf('admin') < 0) {
        //   accessedRouters = asyncRouterMap
        // } else {
        accessedRouters = filterAsyncRouter(asyncRouterMap, roles)
        console.log('accessedRouters', accessedRouters)
        // }
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    }
  }
}

export default permission
