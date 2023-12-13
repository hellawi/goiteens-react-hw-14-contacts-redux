import { Search } from "@mui/icons-material";
import { TextField } from "@mui/material";
import { Box } from "@mui/material";

function Input({ value, onChange }) {
  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "flex-end", marginLeft: 50 }}>
        <Search sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          sx={{width: 600}}
          id="input-with-sx"
          label="Search a contact..."
          variant="standard"
          placeholder="E.g. Aleksandr Smith"
          type="text"
          value={value}
          onChange={onChange}
        />
      </Box>
    </div>
  );
}
export default Input;
