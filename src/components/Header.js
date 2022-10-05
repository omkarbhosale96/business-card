import React from "react";


function Header(){
    return (
        <div className="header">
            <img src={require("./omkar.jpg")} alt="" />
            <h2>Omkar Bhosale</h2>
            <p>Software Developer</p>
            <small>omkar.business</small><br /><br />
            <div className="button-container">
            <button><a href = "mailto: bhosaleomkar9606@gmail.com" className="mailLink"><i className="fa fa-envelope"></i> Email</a></button>
            <button onClick={openLinkedin}><i className="fa fa-linkedin-square"></i> LinkedIn</button>
            </div>
        </div>
    );
}
function openLinkedin(){
    window.open("https://www.linkedin.com/in/omkar-bhosale-923982182");
} 


export default Header;