import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Inputfield({placeholder,type,name,dataChange,value}) {
     const classes = useStyles();
    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
      
          <Input placeholder={placeholder} type={type} value={value} inputProps={{ 'aria-label': 'description' }} name={name} onChange={dataChange} />
     
    </form>
        </div>
    )
}


