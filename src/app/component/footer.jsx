"use client"
import { Box, Divider, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Bodytext, Headingtext } from "./utils/Mytypography";
import { MYCOLOR } from "./utils/Mycolor";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <>
            <Box style={{ backgroundColor: MYCOLOR.footer }} p={10} >
                <Grid container spacing={3}  >
                    <Grid item xs={12} sm={4}>
                        <Headingtext name={'ADVISION RESEARCH'} flexGrow={1} whiteColor={true} />
                        <br />
                        <Bodytext name={'School_365 is a collection of programs designed to assist schools in administering their executive responsibilities on a day-to-day basis. It is designed for SAAS (Software as a Service) projects.'}
                            whiteColor={true} />

                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Headingtext name={'Contact'} flexGrow={1} whiteColor={true} />
                        <Divider sx={{ width: '70px', backgroundColor: MYCOLOR.primary, height: '2px' }} />
                        <br />
                        <List sx={{ padding: 0, margin: 0 }}>
                            <ListItem sx={{ padding: 0 }}>
                                <ListItemButton href={'#'}
                                    sx={{
                                        textAlign: 'left',
                                        color: MYCOLOR.whitetext,
                                        padding: 0,
                                    }}>
                                    <ListItemIcon >
                                        <CallIcon sx={{ color: 'white' }} />
                                    </ListItemIcon>
                                    <ListItemText primary={"8756000012"} />

                                </ListItemButton>
                            </ListItem>
                            <ListItem sx={{ padding: 0 }}>
                                <ListItemButton href={'#'}
                                    sx={{
                                        textAlign: 'left',
                                        color: MYCOLOR.whitetext,
                                        padding: 0,
                                    }}>
                                    <ListItemIcon >
                                        <EmailIcon sx={{ color: 'white' }} />
                                    </ListItemIcon>
                                    <ListItemText primary={"migul@gmail.com"} />

                                </ListItemButton>
                            </ListItem>
                            <ListItem sx={{ padding: 0 }}>
                                <ListItemButton href={'#'}
                                    sx={{
                                        textAlign: 'left',
                                        color: MYCOLOR.whitetext,
                                        padding: 0,
                                    }}>
                                    <ListItemIcon >
                                        <LocationOnIcon sx={{ color: MYCOLOR.whitetext }} />
                                    </ListItemIcon>
                                    <ListItemText primary={"4333 Factoria Blvd SE, Bellevue, WA 98006"} />

                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Headingtext name={'Social'} flexGrow={1} whiteColor={true} />
                        <Divider sx={{ width: '70px', backgroundColor: MYCOLOR.primary, height: '2px' }} />
                        <br />
                        {/* Sicial Link */}
                        <IconButton
                            href={'https://twitter.com/example'}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Twitter"
                        >
                            <TwitterIcon sx={{ color: MYCOLOR.whitetext }} />
                        </IconButton>
                        <IconButton
                            href={'https://www.facebook.com/example'}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                        >
                            <FacebookIcon sx={{ color: MYCOLOR.whitetext }} />
                        </IconButton>
                        <IconButton
                            href={'https://www.linkedin.com/in/example'}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <LinkedInIcon sx={{ color: MYCOLOR.whitetext }} />
                        </IconButton>

                    </Grid>
                </Grid>
            </Box >
            <Box style={{ backgroundColor: MYCOLOR.footer }} paddingBottom={2} textAlign="center" >
                <Divider sx={{ backgroundColor: MYCOLOR.primary }} />
                <br />
                <Headingtext name={'© 2022 Academy, All rights reserved'} flexGrow={1} whiteColor={true} />
            </Box>
        </>
    );

}

export default Footer;