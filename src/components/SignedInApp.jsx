import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Route, Routes } from "react-router";
import Account from "./Account";
import Feed from "./Feed";
import Nav from "./Nav";
import PostModal from "./PostModal";
import StyledSignedInApp from "./styled/SignedInApp.styled";

const queryClient = new QueryClient();

const SignedInApp = () => {
  const [modalOpen, setModal] = useState(false);
  return (
    <QueryClientProvider client={queryClient}>
      <StyledSignedInApp>
        <Nav setModal={setModal} />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/account" element={<Account />} />
        </Routes>
        {modalOpen && <PostModal setModal={setModal} />}
      </StyledSignedInApp>
      <ReactQueryDevtools position="bottom-right" initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default SignedInApp;
