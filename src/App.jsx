import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import './App.css';
import HomePage from './pages/home/page';
import { useEffect } from 'react';


function App() {

useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Optional: Adds smooth scrolling effect
  });
}, []);
  
  return (
    <>
      <Theme>
        <HomePage />
      </Theme>
    </>
  )
}

export default App