import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Header, Icon, List, ListItem } from "semantic-ui-react";

class App extends Component {
  state = {
    values: [],
  };

  componentDidMount() {
    axios.get("http://localhost:5000/api/values").then((response) => {
      console.log(response);
      this.setState({
        values: response.data,
      });
    });
    // this.setState({
    //   values: [
    //     { id: 1, name: "Value 101" },
    //     { id: 2, name: "Value 102" },
    //   ],
    // });
  }

  render() {
    return (
      <div>
        <Header as="h2" icon textAlign="center">
          <Icon name="users" circular />
          <Header.Content>Friends</Header.Content>
        </Header>

        <List>
          {this.state.values.map((value: any) => (
            <ListItem key={value.id}>{value.name}</ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default App;
