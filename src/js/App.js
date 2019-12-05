import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import '../styles/style.sass';

import MyCollections from './my-collections/MyCollections';
import Collection from './collection/Collection';
import Error from './Error';
import Details from './details/Details';

class App extends React.Component {
    //styled components
    // ify z nullem
    // zapisz odpowiedz z unsplash w store
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={MyCollections} exact />
                    <Route path="/collection/:id" component={Collection} />
                    <Route path="/details/:id" component={Details} />
                    <Route component={Error} />
                </Switch>
            </BrowserRouter>
        )
    }

};


ReactDOM.render(<App />, document.getElementById('app'));