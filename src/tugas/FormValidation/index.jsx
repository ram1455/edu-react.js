import React from "react";
import {InputFoam, RadioFoam, SelectFoam, TextAreaFoam} from "./Foam";
import styled from "styled-components";

const Styled = styled.div
`
    background-color:salmon;
    width:350px;
    margin:100px auto;
    padding:45px;
    box-sizing:border-box;
`
export default class TheForm extends React.Component{
    state ={
        nama:'',
        hobi:'',
        alamat:'',
        gender:''
    }

    handleSubmit=event=>{
        event.preventDefault();
        alert(`
        nama:${this.state.nama}
        hobi:${this.state.hobi}
        alamat:${this.state.alamat}
        gender:${this.state.gender}
        `)

        this.setState({
            nama:'',
        hobi:'',
        alamat:'',

        })
    }

    render(){

        return(
            <Styled>
            <form onSubmit={this.handleSubmit}>

            <InputFoam label="Nama"
            type="text" nama="nama"  
            onChange={value => this.setState({nama: value})}
            value={this.state.nama}
            />

            <RadioFoam label="Jenis Kelamin" 
            type="radio" 
            value="gender" 
            nama1="Pria" 
            nama2="Perempuan" 
            onChange={value => this.setState({gender: value})}
            checked={this.state.gender}
            />

            <SelectFoam label="Hobi" 
            nama="hobi" 
            defValue="silahkan pilih hobi" 
            value1="Menggambar" value2="Bermusik" value3="Bernyanyi" value4="Sepak Bola" 
            onChange={value => this.setState({hobi: value})}
            value={this.state.hobi}
            />

            <TextAreaFoam label="Alamat" 
            nama="alamat" 
            cols="30" rows="10" 
            onChange={value => this.setState({alamat: value},()=> console.log(this.state))} value={this.state.alamat}
/>
            <label>
                <button type="submit">submit</button>
            </label>
            </form>
            </Styled>
        )
    }
}