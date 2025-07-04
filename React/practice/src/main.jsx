import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from 'react-query'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <QueryClientProvider client={QueryClient}>
    <App />
    </QueryClientProvider>
  </StrictMode>,
)
