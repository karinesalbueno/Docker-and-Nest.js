import { useState } from "react"
import { createAuth } from "../service/Routers";
import '../styles/Login.css';

type Code = string;
type Password = string;

export const Login = () => {
    const [usercode, setUsercode] = useState<Code>('')
    const [password, setPassword] = useState<Password>('')

    const data = { usercode, password };

    const onSubmitForm = () => {
        createAuth(data)
            .then((response: any) => {
                console.log(response);
            })
            .catch((error: any) => {
                console.log(error);
            });
    }

    return (
        <div className="ctn">
            <p className="login">LOGIN</p>
            <small className="sml">Sua plataforma de registros diários</small>
            <form onSubmit={(event) => event.preventDefault()} className='lgForm'>
                <label htmlFor="code">Insira seu código funcionário: </label>
                <input type="text" id="code" value={usercode} onChange={(e) => setUsercode(e.target.value)} />
                <label htmlFor="password">Insira sua senha: </label>
                <input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" name="Entrar" id="submit" onClick={() => onSubmitForm()} />
            </form>
        </div>
    )
}

