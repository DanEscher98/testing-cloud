import React, { useEffect, useState } from 'react'
import { BasicMarkdownWrapper } from '../components/features/Markdown'

const ContentPage: React.FC = () => {
  const [markdownContent, setMarkdownContent] = useState<string>('')

  useEffect(() => {
    // Dynamically load the markdown file
    fetch('/content.md')
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text))
      .catch((error) => console.error('Error loading markdown file:', error))
  }, [])

  return (
    <div className='prose mx-auto p-4'>
      {markdownContent ? (
        <BasicMarkdownWrapper content={markdownContent} />
      ) : (
        <p>Loading content...</p>
      )}
    </div>
  )
}

export default ContentPage
