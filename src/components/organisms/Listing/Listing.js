
import {connect} from 'react-redux'
import React, { Component } from 'react'
import List from '../../molecules/List/List'
 class Listing extends Component {
    render() {
        return (
            <div>
                {
                    this.props.teams.map((element, i) => {
                        return (
                            <List details={element} id={i}/>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('teams',state.teams)
    return {
        teams:state.teams
    }
}
export default connect(mapStateToProps)(Listing)
