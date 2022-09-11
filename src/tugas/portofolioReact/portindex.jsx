import React from "react";
import "./portofolio.css";

export default class Plaincss extends React.Component{

    render(){
        return(
            <div>
                <div className="bar">
                    <span className="name"> <a href="#title">Abdurrahman Ramadhan</a></span><span className="biografi"> <a href="#biografi">Biografi</a></span><span className="contact"> <a href="#contact">contact</a></span>
                </div>  
                <div className="container">
                <h1 className="title" id="title">My Portfolio</h1>
                <h2 className="subtitle" id="biografi">Biografi</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores sit porro tempore ipsam quas. Repellendus voluptatibus temporibus mollitia distinctio magni tenetur eaque aperiam at aliquam rem? Tempore amet aliquid minima!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse nulla sapiente minus eveniet amet, aliquam ullam repellat iure facere! Deleniti delectus possimus exercitationem, aut velit sint itaque ipsam, est quaerat eos dolores quibusdam odit eum ad minus distinctio officiis incidunt. Esse quia ullam in magnam error iste deleniti illo omnis eligendi veritatis enim porro excepturi, doloribus, quaerat ipsum quisquam aspernatur alias odit harum corrupti ab nihil rerum, sint rem! Incidunt magnam quam cumque alias distinctio explicabo perspiciatis sequi repellat, eaque aperiam natus adipisci! Adipisci tenetur id et expedita magni voluptatibus optio nesciunt, doloribus minus incidunt culpa asperiores reiciendis! Aperiam, minus.</p>

                <h2 className="skill">My Skills</h2>
                <div className="skills">
                    <ul>
                        <li>
                            CorelDraw
                        </li>
                        <li>
                            Photoshop
                        </li>
                        <li>
                            PremierePro
                        </li>
                    </ul>
                </div>
                <br/>
                <h2> Old Close Friends</h2>
                    <div>
                    <table className="table">
                        <tr>
                            <td>No.</td>
                            <td>Name</td>
                            <td>Address</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Rifat	Hestu</td>
                            <td>Tangerang</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Raja Walidain</td>
                            <td>Tangerang</td>
                        </tr>
                    </table>
                    </div>
                    <br/>
                    <form action=''>
                        <h2 id="contact">Contact Me!</h2>
                        <label for="fname"> First Name </label>
                            <input type='text' />

                        <label for="fname"> Last Name </label>
                            <input type='text' />
                            <button>Submit Here</button>
                    </form>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </div>
        )
    }
}