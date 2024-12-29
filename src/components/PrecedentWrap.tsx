import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }

  ul {
    width: 100%;
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
    overflow: hidden;

    li {
      width: 100%;
      min-height: 70px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid rgba(163, 160, 241, 0.2);
      transition: all 0.3s ease;

      &:first-child {
        background-color: #f8f8ff;
        min-height: 60px;
        font-weight: 600;
        color: #666;
      }

      &:last-child {
        border-bottom: none;
      }

      &:not(:first-child):hover {
        background-color: #f8f8ff;
      }

      @media (max-width: 768px) {
        min-height: 65px;
        &:first-child {
          min-height: 55px;
        }
      }

      @media (max-width: 480px) {
        min-height: 60px;
        &:first-child {
          min-height: 50px;
        }
      }

      a {
        text-decoration: none;
        color: #333;
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
        padding: 10px;
        line-height: 1.4;
      }

      .id {
        width: 10%;
        color: #7874f1;
        font-weight: 600;

        @media (max-width: 480px) {
          width: 15%;
          font-size: 13px;
        }
      }

      .name {
        width: 70%;
        justify-content: flex-start;
        padding: 15px;
        font-weight: 500;
        line-height: 1.5;
        color: #333;

        @media (max-width: 768px) {
          width: 65%;
          font-size: 14px;
          padding: 12px;
        }

        @media (max-width: 480px) {
          width: 55%;
          font-size: 13px;
          padding: 10px;
        }
      }

      .number {
        width: 10%;
        color: #666;
        font-size: 14px;

        @media (max-width: 768px) {
          width: 12.5%;
          font-size: 13px;
        }

        @media (max-width: 480px) {
          width: 15%;
          font-size: 12px;
        }
      }

      .date {
        width: 10%;
        color: #666;
        font-size: 14px;

        @media (max-width: 768px) {
          width: 12.5%;
          font-size: 13px;
        }

        @media (max-width: 480px) {
          width: 15%;
          font-size: 12px;
        }
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
