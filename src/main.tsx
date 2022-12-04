import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "@fontsource/inter/700.css";
import "@fontsource/inter/400.css";
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
    color: '$slate12',

    backgroundImage: `radial-gradient($colors$slate1 20%, transparent 20%),
    radial-gradient($colors$slate6 20%, transparent 20%)`,
    backgroundPosition: '0 0, 5px 5px',
    backgroundSize: '10px 10px'
  },
  a: {
    textDecoration: 'none',
    color: '$slate12',

    '&:hover': {
      boxShadow: '0 1px 0 0 $colors$slate12'
    }
  }
});

globalStyles();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
