import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
import LogWeightForm from './LogWeightForm';
import StatusTable from './StatusTable';
//import Login from './Login';


var user = {};//{name: "brad", id: 1, weight: 212};
var users = {};

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {user: user};
        this.responseFacebook = this.responseFacebook.bind(this);
        this.check_user = this.check_user.bind(this);
        this.set_user = this.set_user.bind(this);
    }

    
    responseFacebook(response) {

        let user_data = new FormData();
        user_data.append("id", response.id);
        user_data.append("email", response.email);
        user_data.append("name", response.name);

        this.check_user(user_data);

    }

    set_user(data) {
      let u = this.state.user;
      u.name = data.name;
      u.id = data.id;
      u.current_weight = data.current;
      u.goal_weight = data.goal;
      u.starting_weight = data.starting;
      this.setState({user : u});
    }

    check_user = (user_data) => {
      console.log(this);

      let custom_headers = new Headers({
        "X-Downpound-V2": true,
      });
        //console.log(creds);
        fetch("http://downlb.com/dealwithit.php?rand=" + Math.random() + "&action=login", {
          mode: "cors",
          headers: custom_headers,
          method: "POST",
          body: user_data
        }).then(function(response) {return response.json()})
        .then(function(data) {
          console.log(this.state);
          console.log(data);
          if (data.success === true) {
            this.set_user(data.user);
          }
          else {
            alert(data.msg);
          }
          
        }.bind(this)).catch(error => console.log("error: "+error));

        //return {success: false, error: "unknown"};

    }
    
  render() {
    return (
      <div>
          {this.state.user.id ?
            <div>
                <LogWeightForm user={this.state.user} />
                <StatusTable />
            </div>
            :<FacebookLogin
            appId= '894780907265218'
            autoLoad={true}
            fields="name,email"
            scope=""
            callback={this.responseFacebook}
          />
            
        }
      </div>
    );
  }
}

export default App;
