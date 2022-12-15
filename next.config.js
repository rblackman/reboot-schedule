/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
	dest: 'public',
	disable: process.env.NODE_ENV === 'development',
	register: true,
	scope: '/',
	cacheStartUrl: true,
	dynamicStartUrl: false,
	reloadOnOnline: false
});

const nextConfig = {
	compiler: {
		// Enables the styled-components SWC transform
		styledComponents: true
	},
	styledComponents: true
};

module.exports = withPWA(nextConfig);
