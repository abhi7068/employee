import React, { Component } from 'react'
import Add from '../../molecules/EmployeeAdd/Add'
import { addEmployee } from '../../../store/actions/teamsaction'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
 class Employees extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            employees: {
                name: '',
                email: '',
                githubuser:''
             }
        }
    }
    handleChange = (e) => {
        this.setState({
            employees: {
                ...this.state.employees,
                [e.target.name]: e.target.value
            }
        })
         console.log("checking",this.state.employees)
    }
         
    addEmployee = () => {
        this.props.dispatch(addEmployee(this.state));
        this.props.history.push('/')
       }
    
    render() {
        return (
            <div>
                <Add dataChange={this.handleChange}  onClick={this.addEmployee}/>
            </div>
        )
    }
}
export default withRouter(connect()(Employees))