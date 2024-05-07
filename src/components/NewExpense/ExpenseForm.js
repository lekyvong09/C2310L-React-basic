import { Send } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";

function ExpenseForm() {
    return (
        <form>
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
            <Button 
                variant="contained" 
                endIcon={< Send />}
                type="submit"
                color="primary"
            >
                Send
            </Button>
        </form>
    );
}

export default ExpenseForm;