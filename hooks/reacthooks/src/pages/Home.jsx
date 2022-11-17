import React from 'react'
import HookUseEffect from '../components/HookUseEffect'
import HookUseLayoutEffect from '../components/HookUseLayoutEffect'
import HookUseMemo from '../components/HookUseMemo'
import HookUseReducer from '../components/HookUseReducer'
import HookUseState from '../components/HookUseState'
import UseHookUseRef from '../components/UseHookUseRef'

function Home() {
  return (
    <div>
        <HookUseState/>
        <HookUseReducer/>
        <HookUseEffect/>
        <UseHookUseRef/>
        <HookUseLayoutEffect />
        <HookUseMemo />
    </div>
  )
}

export default Home