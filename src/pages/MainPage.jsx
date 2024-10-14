import '../styles/mainPage.css'
import {Link} from 'react-router-dom'
import {useState} from 'react'

import ConsultDashboard from "../components/ConsultDashboard.jsx";
import axios from "axios";

function MainPage(){
    const baseUrl = "https://qgms0m7t-8080.brs.devtunnels.ms"
    const [isExpanded, setExpanded] = useState(false);
    const [consultations, setConsultations] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const fetchConsultations = async (id) =>{
        const response = await axios.get(`${baseUrl}/consultation/patient/${id}`);
        setIsLoading(false);
        console.log("[response]");
        console.log(response.data);
        return response.data;
    }

    window.onload = async () => {const consult =
        await fetchConsultations(1).then((
            data) =>
            setConsultations(data))}

    return (

        <div id="main-container">
            <header>
                <ul>
                    <li>outros portais</li>
                    <li>perfil</li>
                    <li>sair</li>
                </ul>
            </header>
            <main>
                <section id="left-container-section">
                    <h1>
                        Minhas consultas
                    </h1>

                    <div id={isExpanded ? "consult-dashboard-container-expanded": "consult-dashboard-container"
                           }
                        onMouseEnter={() => setExpanded(true)}
                         onMouseLeave={() => setExpanded(false)}
                    >
                        {isLoading ?
                            <h1 id="loading"> carregando... </h1>
                            : consultations.map((consultation) =>{
                                    return(<ConsultDashboard title = {consultation.title} date = {consultation.schedule.date.slice(5)} hour = {consultation.schedule.hour.slice(0, 5)}/>)
                                })
                        }


                    </div>

                    <div id="new-consult-container">
                        <h2 id="title-2"> Deseja agendar <strong>nova consulta?</strong> </h2>

                        <div id = "new-consult-inner-container">
                            <p>Tenha em mente que só <br/> é possível
                                ter 3 agendamentos ativos</p>
                            <div  id="main-button">
                                <a>
                                    agendar
                                </a>
                            </div>

                        </div>

                    </div>
                </section>
                <section id="right-container-section">

                </section>

            </main>
        </div>
    )
}

export default MainPage;