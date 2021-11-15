import styled from "styled-components";

const Feed = styled.div`
  width: 90%;
  max-width: 700px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-block: 3rem 5rem;
`;

export const StyledPost = styled.div`
  background-color: ${({ theme }) => theme.elevation_1};
  padding: 1rem 2rem;

  & > p {
    padding-top: 1rem;
  }
`;
export const StyledPostHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px dotted gray;
  padding-bottom: 1rem;
  & > img {
    width: 70px;
  }
`;

export const PostButton = styled.div`
  position: relative;
  height: 100px;
  width: 250px;
  margin: 1rem auto 2rem;

  & > button {
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.primary};
    color: white;
    text-align: center;
    font-size: 1.5rem;
    appearance: none;
    --moz-appearance: none;
    --webkit-appearance: none;
    text-decoration: none;

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
