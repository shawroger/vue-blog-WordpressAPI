import Vue from "vue";
import VueRouter, { Route } from "vue-router";
import pageHome from "../views/Home.vue";
import pageChat from "../views/Chat.vue";
import pageTrans from "../views/Trans.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "home",
		component: pageHome,
		meta: {
			title: "AI Lab 2020"
		}
	},
	{
		path: "/chat",
		name: "chat",
		component: pageChat,
		meta: {
			title: "AI Lab 2020 · 智能聊天"
		}
	},
	{
		path: "/translate",
		name: "trans",
		component: pageTrans,
		meta: {
			title: "AI Lab 2020 · 智能翻译"
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
	document.title = to.meta.title;
	next();
});
export default router;
