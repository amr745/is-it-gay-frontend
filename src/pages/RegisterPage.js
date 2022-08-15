import React from "react"
import { useState } from "react";
import RegisterForm from "../components/RegisterForm";

function RegisterPage(props) {
    const [messageState, setMessageState] = useState({
        msg: "",
    });

    function updateMessage(msg) {
        setMessageState({ message: msg });
    }

    return (
        <div>
            <RegisterForm {...props} updateMessage={updateMessage} />
            <p>{messageState.msg}</p>
        </div>
    );
}

export default RegisterPage;