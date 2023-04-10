import React from 'react'
import ReactDOM from 'react-dom'
import App from './component/App'
import {ConfigProvider} from 'antd'
import enUS from 'antd/es/calendar/locale/en_US'
import { BrowserRouter as Router } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
  <Router>
    <ConfigProvider
      direction='ltr'
      locale={enUS} 
      theme={{token:{colorPrimary:'red'}}}>
     
        <App />
   
    </ConfigProvider>
  </Router>
  // </React.StrictMode>
)


