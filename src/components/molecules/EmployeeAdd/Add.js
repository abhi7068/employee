import React from 'react'
import Input from '../../atoms/InputField/Input';
import Button from '../../atoms/Button/Buttonuse'
function Add(props) {
    return (
        <div>
             <Input placeholder="name" type="text" name="name" dataChange={props.dataChange} />
            <Input placeholder="email" type="text" name="email" dataChange={props.dataChange} />
            <Input placeholder="gituser" type="text" name="githubuser" dataChange={props.dataChange} />
            <Button onClick={props.onClick} name="Add"/>
        </div>
    )
}

export default Add
