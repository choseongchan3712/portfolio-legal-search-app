# 1. 설치항목

- [X] npm i axios
- [X] npm i styled-components
- [X] npm i styled-reset
- [X] npm i react-router-dom
- [X] npm install @mui/material @emotion/react @emotion/styled
- [X] npm i --save @fortawesome/fontawesome-svg-core
- [X] npm i --save @fortawesome/free-solid-svg-icons
- [X] npm i --save @fortawesome/free-regular-svg-icons
- [X] npm i --save @fortawesome/free-brands-svg-icons
- [X] npm i --save @fortawesome/react-fontawesome@latest
- [X] npm i react-hook-form

# 2. 제목
## 법령DB

# 3. 목적
### 현재 대한민국에서 어떠한 명확한 법령, 판례 또는 해석례를 찾아볼 수 있는 방법은 많이 제한적이다.<br />유일하게 법령정보들이 모여있는 장소는 "국가법령정보센터"사이트이지만, 이마저도 가독성이 매우 낮다.<br />본 앱은 이러한 불편사항을 완화하고자 시작되었다.

# 4. 사용법<br />
## (1) 법령정보:
- 본 어플에는 총 4가지 메뉴가 있는데, 그 첫번째가 바로 법령정보이다.<br />법령 정보에는 가독성이 떨어지게 모든 법이 있지 않고, 사람들이 많이 찾아보는 법률들로 구성이 되어있으며,<br />각 법률들을 클릭하면 그 법률의 각 조항들을 볼 수 있다.
## (2) 판례정보:
- 본 어플의 두번째 메뉴는 판례정보이다. 판례정보에는, 모든 법원의 판례가 담겨 있는게 아니라,<br />사실상 가장 많이 찾게 되는 대법원 판례들이 순서대로 나열되어 있다.
## (3) 해석례:
- 본 어플의 세번째 메뉴는 해석례이다. 모든 해석례가 나열이 되어있으며, 안건번호도 같이 나열되어 있다.
## (4) 조회하기:
- 본 어플의 마지막 메뉴는 조회이다. 검색창에 본인이 원하는 키워드를 입력하면 그와 관련있는 법률, 판례, 해석례가 같이 나온다.

# 5. 스텍
### JavaScript, TypeScript, React, Node.js, Git, GitHub, figma

# 6. 느낀점
- (1) 이번 프로젝트에서는 디자인에 시간을 많이 두기 보다는 로직구성에 시간을 많이 투자했어야 했다. 그래서 디자인 부분은 MUI(React UI tools)를 사용하여 콤포넌트를 많이 구성하였는데, 생각보다 성능이 매우 강력했다. 여러가지 툴들을 활용해서 앱을 개발하는것도 개발자로써의 하나의 능력인거 같다.
- (2) 대부분 API는 프론트엔드 개발자의 입맛대로 구성되어있지 않다. 많은 API를 활용한다면, 그것들을 내 입맛대로 활용할수 있는 능력이 많이 필요한것 같다.

# 7. 어려웠던 점
- (1) 이번 프로젝트는 국가법령정보 공공API를 사용해서 만들었다. 사용한 API가 등록부터 매우 불 친절했으며, 반환 받는 값도 도저히 바로 사용할 수 없을 정도로 매우 '날것' 이었다.<br />해결방법: 이를 해결하기 위해서 받아온 값들을 내가 사용할 수 있게 새로운 배열을 구축해야했다. 그 과정에서 정말 많은 함수들과 정규식을 서칭해냈고, 기록을 해두었다. (test, match, replace, trim)
- (2) 아직 디자인적 부분에서는 많이 부족한것 같다. 뭔가 만들어진 디자인을 보고있으면, 눈에 잘 안들어왔다.<br />해결방법: 리액트에서는 사용할 수 있는 디자인 툴이 생각보다 많았다. 이번에는 MUI 디자인 출을 활용해서 만들었다.

# 8. 팁
- (1) 법령 API: 국가법령정보 공동활용
- (2) 유용한 리액트 디자인 툴: MUI
- (3) ip 찾기: https://law-server-fwx3.onrender.com/ip