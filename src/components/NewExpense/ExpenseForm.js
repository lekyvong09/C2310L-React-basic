import { Send } from "@mui/icons-material";
import { Button, Container, Stack, TextField } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { useState } from "react";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";

function ExpenseForm() {
    const [value, setValue] = useState(new Date());
    

    return (
        <Container sx={{width: '50%'}}>
            <form>
                <Stack spacing={2} pt={5}>
                    <TextField 
                        id="form-title" 
                        label="Title" 
                        variant="outlined" 
                    />
                    <TextField 
                        id="form-amount" 
                        label="Amount" 
                        type="number"
                        variant="outlined" 
                    />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker 
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            label="Expense Date"
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </Stack>
                
                <Button 
                    variant="contained" 
                    endIcon={< Send />}
                    type="submit"
                    color="primary"
                >
                    Send
                </Button>
            </form>
        </Container>
        
    );
}

export default ExpenseForm;