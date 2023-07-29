import React from 'react'
import { makeStyles } from '@material-ui/core';
const SelectButton = ({children,selected,onClick}) => {

    const useStyles = makeStyles({
        SelectButton: {
            border: "1px sloid gold",
            borderRadius: 5,
            padding: 10,
            paddingLeft: 20,
            paddingRight: 20,
            fontFamily: "Montserrat",
            cursor: "pointer",
            backgroundColor: selected ? "black" : "",
            fontWeight: selected ? 700 : 500,
            "&.hover": {
                backgroundColor: "gold",
                color: "black",
            },
            width: "22%", 
            margin: 5,
        },
    });

    const classes = useStyles();
  return (
    <span onClick = {onClick} className={classes.SelectButton}>
        {children}
        </span>
  )
}

export default SelectButton