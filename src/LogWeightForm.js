import React, { Component } from 'react';

function CurrentWeight(props) {
    return (
        <input name="current" id="current" readOnly placeholder="195" value={props.weight}/>
    );        
}

function StartingWeight(props) {
    return (
        <input name="starting" id="starting" readOnly placeholder="220" value={props.weight}/>
    );
}


class LogWeightForm extends Component {
    constructor (props) {
        super(props);
        this.state = {user: props.user};
    }

    log_weight(event) {
        let weight_input = document.getElementById("log_input");
        let user = this.state.user;
        user.current_weight = parseInt(weight_input.value || 0, 10);
        this.setState({user: user});
    }

    render() {
        return (
            <div>
                <div>
                    <div className="ib">
                        <p>Hi {this.state.user.name}</p>
                        <CurrentWeight weight={this.state.user.current_weight} />
                        <label htmlFor="current">Current</label>
                    </div>
                    <div className="ib">
                        <StartingWeight weight={this.state.user.starting_weight} />
                        <label htmlFor="starting">Starting</label>
                    </div>
                </div>
                <span id="lb_wrap"><input required ame="log" id="log_input" placeholder="ex. 176" type="number" defaultValue={this.state.user.weight} /></span>
                <button className="bg_color_main" onClick={() => this.log_weight()}>Log Weight</button>
            </div>
        );
    }
}

export default LogWeightForm;