import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			registerType: 'autoUpdate',
			devOptions: {
				enabled: true,
			},
			manifest: {
				id: 'https://agaride.netlify.app/',
				lang: 'PL',
				dir: 'ltr',
				name: 'Ride',
				short_name: 'Ride',
				description: 'Moje podróże',
				theme_color: '#f3f4f6',
				background_color: '#f3f4f6',
				icons: [
					{
						src: 'icons/car64.png',
						sizes: '64x64',
						type: 'image/png',
					},
					{
						src: 'icons/car128.png',
						sizes: '128x128',
						type: 'image/png',
					},
					{
						src: 'icons/car192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: 'icons/car512.png',
						sizes: '512x512',
						type: 'image/png',
					},
				],
				start_url: '/',
				display: 'fullscreen',
			},
		}),
	],
})
