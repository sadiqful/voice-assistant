import React, { useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'

const alanKey = '30cc5180f706c4fa72dc6a2c64a5a5f62e956eca572e1d8b807a3e2338fdd0dc/stage'

const App = () => {
    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command }) => {
                if (command === 'testCommand') {
                    alert('Command Executed Successfully');
                }
            }
        })
    }, [])
  return (
    <div>AI News Application</div>
  )
}

export default App