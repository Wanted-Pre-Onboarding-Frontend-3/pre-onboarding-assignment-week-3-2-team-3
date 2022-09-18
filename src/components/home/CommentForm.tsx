import React, { useRef } from "react";
import { CommentFormValue } from "src/App";
import {
  useAddCommentMutation,
  useUpdateCommentMutation,
} from "src/services/comments";
import styled from "styled-components";

interface ICommentForm {
  resetPage: () => void;
  formInputs: CommentFormValue;
  onFormInputs: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
  resetFormValue: () => void;
}

function CommentForm({
  resetPage,
  onFormInputs,
  resetFormValue,
  formInputs,
}: ICommentForm) {
  const formRef = useRef<HTMLFormElement>(null);
  const [addComment] = useAddCommentMutation();
  const [updateComment] = useUpdateCommentMutation();

  const handleForm: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const { author, content, createdAt, id, profile_url } = formInputs;
    
    
    if (!author) alert("이름을 입력해주세요");
    if (!content) alert("내용을 입력해주세요");

    const randomNum = Math.floor(Math.random() * 100);
    const date = new Date().toLocaleDateString().replaceAll('. ', '-').slice(0, -1);
    const profileImg = `https://picsum.photos/id/${randomNum}/50/50`

    if (!id) {
      addComment({
        author,
        content,
        createdAt : date,
        id: Math.ceil(Math.random() * 100000),
        profile_url: profileImg,
      });
      resetPage();
    }
    if (id) {
      updateComment({
        author,
        content,
        createdAt,
        id,
        profile_url,
      });
      resetFormValue();
    }
  };

  return (
    <FormStyle>
      <form onSubmit={handleForm} ref={formRef}>
        <input
          type="hidden"
          name="id"
          value={formInputs?.id}
          onChange={() => {}}
        />
        <input
          type="text"
          name="profile_url"
          value={formInputs?.profile_url}
          onChange={onFormInputs}
          placeholder="프로필 이미지는 랜덤으로 등록됩니다."
          disabled={true}
        />
        <br />
        <input
          type="text"
          name="author"
          placeholder="작성자"
          value={formInputs?.author}
          onChange={onFormInputs}
        />
        <br />
        <textarea
          name="content"
          placeholder="내용"
          value={formInputs?.content}
          onChange={onFormInputs}
          required
        ></textarea>
        <br />
        <input
          type="text"
          name="createdAt"
          placeholder="2022-09-18"
          value={formInputs?.createdAt}
          onChange={onFormInputs}
          disabled={true}
        />
        <br />
        <button type="submit">등록</button>
      </form>
    </FormStyle>
  );
}

export default CommentForm;

const FormStyle = styled.div`
  & > form {
    padding: 0 10px;
    margin-bottom: 50px;
  }
  & > form > textarea {
    padding: 5px 1%;
    width: 98%;
    height: 50px;
  }
  & > form > input[type="text"] {
    padding: 5px 1%;
    width: 98%;
    margin-bottom: 10px;
  }
  & > form > button {
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;
