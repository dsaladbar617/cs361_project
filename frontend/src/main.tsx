import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Header from './components/Header.tsx'
import {
  BrowserRouter
} from "react-router-dom";

const queryClient = new QueryClient()


createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)
