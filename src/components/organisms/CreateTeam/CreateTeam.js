import React, { Component } from 'react'
import Create from '../../molecules/Create/Create'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Snackbar from '../../atoms/snackbar/Snackbar'
import { ownerAdded, teammateAdded, listTeam } from '../../../store/actions/teamsaction'
class CreateTeam extends Component {
    constructor(props) {
        super(props)
     
        this.state = {
            teams: {
                teamName: '',
                owner: '',
                team: [],
                addMore:false
            }
        }
    }
        teamnameChange = (e) => {
        this.setState({
            teams: {
                ...this.state.teams,
                [e.target.name]: e.target.value
            }
        })
        console.log("checking", this.state.teams)
    }
       handler = (e) => {
        this.setState({
            teams: {
                ...this.state.teams,
                team:[...this.state.teams.team, e.target.value]
            }
        })
        console.log("checking", this.state.teams)
    }
    addATeam = () => {
        this.setState({
            teams: {
                ...this.state.teams,
                addMore:!this.state.teams.addMore
            }
        })
        this.props.dispatch(ownerAdded(this.state.teams.owner.employees.name))
    } 
    addToTeams = () => {
        this.props.dispatch(listTeam(this.state))
        this.props.history.push('/');
    }
 addmember = () => {
        this.setState({
            teams: {
                ...this.state.teams,
                addMore:!this.state.teams.addMore
            }
        })
        this.props.dispatch(teammateAdded(this.state.teams.team[0].employees.name))
    } 
    render() {
        console.log("check cond",this.state.teams.addMore)
       /*  const names = this.props.employeedata.map((element, i) => {
            console.log(element)
            return element.employees.name
        }) */
        console.log("is name coming?", /* names */)
        return (
            <div>
                {
                    this.state.teams.addMore?<Snackbar/>:""
                }
                <Create  ownerChange={this.teamnameChange} addTeammate={this.addATeam} dropdownData={this.props.employeedata}
                   teamdrop={this.props.teamdata} addedOwner={this.addATeam} addedTeam={this.addmember} addToTeamList={this.addToTeams}
                    addAMember={this.handler}
                />
                
                
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log('state coming', state.team)
    return {
        employeedata: state.employeeCopy,
        teamdata:state.teamCopy,
    }
}
export default withRouter(connect(mapStateToProps)(CreateTeam))