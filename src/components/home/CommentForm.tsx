import React, { useRef } from "react";
import {
  Comment,
  useAddCommentMutation,
  useUpdateCommentMutation,
} from "src/services/comments";
import { getCurrentISOString } from "src/utils/functions";
import styled from "styled-components";

interface ICommentForm {
  resetPage: () => void;
  formInputs: Comment;
  onFormInputs: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
  resetFormValue: () => void;
}

function CommentForm({ resetPage, onFormInputs, resetFormValue, formInputs }: ICommentForm) {
  const [addComment] = useAddCommentMutation();
  const [updateComment] = useUpdateCommentMutation();

  const handleForm: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const { id, ...newComment } = formInputs;
    const currentISOString = getCurrentISOString();
    
    if (id) {
      updateComment({ id, ...newComment, createdAt: currentISOString });
    }

    if (!id) {
      addComment({ ...newComment, createdAt: currentISOString });
      resetPage();
    }
      resetFormValue();
    }
  };

  return (
    <FormStyle onSubmit={handleForm}>
      <label>프로필 이미지</label>
      <input
        type="text"
        name="profile_url"
        value={formInputs.profile_url}
        onChange={onFormInputs}
        placeholder="https://picsum.photos/id/1/50/50"
        required
      />
      
      <label>작성자</label>
      <input
        type="text"
        name="author"
        placeholder="작성자"
        value={formInputs.author}
        onChange={onFormInputs}
        required
      />

      <label>내용</label>
      <textarea
        name="content"
        placeholder="내용"
        value={formInputs.content}
        onChange={onFormInputs}
        required
      ></textarea>

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
