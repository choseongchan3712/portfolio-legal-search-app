import { useEffect, useState } from "react";
import styled from "styled-components";
import { getInter } from "../API/api";
import { Pagination } from "@mui/material";
import InterWrap from "../components/InterWrap";
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

const Interpretation = (): JSX.Element => {
  const [inter, setInter] = useState<any>();
  const [page, setPage] = useState<number>();
  const [nowPage, setNowPage] = useState<number>(1);

  useEffect(() => {
    (async () => {
      try {
        const response = await getInter(`${nowPage}`);
        setInter(response.data?.Expc);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [nowPage]);

  useEffect(() => {
    setPage(Math.ceil(parseFloat(inter?.totalCnt) / 100));
  }, [inter]);

  const changeHandler = (e: React.ChangeEvent<unknown>, value: number) => {
    setNowPage(value);
  };

  return inter ? (
    <>
    <PageTitle title="해석례"/>
      <Container>
        <InterWrap inter={inter} />
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

export default Interpretation;
