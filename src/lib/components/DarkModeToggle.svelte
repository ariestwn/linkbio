<script>
	import { onMount } from 'svelte';
	import Brightness from '$lib/icons/Brightness';
	import Moon from '$lib/icons/Moon';

	/**
	 * @typedef {Object} Props
	 * @property {string} [className]
	 */

	/** @type {Props} */
	let { className = '' } = $props();

	let darkMode = $state(false);
	let mounted = $state(false);

	onMount(() => {
		const savedMode = localStorage.getItem('darkMode');
		if (savedMode !== null) {
			darkMode = savedMode === 'true';
		} else {
			darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
		}
		updateTheme();
		mounted = true;
	});

	function toggleDarkMode() {
		darkMode = !darkMode;
		updateTheme();
		localStorage.setItem('darkMode', darkMode);
	}

	function updateTheme() {
		if (darkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}
</script>

{#if mounted}
	<button onclick={toggleDarkMode} class="block" aria-label="Toggle dark mode">
		{#if darkMode}
			<Brightness class={className} />
		{:else}
			<Moon class={className} />
		{/if}
	</button>
{/if}
