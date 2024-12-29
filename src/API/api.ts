import axios from "axios";

// 프록시 서버의 기본 URL 설정
const BASE_URL = "https://law-server-fwx3.onrender.com/api";

// 법률 관련 API
export const getLawId = (id: string) =>
  axios.get(`${BASE_URL}/law/${id}`);

export const getLaw = (query: string) =>
  axios.get(`${BASE_URL}/law/search`, {
    params: { query }
  });

// 판례 관련 API
export const getPrecedent = (page: string) =>
  axios.get(`${BASE_URL}/precedent/search`, {
    params: { page }
  });

export const getSearchprec = (query: string) =>
  axios.get(`${BASE_URL}/precedent/search`, {
    params: { query }
  });

export const getPrec = (id: string) =>
  axios.get(`${BASE_URL}/precedent/${id}`);

// 법령해석 관련 API
export const getInter = (page: string) =>
  axios.get(`${BASE_URL}/interpretation/search`, {
    params: { page }
  });

export const getInterprec = (query: string) =>
  axios.get(`${BASE_URL}/interpretation/search`, {
    params: { query }
  });

export const getInterDetail = (id: string) =>
  axios.get(`${BASE_URL}/interpretation/${id}`);