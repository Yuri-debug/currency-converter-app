import { FC } from 'react'
import { AppRouter } from './router'
import { Provider } from 'react-redux'
import { store } from './store'

export const App: FC = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}
