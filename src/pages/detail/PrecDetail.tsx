import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPrec } from "../../API/api";
import styled from "styled-components";

const Container = styled.div`
  padding: 80px 10px 10px 10px;
  width: 100%;
  div {
    padding: 10px;
  }
  .name {
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    font-size: 20px;
    font-weight: 900;
    color: #7874f1;
  }
  .substance{
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid #000;
    span {
      &:nth-child(1) {
        padding-bottom: 10px;
        color: #7874f1;
        font-weight: 900;
      }
      &:nth-child(2) {
        line-height: 25px;
      }
    }
  }

  .matters {
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid #000;
    span {
      &:nth-child(1) {
        padding-bottom: 10px;
        color: #7874f1;
        font-weight: 900;
      }
      &:nth-child(2) {
        line-height: 25px;
      }
    }
  }
  .detail {
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid #000;
    span {
      &:nth-child(1) {
        padding-bottom: 10px;
        color: #7874f1;
        font-weight: 900;
      }
      &:nth-child(2) {
        line-height: 25px;
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

  console.log(prec);

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
