# ZUM_FrontEnd_Homework

## 기술 스택
- Front-end
  - vanilla javascript
  - webpack
  - babel
- back-end
  - node.js
  - express.js

## 필수 요구사항
### Front-end
- **프레임워크 및 라이브러리 사용 금지**
- ~~본인에게 편한 번들러(webpack) 사용하여 개발환경 구축~~ **(완료)**
- 컴포넌트 기반 설계
  - Core를 만들어서 사용하는 형태
  - 상태(State) 기반으로 렌더링하는 형태로 작성
  - 설계방식(객체지향 or 함수지향) 자유
- SPA 기반
  - 페이지 이동은 Router 만들어서 구현
- 전역 상태관리를 위한 Store **직접** 만들어서 사용하기 (Vuex라던가 Redu라던가...)
- 이벤트 관리 최적화 (이벤트 위임 사용하기!)
- XHR 관련 api요청중/실패 등에 대한 UI처리
- 즐겨찾기 데이터는 localstorage에 저장
- 허브줌 참고하여 UI 작성
### Back-end
- 제공된 JSON 토대로 API End-point 만들기
- 상세 페이지는 **원본 URL을 스크래핑**하여 사용 **(이에 필요한 라이브러리는 자유롭게 선택하여 사용)**
- 이미 조회한 데이터는 캐싱을 통해 관리 **(최대한 간단하게 로컬 캐시로 구현할 것)**

## 선택적 요구사항
