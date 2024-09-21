import { Theme } from '@radix-ui/themes';
import './App.css'
import Footer from './components/footer'
import Header from './components/header'
import HomePage from './pages/home/page'
import '@radix-ui/themes/styles.css';

function App() {

  return (
    <>
      <Theme>
        <Header />
        <HomePage />
        <Footer />
      </Theme>
    </>
  )
}

export default App