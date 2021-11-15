import styled from "styled-components";

const Feed = styled.div`
  min-height: 100vh;
  width: 90%;
  max-width: 700px;
  margin: 3rem auto 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  h1 {
    text-align: center;
  }
`;

export const StyledPost = styled.div`
  background-color: ${({ theme }) => theme.elevation_1};
  padding: 1rem 2rem;
  & > p {
    margin-top: 1rem;
  }
`;
export const StyledPostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 2px dotted gray;
  & > img {
    width: 70px;
  }
`;

export const LoadMoreButton = styled.div`
  position: relative;
  width: 200px;
  height: 70px;
  margin: 2rem auto 1rem;
  padding: 1rem 2rem;
  & > button {
    font-size: 1.5rem;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    color: white;
    background-color: ${({ theme }) => theme.primary};

    &:active {
      transform: scale(0.98);
    }
    &:hover,
    &:focus,
    &:active {
      appearance: none;
      --moz-appearance: none;
      --webkit-appearance: none;
      text-decoration: none;
    }
  }
`;

export default Feed;
