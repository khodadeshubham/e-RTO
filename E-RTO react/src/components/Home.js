import React from 'react';
import myimg from '../images/RTOS.jpg';
import MainMenu from './MainMenu';

class Home extends React.Component {

    render(){
        return(
            <div  style={{ backgroundImage:`url(${myimg})`, height:"500px", backgroundPosition:"center"}}>
            </div>

        );
    }

}

export default Home;