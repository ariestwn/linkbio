<script>
	import '$src/app.css';
	import * as config from '$src/app.config';
	import { page } from '$app/stores';
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();

	const schemaOrgWebsite = {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: config.siteName,
		url: config.siteUrl
	};

	let canonicalUrl = $derived(`${config.siteUrl}${$page.url.pathname}`);
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href={canonicalUrl} />

    <!-- Favicon and App Icons (https://realfavicongenerator.net) -->
    <link rel="icon" type="image/png" href="/images/favicons/favicon-96x96.png" sizes="96x96" />
    <link rel="icon" type="image/svg+xml" href="/images/favicons/favicon.svg" />
    <link rel="shortcut icon" href="/images/favicons/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/apple-touch-icon.png" />
	
    <!-- Progressive Web App (PWA) -->
	<meta name="mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-title" content={config.siteName} />
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
	<meta name="theme-color" content={config.pwaThemeColor} />
	<link rel="manifest" href="/site.webmanifest" />
	<meta name="theme-color" content={config.pwaThemeColor} />
	<meta name="msapplication-TileColor" content={config.pwaThemeColor} />
    
	<!-- Fonts -->
	<!-- <link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" /> -->

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:title" content={config.siteName} />
	<meta property="og:description" content={config.siteDescription} />
	<meta property="og:image" content="{config.siteUrl}/images/social.png" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={canonicalUrl} />
	<meta name="twitter:title" content={config.siteName} />
	<meta name="twitter:description" content={config.siteDescription} />
	<meta name="twitter:image" content="{config.siteUrl}/images/social.png" />
	{#if config.twitterHandle}
		<meta name="twitter:creator" content={config.twitterHandle} />
	{/if}

	<!-- Structured Data -->
	{@html `<script type="application/ld+json">${JSON.stringify(schemaOrgWebsite)}</script>`}
</svelte:head>

{@render children?.()}

<style lang="postcss">
	:global(a, button, .btn, input, texarea, select) {
		@apply transition-all duration-150 ease-in-out;
	}
</style>
