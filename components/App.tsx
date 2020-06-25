import React, { FC } from 'react'
import Profile from './Profile'

const App: FC = () => {
  const style: React.CSSProperties = {
    fontFamily: [
      '"Helvetica Neue"',
      'Arial',
      '"Hiragino Kaku Gothic ProN"',
      '"Hiragino Sans"',
      'Meiryo',
      'sans-serif'
    ].join(',')
  }
  return (
    <div style={style}>
      <Profile />
    </div>
  )
}

export default App
