import React from 'react'
import { useNavigate } from "react-router-dom";
import './Login.css'
import { useThemeConsumer } from './../../Context/UseContext';


function Login() {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [errorUsername, setErrorUsername] = React.useState('')
    const [errorPassword, setErrorPassword] = React.useState('')
    const [uname, setUname] = useThemeConsumer();
    const navigate = useNavigate();
    console.log('username response ====>', uname)
    console.log('setUsername response ====>', setUname)

    const onChangeUsernameHandler = (e) => {
        const event = e.target.value;
        setUsername(event)
        const regx = /^([^0-9]*)$/;

        if (username.trim() === '') {
            setErrorUsername('Enter your username')
        }
        else if (regx.test(username) === false) {
            setErrorUsername('Enter alphabetic characters only')
        }
        else if (username.length >= 6) {
            setErrorUsername(`Username is ${username.length} characters too long`)
        }
        else if (username.length === 5) {
            setErrorUsername('')
        }
        else if (username.length <= 5 && username.length >= 1) {
            setErrorUsername('Username should be 6 characters only')
        }
        else {
            setErrorUsername('')
        }
    }

    const onChangePasswordHandler = (e) => {
        const event = e.target.value;
        setPassword(event)
        const regx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{5,})/;
        if (password === '') {
            setErrorPassword('Enter your Password')
        }
        else if (password.length === 5 && regx.test(password) === true) {
            setErrorPassword('')
        }
        else if (password.length <= 5 && password.length >= 1) {
            setErrorPassword('password should be 6 characters only')
        }
        else if (regx.test(password) === false) {
            setErrorPassword('Enter alphabeticnumeic password')
        }
        else if (password.length >= 6) {
            setErrorPassword(`password is ${password.length} characters too long`)
        }
        else {
            setErrorPassword('')
        }

    }

    const onChangeSubmitHandler = () => {
        const staticUsername = 'vijayy'
        const staticPassword = 'Vij@12'
        if (staticUsername === username && staticPassword === password) {  
            alert('Your are king')
            navigate("/");
            setUname(staticUsername)
        }
        else {
            alert('Invalid login details')
        }
    }

    return (
        <div className='Login-container'>
            <form className='Form-container' onSubmit={onChangeSubmitHandler}>
                <div className='Input-container'>
                    <label htmlFor="username">
                        Username
                    </label>
                    <input type={'text'} id={"username"}
                        name={"username"} placeholder={'Please enter your username...'} value={username} onChange={onChangeUsernameHandler} />
                    <div>{username && <span>{errorUsername}</span>}</div>
                </div>
                <div className='Input-container'>
                    <label htmlFor={"password"}>
                        Password
                    </label>
                    <input type={'password'} id={"password"}
                        name={"password"}
                        placeholder={'Please enter your password...'} value={password} onChange={onChangePasswordHandler} />
                    <div>{password && <span>{errorPassword}</span>}</div>
                </div>
                <div className='Botton-container'>
                    <button type={"submit"}>
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login