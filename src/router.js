import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/pc/Home.vue'

Vue.use(Router)

export default new Router({
	routes: [
		// pc
		{
			path: '/',
			name: 'pc/home',
			component: Home
		},
		{
			path: '/pc/about',
			name: 'pc/about',
			component: () => import('./views/pc/About.vue')
		},
		{
			path: '/pc/service',
			name: 'pc/service',
			component: () => import('./views/pc/Service.vue')
		},
		{
			path: '/pc/case',
			name: 'pc/case',
			component: () => import('./views/pc/Case.vue')
		},
		{
			path: '/pc/new',
			name: 'pc/new',
			component: () => import('./views/pc/New.vue')
		},
		{
			path: '/pc/screen',
			name: 'pc/screen',
			component: () => import('./views/pc/Screen.vue')
		},
		// mobile
		{
			path: '/mobile/home',
			name: 'mobile/home',
			component: () => import('./views/mobile/Home.vue'),
			meta: {
				keepAlive: true
			  }
		},
		{
			path: '/mobile/about',
			name: 'mobile/about',
			component: () => import('./views/mobile/About.vue'),
			meta: {
				keepAlive: true
			  }
		},
		{
			path: '/mobile/service',
			name: 'mobile/service',
			component: () => import('./views/mobile/Service.vue'),
			meta: {
				keepAlive: true
			  }
		},
		{
			path: '/mobile/case',
			name: 'mobile/case',
			component: () => import('./views/mobile/Case.vue'),
			meta: {
				keepAlive: true
			  }
		},
		{
			path: '/mobile/new',
			name: 'mobile/new',
			component: () => import('./views/mobile/New.vue'),
			meta: {
				keepAlive: true
			  }
		},
		{
			path: '/mobile/newdetails',
			name: 'mobile/newdetails',
			component: () => import('./views/mobile/Newdetails.vue'),
			meta: {
				keepAlive: false
			  }
		},
		{
			path: '/mobile/newdetails1',
			name: 'mobile/newdetails1',
			component: () => import('./views/mobile/Newdetails1.vue'),
			meta: {
				keepAlive: false
			  }
		},
		{
			path: '/mobile/screen',
			name: 'mobile/screen',
			component: () => import('./views/mobile/Screen.vue'),
			meta: {
				keepAlive: true
			  }
		}
	]
})
