import React from "react";
import ClassComponent from "./Pembahasan/classComponent";
import FunctionalComponent from "./Pembahasan/FunctionalComponents";

export default class Komponen extends React.Component{

    render(){
        return(
            <div>
            <ClassComponent nama ="Ramezuku" />
            <FunctionalComponent nama = "Gurame" />
            </div>
        )
    }
}