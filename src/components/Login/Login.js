import { Button, Container, Stack, TextField } from "@mui/material";
import { useState } from "react";


export default function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [isValidUsername, setIsValidUsername] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);
    const [formIsValid, setFormIsValid] = useState(false);

    const validateUsername = () => {
        /// if username.trim() !== '' then true
        /// else (if) username.trim() === '' then false
        setIsValidUsername(username.trim() !== ''); 
    }

    const validatePassword = () => {
        setIsValidPassword(password.trim() !== ''); 
    }

    const usernameChange = (event) => {
        setUsername(event.target.value);
        setFormIsValid(event.target.value.trim() !== '' && password.trim() !== '');
    }
    const passwordChange = (event) => {
        setPassword(event.target.value);
        setFormIsValid(event.target.value.trim() !== '' && username.trim() !== '');
    }

    const submitHandler = (event) => {
        event.preventDefault();

        props.onLoginHandler(username, password);

        setUsername('');
        setIsValidUsername(true);
        setPassword('');
        setIsValidPassword(true);
        setFormIsValid(false);
    }

    return (
        <Container sx={{width: '50%'}}>
            <form onSubmit={submitHandler}>
                <Stack spacing={2} pt={5}>
                    <TextField 
                        id="form-username"
                        error={!isValidUsername}
                        helperText= {!isValidUsername ? "Incorrect entry." : ""}
                        label="Username" 
                        variant="outlined"
                        value={username}
                        onBlur={validateUsername}
                        onChange={usernameChange}
                    />
                    <TextField 
                        id="form-pass"
                        type="password"
                        error={!isValidPassword}
                        helperText= {!isValidPassword ? "Incorrect entry." : ""}
                        label="Password" 
                        variant="outlined"
                        value={password}
                        onBlur={validatePassword}
                        onChange={passwordChange}
                    />
                </Stack>
                <Button 
                    variant="contained" 
                    type="submit"
                    color="primary"
                    disabled={!formIsValid}
                >
                    Login
                </Button>
            </form>
        </Container>
    );


}