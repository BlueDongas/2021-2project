import './App.css'
import Main from './components/main'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

function App() {
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
    <Main />
    </>
  )
}

export default App
