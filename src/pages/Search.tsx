import styled from "styled-components";
import SearchTab from "../components/SearchTab";

const Container = styled.div`
  position: relative;
  z-index: 0;
  width: 100%;
  min-height: 100vh;
  padding: 80px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Search = (): JSX.Element => {
  return (
    <Container>
      <SearchTab />
    </Container>
  );
};

export default Search;
