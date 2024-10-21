import type { UserInfo } from '$lib/type';

export type GetUserResAsync = {
	data?: null | UserInfo;
	error?: string;
};
const delayPromise = async () => {
	await new Promise((resolve) => setTimeout(resolve, 3000));
};
export const getUserAsync = async () => {
	try {
		await delayPromise();
		const url = '/api/user';
		const res = await fetch(url);
		const getUserRes = await res.json();
		if (getUserRes.error) {
			throw new Error(getUserRes.error);
		}
		if (!getUserRes.data) {
			return { error: 'fail to get user' };
		}

		return getUserRes.data;
	} catch (err) {
		console.log('Error to get user:', err);
		return { error: `Error to get user: ${err}` };
	}
};
