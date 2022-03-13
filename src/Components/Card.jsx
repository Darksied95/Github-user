import React from "react";

const Card = ({userinfo}) =>{
    const {id,name, followers, location}= userinfo
    return(
        <div key={id} className="tc center">
        <div 
        className="mw5 center bg- br3 pa3 pa4-ns mv3 ba b--black-10 " 
        style = {{backgroundColor: "dark red", borderRadius: "10%"}}>    
            <img className="br4 ma3 tc center" alt={`Avatar`} src={`https://avatars0.githubusercontent.com/u/${id}?v=4`}/>
            <hr />
            <h1>Name: {name}</h1>
            <h1>Followers:{followers}</h1>
            <h1>Location: {location}</h1>

            </div>
        </div>
    )

}

export default Card;