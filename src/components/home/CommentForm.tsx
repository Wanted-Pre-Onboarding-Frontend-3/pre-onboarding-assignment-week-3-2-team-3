import React from 'react';
import { CommentFormValue } from 'src/App';
import { useAddCommentMutation, useUpdateCommentMutation } from 'src/services/comments';
import styled from 'styled-components';
import { Button } from '../common/common';

interface ICommentForm {
  resetPage: () => void;
  formInputs: CommentFormValue;
  onFormInputs: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  resetFormValue: () => void;
}

function CommentForm({ resetPage, onFormInputs, resetFormValue, formInputs }: ICommentForm) {
  const [addComment] = useAddCommentMutation();
  const [updateComment] = useUpdateCommentMutation();

  const handleForm: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const { author, content, createdAt, id, profile_url } = formInputs;

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

  console.log(formInputs);

  return (
    <FormStyle onSubmit={handleForm}>
      <input
        type="text"
        name="profile_url"
        value={formInputs?.profile_url}
        onChange={onFormInputs}
        placeholder="https://picsum.photos/id/1/50/50"
      />

      <input
        type="text"
        name="author"
        placeholder="작성자"
        value={formInputs?.author}
        onChange={onFormInputs}
        required
      />

      <textarea
        name="content"
        placeholder="내용"
        value={formInputs?.content}
        onChange={onFormInputs}
        required
      ></textarea>

      <input
        type="text"
        name="createdAt"
        placeholder={'2022-09-19'}
        value={formInputs?.createdAt}
        onChange={onFormInputs}
      />

      <Button type="submit">등록</Button>
    </FormStyle>
  );
}

export default CommentForm;

const FormStyle = styled.form`
  padding: 0 10px;
  margin: 50px 0;

  textarea {
    width: 100%;
    height: 50px;
    padding: 5px 1%;
    margin-bottom: 10px;
    box-sizing: border-box;
  }

  input[type='text'] {
    width: 100%;
    padding: 5px 1%;
    margin-bottom: 10px;
    border: 1px solid rgb(133, 133, 133);
    box-sizing: border-box;
  }
`;
