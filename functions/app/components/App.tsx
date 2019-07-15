import React, { FC } from 'react'
import Header from './Header'
import Profile from './Profile'

const App: FC = ({ children }) => (
  <main>
    <Header />
    {children}
    <Profile />
  </main>
)

export default App
