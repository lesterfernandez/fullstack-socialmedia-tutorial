import React from "react";
import { StyledPost, StyledPostHeader } from "./styled/Feed.styled";

const Post = React.memo(({ post }) => {
  return (
    <StyledPost>
      <StyledPostHeader>
        <h2>{post.username}</h2>
        <img src={post.img} alt="profile img" />
      </StyledPostHeader>
      <p>{post.body}</p>
    </StyledPost>
  );
});

export default Post;
