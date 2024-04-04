import { Paper, Box } from "@mui/material";
import { tagsStore } from "./stores/tagStore";
import { observer } from "mobx-react";

import Pagination from "./components/Pagination/Pagination";
import TagTable from "./components/TagTable/TagTable";
import AlertComponent from "./components/AlertComponent/AlertComponent";

const App = observer(function App() {
  const { page, handleChangePage, tagsPerPage, alertMessage } = tagsStore;
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            maxWidth: "500px",
            margin: "20px",
          }}
        >
          <>
            <TagTable />
            <Box sx={{ display: "flex", justifyContent: "end" }}>
              <Pagination
                page={page}
                handleChangePage={handleChangePage}
                tagsPerPage={tagsPerPage}
              />
            </Box>

            {alertMessage && (
              <Box sx={{ borderTop: "1px solid grey" }}>
                <AlertComponent message={alertMessage} severity="error" />
              </Box>
            )}
          </>
        </Paper>
      </Box>
    </>
  );
});

export default App;
