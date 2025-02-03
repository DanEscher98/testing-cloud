import React from 'react'

interface Palette {
  base: string
  accent: string
  contrast: string
  secondary: string
  neutral: string
  background: string
}

interface Typography {
  logo: string
  headers: string
  primary: string
  secondary: string
}

export interface BrandConcept {
  name: string
  tagline: string | string[]
  palette: Palette
  typography: Typography
}

interface BrandVisualizerProps {
  brand: BrandConcept
}

const BrandShowcase: React.FC<BrandVisualizerProps> = ({ brand }) => {
  return (
    <div
      className='min-h-screen bg-gradient-to-b from-white to-gray-100 p-4'
      style={{ backgroundColor: brand.palette.background }}
    >
      {/* Header Section */}
      <div className='text-center mb-8'>
        <h1
          className='text-4xl font-bold mb-2'
          style={{ fontFamily: brand.typography.logo, color: brand.palette.accent }}
        >
          {brand.name}
        </h1>
        <p
          className='text-lg inline-block px-4 py-2 rounded-md'
          style={{
            fontFamily: brand.typography.primary,
            backgroundColor: brand.palette.base,
            color: brand.palette.neutral
          }}
        >
          {Array.isArray(brand.tagline)
            ? brand.tagline.map((tag, index) => (
                <p key={index} className='mb-2'>
                  {tag}
                </p>
              ))
            : brand.tagline}
        </p>
      </div>

      {/* Typography Section */}
      <div className='mb-8'>
        <h2
          className='text-2xl font-bold mb-4'
          style={{ fontFamily: brand.typography.headers, color: brand.palette.contrast }}
        >
          Typography
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='p-4 border rounded-lg' style={{ backgroundColor: brand.palette.neutral }}>
            <h3
              className='text-xl font-bold'
              style={{ fontFamily: brand.typography.logo, color: brand.palette.accent }}
            >
              Logo Font: {brand.typography.logo}
            </h3>
            <p style={{ fontFamily: brand.typography.logo }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className='p-4 border rounded-lg' style={{ backgroundColor: brand.palette.neutral }}>
            <h3
              className='text-xl font-bold'
              style={{ fontFamily: brand.typography.primary, color: brand.palette.secondary }}
            >
              Primary Font: {brand.typography.primary}
            </h3>
            <p style={{ fontFamily: brand.typography.primary }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className='p-4 border rounded-lg' style={{ backgroundColor: brand.palette.neutral }}>
            <h3
              className='text-xl font-bold'
              style={{ fontFamily: brand.typography.secondary, color: brand.palette.base }}
            >
              Secondary Font: {brand.typography.secondary}
            </h3>
            <p style={{ fontFamily: brand.typography.secondary }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>

      {/* Color Palette Section */}
      <div>
        <h2
          className='text-2xl font-bold mb-4'
          style={{ fontFamily: brand.typography.headers, color: brand.palette.contrast }}
        >
          Color Palette
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
          {Object.entries(brand.palette).map(([key, color]) => (
            <div key={key} className='p-4 border rounded-lg' style={{ backgroundColor: color }}>
              <div
                className='w-16 h-16 rounded-full mx-auto mb-2'
                style={{ backgroundColor: color }}
              ></div>
              <p
                className='text-center text-sm font-medium'
                style={{ color: brand.palette.neutral }}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}: {color}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default BrandShowcase
