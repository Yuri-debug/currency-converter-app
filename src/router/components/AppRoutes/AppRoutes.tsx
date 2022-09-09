import { Routes, Route } from 'react-router-dom'
import { ConvertCurrency, Home } from '../../../pages'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exchange" element={<ConvertCurrency />} />
    </Routes>
  )
}
