import React from 'react';
import ReactDOM from 'react-dom';
import MainStep from './Components/MainStep'

class App extends React.Component{
    render(){
        return( 
            <div><MainStep /></div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));