import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { HashRouter } from 'react-router-dom'
import Routing from './routing.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Routing />
      </HashRouter>
    </Provider>
  </StrictMode>,
)
