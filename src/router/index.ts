import Vue from "vue";
import VueRouter, { Route } from "vue-router";

import pageHome from "../views/Home.vue";
import pagePost from "../views/Post.vue";
import pageSearch from "../views/Search.vue";
import pageSetting from "../views/Setting.vue";
import pageAbout from "../views/About.vue";
import page404 from "../views/Page404.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "/",
		component: pageHome,
		meta: {
			title: "首页"
		}
	},
	{
		path: "/post/:id",
		name: "post",
		component: pagePost,
		meta: {
			title: ""
		}
	},
	{
		path: "/search",
		name: "search",
		component: pageSearch,
		meta: {
			title: "搜索"
		}
	},
	{
		path: "/settings",
		name: "settings",
		component: pageSetting,
		meta: {
			title: "设置"
		}
	},
	{
		path: "/about",
		name: "about",
		component: pageAbout,
		meta: {
			title: "关于"
		}
	},
	{
		path: "*",
		name: "404",
		component: page404,
		meta: {
			title: "关于"
		}
	}
];

// @ts-ignore
const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

// @ts-ignore
router.beforeEach((to: Route, from: Route, next) => {
	document.title = "Roger Cafe -- " + to.meta.title;
	next();
});
export default router;
