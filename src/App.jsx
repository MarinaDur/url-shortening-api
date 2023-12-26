import Main from "./components/Main";
import { UrlProvider } from "./context/UrlContext";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <UrlProvider>
        <Main />
      </UrlProvider>
    </>
  );
}

export default App;
