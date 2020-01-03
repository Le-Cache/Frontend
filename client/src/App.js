import React from 'react';
import axios from 'axios';
import CardsContainer from './components/main/cardsContainer';
import Sidebar from './components/sidebar/sidebar';

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
            filters: []
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
                  filters: [...this.state.filters, event.target.name]
              })
            : this.setState({
                  filters: this.state.filters.filter(item => {
                      return item !== event.target.name;
                  })
              });
    };

    render() {
        if (this.state.users !== '') {
            return (
                <div className="App">
                    <Sidebar
                        filters={this.state.filters}
                        handlesChanges={this.handlesChanges}
                    />
                    <CardsContainer
                        users={this.state.users.filter(user => {
                            const program = 'Which program are you in?';
                            return this.state.filters.length > 0
                                ? this.state.filters.includes(
                                      user.fields[program]
                                  )
                                : user;
                        })}
                        handlesChanges={this.handlesChanges}
                    />
                </div>
            );
        } else {
            return <h2>Loading..</h2>;
        }
    }
}

export default App;
