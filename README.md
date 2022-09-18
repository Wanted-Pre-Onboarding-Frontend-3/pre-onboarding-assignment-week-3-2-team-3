# 원티드 프리온보딩 3주차 과제

- 원티드 프리온보딩 프론트엔드 코스 6기 3-2 과제(스파크펫)

- 과제 목표 : 댓글 목록 CRUD 및 페이지네이션

- 수행 기간 : 2022/09/16 ~ 2022/09/19

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
| 김리후 |                         |
| 이경준 |                         |
| 이혜성 | **팀장** /  |
| 문선화 |                          |
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

<br><br>

## 기능별 코멘트

- 댓글 CRUD

  - 구현내용
  
  - 논의내용

- 페이지네이션

  - 구현내용
  
  - 논의내용

- Redux logger, Redux-Devtools 설정
  
  - 구현내용
  
  - 논의내용

- Redux를 이용한 비동기 처리
  
  - 구현내용
  
  - 논의내용

<br><br>

# 컨벤션 링크

[링크](https://sunhwaday.notion.site/c0ff2ba4723c42a289ab9021e8aa95ba)
