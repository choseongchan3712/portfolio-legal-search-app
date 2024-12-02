import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  z-index: 0;
  width: 100%;
  height: 100vh;
  padding: 80px 10px 10px 10px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 10px;
  .contents {
    border: 1px solid #000;
    border-radius: 20px;
    a{
      text-decoration: none;
      color: #000;
      display: flex;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: 25px;
      font-weight: 900;
    }
  }
`;

const Law = (): JSX.Element => {
  return (
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
  );
};

export default Law;
