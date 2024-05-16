import React from 'react'
import LvhUserState from './components/LvhUserState'
import LvhUserEffect from './components/LvhUserEffect'
import LvhUserContext from './components/LvhUserContext'
import'.App.css'
export default function App() {
  return (
    <div className='container border mt-3'>
      <h1 className='text-center'> Lê Văn Hoàng - Hook</h1>
      <hr/>
      <LvhUserState/>
      <hr/>
      <LvhUserEffect/>
      <hr/>
      <LvhUserContext/>
      </div>
  )
}
