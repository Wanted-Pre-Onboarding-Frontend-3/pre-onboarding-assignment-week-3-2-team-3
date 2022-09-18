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
  const [addComment] = useAddCommentMutation();
  const [updateComment] = useUpdateCommentMutation();

  const handleForm: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const { author, content, createdAt, id, profile_url } = formInputs;

    if (!author) alert("이름을 입력해주세요");
    if (!content) alert("내용을 입력해주세요");
    if (!createdAt) alert("날짜을 입력해주세요");
    if (!profile_url) alert("프로필 주소를 입력해주세요");

    if (!id) {
      addComment({
        author,
        content,
        createdAt,
        id: Math.ceil(Math.random() * 100000),
        profile_url,
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
      <form onSubmit={handleForm}>
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
          placeholder="https://picsum.photos/id/1/50/50"
          required
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
          placeholder="2020-05-30"
          value={formInputs?.createdAt}
          onChange={onFormInputs}
          required
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
