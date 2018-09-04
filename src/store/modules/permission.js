import { constantRouterMap } from '@/router'
// import Layout from '@/views/layout/Layout'
import { getRoleRouters } from '../../api/login'

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
 * @param roles
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

// function filterAsyncRouter(asyncRouterMap, roles) {
//   console.log(roles)
//   const accessedRouters = [
//     {
//       path: '/pom', // pom = purchase order management
//       component: Layout,
//       redirect: '/pom/poDetail',
//       name: 'pom',
//       meta: {
//         title: 'pom',
//         icon: 'cart_1'
//       },
//       children: [
//         { path: 'po-detail', component: () => import('@/views/pom/poDetail'), name: 'poDetail', meta: { title: 'poDetail' }},
//         { path: 'po-sub', component: () => import('@/views/pom/poSub'), name: 'poSub', meta: { title: 'poSub' }}
//       ]
//     }
//   ]
//   return accessedRouters
// }

// function buildAsyncRouter(fromServerRouter) {
//   const localRouter = []
//   const parentRouter = {
//     path: '',
//     component: Layout,
//     redirect: 'dashboard',
//     children: [{
//       path: 'dashboard',
//       component: () => null, // import('@/views/dashboard/index'),
//       name: '',
//       meta: { title: '', icon: '', noCache: true }
//     }]
//   }
//   const childRouter = {
//     path: 'po-detail',
//     component: () => import('@/views/pom/poDetail'),
//     name: 'poDetail',
//     meta: { title: 'poDetail' }
//   }
//   var thisRouter = {}
//   if (fromServerRouter.length > 0) {
//     fromServerRouter.forEach(v => {
//       console.log(v, localRouter)
//       if (v.parent === 'L0') {
//         thisRouter = { ...parentRouter }
//         thisRouter.path = v.path
//         thisRouter.redirect = v.path
//         thisRouter.children[0].path = v.path
//         thisRouter.children[0].component = import('@/views/' + v.component)
//         thisRouter.children[0].name = v.path
//         thisRouter.children[0].meta.title = v.path
//         thisRouter.children[0].meta.icon = v.path
//       } else {
//         thisRouter = { ...childRouter }
//       }
//     })
//   }
//   return localRouter
// }

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
        // if (roles.indexOf('admin') < 0) {
        //   accessedRouters = asyncRouterMap
        // } else {
        getRoleRouters(roles).then((response) => {
          const accessedRouters = response.data
          console.log(accessedRouters)
          // buildAsyncRouter(accessedRouters)
          commit('SET_ROUTERS', [])
          resolve()
        })
        // const accessedRouters1 = filterAsyncRouter(asyncRouterMap, roles)
        // console.log('accessedRouters1', accessedRouters1)
        // }
        // commit('SET_ROUTERS', accessedRouters)
        // resolve()
      })
    }
  }
}

export default permission
