import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const defaultSettings = window.localStorage.getItem("cafe-settings")
? JSON.parse(window.localStorage.getItem("cafe-settings") as string)
: {
	cache: false,
	autofetch: true,
	memory: true
};

const defaultPosts = window.localStorage.getItem("cache-posts")
? JSON.parse(window.localStorage.getItem("cache-posts") as string)
: [];

interface Category {
	id: number;
	name: string;
}
export default new Vuex.Store({
	state: {
		page: 1,
		settings: defaultSettings,
		posts: defaultPosts,
		categories: [] as Category[]
	},
	mutations: {
		ADD_PAGE(state) {
			state.page++;
		},
		SET_PAGE(state, payload: number) {
			state.page = payload;
		},

		SET_SETTINGS(state, payload: any) {
			state.settings = payload;
			if (payload.memory) {
				window.localStorage.setItem("cafe-settings", JSON.stringify(payload));
			} else {
				window.localStorage.removeItem("cafe-settings");
				window.localStorage.removeItem("cache-posts");
			}
		},
		SET_POSTS(state, payload: any) {
			state.posts = payload;
			if (state.settings.memory) {
				window.localStorage.setItem("cache-posts", JSON.stringify(payload));
			}
		},
		FETCH_CATE(state, payload: any) {
			state.categories = payload;
		}
	},
	actions: {},
	modules: {}
});
