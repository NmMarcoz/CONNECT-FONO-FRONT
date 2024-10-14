import {useState} from 'react'

//import './App.css'
import '../styles/loginPage.css'
import {Link} from 'react-router-dom'
import RegisterPage from "./RegisterPage.jsx";

function LoginPage() {
    const [buttonPlaceHolder, setButtonPlaceholder] = useState('insira seu RA') // pra trocar o placeholder de RA pra Email e vice versa
    return (
        <div id="main-container">
            <div id="left-container">
                <div id="left-title-container">
                    <h1>
                        Nunca foi tão fácil <br/> de agendar sua consultas <br/>
                        de fonoaudiologia no CEUMA.
                    </h1>
                    <p>
                        Cadastre-se na plataforma para consultar
                    </p>
                </div>
            </div>
            <div id="right-container">
                <div id="form-container">
                    <div id="form-header-container">
                        <h2>
                            Selecione o seu tipo de login abaixo.
                        </h2>
                        <div id="login-header-container">
                            <h1>
                                Login
                            </h1>
                            <div id="login-header-button-container">
                                <button onClick={() => setButtonPlaceholder(buttonPlaceHolder => "insira seu RA")}>
                                    aluno
                                </button>
                                <button onClick={() => setButtonPlaceholder(buttonPlaceHolder => "insira seu email")}>
                                    externo
                                </button>
                            </div>
                        </div>

                    </div>
                    <div id="form-input-container">
                        <input placeholder={buttonPlaceHolder} id="login-input"/>
                        <input placeholder="insira sua senha" type="password" id="login-input"/>
                        <button> loggar</button>

                    </div>
                    <div id="form-footer-container">
                        Ainda não possui uma conta?
                        <Link to="/register">
                            cadastre-se
                        </Link>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default LoginPage
