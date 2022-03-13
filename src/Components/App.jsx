import React, {Component} from "react";
import Footer from "./Footer";
import Card from "./Card";
import Header from "./Header";
import Search from "./Search";


class App extends Component {
    constructor() {
        super();
        this.state = {
            user:{},
            searchfield:""
          }
    }

componentDidMount(){
    this.getUser('Darksied95')
}

    getUser = (username)=> {
        fetch(`https://api.github.com/users/${username}`)
        .then(response =>{
            return response.json();
        })
        .then(userInfo => {
            this.setState({user: {
                id: userInfo.id, 
                name: userInfo.name,
                location: userInfo.location,
                followers: userInfo.followers
            }});
        }
        )}

    onKeyPress = (event) => {
        if(event.keyCode === 13 || event.charCode === 13){
            console.log("Hello")
            this.setState({searchfield : event.target.value})
            this.getUser(event.target.value)
           
        }
    }
    
    render() { 
        return ( 
            <div>
                <Header />
                <Search keyPress= {this.onKeyPress} />
                <Card userinfo= {this.state.user}/>
                <Footer />
            </div>
         );
    }
}
 
export default App;