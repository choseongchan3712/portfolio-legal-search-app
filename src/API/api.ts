import axios from "axios";

const lawApi = axios.create({
  baseURL:"http://www.law.go.kr/DRF/lawService.do?target=law",
  params: {
    OC: "choseongchan3712",
    type: "JSON",
  },
});

const constitutionID:string = "001444"; //!헌법ID

const civilLawID:string = "001706"; //! 민법ID

export const getConstitution = () => lawApi.get("", {
  params: {
    ID: constitutionID,
  },
});

export const getCivilLaw = () => lawApi.get("", {
  params: {
    ID: civilLawID,
  },
});