import React, {Component} from 'react';

class Kent extends Component {
    state = {
        switch: 0,
        name: this.props.name1
    }

    clickHandler=()=>{
        if(this.state.switch===0){
            this.setState({
                switch: 1,
                name: this.props.name2
            });
        }else {
            this.setState({
                switch: 0,
                name: this.props.name1
            });
        }
    }

    render() {
        return (<div onClick={this.clickHandler}>Hi {this.state.name}, Hello World!</div>);
    }
}

export default Kent;