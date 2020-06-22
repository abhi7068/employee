import React, { Component } from 'react'
import {Switch,Route} from 'react-router-dom'
import Home from '../pages/Home/Home'
import AddEmployee from '../pages/AddEmployee/AddEmployee'
import CreateTeamPage from '../pages/CreateTeam/CreateTeamPage'
import TeamList from '../pages/TeamList/TeamList'
import Repo from '../pages/Repo/Repo'
export default class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/addemployee" component={AddEmployee} ></Route>
                  
                    <Route exact path="/createteam" component={CreateTeamPage} ></Route>
                    
                    <Route exact path="/teamlist" component={TeamList} ></Route>
                   <Route exact path="/repouser" component={Repo} ></Route>
                </Switch>
            </div>
        )
    }
}
