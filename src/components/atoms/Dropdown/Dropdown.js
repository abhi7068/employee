import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function Dropdown(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      
      <FormControl className={classes.formControl}>
  <InputLabel id="demo-controlled-open-select-label">{props.name}</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
                  open={open}
                 name={props.obj} 
          onClose={handleClose}
          onOpen={handleOpen}
        /*  value={}  */
           onChange={props.dataChange}  
        >
          <MenuItem  value="" ></MenuItem>
          <MenuItem  ></MenuItem> 
                  {
                      props.dropdownData.map((element, i) => {
                          return (

                              <MenuItem key={i} value={element} >{element.employees.name}</MenuItem>
                          )
                      })
                  }
        </Select>
      </FormControl>
    </div>
  );
}