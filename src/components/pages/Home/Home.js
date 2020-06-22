import React from 'react'
import {Link} from 'react-router-dom'
export default function Home() {
    return (
        <div>
            <Link to='/addemployee'>Add Employee</Link>
            <br/>
            <Link to='/createteam'>Create Team</Link>
            <br/>
            <Link to='/teamlist'>Show Teams</Link>
        </div>
    )
}
