import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import Footer from './Components/Footer.jsx'
import Navigation from './Components/Navigation.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <Navigation />
    <App />
    <Footer />
  </React.StrictMode>,
)
