import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function BasicPagination({ totalPage, onChange }) {
  return (
    <Stack spacing={2} sx={{ alignItems: "center", mt: 3 }}>
      <Pagination
        count={totalPage}
        color="tertiary"
        onChange={(e, page) => onChange(page)}
      />
    </Stack>
  );
}
