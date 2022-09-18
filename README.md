# 원티드 프리온보딩 3주차 과제

- 원티드 프리온보딩 프론트엔드 코스 6기 3-2 과제(스파크펫)

- 과제 목표 : 댓글 목록 CRUD 및 페이지네이션

- 수행 기간 : 2022/09/16 ~ 2022/09/19


# 배포 링크

- [링크](https://pre-onboarding-assignment-week-3-2-team-3-6xguxedu6-castlejun.vercel.app/)

<br><br>

# 목차

- [원티드 프리온보딩 3주차 과제](#원티드-프리온보딩-3주차-과제)
- [목차](#목차)
- [3팀 소개 및 역할](#3팀-소개-및-역할)
- [기술 스택](#기술-스택)
- [실행방법](#실행방법)
- [프로젝트 구조](#프로젝트-구조)
- [과제 요건 및 구현 내용](#과제-요건-및-구현-내용)
 * [과제 요건](#과제-요건)
 * [데모 영상](#데모-영상)
 * [기능별 코멘트](#기능별-코멘트)
- [컨벤션 링크](#컨벤션-링크)

<br><br>

# 3팀 소개 및 역할

| 이름   | 역할                                     |
| ------ | ---------------------------------------- |
| 김리후 | 개별적 과제 구현 -> 리뷰를 통한 best practice 도출 / 리팩토링 |
| 이경준 |                         |
| 이혜성 | **팀장** /  |
| 문선화 | 팀원                         |
| 홍성준 |                               |

<br><br>

# 기술 스택

- TypeScript, React, Redux, Redux-Logger, Redux-Devtools, Redux-toolkit

- Styled-components

- Json-server

<br><br>

# 실행방법

1. Install

```bash
 $ npm install
```
<br>

2. start the api

```
 $ npm run api
```
<br>

3. start the project

```
 $ npm start
```

<br><br>

# 프로젝트 구조

<details>

<summary>프로젝트 구조</summary>

```
📦src
 ┣ 📂components
 ┃ ┣ 📂common
 ┃ ┃ ┗ 📜common.ts
 ┃ ┣ 📂home
 ┃ ┃ ┣ 📜CommentForm.tsx
 ┃ ┃ ┗ 📜CommentList.tsx
 ┃ ┗ 📜Pagination.tsx
 ┣ 📂services
 ┃ ┗ 📜comments.ts
 ┣ 📂store
 ┃ ┗ 📜store.ts
 ┣ 📂utils
 ┃ ┣ 📜constants.ts
 ┃ ┣ 📜functions.ts
 ┃ ┣ 📜hooks.ts
 ┃ ┗ 📜typeUtils.ts
 ┣ 📜App.test.tsx
 ┣ 📜App.tsx
 ┣ 📜index.tsx
 ┣ 📜react-app-env.d.ts
 ┣ 📜reportWebVitals.ts
 ┗ 📜setupTests.ts
```

</details>

<br><br>

# 과제 요건 및 구현 내용

## 과제 요건


```
- 댓글 CRUD
- 페이지네이션
- 댓글 작성, 수정, 삭제 후 동작
  - 댓글 작성하고 난 뒤: 다른 페이지에 위치하고 있었더라도 1페이지로 이동, 입력 폼 초기화
  - 댓글 수정하고 난 뒤: 현재 보고있는 페이지 유지, 입력 폼 초기화
  - 삭제하고 난 뒤: 1페이지로 이동

- Redux logger, Redux-Devtools 설정
- Redux를 이용한 비동기 처리
```

<br>

## 데모 영상

### [댓글 등록]
<img src="https://user-images.githubusercontent.com/81549337/190916329-6ad8a609-ff1e-4f92-b876-38f908604c13.gif" width="800px" />

### [댓글 수정]
<img src="https://user-images.githubusercontent.com/105709187/190916023-a2909218-384d-4a6d-8f91-48095551d18c.gif" width="800px" />

### [댓글 삭제]
<img src="https://user-images.githubusercontent.com/105709187/190916033-e01df592-76f1-4136-8397-9dc15c815d9f.gif" width="800px" />

### [페이지 이동]
<img src="https://user-images.githubusercontent.com/81549337/190916509-d38997af-6cd9-461c-9991-d95b9e10d6c6.gif" width="800px" />

<br><br>

## 기능별 코멘트

- 댓글 CRUD

  - 구현내용
    - 댓글 등록 :
    - 댓글 수정 : api에 해당 댓글의 id를 넘겨주고 정보를 받아 form input의 value로 할당. 수정 등록시 변경된 내용을 업데이트.
    - 댓글 삭제 : 
  
  - 논의내용
    - **댓글 등록시** : InitialState로 프로필 이미지, 등록일을 지정하여 사용자가 별도의 타이핑을 하지 않도록 하는 방안 <br>
      -> ❗ 초기값으로 설정할 경우, 자정이 넘어갈 경우 정확한 날짜 표기에 어려움이 생기는 이슈로 미적용.
     
    - **댓글 등록, 수정시** : 수정 또는 등록을 state 값으로 컨트롤하여 해당되는 상태의 api 호출하는 방안 <br>
      -> ❗ 별도의 state 지정 없이 **id의 유무**로 댓글 등록, 수정을 구분.

<br>
- 페이지네이션

  - 구현내용
  
  - 논의내용

<br>
- Redux logger, Redux-Devtools 설정
  
  - 구현내용
  
  - 논의내용

<br>
- Redux를 이용한 비동기 처리
  
  - 구현내용
  
  - 논의내용
    - Redux thunk, saga 등 어떠한 미들웨어를 사용하여 비동기 처리를 할 것인지 논의 -> ❗ **Redux Toolkit Query** 사용

<br><br>

# 컨벤션 링크

[링크](https://sunhwaday.notion.site/c0ff2ba4723c42a289ab9021e8aa95ba)
