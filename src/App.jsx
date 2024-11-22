import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import './App.css';
import HomePage from './pages/home/page';


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