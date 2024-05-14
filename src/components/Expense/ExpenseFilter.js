import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

function ExpenseFilter() {
  const [selectedYear, setSelectedYear] = useState('');

  const handleChange = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <Box sx={{ width: 120, backgroundColor: '#4b4b4b', borderRadius: '12px' }}>
        <FormControl fullWidth>
            <InputLabel 
              id="demo-simple-select-label"
              sx={{color: 'white', fontWeight: 'bold'}}
            >Age</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedYear}
                label="Year"
                onChange={handleChange}
            >
                <MenuItem value={2022}>2022</MenuItem>
                <MenuItem value={2023}>2023</MenuItem>
                <MenuItem value={2024}>2024</MenuItem>
            </Select>
        </FormControl>
    </Box>
  );
}

export default ExpenseFilter;