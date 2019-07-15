import React, { FC } from 'react'
import Header from './Header'

const App: FC = ({ children }) => (
  <main>
    <Header />
    {children}
  </main>
)

export default App
