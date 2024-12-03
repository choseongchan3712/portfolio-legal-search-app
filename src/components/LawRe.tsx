import { useEffect, useState } from "react";
import styled from "styled-components";
import { getLaw } from "../API/api";
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
    a{
      text-decoration: none;
      color: #000;
      display: block;
      padding: 10px;
      .name {
        width: 100%;
        height: 35px;
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

  useEffect(() => {
    if (isMounted) {
      (async () => {
        try {
          const response = await getLaw(searchValue);
          setLawData(response?.data?.LawSearch?.law);
        } catch (error) {
          console.log(error);
        }
      })();
    } else {
      setisMounted(true);
    }
  }, [searchValue]);

  console.log(lawData);

  useEffect(() => {
    setSearchLawArr(
      lawData?.map((data: any) => ({
        number: data.법령ID,
        name: data.법령명한글,
      }))
    );
  }, [lawData]);

  console.log(searchLawArr);

  return (
    <Container>
      {searchValue ? (
        <div className="wrap">
          <div className="title">법령 검색결과</div>
          {searchLawArr.map((data: any, index: string) => (
            <Link to={`/detail/${data.number}`}>
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

export default LawRe;
