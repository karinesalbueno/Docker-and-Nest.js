import { useNavigate } from "react-router-dom";

import { useState } from "react"
import { createAuth } from "../service/Routers";
import '../styles/Login.css';

interface ILogin {
    usercode: string
    password: string;
}

export const Login = () => {
    const [state, setState] = useState<ILogin>({ usercode: '', password: '' });
    const navigate = useNavigate();


    const fields = [
        { id: 'code', name: 'usercode', label: 'Insira seu código funcionário:', type: 'text' },
        { id: 'password', name: 'password', label: 'Insira sua senha:', type: 'password' }
    ];

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setState(prevState => ({ ...prevState, [name]: value }));
    }

    const onSubmitForm = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        await createAuth(state)
            .then((response: any) => {
                const data = response.data;
                if (data) {
                    localStorage.setItem('token', JSON.stringify(data))
                    navigate("/home")
                }
            })
            .catch((error: any) => {
                console.log(error)
            })
    }

    return (
        <div className="ctn">
            <p className="login">LOGIN</p>
            <small className="sml">Sua plataforma de registros diários</small>

            <form onSubmit={(event) => onSubmitForm(event)}>
                {
                    fields.map(field => (

                        <div key={field.id} className='lgForm'>

                            <label htmlFor={field.id} className="label">{field.label}</label>
                            <input
                                type={field.type}
                                id={field.id}
                                name={field.name}
                                value={state[field.id as keyof typeof state]} // informa ao TypeScript que o valor é uma string que pode ser usada como uma chave de índice válida
                                onChange={handleChange}
                            />

                        </div>
                    ))
                }

                <input type="submit" name="Entrar" id="submit" value={"Entrar"} />
            </form>

        </div>
    )
}

