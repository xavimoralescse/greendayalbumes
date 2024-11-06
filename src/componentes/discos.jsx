import React from "react";
import '../hojas-de-estilo/estilos.css'
function Discosgreenday (props)
{
    return(

        <div className="contenedor">
        <img className="imgdiscos"
        src={require(`../imagenes/Green_Day-${props.imagen}.jpg`)} 
        alt="americanidiot"/>
        <div className="Contenido">
        <h3 className="album">{props.album} </h3>
        <p className="Descripcion">
        {props.descripcion}
        </p>
        <div className="musicstreaming">
            <a>

            </a>
        <a className="Spotify" href={props.enlacespotify}>Escuchar en Spotify</a>    
        <a className="Deezer" href={props.enlacedeezer}>Escuchar en Deezer</a>
        <button className="YTMusic" href={props.enlacesYTMusic}>Escuchar en YouTube Music</button>
        </div>
       
        </div>
        
            
    </div>




    );
        


    
        
    
}
export default Discosgreenday;