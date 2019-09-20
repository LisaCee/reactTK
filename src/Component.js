import React from 'react';
import {Link, Route} from 'react-router-dom';
import './styles/style.css';

export default function Component() {
    return (
        <div className = 'container-hello-world'>
           
            <Link to={{pathname: '/blog', 
        search: '?name=gabe', hash: '#theHash', state: {
            from: 'home page',
        }}}>Blog</Link>
            <Route path='/blog' render={props => {
                const {from} = props.location.state;
                return <h3>You came from {from}</h3>
            }} />
        </div>
    )
}