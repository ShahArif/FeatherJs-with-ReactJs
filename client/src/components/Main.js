import React , {Component} from 'react';
import {Link } from 'react-router-dom';
import {Header, Container} from 'sematic-ui-react';

class Main extends Component{
    render(){
        return(
            <Container>
                <Header as="h1" textAlign="center">
                    <Link to="/">Menu Monkey  </Link>
                </Header>
                {React.cloneElement(this.props.children, this.props)}
            </Container>
        )
    }
}
export default Main;