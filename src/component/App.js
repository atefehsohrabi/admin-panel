import { Layout } from 'antd'
import { Route, Routes } from 'react-router-dom'
import Footer from './share/Footer'
import Header from './share/Header'
import Sidebar from './share/Sidebar'

import '../assets/css/general.css'

const { Content } = Layout

function App() {
  return (
    <div className='app'>
      <Layout>
        <Header />
        <Layout>
          <Sidebar />
          <Content className='content'>
            <Routes>
              <Route path='/' element={<div>salam</div>} />
            </Routes>
          </Content>
        </Layout>
        <Footer />
      </Layout>
    </div>
  )
}

export default App
