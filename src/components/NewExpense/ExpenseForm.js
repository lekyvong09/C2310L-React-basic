import { Send } from "@mui/icons-material";
import { Button, Container, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { useState } from "react";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";

function ExpenseForm(props) {
    const [value, setValue] = useState(new Date());
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        var data = {
            title: title,
            amount: amount,
            date: value,
            category: category,
        }
        
        props.onSaveExpenseData(data);
    }

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <Container sx={{width: '50%'}}>
            <form onSubmit={submitHandler}>
                <Stack spacing={2} pt={5}>
                    <TextField 
                        id="form-title" 
                        label="Title" 
                        variant="outlined"
                        value={title}
                        onChange={(event) => {
                            setTitle(event.target.value);
                        }}
                    />
                    
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-category">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-category"
                            id="simple-select-category"
                            value={category}
                            label="Category"
                            onChange={handleChange}
                        >
                        <MenuItem value={'Essential'}>Essential</MenuItem>
                        <MenuItem value={'Entertainment'}>Entertainment</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField 
                        id="form-amount" 
                        label="Amount" 
                        type="number"
                        variant="outlined" 
                        value={amount}
                        onChange={(event) => {
                            setAmount(event.target.value);
                        }}
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