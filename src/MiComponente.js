//Importar modulos de react / dependencias
import React from "react";

//Función
const MiComponente = () => {
    
    const nombre = "Sergio";
    const web = "sergio.com"
    
    let usuario = {
        nombre: "Sergio",
        apellidos: "Jimenez",
        web: "sergio.com"
    };

    return(
    <div className="MiComponente">
        <hr/>
        <h2>Componente creado</h2>
        <h3>Datos del usuario:</h3>
        <ul>
            <li>Nombre: <strong>{usuario.nombre}</strong></li>
            <li>apellidos: <strong>{usuario.apellidos}</strong></li>
            <li>web: <strong>{usuario.web}</strong></li>
        </ul>
        <p>Este es mi primer componente c:</p>
        <ul>
            <li>
                React
            </li>
            <li>
                Angular
            </li>
            <li>
                Vue
            </li>
    </ul>
    </div>
)};

//Export
export default MiComponente;