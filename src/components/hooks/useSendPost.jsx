import { useMutation } from "react-query";

const useSendPost = () =>
  useMutation(
    post =>
      fetch(`${process.env.REACT_APP_SERVER_URL}/new_post`, {
        body: JSON.stringify(post),
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    {
      onSuccess: () => {},
    }
  );

export default useSendPost;
