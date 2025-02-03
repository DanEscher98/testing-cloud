import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import ContentPage from './pages/ContentPage'
import MainPage from './pages/MainPage'

export const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/content', element: <ContentPage /> },
  { path: '/main', element: <MainPage /> }
])
