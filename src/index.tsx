import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import { App } from './App'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const client = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <QueryClientProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QueryClientProvider>
)
