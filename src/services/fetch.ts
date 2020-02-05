import axios, { AxiosResponse } from "axios";
import { __BASE_URL__ } from "@/utils/config";

export interface EssayReponse {
	id: number;
	date: string;
	title: {
		rendered: string;
	};
	author: number;
	content: {
		rendered: string;
	};
	excerpt: {
		rendered: string;
	};
}
export async function fetchEssay(page: number) {
	const res: AxiosResponse<EssayReponse[]> = await axios.get(
		`${__BASE_URL__}/wp-json/wp/v2/posts`,
		{
			params: {
				page
			}
		}
	);
	return res;
}

export async function fetchEssayContent(id: string) {
	const base_url = `${__BASE_URL__}/wp-json/wp/v2/posts/${id}`;
	const res: AxiosResponse<EssayReponse> = await axios.get(base_url);
	return res;
}

export async function fetchSearchText(search: string, page: number) {
	const base_url = `${__BASE_URL__}/wp-json/wp/v2/posts`;
	const res: AxiosResponse<EssayReponse[]> = await axios.get(base_url, {
		params: {
			page,
			search
		}
	});
	return res;
}


export async function fetchCategories() {
	const base_url = `${__BASE_URL__}/wp-json/wp/v2/categories`;
	const res: AxiosResponse<EssayReponse> = await axios.get(base_url);
	return res;
}
