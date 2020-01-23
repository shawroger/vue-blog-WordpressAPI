import axios, { AxiosResponse } from "axios";

interface AIReponse {
	ret: number;
	msg: string;
}
export async function fetch(url: string, req: string) {
	const base_url = "http://api.shawroger.com/ai/";
	const res = await axios.get(base_url + url, {
		params: {
			req
		}
	});

	return res;
}

interface Chat extends AIReponse {
	data: {
		answer: string;
		session: string;
	};
}
export async function fetchChat(req: string) {
	const base_url = "http://api.shawroger.com/ai/chat.php";
	const res: AxiosResponse<Chat> = await axios.get(base_url, {
		params: {
			req
		}
	});

	return res;
}

interface Translate extends AIReponse {
	data: {
		source_text: string;
		target_text: string;
	};
}
export async function fetchTranslate(req: string, target: string = 'en') {
	const base_url = "http://api.shawroger.com/ai/translate.php";
	const res: AxiosResponse<Translate> = await axios.get(base_url, {
		params: {
			req,
			target
		}
	});

	return res;
}
