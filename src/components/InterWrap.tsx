import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
width: 100%;
  ul {
    width: 100%;
    border-top: 1px solid #a3a0f1;
    li {
      width: 100%;
      height: 70px;
      display: flex;
      align-items: center;
      border-left: 1px solid #a3a0f1;
      border-right: 1px solid #a3a0f1;
      border-bottom: 1px solid #a3a0f1;
      a {
        text-decoration: none;
        color: #000;
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
      }
      span {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
      }
      .id {
        width: 10%;
        border-right: 1px solid #a3a0f1;
      }
      .name {
        width: 70%;
        border-right: 1px solid #a3a0f1;
        padding: 0 10px;
        background-color: #deddff;
        font-weight: 900;
      }
      .number {
        width: 10%;
        border-right: 1px solid #a3a0f1;
      }
      .date {
        width: 10%;
      }
    }
  }`;

const InterWrap = ({ inter }: any): JSX.Element => {
  const interArr = inter?.expc;
  console.log(interArr);
  return <Container>
    <ul>
        <li>
          <span className="id">번호</span>
          <span className="name">안건명</span>
          <span className="number">안건번호</span>
          <span className="date">회신일자</span>
        </li>
        {interArr?.map((data: any, index: number) => (
          <li className={`${data.법령해석례일련번호}`} key={index}>
            <Link to={`/inter_detail/${data.법령해석례일련번호}`}>
              <span className="id">{data.id}</span>
              <span className="name">{data.안건명}</span>
              <span className="number">{data.안건번호}</span>
              <span className="date">{data.회신일자}</span>
            </Link>
          </li>
        ))}
      </ul>
  </Container>;
};

export default InterWrap;
