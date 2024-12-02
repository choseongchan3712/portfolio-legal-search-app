import axios from "axios";

const lawApi = axios.create({
  baseURL: "http://www.law.go.kr/DRF/lawService.do?target=law",
  params: {
    OC: "choseongchan3712",
    type: "JSON",
  },
});

export const getLawId = (id: string) =>
  lawApi.get("", {
    params: {
      ID: id,
    },
  });

const precedentApi = axios.create({
  baseURL: "http://www.law.go.kr/DRF/lawSearch.do?target=prec",
  params: {
    OC: "choseongchan3712",
    type: "JSON",
    org: "400201",
    display: "100",
  },
});

export const getPrecedent = (page: string) =>
  precedentApi.get("", {
    params: {
      page: page,
    },
  });

const searchPrecApi = axios.create({
  baseURL: "http://www.law.go.kr/DRF/lawService.do?target=prec",
  params: {
    OC: "choseongchan3712",
    type: "JSON",
    org: "400201",
    display: "100",
  },
});

export const getPrec = (id:string) => searchPrecApi.get("", {
  params:{
    ID: `${id}`,
  },
});

