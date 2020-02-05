//@ts-nocheck
import Vue, { VueConstructor } from "vue";
//@ts-ignore
import Hljs from "highlight.js";
import "highlight.js/styles/a11y-light.css";
let Highlight: any = {};
Highlight.install = function(Vue: VueConstructor) {
	Vue.directive("highlight", {
		inserted: function(el) {
			let blocks = el.querySelectorAll("pre code");
			for (let i = 0; i < blocks.length; i++) {
				Hljs.highlightBlock(blocks[i]);
			}
		},
		componentUpdated: function(el) {
			let blocks = el.querySelectorAll("pre code");
			for (let i = 0; i < blocks.length; i++) {
				Hljs.highlightBlock(blocks[i]);
			}
		}
	});
};

Vue.use(Highlight);
