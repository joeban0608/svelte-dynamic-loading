<script lang="ts">
	import { getUserAsync } from '$lib/api/getUser';
	import type { UserInfo } from '$lib/type';
	import { onMount } from 'svelte';

	let userList: UserInfo[] = [];
	/* 
			init()
				- 拿到 siteData 分別給 siteEntries and sitePromises
				- siteEntries 
					一開始 initial 畫面 loading
				- 透過 sitePromises 拿回每個 site 狀態

			$: if (inited) {}
			- 初始化完畢，拿到 sitePromises and initial siteEntries loading..
			- forEach 每一個 sitePromises 並拿出每個 promise 結果，塞回 siteEntries
  */
	const init = () => {

  };
</script>

