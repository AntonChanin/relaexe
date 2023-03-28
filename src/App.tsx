import './App.scss'
import Button from './components/ui/Button'

console.log('[App.tsx]', `Hello world from Electron ${process.versions.electron}!`)

function App() {
  return (
    <div className='App'>
      <Button title={'Press me'} />
    </div>
  )
}

export default App
