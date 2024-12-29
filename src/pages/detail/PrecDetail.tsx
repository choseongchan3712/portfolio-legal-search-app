import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPrec } from "../../API/api";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 90px 20px 20px;

  @media (max-width: 768px) {
    padding: 85px 15px 15px;
  }

  @media (max-width: 480px) {
    padding: 80px 10px 10px;
  }

  div {
    padding: 15px;

    @media (max-width: 768px) {
      padding: 12px;
    }

    @media (max-width: 480px) {
      padding: 10px;
    }
  }

  .name {
    width: 100%;
    padding: 25px;
    display: flex;
    justify-content: center;
    font-size: 24px;
    font-weight: 700;
    color: #7874f1;
    line-height: 1.4;
    text-align: center;
    margin-bottom: 10px;
    background: #f8f8ff;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(120, 116, 241, 0.1);

    @media (max-width: 768px) {
      font-size: 20px;
      padding: 20px;
    }

    @media (max-width: 480px) {
      font-size: 18px;
      padding: 15px;
    }
  }

  .number, .date, .reference_article {
    font-size: 16px;
    color: #666;
    padding: 12px 15px;
    background: #fff;
    border-radius: 8px;
    margin-bottom: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

    @media (max-width: 768px) {
      font-size: 14px;
      padding: 10px 12px;
    }

    @media (max-width: 480px) {
      font-size: 13px;
      padding: 8px 10px;
    }
  }

  .substance, .matters, .detail {
    width: 100%;
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 12px;
    margin-top: 15px;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

    @media (max-width: 768px) {
      padding: 15px;
      margin-top: 12px;
    }

    @media (max-width: 480px) {
      padding: 12px;
      margin-top: 10px;
    }

    span {
      &:nth-child(1) {
        padding-bottom: 12px;
        color: #7874f1;
        font-weight: 700;
        font-size: 18px;
        border-bottom: 1px solid rgba(120, 116, 241, 0.2);
        margin-bottom: 12px;

        @media (max-width: 768px) {
          font-size: 16px;
          padding-bottom: 10px;
          margin-bottom: 10px;
        }

        @media (max-width: 480px) {
          font-size: 15px;
          padding-bottom: 8px;
          margin-bottom: 8px;
        }
      }

      &:nth-child(2) {
        line-height: 1.6;
        color: #333;
        font-size: 16px;

        @media (max-width: 768px) {
          font-size: 14px;
          line-height: 1.5;
        }

        @media (max-width: 480px) {
          font-size: 13px;
          line-height: 1.4;
        }
      }
    }
  }
`;

const PrecDetail = (): JSX.Element => {
  const [pageId, setPageId] = useState<string>();
  const [prec, setPrec] = useState<any>();
  const { id } = useParams<string>();
  useEffect(() => {
    setPageId(`${id}`);
  }, [id]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPrec(pageId!);
        setPrec(response.data.PrecService);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [pageId]);

  return (
    <Container>
      <div className="name">{prec?.사건명}</div>
      <div className="number">사건번호: {prec?.사건번호}</div>
      <div className="date">선고일자: {prec?.선고일자}</div>
      <div className="reference_article">
        참조조문: {prec?.참조조문?.replace("<br/>", "")?.replace("/", ";")}
      </div>
      <div className="reference_prec">
        참조판례: {prec?.참조판례?.replace("<br/>", "")}
      </div>
      <div className="substance">
        <span>판결요지:</span>{" "}
        <span>{prec?.판결요지?.replace(/<br\/>/g, "")}</span>
      </div>
      <div className="matters">
        <span>판시사항:</span>
        <span>{prec?.판시사항?.replace(/<br\/>/g, "")}</span>
      </div>
      <div className="detail">
        <span>판례내용:</span>
        <span>{prec?.판례내용?.replace(/<br\/>/g, "")}</span>
      </div>
    </Container>
  );
};

export default PrecDetail;
