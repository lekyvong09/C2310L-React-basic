import { Send } from "@mui/icons-material";
import { Button, Container, Stack, TextField } from "@mui/material";

function ExpenseForm() {
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