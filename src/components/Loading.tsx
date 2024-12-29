import { RingLoader } from "react-spinners";
import styled from "styled-components";
const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Loading = () => {
  return (
    <Container>
      <RingLoader color="#7874f1" size={100} />
    </Container>
  );
};

export default Loading;
