import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Footer from './components/Footer'
import Home from './pages/Home'
import Restaurant from './pages/Restaurant'
import { GlobalStyle } from './styles/global'

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurante/:id" element={<Restaurant />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)

export default App
