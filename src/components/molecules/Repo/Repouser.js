import React from 'react'

function Repouser(props) {
    return (
        <div>
            <img src={props.details.avatar_url} />
            <p>Name:</p>
            <p>{props.details.login}</p>
            <p>Company:</p>
            <p>{props.details.company}</p>
        </div>
    )
}

export default Repouser
