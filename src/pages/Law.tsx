import { Link } from "react-router-dom";
import styled from "styled-components";
import PageTitle from "../components/PageTitle";

const Container = styled.div`
  position: relative;
  z-index: 0;
  width: 100%;
  min-height: 100vh;
  padding: 90px 20px 20px;
  max-width: 1400px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    padding: 85px 15px 15px;
    gap: 15px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    padding: 80px 12px 12px;
    gap: 12px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    padding: 75px 10px 10px;
    gap: 10px;
  }

  .contents {
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    overflow: hidden;
    aspect-ratio: 1.2;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(120, 116, 241, 0.15);
    }

    a {
      text-decoration: none;
      color: #333;
      display: flex;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: 20px;
      font-weight: 600;
      padding: 20px;
      background: linear-gradient(135deg, #fff 0%, #f8f8ff 100%);
      transition: all 0.3s ease;

      &:hover {
        color: #7874f1;
        background: linear-gradient(135deg, #fff 0%, #f0f0ff 100%);
      }

      @media (max-width: 1200px) {
        font-size: 18px;
        padding: 15px;
      }

      @media (max-width: 768px) {
        font-size: 16px;
        padding: 12px;
      }

      @media (max-width: 480px) {
        font-size: 14px;
        padding: 10px;
      }
    }
  }
`;

const Law = (): JSX.Element => {
  return (
    <>
    <PageTitle title="법률"/>
      <Container>
        <div className="contents">
          <Link to="/detail/001444">헌법</Link>
        </div>
        <div className="contents">
          <Link to="/detail/011233">헌법재판소법</Link>
        </div>
        <div className="contents">
          <Link to="/detail/001428">청원법</Link>
        </div>
        <div className="contents">
          <Link to="/detail/001427">상훈법</Link>
        </div>
        <div className="contents">
          <Link to="/detail/011357">개인정보보호법</Link>
        </div>
        <div className="contents">
          <Link to="/detail/014041">행정기본법</Link>
        </div>
        <div className="contents">
          <Link to="/detail/001365">행정대집행법</Link>
        </div>
        <div className="contents">
          <Link to="/detail/001362">행정절차법</Link>
        </div>
        <div className="contents">
          <Link to="/detail/001706">민법</Link>
        </div>
        <div className="contents">
          <Link to="/detail/001700">민사소송법</Link>
        </div>
        <div className="contents">
          <Link to="/detail/001697">부동산등기법</Link>
        </div>
        <div className="contents">
          <Link to="/detail/001702">상법</Link>
        </div>
        <div className="contents">
          <Link to="/detail/001228">수표법</Link>
        </div>
        <div className="contents">
          <Link to="/detail/001246">신탁법</Link>
        </div>
        <div className="contents">
          <Link to="/detail/001230">어음법</Link>
        </div>
        <div className="contents">
          <Link to="/detail/001218">행정소송법</Link>
        </div>
        <div className="contents">
          <Link to="/detail/001692">형법</Link>
        </div>
        <div className="contents">
          <Link to="/detail/001671">형사소송법</Link>
        </div>
        <div className="contents">
          <Link to="/detail/001677">국가보안법</Link>
        </div>
        <div className="contents">
          <Link to="/detail/001662">소년법</Link>
        </div>
        <div className="contents">
          <Link to="/detail/001114">형사소송비용 등에 관한 법률</Link>
        </div>
        <div className="contents">
          <Link to="/detail/001129">형의 실효 등에 관한 법률</Link>
        </div>
        <div className="contents">
          <Link to="/detail/001674">경범죄 처벌법</Link>
        </div>
        <div className="contents">
          <Link to={"/detail/011997"}>아동학대범죄의 처벌 등에 관한 법률</Link>
        </div>
        <div className="contents">
          <Link to={"/detail/001586"}>국세기본법</Link>
        </div>
        <div className="contents">
          <Link to={"/detail/001556"}>관세법</Link>
        </div>
        <div className="contents">
          <Link to={"/detail/001532"}>보험업법</Link>
        </div>
        <div className="contents">
          <Link to={"/detail/001871"}>디자인보호법</Link>
        </div>
        <div className="contents">
          <Link to={"/detail/001870"}>상표법</Link>
        </div>
        <div className="contents">
          <Link to={"/detail/001455"}>특허법</Link>
        </div>
        <div className="contents">
          <Link to={"/detail/000006"}>여권법</Link>
        </div>
        <div className="contents">
          <Link to={"/search"}>기타법률</Link>
        </div>
      </Container>
    </>
  );
};

export default Law;
