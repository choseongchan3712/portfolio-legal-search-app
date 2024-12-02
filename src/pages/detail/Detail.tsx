import styled from "styled-components";
import LawWrap from "../../components/LawWrap";
import { useParams } from "react-router-dom";

const Container = styled.div`
  padding-top: 70px;
`;

const Detail = (): JSX.Element => {
  const { id } = useParams();
  console.log(id);
  return (
    <Container>
      <LawWrap id={id!} />
    </Container>
  );
};

export default Detail;
