import styled from "styled-components";
import SearchTab from "../components/SearchTab";
import SearchRe from "../components/SearchRe";
import { useState } from "react";
import PageTitle from "../components/PageTitle";

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
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <>
    <PageTitle title="조회하기"/>
      <Container>
        <SearchTab setSearchValue={setSearchValue} />
        <SearchRe searchValue={searchValue} />
      </Container>
    </>
  );
};

export default Search;
