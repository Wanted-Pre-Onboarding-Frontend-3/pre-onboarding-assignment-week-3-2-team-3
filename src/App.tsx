import CommentForm from "src/components/home/CommentForm";
import CommentList from "src/components/home/CommentList";
import Pagination from "src/components/Pagination";
import {
  Comment,
  useDeleteCommentMutation,
  useGetCommentsQuery,
} from "src/services/comments";
import { INIT_PAGE, INIT_FORM_VALUE, PAGE_LIMIT } from "./utils/constants";
import { useStateWithReset } from "./utils/hooks";

export default function App() {
  const [page, setPage] = useState(INIT_PAGE);
  const [formInputs, setFormInputs] = useState<Comment>(INIT_FORM_VALUE);

  const { data } = useGetCommentsQuery({
    _limit: PAGE_LIMIT,
    _page: page.toString(),
  });
  const [deleteComment] = useDeleteCommentMutation();

  const handleEiditButton = (comment: Comment) => {
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
        onEditButton={handleEiditButton}
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
        resetFormValue={resetFormInputs}
      />
    </div>
  );
}
