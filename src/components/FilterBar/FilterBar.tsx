import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { tagsStore } from "../../stores/tagStore";
import { observer } from "mobx-react";
import SearchIcon from "@mui/icons-material/Search";
import Input from "../Input/Input";

const FilterBar = observer(function FitlerBar() {
  const [query, setQuery] = useState(tagsStore.searchQuery);
  const [tagsPerPage, setTagsPerPage] = useState(tagsStore.tagsPerPage);
  const debouncedSearch = useDebounce(query, 500);
  const debouncedTagsPerPage = useDebounce(tagsPerPage, 500);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value.toLowerCase());
  };

  const handleTagsPerPageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let newTagsPerPage = Number(event.target.value);

    if (newTagsPerPage > 100) {
      newTagsPerPage = 100;
    }

    setTagsPerPage(newTagsPerPage);
  };

  useEffect(() => {
    tagsStore.setSearchQuery(debouncedSearch);
  }, [debouncedSearch]);

  useEffect(() => {
    const isValidNumber =
      !isNaN(debouncedTagsPerPage) &&
      debouncedTagsPerPage > 0 &&
      debouncedTagsPerPage <= 100;

    if (isValidNumber) {
      tagsStore.setTagsPerPage(debouncedTagsPerPage);
    }
  }, [debouncedTagsPerPage]);

  return (
    <Box
      sx={{
        padding: "20px",
        display: "flex",
        gap: "10px",
      }}
    >
      <Input
        label="Tags per page"
        placeholder="Tags per page"
        type="number"
        value={tagsPerPage === 0 ? "" : tagsPerPage}
        onChange={handleTagsPerPageChange}
      />
      <Input
        label="Search"
        placeholder="Search"
        type="search"
        value={query}
        onChange={handleSearchChange}
        icon={<SearchIcon />}
      />
    </Box>
  );
});

export default FilterBar;
