import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './components/ui/theme-provider'

// NOTE: keep whatever providers / CSS imports your existing main.jsx already has.
import './index.css'

import App from './pages/App' // your current home page
import ProjectDetail from './pages/ProjectDetail'
import CertificateDetail from './pages/CertificateDetail'
import FeatureDetail from './pages/FeatureDetail'
import NotFound from './pages/NotFound'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/work/:slug" element={<ProjectDetail />} />
          <Route path="/certificate/:slug" element={<CertificateDetail />} />
          <Route path="/featured/:slug" element={<FeatureDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)