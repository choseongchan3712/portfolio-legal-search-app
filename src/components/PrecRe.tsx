import { useEffect, useState } from "react";
import styled from "styled-components";
import { getSearchprec } from "../API/api";
import { Link } from "react-router-dom";
import { RingLoader } from "react-spinners";

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
  const [precData, setPrecData] = useState<any>([]);
  const [searchPrecArr, setSearchPrecArr] = useState<any>();
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (isMounted) {
      (async () => {
        try {
          const response = await getSearchprec(searchValue);
          setPrecData(response?.data?.PrecSearch?.prec);
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      })();
    } else {
      setIsMounted(true);
    }
  }, [searchValue]);

  useEffect(() => {
    if (Array.isArray(precData)) {
      setSearchPrecArr(
        precData?.map((data: any) => ({
          number: data.판례일련번호,
          name: data.사건명,
        }))
      );
    }
    setLoading(true);
  }, [precData]);

  return loading ? (
    <Container>
      {searchValue && searchPrecArr?.length ? (
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
  ) : (
    <Container>
      <div
        className="wrap"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="title">판례 검색결과</div>
        <RingLoader color="#7874f1" size={100} />
      </div>
    </Container>
  );
};

export default PrecRe;
