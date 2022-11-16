import React from 'react'
import HookUseEffect from '../components/HookUseEffect'
import HookUseReducer from '../components/HookUseReducer'
import HookUseState from '../components/HookUseState'

function Home() {
  return (
    <div>
        <HookUseState/>
        <HookUseReducer/>
        <HookUseEffect/>
    </div>
  )
}

export default Home