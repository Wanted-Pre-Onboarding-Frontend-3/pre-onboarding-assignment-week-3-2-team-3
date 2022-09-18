import styled from 'styled-components';
import { Button } from './common/common';

interface IPagination {
  totalCount?: number;
  pagePerCount: number;
  page: number;
  onChange: (number: number) => void;
}

export default function Pagination({ totalCount = 0, pagePerCount, page, onChange, ...props }: IPagination) {
  const pageLength = Math.ceil(totalCount / pagePerCount);
  const paginationList = [...new Array(pageLength)];

  const handlePrevButton = () => {
    onChange(page - 1);
  };

  const handleNextButton = () => {
    onChange(page + 1);
  };

  const handlePageButton = (page: number) => () => {
    onChange(page);
  };

  const renderPaginationList = () => {
    return (
      <>
        {paginationList.map((_, i) => {
          const pageNumber = i + 1;

          return (
            <ButtonWrapper key={pageNumber} onClick={handlePageButton(pageNumber)} active={pageNumber === page}>
              {pageNumber}
            </ButtonWrapper>
          );
        })}
      </>
    );
  };

  return (
    <PaginationList {...props}>
      <ButtonWrapper onClick={handlePrevButton} disabled={page === 1}>
        &lt;
      </ButtonWrapper>

      {renderPaginationList()}

      <ButtonWrapper onClick={handleNextButton} disabled={page === paginationList.length}>
        &gt;
      </ButtonWrapper>
    </PaginationList>
  );
}

const PaginationList = styled.ol`
  display: flex;
  gap: 4px;
  user-select: none;
  justify-content: center;
`;

const ButtonWrapper = styled(Button)`
  border: 1px solid black;
  border-radius: 4px;
  min-width: 24px;
  padding: 4px;
  background-color: ${({ active }) => (active ? 'gray' : 'transparent')};
  color: ${({ active }) => (active ? 'white' : 'black')};
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
`;
