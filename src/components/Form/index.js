import { useState } from "react";

import { FormContainer, Form } from "./styles";

export default function FormSection() {
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");

    function registerUser() {
        const userRegister = {
            name,
            email
        }

        localStorage.setItem("UserRegisterNews", JSON.stringify(userRegister))

        setName("");
        setEmail("");

        return (alert("Cadastro realizado com sucesso! 🤗"));
    }
    
    return (
        <FormContainer>
            <p>Cadastre-se para receber todas as nossas promoções. 😉 </p>

            <Form>
                <input
                    type="text"
                    name="name"
                    placeholder="Nome Completo"
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                
                <button onClick={registerUser}>Cadastrar</button>
            </Form>
        </FormContainer>
    )
}