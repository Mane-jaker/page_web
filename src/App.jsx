import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Button } from "flowbite-react";
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="text-3xl font-bold underline">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="flex flex-wrap gap-2">
      <Button>Default</Button>
      <Button color="blue">Blue</Button>
      <Button color="gray">Gray</Button>
      <Button color="dark">Dark</Button>
      <Button color="light">Light</Button>
      <Button color="success">Success</Button>
      <Button color="failure">Failure</Button>
      <Button color="warning">Warning</Button>
      <Button color="purple">Purple</Button>
    </div>
    </>
  )
}

export default App
