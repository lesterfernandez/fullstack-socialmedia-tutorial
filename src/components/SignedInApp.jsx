import { Route, Routes } from "react-router-dom";
import Feed from "./Feed";
import Nav from "./Nav";
import Profile from "./Profile";
import StyledSignedInApp from "./styled/SignedInApp.styled";

const SignedInApp = () => {
  return (
    <StyledSignedInApp>
      <Nav />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </StyledSignedInApp>
  );
};

export default SignedInApp;
