import React, { Component } from 'react'
import { getRepo } from '../../../store/actions/teamsaction'
import { connect } from 'react-redux'
import {withRouter} from 'react-router'
class List extends Component {
    constructor(props) {
        super(props)
    
       /*  this.state = {
             
        } */
    }
    
    render() {
        return (
            <div>
                <>
                    <tr>
                        <td>Team Name</td>
                        <td>{this.props.details.teams.teamName}</td>
                    </tr>
                    <tr>
                        <td>Owner</td>
                        <tr>
                            <td>Name</td>
                             <td>{this.props.details.teams.owner.employees.name}</td>
                            <td>email</td>
                             <td>{this.props.details.teams.owner.employees.email}</td>
                             <td>gituser</td>
                            <button onClick={() => {
                                this.props.dispatch(getRepo(this.props.details.teams.owner.employees.name))
                                this.props.history.push('/repouser')
                        }}><a><td>{this.props.details.teams.owner.employees.githubuser}</td></a></button>
                        </tr>
                    </tr>
                     <tr>
                        <td>Team members</td>
                            {
                                this.props.details.teams.team.map((element, i) => {
                                    return (
                                        <tr key={i}>
                                   <td>name</td>
                                            <td>{element.employees.name}
                                            </td>
                            <td>email</td>
                            <td>{element.employees.email}</td>
                                            <td>gituser</td>
                                             <button onClick={() => {
                                this.props.dispatch(getRepo(this.props.details.teams.owner.employees.name))
                                this.props.history.push('/repouser')
                        }}><a><td>{element.employees.githubuser}</td></a></button>
                                            </tr>
                                    )
                                })
                            }
                            
                   </tr>
                    </>
            </div>
        )
    }
}
export default withRouter(connect()(List))