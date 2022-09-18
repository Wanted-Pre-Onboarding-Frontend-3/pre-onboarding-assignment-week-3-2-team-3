import { useState } from "react";
import CommentForm from "src/components/home/CommentForm";
import CommentList from "src/components/home/CommentList";
import Pagination from "src/components/Pagination";
import {
  Comment,
  useDeleteCommentMutation,
  useGetCommentsQuery,
} from "src/services/comments";
import { INIT_PAGE, INIT_FORM_VALUE, PAGE_LIMIT } from "./utils/constants";

export type CommentFormValue = Partial<Comment>;

export default function App() {
  const [page, setPage] = useState(INIT_PAGE);
  const [formInputs, setFormInputs] =
    useState<CommentFormValue>(INIT_FORM_VALUE);

  const { data } = useGetCommentsQuery({
    _limit: PAGE_LIMIT,
    _page: page.toString(),
  });
  const [deleteComment] = useDeleteCommentMutation();

  const resetPage = () => {
    setPage(() => INIT_PAGE);
  };

  const resetFormValue = () => {
    setFormInputs(() => INIT_FORM_VALUE);
  };

  const handleEditButton = (comment: Comment) => {
    setFormInputs(() => ({ ...comment }));
  };

  const handleDeleteButton = (comment: Comment) => {
    deleteComment({ id: comment.id });
    resetPage();
  };

  const formInputsHandler: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = (e) => {
    setFormInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <CommentList
        comments={data?.comments}
        onDeleteButton={handleDeleteButton}
        onEditButton={handleEditButton}
      />
      <Pagination
        totalCount={data?.totalCount}
        pagePerCount={parseInt(PAGE_LIMIT, 10)}
        page={page}
        onChange={(number) => setPage(number)}
      />
      <CommentForm
        formInputs={formInputs}
        onFormInputs={formInputsHandler}
        resetPage={resetPage}
        resetFormValue={resetFormValue}
      />
    </div>
  );
}
