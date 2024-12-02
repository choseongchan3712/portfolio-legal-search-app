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
  }
`;

const PrecedentWrap = ({ precedent }: any): JSX.Element => {
  const precedentArr = precedent?.prec;

  return (
    <Container>
      <ul>
        <li>
          <span className="id">번호</span>
          <span className="name">사건명</span>
          <span className="number">사건번호</span>
          <span className="date">선고일자</span>
        </li>
        {precedentArr?.map((data: any, index: number) => (
          <li className={`${data.판례일련번호}`} key={index}>
            <Link to={`/prec_detail/${data.판례일련번호}`}>
              <span className="id">{data.id}</span>
              <span className="name">{data.사건명}</span>
              <span className="number">{data.사건번호}</span>
              <span className="date">{data.선고일자}</span>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default PrecedentWrap;
