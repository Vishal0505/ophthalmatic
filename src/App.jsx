import { Theme } from '@radix-ui/themes';
import './App.css'
import HomePage from './pages/home/page'
import '@radix-ui/themes/styles.css';


function App() {

  return (
    <>
      <Theme>
        <HomePage />
      </Theme>
    </>
  )
}

export default App