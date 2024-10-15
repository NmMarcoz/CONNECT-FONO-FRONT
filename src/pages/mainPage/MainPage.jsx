
import {Link} from 'react-router-dom'
import {useState} from 'react'

import ConsultDashboard from "../../components/ConsultDashboard.jsx";
import axios, { Axios, AxiosError } from "axios";
import "./mainPage.css"
import { toast } from 'react-toastify';
import errorTranslate from '../../utils/functions/errorTranslate.js';

function MainPage(){
    const baseUrl = "https://qgms0m7t-8080.brs.devtunnels.ms"
    const [isExpanded, setExpanded] = useState(false);
    const [consultations, setConsultations] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const fetchConsultations = async (id) =>{
        try{
            const response = await axios.get(`${baseUrl}/consultation/patient/${id}`,{
                timeout: 5000
            });
            setIsLoading(false);
            console.log("[response]");
            console.log(response.data);
            return response.data;
        }catch(err){
            if(err instanceof AxiosError){
                toast.error(errorTranslate(err.message))
            }
        }
        
    }

    window.onload = async () => {const consult =
        await fetchConsultations(1).then((
            data) =>
            setConsultations(data))}

    return (

        <div className="main-container">
            <header>
                <ul>
                    <li>outros portais</li>
                    <li>perfil</li>
                    <li>sair</li>
                </ul>
            </header>
            <main>
                <section className="left-container-section">
                    <h1>
                        Minhas consultas
                    </h1>

                    <div className={isExpanded ? "consult-dashboard-container-expanded": "consult-dashboard-container"
                           }
                        onMouseEnter={() => setExpanded(true)}
                         onMouseLeave={() => setExpanded(false)}
                    >
                        {isLoading ?
                            <h1 className="loading"> carregando... </h1>
                            : consultations.map((consultation) =>{
                                    return(<ConsultDashboard title = {consultation.title} date = {consultation.schedule.date.slice(5)} hour = {consultation.schedule.hour.slice(0, 5)}/>)
                                })
                        }


                    </div>

                    <div className="new-consult-container">
                        <h2 className="title-2"> Deseja agendar <strong> nova   consulta?</strong> </h2>

                        <div className = "new-consult-inner-container">
                            <p>Tenha em mente que só é possível
                                ter 3 agendamentos ativos.</p>
                            <div  className="main-button">
                                <a>
                                    agendar
                                </a>
                            </div>

                        </div>

                    </div>
                </section>
                <section className="right-container-section">

                </section>

            </main>
        </div>
    )
}

export default MainPage;