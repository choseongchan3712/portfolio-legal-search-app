import { useEffect, useState } from "react";
import styled from "styled-components";
import { getLawId } from "../API/api";

const Container = styled.div`
  width: 100%;
  position: relative;
  z-index: 0;
  .law_name {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
    font-size: 30px;
    font-weight: 900;
    color: #2b80e2;
  }

  .chapter {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
    color: #2b80e2;
    font-size: 25px;
    font-weight: 900;
  }
  .verse {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
    color: #2b80e2;
    font-size: 25px;
    font-weight: 900;
  }
  .section {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
    color: #2b80e2;
    font-size: 25px;
    font-weight: 900;
  }
  .article {
    padding: 15px;
    color: #2b80e2;
    font-size: 20px;
    font-weight: 900;
  }
  .article_detail {
    padding: 0 0 10px 15px;
    font-size: 16px;
    font-weight: 700;
  }
  .paragraph {
    padding: 0 0 10px 15px;
    font-size: 16px;
    font-weight: 700;
  }
  .number {
    padding: 0 0 10px 15px;
    font-size: 16px;
    font-weight: 700;
  }
`;

interface IdProps {
  id :string;
}

const LawWrap = ({id}:IdProps): JSX.Element => {
  const [law, setlaw] = useState<any>();

  useEffect(() => {
    (async () => {
      try {
        const response = await getLawId(id);
        setlaw(response.data.법령);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const lawName: string = law?.기본정보?.법령명_한글;

  const needArticle = law?.조문?.조문단위;

  const newLawArr = needArticle?.map(({ 조문내용, 항 }: any) => ({
    장: /제\d+장/.test(조문내용) ? `${조문내용}` : null,
    절: /제\d+절/.test(조문내용) ? `${조문내용}` : null,
    관: /제\d+관/.test(조문내용) ? `${조문내용}` : null,
    조: /제\d+조/.test(조문내용) ? `${조문내용}`.match(/제\d+조/) : null,
    조문: /제\d+조/.test(조문내용)
      ? `${조문내용}`.replace(/제\d+조/, "").trim()
      : null,
    항:
      Array.isArray(항) && 항
        ? 항.map((data: any) => ({
            항내용: `${data.항내용}`,
            호: data.호 ?? `${data.호}`,
          }))
        : null,
    호: 항 && 항.호 ? 항.호.map((data: any) => `${data.호내용}`) || null : null,
  }));

  return (
    <Container>
      <div className="law_name">{lawName}</div>
      <div className="detail_wrap">
        {newLawArr?.map((data: any, index: number) => (
          <div key={index}>
            {data.장 ? <div className="chapter">{data.장}</div> : null}
            {data.절 ? <div className="verse">{data.절}</div> : null}
            {data.관 ? <div className="section">{data.관}</div> : null}
            {data.조 ? <div className="article">{data.조[0]}</div> : null}
            {data.조문 ? (
              <div className="article_detail">{data.조문}</div>
            ) : null}
            {data.항
              ? data.항.map((data: any, index: number) => (
                  <div key={index}>
                    <div className="paragraph">{data.항내용}</div>
                    {data.호 && Array.isArray(data.호)
                      ? data.호.map((data: any, index: number) => (
                          <div key={index} className="number">
                            {data.호내용}
                          </div>
                        ))
                      : null}
                  </div>
                ))
              : null}
            {data.호
              ? data.호.map((data: any, index: number) => (
                  <div className="number" key={index}>
                    {data}
                  </div>
                ))
              : null}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default LawWrap;
