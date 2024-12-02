import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getInterDetail } from "../../API/api";

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
    line-height: 25px;
    text-align: center;
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

  .reason {
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

  .response {
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

const InterDetail = (): JSX.Element => {
  const [pageId, setPageId] = useState<string>();
  const [inter, setInter] = useState<any>();
  const { id } = useParams<string>();
  useEffect(() => {
    setPageId(`${id}`);
  }, [id]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getInterDetail(pageId!);
        setInter(response.data.ExpcService);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [pageId]);


  return (
    <Container>
      <div className="name">{inter?.안건명}</div>
      <div className="number">안건번호: {inter?.안건번호}</div>
      <div className="date">해석일자: {inter?.해석일자}</div>
      <div className="substance">
        <span>질의요지:</span>
        <span>{inter?.질의요지?.replace(/<br\/>/g, "")}</span>
      </div>
      <div className="reason">
        <span>이유</span>
        <span>{inter?.이유?.replace(/<br\/>/g, "")}</span>
      </div>
      <div className="response">
        <span>회답</span>
        <span>{inter?.회답?.replace(/<br\/>/g, "")}</span>
      </div>
    </Container>
  );
};

export default InterDetail;
