import { TablePagination } from "@mui/material";
import { observer } from "mobx-react";
import { tagsStore } from "../../stores/tagStore";

type PaginationProps = {
  page: number;
  tagsPerPage: number;
  disabled?: boolean;
  handleChangePage: (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => void;
};

const Pagination = observer(function Pagination({
  page,
  tagsPerPage,
  disabled = false,
  handleChangePage,
}: PaginationProps) {
  return (
    <TablePagination
      component="div"
      count={-1}
      page={page - 1}
      onPageChange={handleChangePage}
      rowsPerPage={tagsPerPage}
      rowsPerPageOptions={[]}
      disabled={tagsStore.loading || disabled}
      slotProps={{
        actions: {
          nextButton: {
            disabled: !tagsStore.tags.length || disabled,
          },
        },
      }}
    />
  );
});

export default Pagination;
