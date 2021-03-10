import axios, {Method} from 'axios';

interface options {
	method?: Method | undefined,
	url: string,
	params?: string,
	data?: object,
}

axios.interceptors.request.use(function (config) {
	const {data} = config;
	if (data && data.isLoading) {
		// console.log(config.data);
	}
	return config;
});

//  封装请求
export async function request(
	{
		method = 'get',
		url,
		// params,
		data,
	}: options) {
	return await axios({
		headers: {
			'Content-Type': 'application/json; charset=UTF-8',
		},
		method,
		url,
		// params,
		data,
	})
		.then(v => v.data)
		.catch(err => {
			return Promise.reject(err);
		});
}

