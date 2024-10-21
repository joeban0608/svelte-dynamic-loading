<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	import 'tailwindcss/tailwind.css';
</script>

<header class="bg-gray-800 text-white">
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
<slot />
