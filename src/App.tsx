import BrandShowcase, { BrandConcept } from './components/BrandVisualizer'

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

function App() {
  return (
    <div className='p-8 bg-gray-100 min-h-screen'>
      <BrandShowcase brand={polymathNebula} />
    </div>
  )
}

export default App
