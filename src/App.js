import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Signup from "./components/Signup";
import StyledApp from "./components/styled/App.styled";
import GlobalStyle from "./components/styled/GlobalStyles";
import { darkTheme } from "./themes";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <StyledApp>
          <Signup />
        </StyledApp>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
