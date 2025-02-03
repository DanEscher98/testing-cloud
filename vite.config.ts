import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'
import Unfonts from 'unplugin-fonts/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unfonts({
      google: {
        families: [
          {
            name: 'Audiowide',
            styles: 'wght@400'
          },
          {
            name: 'Rajdhani',
            styles: 'wght@400;700'
          },
          {
            name: 'Roboto',
            styles: 'ital,wght@0,400;1,200',
            defer: true
          },
          {
            name: 'Raleway Dots',
            styles: 'wght@400;700'
          },
          {
            name: 'Poppins',
            styles: 'wght@400;700'
          },
          {
            name: 'IBM Plex Mono',
            styles: 'wght@400;700'
          },
          {
            name: 'VT323',
            styles: 'wght@400;700'
          },
          {
            name: 'Outfit',
            styles: 'wght@400;700'
          },
          {
            name: 'Cousine',
            styles: 'wght@400;700'
          },
          {
            name: 'Archivo Black',
            styles: 'wght@400;700'
          },
          {
            name: 'Unica One',
            styles: 'wght@400;700'
          },
          {
            name: 'Rubik',
            styles: 'wght@400;700'
          },
          {
            name: 'JetBrains Mono',
            styles: 'wght@400;700'
          },
          {
            name: 'Fugaz One',
            styles: 'wght@400;700'
          },
          {
            name: 'Outfit',
            styles: 'wght@400;700'
          },
          {
            name: 'Cousine',
            styles: 'wght@400;700'
          },
          { name: 'Orbitron' },
          { name: 'Source Code Pro' },
          { name: 'Inter' },
          { name: 'Fira Sans' },
          { name: 'Dancing Script' },
          { name: 'Lora' },
          { name: 'Open Sans' },
          { name: 'Nunito' },
          { name: 'Space Grotesk' },
          { name: 'Space Mono' },
          { name: 'Press Start 2P' },
          { name: 'Courier New' },
          { name: 'Pixelar' },
          { name: 'Share Tech Mono' },
          { name: 'Bangers' },
          { name: 'Montserrat' },
          { name: 'Playfair Dispair' },
          { name: 'Lato' },
          { name: 'Merriweather' },
          { name: 'Raleway' },
          { name: 'Montserrat' },
          { name: 'Barlow' },
          { name: 'Pacifico' },
          { name: 'Lato' },
          { name: 'Futura' },
          { name: 'Cormorant Garamond' },
          { name: 'Monoton' },
          { name: 'Source Sans Pro' },
          { name: 'Oswald' },
          { name: 'Abril Fatface' },
          {
            name: 'Lato',
            styles: 'wght@400;500;700'
          },
          {
            name: 'Quicksand',
            styles: 'wght@400;500'
          },
          { name: 'Playfair Display SC' },
          { name: 'Source Code Pro' },
          { name: 'Bungee' }
        ]
      }
    }),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      devOptions: {
        enabled: true
      },
      includeAssets: [],
      manifest: {
        name: 'DanEscher98 React-site',
        theme_color: '#8F00FF',
        icons: [
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      }
    })
  ]
})
