import styled from "styled-components";
import LawRe from "./LawRe";

const Container = styled.div`
  position: relative;
  min-width: 1400px;
  height: calc(100vh - 140px);
  padding-top: 10px;
`;

interface SearchReType {
  searchValue: string;
}

const SearchRe = ({ searchValue }: SearchReType): JSX.Element => {
  return (
    <Container>
      <LawRe searchValue={searchValue}/>
    </Container>
  );
};

export default SearchRe;
