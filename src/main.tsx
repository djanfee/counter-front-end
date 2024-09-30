import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TonConnectUIProvider } from '@tonconnect/ui-react';

const mainfestUrl = 'https://raw.githubusercontent.com/markokhman/func-course-chapter-5-code/master/public/manifest.json';

// ReactDOM.createRoot()

createRoot(document.getElementById('root')!).render(
  <TonConnectUIProvider manifestUrl={mainfestUrl}>
    <App />
  </TonConnectUIProvider>,
)
