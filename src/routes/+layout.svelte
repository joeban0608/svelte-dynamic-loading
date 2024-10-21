<script lang="ts">
	import { onMount } from 'svelte';
	import type { LayoutData } from './$types';
	import 'tailwindcss/tailwind.css';

	export let data: LayoutData;
	let headerElement: HTMLElement;
	let headerHeight = 0;

	// 动态获取 header 的高度
	onMount(() => {
		// 检查元素是否已挂载，并获取高度
		if (headerElement) {
			headerHeight = headerElement.offsetHeight;
		}

		// 添加窗口 resize 监听器，动态调整高度
		const handleResize = () => {
			if (headerElement) {
				headerHeight = headerElement.offsetHeight;
			}
		};

		window.addEventListener('resize', handleResize);

		// 清理事件监听器
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});
	$: console.log('headerHeight', headerHeight);
</script>

<header bind:this={headerElement} class="bg-gray-800 text-white">
	<div class="container mx-auto px-4 py-4 flex justify-between items-center">
		<!-- Logo -->
		<div class="text-lg font-semibold">
			<a href="/" class="hover:text-gray-400">Delay loading Demo</a>
		</div>

		<!-- Navigation Links -->
		<nav class="space-x-4">
			<a href="/" class="hover:text-gray-400">Home</a>
			<a href="/#about" class="hover:text-gray-400">About</a>
			<a href="/#services" class="hover:text-gray-400">Services</a>
			<a href="/#contact" class="hover:text-gray-400">Contact</a>
		</nav>
	</div>
</header>

<!-- 将 header 的高度传递给 slot -->
<main class="w-full" style="height:calc(100dvh - {headerHeight}px)">
	<slot />
</main>
