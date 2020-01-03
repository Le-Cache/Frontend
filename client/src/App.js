import React from 'react';
import axios from 'axios';
import CardsContainer from './components/main/cardsContainer';
import Sidebar from './components/sidebar/sidebar';
import { Route } from 'react-router-dom';
import About from './components/main/about.js';
import './styles/index.css';
require('dotenv').config();

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
            .get(process.env.REACT_APP_APIKEY)
            .then(res => {
                console.log(res.data.records);
                this.setState({
                    users: res.data.records.filter(
                        record => record.fields['Approved']
                    )
                });
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

    removeFromFilter = program => {
        this.setState({
            filters: this.state.filters.filter(item => {
                return item !== program;
            })
        });
    };

    render() {
        return (
            <>
                {this.state.users !== '' ? (
                    <div className="app">
                        <Sidebar
                            filters={this.state.filters}
                            handlesChanges={this.handlesChanges}
                        />
                        <Route
                            exact
                            path="/"
                            render={props => (
                                <CardsContainer
                                    {...props}
                                    filters={this.state.filters}
                                    users={this.state.users.filter(user => {
                                        const program =
                                            'Which program are you in?';
                                        return this.state.filters.length > 0
                                            ? this.state.filters.includes(
                                                  user.fields[program]
                                              )
                                            : user;
                                    })}
                                    handlesChanges={this.handlesChanges}
                                    removeFromFilter={this.removeFromFilter}
                                />
                            )}
                        />
                        <Route exact path="/about" component={About} />
                    </div>
                ) : (
                    <div className="app">
                        <Sidebar
                            filters={this.state.filters}
                            handlesChanges={this.handlesChanges}
                        />
                        <Route
                            exact
                            path="/"
                            render={props => (
                                <CardsContainer
                                    {...props}
                                    filters={this.state.filters}
                                    users={{}}
                                    handlesChanges={this.handlesChanges}
                                    removeFromFilter={this.removeFromFilter}
                                />
                            )}
                        />
                    </div>
                )}
            </>
        );
    }
}

export default App;
