import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "@fontsource/inter";
import { globalCss } from './stitches.config';

const globalStyles = globalCss({
  'html, body': {
    padding: 0,
    margin: 0,
    backgroundColor: '$slate1'
  }
});

globalStyles();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
