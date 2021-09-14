import theme from './theme';
import './App.css';
import { ThemeProvider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { Typography  } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
 container:{
  width:'20rem',
  height:'30rem',
  borderRadius:'1rem',
  margin:'0 auto',
  backgroundColor:'#fff',
  display:'flex',
  flexDirection:'column'
 },
 hero:{
  backgroundImage:`url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60')`,
  height:'10rem',
  borderStartEndRadius:'1rem',
  borderTopLeftRadius:'1rem',
  backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
 },
 textCenter:{
    textAlign:'center',
    marginTop:'1rem',
 },
 textSecond:{
   textAlign:'center',
    marginTop:'1rem',
    fontSize:'1rem',
 },
 plan:{
   width:'15rem',
   height:'4rem',
   backgroundColor:'powderblue',
   marginTop:'1rem',
   margin:'0 auto',
   borderRadius:'.5rem',
   display:'flex',
   justifyContent:'space-around',
   alignItems:'center',
 },
 button:{
    margin:'0 auto',
    marginTop:'1rem',
 },
}));

function App() {
  const classes=useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Box className={classes.container}> 
          <Box className={classes.hero}></Box>
          <Typography variant="h5" component="h2" className={classes.textCenter}>
            Order Summary
          </Typography>
          <Typography variant="h5" component="p" color="textSecondary" className={classes.textSecond}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aliquid officia reprehenderit eveniet deserunt minus.
          </Typography>
          <Box className={classes.plan}>
            <Avatar src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"/>
            <Box ml={2}>
              <Typography variant="subtitle2" component="p">
                Guy Clemons
              </Typography>
              <Typography variant="subtitle2" color='textSecondary' component="p">
                May 14, 2020
              </Typography>
            </Box>
            <Box>
              <BookmarkBorderIcon/>
            </Box>
          </Box>
          <Button className={classes.button} variant="contained" color="primary">
            Proceed to Payment
          </Button>
          <Button className={classes.button}color="textSecondary">Cancel</Button>
        </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box className={classes.container}> 
          <Box className={classes.hero}></Box>
          <Typography variant="h5" component="h2" className={classes.textCenter}>
            Order Summary
          </Typography>
          <Typography variant="h5" component="p" color="textSecondary" className={classes.textSecond}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aliquid officia reprehenderit eveniet deserunt minus.
          </Typography>
          <Box className={classes.plan}>
            <Avatar src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"/>
            <Box ml={2}>
              <Typography variant="subtitle2" component="p">
                Guy Clemons
              </Typography>
              <Typography variant="subtitle2" color='textSecondary' component="p">
                May 14, 2020
              </Typography>
            </Box>
            <Box>
              <BookmarkBorderIcon/>
            </Box>
          </Box>
          <Button className={classes.button} variant="contained" color="primary">
            Proceed to Payment
          </Button>
          <Button className={classes.button}color="textSecondary">Cancel</Button>
        </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box className={classes.container}> 
          <Box className={classes.hero}></Box>
          <Typography variant="h5" component="h2" className={classes.textCenter}>
            Order Summary
          </Typography>
          <Typography variant="h5" component="p" color="textSecondary" className={classes.textSecond}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aliquid officia reprehenderit eveniet deserunt minus.
          </Typography>
          <Box className={classes.plan}>
            <Avatar src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"/>
            <Box ml={2}>
              <Typography variant="subtitle2" component="p">
                Guy Clemons
              </Typography>
              <Typography variant="subtitle2" color='textSecondary' component="p">
                May 14, 2020
              </Typography>
            </Box>
            <Box>
              <BookmarkBorderIcon/>
            </Box>
          </Box>
          <Button className={classes.button} variant="contained" color="primary">
            Proceed to Payment
          </Button>
          <Button className={classes.button}color="textSecondary">Cancel</Button>
        </Box>
        </Grid>
      </Grid>  
      </Container>
    </ThemeProvider>
  );
}

export default App;
