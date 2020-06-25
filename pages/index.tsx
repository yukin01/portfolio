import React, { FC } from 'react'
import Profile from '../components/Profile'

const Index: FC = () => (
  <div
    style={{
      fontFamily: [
        '"Helvetica Neue"',
        'Arial',
        '"Hiragino Kaku Gothic ProN"',
        '"Hiragino Sans"',
        'Meiryo',
        'sans-serif'
      ].join(',')
    }}
  >
    <Profile />
  </div>
)

export default Index
