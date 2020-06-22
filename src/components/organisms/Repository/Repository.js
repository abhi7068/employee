import React, { Component } from 'react'
import { connect } from 'react-redux'
import Repouser from '../../molecules/Repo/Repouser'
 class Repository extends Component {
     render() {
        if(this.props.error){
            return(
                <p>Error</p>
            )

        }
        return (
            <div>
               {
                    this.props.repodata.map((element, i) => {
                        return (
                             <Repouser details={element} id={i} />
                        )
                    })
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log("api data",state.repos)
    return {
        repodata: state.repos,
        error:state.error
    }
}
export default connect(mapStateToProps)(Repository)