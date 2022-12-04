import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.css'
import "@fontsource/inter/700.css";
import { globalCss } from './stitches.config';

const globalStyles = globalCss({
  'html, body, #root': {
    height: '100vh'
  },
  'body': {
    padding: 0,
    margin: 0,
    backgroundColor: '$slate1',
    fontFamily: 'Inter, sans-serif',
  }
});

globalStyles();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
