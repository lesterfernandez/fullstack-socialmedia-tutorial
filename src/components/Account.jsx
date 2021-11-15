import useFeed from "./hooks/useFeed";
import Post from "./Post";
import StyledFeed, { PostButton } from "./styled/Feed.styled";

const Account = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useFeed();
  return (
    <StyledFeed>
      {data?.pages?.map(page => page.posts.map(post => <Post post={post} />))}
      <PostButton>
        {hasNextPage && !isFetchingNextPage && (
          <button onClick={() => fetchNextPage()}>Load More</button>
        )}
      </PostButton>
    </StyledFeed>
  );
};

export default Account;
