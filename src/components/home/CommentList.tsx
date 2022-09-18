import { Comment } from 'src/services/comments';
import styled from 'styled-components';
import { Button, Flex } from '../common/common';

interface ICommentList {
  comments?: Comment[];
  onEditButton: (comment: Comment) => void;
  onDeleteButton: (comment: Comment) => void;
}

function CommentList({ comments, onDeleteButton, onEditButton }: ICommentList) {
  const handleDeleteButton = (comment: Comment) => () => {
    onDeleteButton(comment);
  };

  const handleEditButton = (comment: Comment) => () => {
    onEditButton(comment);
  };

  return (
    <>
      {comments?.map((comment, key) => (
        <CommentWrapper key={key}>
          <img src={comment.profile_url} alt="" />

          {comment.author}

          <CreatedAt>{comment.createdAt}</CreatedAt>

          <Section>
            <Content>{comment.content}</Content>

            <Flex gap={8}>
              <Button onClick={handleEditButton(comment)}>수정</Button>
              <Button onClick={handleDeleteButton(comment)}>삭제</Button>
            </Flex>
          </Section>

          <hr />
        </CommentWrapper>
      ))}
    </>
  );
}

export default CommentList;

const CommentWrapper = styled.div`
  padding: 7px 10px;
  text-align: left;

  & > img {
    vertical-align: middle;
    margin-right: 10px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`;

const CreatedAt = styled.div`
  float: right;
  vertical-align: middle;
  font-size: 0.9em;
  padding-right: 0.6em;
`;

const Content = styled.div`
  margin: 16px 0 20px 6px;
`;

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
