import "./ConsultDashboard.css"
import {useState, useEffect} from "react";
import axios from "axios";
function ConsultDashboard(props) {

    const [isExpanded, setExpanded] = useState(true);

    return <div id={isExpanded ? "consult-dashboard-expanded": "consult-dashboard"}
                onMouseEnter={() => setExpanded(true)}
                onMouseLeave={() => setExpanded(false)}
        >

        <div id="consult-dashboard-inner-container">
            <p id="dashboard-title"> {props.title}</p>
            <div id="date-container">
                <p id="date"> {props.date} </p>
                <p>{props.hour}</p>
            </div>
            <div id="actions-container">
                <a>expandir</a>
                <div id="status-container-confirmed">
                    <p>confirmada</p>
                </div>
            </div>
        </div>


    </div>;
}

export default ConsultDashboard