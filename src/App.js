import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import StyledApp from "./components/styled/App.styled";
import GlobalStyle from "./components/styled/GlobalStyles";
import { darkTheme } from "./themes";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <StyledApp>Hello World</StyledApp>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
