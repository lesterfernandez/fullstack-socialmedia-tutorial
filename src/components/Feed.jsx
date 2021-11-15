import useFeed from "./hooks/useFeed";

const Feed = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useFeed();
  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {hasNextPage && !isFetchingNextPage && (
        <button onClick={() => fetchNextPage()}>load more</button>
      )}
    </>
  );
};

export default Feed;
