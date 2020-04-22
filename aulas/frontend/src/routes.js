import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import NewIncident from './pages/NewIncident';
import LogOn from './pages/Logon';
import Cadastro from './pages/Cadastro';
import Profile from './pages/Profile';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                {/* a props exact indica que o browserRouter verfica exatamente se a rota é a que está contida em path */}
                <Route path="/" exact component={LogOn} />
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    )
}