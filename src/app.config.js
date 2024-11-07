import { dev } from '$app/environment';

// general site settings
export const siteUrl = dev ? 'http://localhost:5173' : 'https://link.ariestwn.com'; // local + live urls
export const siteName = '@nwtseira';
export const siteTagline = '@nwtseira link bio'; // Used in default title tag etc
export const siteDescription = '@nwtseira link bio'; // Used in meta description, og tags, etc
export const logoUrl = siteUrl + '/images/logo.svg';
export const pwaThemeColor = '#000000'; // Used in PWA manifest

// open graph
export const twitterHandle = 'nwtseira';
