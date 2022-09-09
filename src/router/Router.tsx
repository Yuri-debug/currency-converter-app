import { BrowserRouter as Router } from 'react-router-dom'
import { AppRoutes } from './components'

export const AppRouter = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}
