import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  CircularProgress,
  Typography,
} from "@mui/material";

import { tagsStore } from "../../stores/tagStore";
import { observer } from "mobx-react";
import Header from "../Header/Header";
import FitlerBar from "../FilterBar/FilterBar";
import { HeadCell } from "../../types/types";

const TagTable = observer(function TagTable() {
  const headCells: HeadCell[] = [
    { id: "name", numeric: false, label: "Tag Name" },
    { id: "popular", numeric: true, label: "Count" },
  ];

  return (
    <TableContainer sx={{ maxHeight: "500px", minHeight: "500px" }}>
      <Header title={"Stack Tags"} />
      <FitlerBar />
      {tagsStore.loading ? (
        <CircularProgress
          sx={{
            display: "block",
            margin: "auto",
            mt: 10,
          }}
        />
      ) : tagsStore.tags.length > 0 && !tagsStore.alertMessage ? (
        <Table stickyHeader aria-label="table">
          <TableHead>
            <TableRow>
              {headCells.map((headCell) => (
                <TableCell
                  key={headCell.id}
                  align={headCell.numeric ? "right" : "left"}
                  sortDirection={
                    tagsStore.orderBy === headCell.id ? tagsStore.order : false
                  }
                >
                  <TableSortLabel
                    active={tagsStore.orderBy === headCell.id}
                    direction={
                      tagsStore.orderBy === headCell.id
                        ? tagsStore.order
                        : "asc"
                    }
                    onClick={() => {
                      const isAsc =
                        tagsStore.orderBy === headCell.id &&
                        tagsStore.order === "asc";
                      tagsStore.setOrder(isAsc ? "desc" : "asc");
                      tagsStore.setOrderBy(headCell.id);
                    }}
                  >
                    {headCell.label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tagsStore.tags.map((tag) => (
              <TableRow
                key={tag.name}
                sx={{
                  "&:nth-of-type(even)": { backgroundColor: "#f5f5f5" },
                }}
              >
                <TableCell component="th" scope="row">
                  {tag.name}
                </TableCell>
                <TableCell align="right">{tag.count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <Typography sx={{ mt: 2, textAlign: "center" }}>
          No tags found.
        </Typography>
      )}
    </TableContainer>
  );
});

export default TagTable;
