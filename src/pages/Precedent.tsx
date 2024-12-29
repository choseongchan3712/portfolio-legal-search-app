import { useEffect, useState } from "react";
import { getPrecedent } from "../API/api";
import styled from "styled-components";
import { Pagination } from "@mui/material";
import PrecedentWrap from "../components/PrecedentWrap";
import Loading from "../components/Loading";
import PageTitle from "../components/PageTitle";

const Container = styled.div`
  position: relative;
  z-index: 0;
  width: 100%;
  min-height: 100vh;
  padding: 80px 0 100px 0;
  .MuiPagination-root {
    padding: 20px;
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #a3a0f1;
    border-radius: 20px;
  }
`;

const Precedent = (): JSX.Element => {
  const [precedent, setPrecedent] = useState<any>();
  const [page, setPage] = useState<number>();
  const [nowPage, setNowPage] = useState<number>(1);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPrecedent(`${nowPage}`);
        setPrecedent(response.data?.PrecSearch);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [nowPage]);

  useEffect(() => {
    setPage(Math.ceil(parseFloat(precedent?.totalCnt) / 100));
  }, [precedent]);

  const changeHandler = (e: React.ChangeEvent<unknown>, value: number) => {
    setNowPage(value);
  };

  return precedent ? (
    <>
    <PageTitle title="판례"/>
      <Container>
        <PrecedentWrap precedent={precedent} />
        <Pagination
          count={page}
          page={nowPage}
          onChange={changeHandler}
          siblingCount={3}
          boundaryCount={2}
        />
      </Container>
    </>
  ) : (
    <Loading />
  );
};

export default Precedent;
