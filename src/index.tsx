import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyled } from './GlobalStyled';
import CivilLaw from './law_pages/CivilLaw';
// import Constitution from './law_pages/Constitution';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyled />
    {/* <Constitution /> */}
    <CivilLaw />
  </React.StrictMode>
);

