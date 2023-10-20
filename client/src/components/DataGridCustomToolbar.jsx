import React from 'react';
import { Search } from "@mui/icons-material";
import { IconButton, TextField, InputAdornment } from "@mui/material";
import {
  GridToolbarDensitySelector,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarColumnsButton,
} from "@mui/x-data-grid";
import FlexBetBox from "components/styled/FlexBetweenBox";


const DataGridCustomToolbar = ({ searchInput, setSearchInput, setSearch }) => {
    return (
        <GridToolbarContainer>
          <FlexBetBox width="100%">
            <FlexBetBox>
              <GridToolbarColumnsButton />
              <GridToolbarDensitySelector />
              <GridToolbarExport />
            </FlexBetBox>
            <TextField
              label="Search..."
              sx={{ mb: "0.5rem", width: "15rem" }}
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => {
                        setSearch(searchInput);
                        setSearchInput("");
                      }}
                    >
                      <Search />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </FlexBetBox>
        </GridToolbarContainer>
      );
}

export default DataGridCustomToolbar
