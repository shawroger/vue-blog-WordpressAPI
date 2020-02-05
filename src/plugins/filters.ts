import Vue from "vue";

Vue.filter("toDate", (value: string) => {
	const date = new Date(value);
	const dateArr = date.toLocaleDateString().split("/");
	if (dateArr[0] && dateArr[1] && dateArr[2]) {
		return `${dateArr[0]}年${dateArr[1]}月${dateArr[2]}日`;
	} else {
		return date.toLocaleDateString();
	}
});

Vue.filter("resetEllipsis", (value: string) => {
	return value.slice(0, -5) + "...";
});
