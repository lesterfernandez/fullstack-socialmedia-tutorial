import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Signup from "./components/Signup";
import StyledApp from "./components/styled/App.styled";
import GlobalStyle from "./components/styled/GlobalStyles";
import { UserContext } from "./components/UserContext";
import { darkTheme } from "./themes";

function App() {
  const user = useContext(UserContext);

  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <StyledApp>
          {user?.loggedIn === null ? (
            ""
          ) : user?.loggedIn === true ? (
            "logged in"
          ) : (
            <Signup />
          )}
        </StyledApp>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
