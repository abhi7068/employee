import React from 'react'
import Input from '../../atoms/InputField/Input'
import Dropdown from '../../atoms/Dropdown/Dropdown'
import Button from '../../atoms/Button/Buttonuse'
export default function Create(props) {
    return (
        <div>
            <Input placeholder="Enter the team name" type="text" name="teamName" dataChange={props.ownerChange} />
            <Dropdown name="Add Owner" dropdownData={props.dropdownData} dataChange={props.ownerChange} obj="owner" />
            <Button onClick={props.addedOwner}  name="Add Owner" />
            <Dropdown name="team member" dropdownData={props.teamdrop} dataChange={props.addAMember} obj="team" />
             <Button /* addTeammate={props.onClick} */ name="Add a team member" onClick={props.addedTeam} />
            <Button /* onClick={props.onClick} */ name="Create Team" onClick={props.addToTeamList}/>
        </div>
    )
}
