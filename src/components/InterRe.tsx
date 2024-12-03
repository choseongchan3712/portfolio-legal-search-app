import { useEffect, useState } from "react";
import { getInterprec } from "../API/api";
import styled from "styled-components";
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

interface InterReType {
  searchValue: string;
}

const InterRe = ({ searchValue }: InterReType): JSX.Element => {
  const [interData, setInterData] = useState<any>([]);
  const [searchInterArr, setSearchInterArr] = useState<any>();
  const [isMounted, setisMounted] = useState<Boolean>(false);

  useEffect(() => {
    if (isMounted) {
      (async () => {
        try {
          const response = await getInterprec(searchValue);
          setInterData(response?.data?.Expc?.expc);
        } catch (error) {
          console.log(error);
        }
      })();
    } else {
      setisMounted(true);
    }
  }, [searchValue]);

  useEffect(() => {
    if (Array.isArray(interData)) {
      setSearchInterArr(
        interData?.map((data: any) => ({
          number: data.법령해석례일련번호,
          name: data.안건명,
        }))
      );
    }
  }, [interData]);

  console.log(searchInterArr);

  return (
    <Container>
      {searchValue && searchInterArr?.length ? (
        <div className="wrap">
          <div className="title">해석례 검색결과</div>
          {searchInterArr?.map((data: any, index: string) => (
            <Link to={`/inter_detail/${data.number}`}>
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

export default InterRe;
