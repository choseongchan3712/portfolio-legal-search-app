import { getCivilLaw } from "../API/api";
import LawWrap from "./LawWrap";

const CivilLaw = (): JSX.Element => {
  return (
    <>
      <LawWrap getLaw={getCivilLaw} />
    </>
  );
};

export default CivilLaw;
