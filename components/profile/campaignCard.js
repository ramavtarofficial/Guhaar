import { useState, useEffect } from 'react';
import { Typography, Container, Card, CardMedia, Grid, CardContent, TextField, Box, LinearProgress } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    border: "None",
  }));

const CampaignCard = () => {
    const name = "Covid Relief";
    const category = "Education, Health, and Wellness";
    const description = "Campaign Description";
    const raised = 2;
    const goal = 10;
    const image = "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
    const backers = 201
    const daysLeft = "2"

    return ( 
        <div className="Card" style={{
            width: "100%",
            maxWidth: "800px",
            padding: "10px",
            // backgroundColor: "#1b1717",
        }}>
            
            <Card sx={{ display: 'flex' }} fullWidth>
                <CardMedia
                        component="img"
                        sx={{ maxWidth: 250 }}
                        image={image}
                    />
                <Box sx={{ display: 'flex', flexDirection: 'column',  maxWidth: 550 , width: "100%"}} fullWidth>
                    <CardContent sx={{ flex: '1 0 auto' }} fullWidth>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {category}
                        </Typography>
                        <Typography component="div" variant="h5">
                            {name}
                        </Typography>
                        <br />
                        <Typography variant="body2" color="text.secondary" component="p">
                            {description}
                        </Typography>
                        <br />
                        <LinearProgress variant="determinate" value={raised*100/goal} />
                        <Grid container spacing={8} style={{
                            alignContent: "space-between",
                        }}>
                            {/* <Grid xs={12} sm={1} item /> */}
                            <Grid xs={12} sm={4} item spacing={{xs: 2,sm: 2}}>
                                <Item variant='outlined'>
                                    <Typography variant="h6" component="div">
                                        ⧫{raised} 
                                    </Typography>
                                </Item>
                                <Item variant='outlined'>
                                    <Typography variant="body2" component="div">
                                        raised of ⧫{goal}
                                    </Typography>
                                </Item>
                            </Grid>
                            {/* <Grid xs={12} sm={1} item /> */}
                            <Grid xs={12} sm={4} item spacing={{xs: 2,sm: 2}}>
                                <Item variant='outlined'>
                                    <Typography variant="h6" component="div">
                                        {backers}
                                    </Typography>
                                </Item>
                                <Item variant='outlined'>
                                    <Typography variant="body2" component="div">
                                        Backers
                                    </Typography>
                                </Item>
                            </Grid>
                            {/* <Grid xs={12} sm={1} item /> */}
                            <Grid xs={12} sm={4} item spacing={{xs: 2,sm: 2}}>
                                <Item variant='outlined'>
                                    <Typography variant="h6" component="div">
                                        {daysLeft}
                                    </Typography>
                                </Item>
                                <Item variant='outlined'>
                                    <Typography variant="body2" component="div">
                                        Days Left
                                    </Typography>
                                </Item>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Box>
            </Card>
        </div>
     );
}
 
export default CampaignCard;