import React, { useRef } from "react";
import {
  Comment,
  useAddCommentMutation,
  useUpdateCommentMutation,
} from "src/services/comments";
import styled from "styled-components";

interface ICommentForm {
  resetPage: () => void;
  formInputs: Comment;
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
    const { id, ...newComment } = formInputs;
    const nowISOString = new Date().toISOString().slice(0, 10);
    if (id) {
      updateComment({ id, ...newComment, createdAt: nowISOString });
    } else {
      addComment({ ...newComment, createdAt: nowISOString });
      resetPage();
    }
    resetFormValue();
  };

  return (
    <FormStyle>
      <form onSubmit={handleForm} ref={formRef}>
        <input
          type="url"
          name="profile_url"
          value={formInputs.profile_url}
          onChange={onFormInputs}
          placeholder="https://picsum.photos/id/1/50/50"
          required
        />
        <br />
        <input
          type="text"
          name="author"
          placeholder="작성자"
          value={formInputs.author}
          onChange={onFormInputs}
          required
        />
        <br />
        <textarea
          name="content"
          placeholder="내용"
          value={formInputs.content}
          onChange={onFormInputs}
          required
        ></textarea>
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
  & > form > input {
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
