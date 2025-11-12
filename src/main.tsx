import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './app.tsx'
// import React from 'react'

// async function enableMocking() {
//     // if (process.env.NODE_ENV !== 'development') {
//     //     return
//     // }
//
//     const { worker } = await import('mocks/browser.ts')
//     return worker.start()
// }

// enableMocking().then(() => {
//     createRoot(document.getElementById('root')!).render(
//         <StrictMode>
//             <App />
//         </StrictMode>,
//     )
// })

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


function renderApp() {
    const rootElement = document.getElementById('root')
    if (rootElement) {
        createRoot(rootElement).render(
            <StrictMode>
                <App/>
            </StrictMode>,
        )
    } else {
        console.error('Root element not found')
    }
}

// if (process.env.NODE_ENV === 'production') {
//     renderApp()
// } else if (process.env.NODE_ENV === 'development') {
async function clearServiceWorkers() {
    if ('serviceWorker' in navigator) {
        try {
            const registrations = await navigator.serviceWorker.getRegistrations()
            const unregisterPromises = registrations.map(registration =>
                registration.unregister(),
            )
            await Promise.all(unregisterPromises)
        } catch (err) {
            console.error('❌ Error unregistering service workers:', err)
        }
    }
}

async function enableMocking() {
    try {

        // Dynamic import ensures MSW is only loaded in local
        const {worker} = await import('./mocks/browser.ts')

        await worker.start({
            serviceWorker: {url: `/mockServiceWorker.js?v=${Date.now()}`},
            onUnhandledRequest: 'bypass',
            quiet: false, // Set to true to reduce MSW console logs
        })

        return true
    } catch (error) {
        console.warn('⚠️ Failed to start MSW:', error)
        console.log('📡 Continuing without mocks - will use real API')
        return false
    }
}

async function initDevelopmentApp() {
    try {
        await clearServiceWorkers()
        const mswStarted = await enableMocking()

        if (mswStarted) {
            console.log('Development app starting with mocks')
        } else {
            console.log('Development app starting without mocks')
        }

        renderApp()
    } catch (err) {
        renderApp()
    }
}

initDevelopmentApp()
// } else {
//     renderApp()
// }
