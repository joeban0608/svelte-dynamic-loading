import type { GetUserRes } from '$lib/type';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	// ref: https://randomuser.me/
	// https://randomuser.me/api/
	const baseApi = 'https://randomuser.me/api';
	try {
		const res = await fetch(baseApi);
		const getRandomUserRes = (await res.json()) as GetUserRes;
		if (!getRandomUserRes?.results?.length) {
			return new Response(JSON.stringify({ data: null }), {
				status: 200
			});
		}
		return new Response(JSON.stringify({ data: getRandomUserRes.results[0] }), {
			status: 200
		});
	} catch (err) {
		console.log('err', err);
		return new Response(JSON.stringify({ error: 'Server Error fail to get user' }), {
			status: 500
		});
	}
};
