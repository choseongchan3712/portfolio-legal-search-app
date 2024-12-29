import { useEffect, useState } from "react";
import styled from "styled-components";
import { getLaw } from "../API/api";
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

interface LawReType {
  searchValue: string;
}

const LawRe = ({ searchValue }: LawReType): JSX.Element => {
  const [lawData, setLawData] = useState<any>([]);
  const [searchLawArr, setSearchLawArr] = useState<any>();
  const [isMounted, setisMounted] = useState<Boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (isMounted) {
      (async () => {
        try {
          const response = await getLaw(searchValue);
          setLawData(response?.data?.LawSearch?.law);
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      })();
    } else {
      setisMounted(true);
    }
  }, [searchValue]);

  useEffect(() => {
    if (Array.isArray(lawData)) {
      setSearchLawArr(
        lawData?.map((data: any) => ({
          number: data.법령ID,
          name: data.법령명한글,
        }))
      );
    }
    setLoading(true);
  }, [lawData]);

  return loading ? (
    <Container>
      {searchValue && searchLawArr?.length ? (
        <div className="wrap">
          <div className="title">법령 검색결과</div>
          {searchLawArr?.map((data: any, index: string) => (
            <Link to={`/detail/${data.number}`}>
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
        <div className="title">법령 검색결과</div>
        <RingLoader color="#7874f1" size={100} />
      </div>
    </Container>
  );
};

export default LawRe;
