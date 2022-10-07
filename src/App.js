import './App.css'
import ColorRenderer from './01-color-renderer/ColorRenderer'
import DarkMode from './02-dark-mode/DarkMode'
import FormValidator from './03-form-validator/FormValidator'
import DogPics from './04-dog-pic/DogPics'
import ScoreKeeper from './05-score-keeper/ScoreKeeper'
import ToggleWindowEvent from './06-window-event/ToggleWindowEvent'

function App() {
  return (
    <div className='App'>
      <ToggleWindowEvent />
    </div>
  )
}

export default App
