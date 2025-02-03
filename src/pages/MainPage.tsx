import React from 'react'
import BrandShowcase, { BrandConcept } from '../components/BrandVisualizer'

export const polymathNebula: BrandConcept = {
  name: 'Polymath Nebula',
  tagline: ['Connecting melodies across universes', 'Conectando melodias a través de universos'],
  palette: {
    base: '#222222', // Charcoal: Modern sophistication with depth (neutral, grounded)
    accent: '#FF4D89', // Electric Pink: Vibrant, bold, and youthful energy
    contrast: '#00D1C1', // Electric Teal: Clean, tech-forward, dynamic
    secondary: '#FFB81C', // Solar Yellow: Playful and energetic, adding warmth and vibrancy
    neutral: '#F4F4F4', // Soft Gray: Calm, balanced, and easy on the eyes
    background: '#FF5C8D' // Gradient Pink: Evokes digital spaces and futuristic vibes
  },
  typography: {
    logo: 'Orbitron', // Futuristic, playful, and tech-inspired font, perfect for logo
    primary: 'Poppins', // Clean, modern, approachable sans-serif for body text
    secondary: 'Space Grotesk', // A tech-inspired typeface for subheadings and detail
    headers: 'Oswald' // Strong and professional for headers
  }
}

const neuroMuse: BrandConcept = {
  name: 'NeuroMuse',
  tagline: ['Technology inspired by creativity.', 'Tecnología inspirada por la creatividad.'],
  palette: {
    base: '#3C3F58', // Midnight Navy: Confidence and reliability
    accent: '#9B5DE5', // Electric Purple: Creativity and individuality
    contrast: '#F15BB5', // Fuchsia Glow: Vibrancy and boldness
    secondary: '#FEE440', // Bright Yellow: Optimism and joy
    neutral: '#E0E7FF', // Soft Lavender: Calm and friendly
    background: '#F8F8FF' // Light Lilac: Clean and uplifting
  },
  typography: {
    logo: 'Monoton', // Extravagant display font for an artistic edge
    primary: 'Source Sans Pro', // Clean sans-serif for functional readability
    secondary: 'Ubuntu', // Approachable sans-serif for inclusive branding
    headers: 'Oswald' // Strong and modern sans-serif for impactful statements
  }
}

const nexoraBrand: BrandConcept = {
  name: 'Nexora',
  tagline: ['Digital elegance, redefined.', 'La elegancia digital, redefinida.'],
  palette: {
    base: '#2C3E50', // dark blue
    accent: '#8E44AD', // purple
    contrast: '#F39C12', // amber
    secondary: '#AAB7B8', // light silver
    neutral: '#ECF0F1', // soft white
    background: '#F5F5F5' // off white
  },
  typography: {
    logo: "'Abril Fatface', cursive",
    headers: "'Poppins', sans-serif",
    primary: "'Lato', sans-serif",
    secondary: "'Quicksand', sans-serif"
  }
}

const harmonicFusionBrand: BrandConcept = {
  name: 'Harmonic Fusion',
  tagline: ['Where music meets the blockchain.', 'Donde la música se encuentra con la blockchain.'],
  palette: {
    base: '#1A1A2E', // deep midnight blue
    accent: '#E94560', // vibrant crimson
    contrast: '#0F3460', // rich indigo
    secondary: '#16213E', // dark slate
    neutral: '#EAEAEA', // soft white
    background: '#0A0A23' // dark navy
  },
  typography: {
    logo: "'Bungee', cursive",
    headers: "'Poppins', sans-serif",
    primary: "'Roboto', sans-serif",
    secondary: "'Space Mono', monospace"
  }
}

const App: React.FC = () => {
  return (
    <div className='p-8 bg-gray-100 min-h-screen'>
      <BrandShowcase brand={polymathNebula} />
      <BrandShowcase brand={neuroMuse} />
      <BrandShowcase brand={nexoraBrand} />
      <BrandShowcase brand={harmonicFusionBrand} />
    </div>
  )
}

export default App
