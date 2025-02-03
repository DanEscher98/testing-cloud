import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'
import remarkMermaidPlugin from 'remark-mermaid-plugin'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css' // Include KaTeX styles

interface MarkdownWrapperProps {
  content: string
}

export const BasicMarkdownWrapper: React.FC<MarkdownWrapperProps> = ({ content }) => {
  return (
    <ReactMarkdown
      children={content}
      remarkPlugins={[
        remarkMath,
        // @ts-ignore
        [remarkMermaidPlugin, { theme: 'light' }]
      ]}
      rehypePlugins={[rehypeRaw, rehypeStringify, rehypeKatex]}
      components={{
        h1: ({ children }) => (
          <h1 className='text-4xl font-bold font-audiowide text-blue-600 mb-4'>{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className='text-3xl font-semibold font-audiowide text-blue-500 mt-6 mb-3'>
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className='text-2xl font-medium font-audiowide text-blue-400 mt-5 mb-2'>
            {children}
          </h3>
        ),
        p: ({ children }) => <p className='text-lg text-gray-700 mb-4'>{children}</p>,
        ul: ({ children }) => (
          <ul className='list-disc list-inside pl-6 text-gray-700 mb-4'>{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className='list-decimal list-inside pl-6 text-gray-700 mb-4'>{children}</ol>
        ),
        li: ({ children }) => <li className='mb-1'>{children}</li>,
        blockquote: ({ children }) => (
          <blockquote className='border-l-4 border-blue-300 pl-4 italic text-gray-600 mb-4'>
            {children}
          </blockquote>
        ),
        img: ({ src, alt }) => (
          <img
            src={src || ''}
            alt={alt || ''}
            className='rounded-md shadow-md max-w-full mx-auto my-4'
          />
        ),
        svg: ({ node, ...props }) => (
          <svg
            {...props}
            className={`${props.className || ''}`}
            style={{
              ...props.style,
              marginLeft: '25%' // Add 30% separation from the left
            }}
          />
        ),
        code: ({ children }) => (
          <code className='text-white-800 px-2 py-1 rounded'>{children}</code>
        ),
        pre: ({ children }) => (
          <pre className='p-4 rounded-md overflow-x-auto mb-4'>{children}</pre>
        ),
        table: ({ children }) => (
          <table className='table-auto border-collapse border border-gray-300 my-4 w-full'>
            {children}
          </table>
        ),
        thead: ({ children }) => <thead className='bg-gray-200'>{children}</thead>,
        tbody: ({ children }) => <tbody className='divide-y divide-gray-300'>{children}</tbody>,
        tr: ({ children }) => <tr>{children}</tr>,
        th: ({ children }) => (
          <th className='border border-gray-300 px-4 py-2 text-left font-medium'>{children}</th>
        ),
        td: ({ children }) => <td className='border border-gray-300 px-4 py-2'>{children}</td>
      }}
    />
  )
}
