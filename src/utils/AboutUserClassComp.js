import React from 'react';
import userContext from './userContext';

class AboutUserClassComp extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            contactHeading:'Contact person details via class',
            count:0,
            userNameFromContext:'',
        }
    }
    render() {
        const {name, location} = this.props;
        return(<div className='about-user-card'>
            <h1>{this.state.contactHeading}</h1>
            <h2>name:{name} *before setting up the state from context*</h2>

            <userContext.Consumer>
                {
                ({loggedInUser})=> {
                    if (!this.state.userNameFromContext) {
                        // Set the state only if it's not already set to avoid infinite loop
                        this.setState({ userNameFromContext: loggedInUser });
                    }
                    return (
                        <h2>Name:{loggedInUser} *this name is coming directly from context into class component using consumer*</h2>
                    )
                }
                }
            </userContext.Consumer>
            <h2>name:{this.state.userNameFromContext} *after setting up the state from context*</h2>
            <h3>Location:{location}</h3>
            <h4>Email:</h4>
            <h5>{this.state.count}</h5>
            <button onClick={()=>this.setState({count:this.state.count+1})}>increase count</button>
        </div>)
    }
}

export default AboutUserClassComp