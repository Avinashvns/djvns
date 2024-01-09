import React from 'react';
import { Button, Typography } from "@mui/material";
import { MYCOLOR } from '../utils/Mycolor';

const Simplebutton = ({ name, bgprimary, whitetext, fulwidth }) => {
    return (
        <>
            <Button variant='outlined'
                sx={{
                    backgroundColor: bgprimary ? MYCOLOR.primary : 'pink',
                    color: whitetext ? MYCOLOR.whitetext : MYCOLOR.blacktext,
                    width: fulwidth ? '100%' : 'auto',
                    // padding: padding || '8px', // Set padding based on the prop or use a default value
                }}>
                {name}
            </Button>
        </>
    );
}

const Outlinedbutton = ({ name, fulwidth }) => {
    return (
        <>
            <Button variant='outlined'
                sx={{
                    // backgroundColor: bgprimary ?  MYCOLOR.primary : 'pink'  ,
                    borderColor: MYCOLOR.primary,
                    color: MYCOLOR.blacktext,
                    width: fulwidth ? '100%' : 'auto',
                }}>
                {name}
            </Button>
        </>
    );
}

const Textbutton = ({ name, fulwidth, whitetext }) => {
    return (
        <>
            <Button variant='text'
                sx={{
                    color: 'white',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    width: fulwidth ? '100%' : 'auto',
                    '&:hover': {
                        textDecoration: 'none',
                        borderBottom: '2px solid red',
                        // color: MYCOLOR.hoverColor
                    }
                }}>
                {name}
            </Button>
        </>
    );
}

export { Simplebutton, Outlinedbutton, Textbutton };