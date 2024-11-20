export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["browserconfig.xml","html/index.html","html/style.css","images/desktop-mobile-mockup.png","images/favicons/apple-touch-icon.png","images/favicons/favicon-96x96.png","images/favicons/favicon.ico","images/favicons/favicon.svg","images/favicons/site.webmanifest","images/favicons/web-app-manifest-192x192.png","images/favicons/web-app-manifest-512x512.png","images/ibit.jpg","images/profile.jpg","images/social.png","robots.txt","site.webmanifest"]),
	mimeTypes: {".xml":"text/xml",".html":"text/html",".css":"text/css",".png":"image/png",".svg":"image/svg+xml",".webmanifest":"application/manifest+json",".jpg":"image/jpeg",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.1lSIv590.js","app":"_app/immutable/entry/app.BKGZU-vk.js","imports":["_app/immutable/entry/start.1lSIv590.js","_app/immutable/chunks/entry.B_uX2RqH.js","_app/immutable/chunks/runtime.Dqn1VQC2.js","_app/immutable/entry/app.BKGZU-vk.js","_app/immutable/chunks/runtime.Dqn1VQC2.js","_app/immutable/chunks/render.C1FNqhA5.js","_app/immutable/chunks/disclose-version.MCAPzfoh.js","_app/immutable/chunks/if.B5Xek93M.js","_app/immutable/chunks/index-client.Du0v6FpB.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
