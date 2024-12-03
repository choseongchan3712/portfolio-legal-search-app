import styled from "styled-components";
import LawRe from "./LawRe";
import PrecRe from "./PrecRe";
import InterRe from "./InterRe";

const Container = styled.div`
  position: relative;
  max-width: 1400px;
  width: 100%;
  padding-top: 10px;
`;

interface SearchReType {
  searchValue: string;
}

const SearchRe = ({ searchValue }: SearchReType): JSX.Element => {
  return (
    <Container>
      <LawRe searchValue={searchValue}/>
      <PrecRe searchValue={searchValue} />
      <InterRe searchValue={searchValue} />
    </Container>
  );
};

export default SearchRe;
