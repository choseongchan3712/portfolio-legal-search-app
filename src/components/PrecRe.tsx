import { useEffect, useState } from "react";
import styled from "styled-components";
import { getSearchprec } from "../API/api";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  margin-bottom: 10px;
  .wrap {
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    .title {
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      background-color: #7874f1;
      font-size: 20px;
      font-weight: 700;
    }
    a {
      text-decoration: none;
      color: #000;
      display: block;
      padding: 10px;
      .name {
        width: 100%;
        padding: 10px;
        display: flex;
        align-items: center;
        font-size: 18px;
        font-weight: 700;
        color: rgba(0, 0, 0, 0.7);
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }
    }
  }
`;

interface PrecReType {
  searchValue: string;
}

const PrecRe = ({ searchValue }: PrecReType): JSX.Element => {
  const [precData, setPrecData] = useState<any>();
  const [searchPrecArr, setSearchPrecArr] = useState<any>();
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    if (isMounted) {
      (async () => {
        try {
          const response = await getSearchprec(searchValue);
          setPrecData(response?.data?.PrecSearch?.prec);
        } catch (error) {
          console.log(error);
        }
      })();
    } else {
      setIsMounted(true);
    }
  }, [searchValue]);

  console.log(precData);

  useEffect(() => {
    setSearchPrecArr(
      precData?.map((data: any) => ({
        number: data.판례일련번호,
        name: data.사건명,
      }))
    );
  }, [precData]);
  console.log(searchPrecArr);

  return (
    <Container>
      {searchValue ? (
        <div className="wrap">
          <div className="title">판례 검색결과</div>
          {searchPrecArr?.map((data: any, index: string) => (
            <Link to={`/prec_detail/${data.number}`}>
              <div className="name" key={index}>
                {data.name}
              </div>
            </Link>
          ))}
        </div>
      ) : null}
    </Container>
  );
};

export default PrecRe;
