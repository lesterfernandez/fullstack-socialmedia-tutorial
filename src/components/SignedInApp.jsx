import { Route, Routes } from "react-router";
import Account from "./Account";
import Feed from "./Feed";
import Nav from "./Nav";
import StyledSignedInApp from "./styled/SignedInApp.styled";

const SignedInApp = () => {
  return (
    <StyledSignedInApp>
      <Nav />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </StyledSignedInApp>
  );
};

export default SignedInApp;
