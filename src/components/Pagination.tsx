import styled from "styled-components";
import { Button } from "./common/common";

interface IPagination {
  totalCount?: number;
  pagePerCount: number;
  page: number;
  onChange: (number: number) => void;
}

export default function Pagination({
  totalCount = 0,
  pagePerCount,
  page,
  onChange,
  ...props
}: IPagination) {
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

  return (
    <PaginationList {...props}>
      <ButtonWrapper onClick={handlePrevButton} disabled={page === 1}>
        &lt;
      </ButtonWrapper>
      {paginationList.map((_, i) => {
        const pageNumber = i + 1;

        return (
          <ButtonWrapper
            key={pageNumber}
            onClick={handlePageButton(pageNumber)}
            active={pageNumber === page}
          >
            {pageNumber}
          </ButtonWrapper>
        );
      })}
      <ButtonWrapper
        onClick={handleNextButton}
        disabled={page === paginationList.length}
      >
        &gt;
      </ButtonWrapper>
    </PaginationList>
  );
}

const PaginationList = styled.ol`
  display: flex;
  gap: 2px;
`;

const ButtonWrapper = styled(Button)`
  border: 1px solid black;
  background-color: transparent;
  border-radius: 8px;
  min-width: 24px;
  padding: 4px;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  border-width: ${(props) => (props.active ? "2px" : "1px")};
`;
