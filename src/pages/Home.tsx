import CommentListContainer from "src/components/home/CommentListContainer";
import FormContainer from "src/components/home/FormContainer";
import PageListContainer from "src/components/home/PageListContainer";

export default function Home() {
  return (
    <div>
      <CommentListContainer />
      <PageListContainer />
      <FormContainer />
    </div>
  );
}
