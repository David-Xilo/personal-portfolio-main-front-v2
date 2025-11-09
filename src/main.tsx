import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import React from 'react'

async function enableMocking() {
    // if (process.env.NODE_ENV !== 'development') {
    //     return
    // }

    const { worker } = await import('./mocks/browser')
    return worker.start()
}

enableMocking().then(() => {
    createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <App />
        </StrictMode>,
    )
})

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
