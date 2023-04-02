import { useState } from "react";
import { createUser } from "../service/Routers";

interface IRegisterUser {
    code: string
    name: string;
    email: string;
    password: string;
}

export const Register = () => {
    const [state, setState] = useState<IRegisterUser>({ code: '', name: '', email: '', password: '' });

    const onSubmitForm = () => {
        createUser(state)
            .then((response: any) => {
                console.log(response);
            })
            .catch((error: any) => {
                console.log(error);
            });
    }

    const fields = [
        { id: 'code', label: 'código:', type: 'text' },
        { id: 'name', label: 'nome:', type: 'text' },
        { id: 'email', label: 'e-mail:', type: 'email' },
        { id: 'password', label: 'senha:', type: 'password' }
    ];

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setState(prevState => ({ ...prevState, [name]: value }));
    }

    return (
        <div className="ctn">

            <p className="login">LOGIN</p>
            <small className="sml">Sua plataforma de registros diários</small>
            <small className="register">Registre seus dados abaixo</small>

            <form onSubmit={(event) => { console.log(state), event.preventDefault() }} >

                {
                    fields.map(field => (
                        <div key={field.id} className='regiterForm'>

                            <label htmlFor={field.id} className="label">{field.label}</label>
                            <input
                                type={field.type}
                                id={field.id}
                                name={field.id}
                                value={state[field.id as keyof typeof state]}
                                onChange={handleChange}
                            />

                        </div>
                    ))
                }

                <input type="submit" name="Entrar" id="submit" value={"Registrar"} onClick={() => onSubmitForm()} />

            </form>

        </div>
    )
}