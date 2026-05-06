import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Footer from './components/Footer'
import Home from './pages/Home'
import { GlobalStyle } from './styles/global'

const RestaurantPage = () => (
  <main style={{ backgroundColor: '#FFF8F2', color: '#E66767', minHeight: '50vh', padding: '80px 40px', textAlign: 'center' }}>
    <h1>Restaurante</h1>
    <p>Esta página será desenvolvida nas próximas partes do projeto.</p>
  </main>
)

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurante/:id" element={<RestaurantPage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)

export default App
