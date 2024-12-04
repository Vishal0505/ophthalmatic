import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./App.css";
import HomePage from "./pages/home/page";
import { ScrollToTop } from "./pages/home/components/ScrollToTop";

function App() {
  return (
    <>
      <Theme>
        <ScrollToTop>
          <HomePage />
        </ScrollToTop>
      </Theme>
    </>
  );
}

export default App;
