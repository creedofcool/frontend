import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'

/** note: submenu only apppear when children.length>=1
*   detail see  https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
**/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']     will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if true ,the page will no be cached(default is false)
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/authredirect', component: () => import('@/views/login/authredirect'), hidden: true },
  { path: '/404', component: () => import('@/views/errorPage/404'), hidden: true },
  { path: '/401', component: () => import('@/views/errorPage/401'), hidden: true },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      name: 'dashboard',
      meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
    }]
  },
  {
    path: '/documentation',
    component: Layout,
    redirect: '/documentation/index',
    children: [{
      path: 'index',
      component: () => import('@/views/documentation/index'),
      name: 'documentation',
      meta: { title: 'documentation', icon: 'documentation', noCache: true }
    }]
  },
  {
    path: '/guide',
    component: Layout,
    redirect: '/guide/index',
    children: [{
      path: 'index',
      component: () => import('@/views/guide/index'),
      name: 'guide',
      meta: { title: 'guide', icon: 'guide', noCache: true }
    }]
  },
  {
    path: '/test', // pom = purchase order management
    component: Layout,
    redirect: '/test/test1',
    name: 'test',
    meta: {
      title: 'test',
      icon: 'cart_1'
    },
    children: [
      { path: 'test1', component: () => import('@/views/test/test1'), name: 'test1', meta: { title: 'test1' }},
      { path: 'test2', component: () => import('@/views/test/test2'), name: 'test2', meta: { title: 'test2' }}
    ]
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = []

// export const asyncRouterMap = [
//   {
//     path: '/permission',
//     component: Layout,
//     redirect: '/permission/index',
//     alwaysShow: true, // will always show the root menu
//     meta: {
//       title: 'permission',
//       icon: 'lock',
//       roles: ['admin', 'editor'] // you can set roles in root nav
//     },
//     children: [{
//       path: 'page',
//       component: () => import('@/views/permission/page'),
//       name: 'pagePermission',
//       meta: {
//         title: 'pagePermission',
//         roles: ['admin'] // or you can only set roles in sub nav
//       }
//     }, {
//       path: 'directive',
//       component: () => import('@/views/permission/directive'),
//       name: 'directivePermission',
//       meta: {
//         title: 'directivePermission'
//         // if do not set roles, means: this page does not require permission
//       }
//     }]
//   },
//   {
//     path: '/pom', // pom = purchase order management
//     component: Layout,
//     redirect: '/pom/poDetail',
//     name: 'pom',
//     meta: {
//       title: 'pom',
//       icon: 'cart_1'
//     },
//     children: [
//       { path: 'po-detail', component: () => import('@/views/pom/poDetail'), name: 'poDetail', meta: { title: 'poDetail' }},
//       { path: 'po-sub', component: () => import('@/views/pom/poSub'), name: 'poSub', meta: { title: 'poSub' }}
//     ]
//   },
//   {
//     path: '/goods', // pom = purchase order management
//     component: Layout,
//     redirect: '/masterData/goods/activityDetail',
//     name: 'goods',
//     meta: {
//       title: 'goods',
//       icon: 'goods'
//     },
//     children: [
//       { path: 'goods-detail', component: () => import('@/views/masterData/goods/goodsDetail'), name: 'goodsDetail', meta: { title: 'goodsDetail' }},
//       { path: 'activity-detail', component: () => import('@/views/masterData/goods/activityDetail'), name: 'activityDetail', meta: { title: 'activityDetail' }}
//     ]
//   },
//   {
//     path: '/asset', // pom = purchase order management
//     component: Layout,
//     redirect: '/masterData/asset/assetDetail',
//     name: 'asset',
//     meta: {
//       title: 'asset',
//       icon: 'asset'
//     },
//     children: [
//       { path: 'asset-detail', component: () => import('@/views/masterData/asset/assetDetail'), name: 'assetDetail', meta: { title: 'assetDetail' }},
//       { path: 'asset-category', component: () => import('@/views/masterData/asset/assetCategory'), name: 'assetCategory', meta: { title: 'assetCategory' }}
//     ]
//   },
//   {
//     path: '/reseller', // pom = purchase order management
//     component: Layout,
//     redirect: '/masterData/reseller/resellerDetail',
//     name: 'reseller',
//     meta: {
//       title: 'reseller',
//       icon: 'reseller'
//     },
//     children: [
//       { path: 'reseller-detail', component: () => import('@/views/masterData/reseller/resellerDetail'), name: 'resellerDetail', meta: { title: 'resellerDetail' }},
//       { path: 'reseller-category', component: () => import('@/views/masterData/reseller/resellerCategory'), name: 'resellerCategory', meta: { title: 'resellerCategory' }}
//     ]
//   },

//   {
//     path: '/table',
//     component: Layout,
//     redirect: '/table/complex-table',
//     name: 'table',
//     meta: {
//       title: 'abc',
//       icon: 'table'
//     },
//     children: [
//       { path: 'dynamic-table', component: () => import('@/views/table/dynamicTable/index'), name: 'dynamicTable', meta: { title: 'dynamicTable' }},
//       { path: 'drag-table', component: () => import('@/views/table/dragTable'), name: 'dragTable', meta: { title: 'dragTable' }},
//       { path: 'inline-edit-table', component: () => import('@/views/table/inlineEditTable'), name: 'inlineEditTable', meta: { title: 'inlineEditTable' }},
//       { path: 'tree-table', component: () => import('@/views/table/treeTable/treeTable'), name: 'treeTableDemo', meta: { title: 'treeTable' }},
//       { path: 'custom-tree-table', component: () => import('@/views/table/treeTable/customTreeTable'), name: 'customTreeTableDemo', meta: { title: 'customTreeTable' }},
//       { path: 'complex-table', component: () => import('@/views/table/complexTable'), name: 'complexTable', meta: { title: 'complexTable' }}
//     ]
//   },
//   {
//     path: '/table1',
//     component: Layout,
//     redirect: '/table/complex-table',
//     name: 'table1',
//     meta: {
//       title: 'Table',
//       icon: 'table'
//     },
//     children: [
//       { path: 'dynamic-table', component: () => import('@/views/table/dynamicTable/index'), name: 'dynamicTable1', meta: { title: 'dynamicTable' }},
//       { path: 'drag-table1', component: () => import('@/views/table/dragTable'), name: 'dragTable1', meta: { title: 'dragTable' }},
//       { path: 'inline-edit-table1', component: () => import('@/views/table/inlineEditTable'), name: 'inlineEditTable1', meta: { title: 'inlineEditTable' }},
//       { path: 'tree-table1', component: () => import('@/views/table/treeTable/treeTable'), name: 'treeTableDemo1', meta: { title: 'treeTable' }},
//       { path: 'custom-tree-table1', component: () => import('@/views/table/treeTable/customTreeTable'), name: 'customTreeTableDemo1', meta: { title: 'customTreeTable' }},
//       { path: 'complex-table1', component: () => import('@/views/table/complexTable'), name: 'complexTable1', meta: { title: 'complexTable' }}
//     ]
//   },
//   {
//     path: '/error',
//     component: Layout,
//     redirect: 'noredirect',
//     name: 'errorPages',
//     meta: {
//       title: 'errorPages',
//       icon: '404'
//     },
//     children: [
//       { path: '401', component: () => import('@/views/errorPage/401'), name: 'page401', meta: { title: 'page401', noCache: true }},
//       { path: '404', component: () => import('@/views/errorPage/404'), name: 'page404', meta: { title: 'page404', noCache: true }}
//     ]
//   },

//   {
//     path: '/error-log',
//     component: Layout,
//     redirect: 'noredirect',
//     children: [{ path: 'log', component: () => import('@/views/errorLog/index'), name: 'errorLog', meta: { title: 'errorLog', icon: 'bug' }}]
//   },
//   { path: '*', redirect: '/404', hidden: true }
// ]
