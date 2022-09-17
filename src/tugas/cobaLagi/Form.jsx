import React from "react";
import styled from "styled-components";

const Container = styled.div
`
background-color:salmon;
width:350px;
margin:100px auto;
padding:20px;
box-sizing:border-box;
`
const ShowError= ({errors})=>{
    return(
        <ul style={{color:'red', marginLeft:'-20px'}}>
            {
                errors.map((error, i) => <li key={i}>{error}</li>)
            }
        </ul>
    )
}

export default class Form extends React.Component{
    state ={
        email:'',
        password:'',
        errors:[]
    }
    handleSubmit= event =>{
        event.preventDefault();
        const {email, password}= this.state
        let message = [];
        if ( email.length === 0) {
        message = [...message, 'email tidak boleh kosong'];
        }
        if ( password.length  === 0){
            message= [...message,"password tidak boleh kosong"]
        } 

        const re =/[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
        if (!re.test(String(email).toLowerCase()) && email.length >=1 ){
            message = [...message, 'Email tidak valid'];

        } if( password.length < 8){
            message = [...message, 'Password terlalu singkat'];
        }

        if (message.length > 0) {
            this.setState({
                errors : message
            })
        } 
        else {
            alert(`
            email: ${this.state.email},
            password: ${this.state.password}
            `)

            this.setState({
                email:'',
                password:'',
                errors:[]
            })
        }

    }

    render(){

        return(
            <Container>
            {
                    this.state.errors && <ShowError errors={this.state.errors}/>
            }
                <form onSubmit={this.handleSubmit}>
                    <label> Email :
                        <br/>
                        <input type="email" name={this.state.email} onChange={(e)=> this.setState({email: e.target.value})}
                           value={this.state.email}
                        />
                    </label>
                    <br/>
                    <label> Password :
                        <br/>
                        <input type="password" name={this.state.password} onChange={(e)=> this.setState({password: e.target.value})}
                            value={this.state.password}
                        />
                    </label>
                    <br/>
                    <br/>
                    <button type="submit">login</button>

                </form>
            </Container>
        )
    }
}