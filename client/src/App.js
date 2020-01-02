import React from 'react';
import axios from 'axios';
import CardsContainer from './components/main/cardsContainer';
import Sidebar from './components/sidebar/sidebar';
import './App.css';

/*
App
-Sidebar
--Logo (not a component)
--Tract Selection Filter...thing
--Navigation (About, Airtable, Slack)
-Main Card Thing
--Cards Component (house all the cards/introduce pagination)
---Individual card component
*/

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            users: '',
            filters: {
                AND: false,
                DS: false,
                iOS: false,
                WEB: false,
                UX: false
            }
        };
    }

    componentDidMount() {
        axios
            .get(
                'https://api.airtable.com/v0/appaTBcrHMzJR6ZnS/lecache?api_key=keyXAJzv0BQkXWbI8'
            )
            .then(res => {
                console.log(res.data.records);
                this.setState({ users: res.data.records });
                // console.log(res.data.records[0].fields['First Name']);
            })
            .catch(error => console.log(error));
    }

    handlesChanges = event => {
        event.target.checked
            ? this.setState({
                  filters: { ...this.state.filters, [event.target.name]: true }
              })
            : this.setState({
                  filters: { ...this.state.filters, [event.target.name]: false }
              });
    };

    render() {
        return (
            <div className="App">
                <Sidebar
                    filters={this.state.filters}
                    handlesChanges={this.handlesChanges}
                />
                <CardsContainer
                    users={this.state.users}
                    handlesChanges={this.handlesChanges}
                />
            </div>
        );
    }
}

export default App;
