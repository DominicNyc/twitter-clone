import React,{useState,useRef,useEffect} from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TwitterIcon from '@material-ui/icons/Twitter';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { TweenMax, Power3 } from 'gsap';


//! some styles for login form using material UI
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
    color: 'aqua'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  textColor: {
    color: '#40bbf4',
  },
  textinput: {
    backgroundColor: 'black',
  }
}));





const  Login = ({ setUserName, userName }) => {

  //! GSAP animation for login
  let login = useRef(null)
  useEffect(() => {
    TweenMax.from(login, 1, {opacity: -1, y: -400, ease: Power3.easeOut, delay: .7})
  },[])

  //! setting material ui styles to a variable
  const classes = useStyles();

  //! set inital value to input field as error and button disabled
  const[userError,setUserError] = useState(true);
  const [disabledButton, setDisabledButton] = useState(true);

  //! when user sets a username it sets error to false 
  //! then sets button to false also. So it is not disbaled
  const handleChange = (e) => {
    setUserName(e.target.value);

    if (userName !== ''){
      setUserError(false)
      setDisabledButton(false)

    } else if (userName !== '') {
      setUserError(true)
    }


  }

  //! when you click the button it wont reset the page
  const submitForm = (e) => {
    e.preventDefault();

  }

  return (
    <Container ref={ele => login = ele} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <TwitterIcon />
        </Avatar>
        <Typography className={classes.textColor}component="h1" variant="h5">
          Choose a Username
        </Typography>

        <form className={classes.form} noValidate onSubmit={submitForm}>
          <TextField
            className={classes.textinput}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Username"
            autoComplete='off'
            name="email"
            onChange={handleChange}
            error={userError}
          />
          
          <Link className='loginButton' to="/CreateTweet">
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={disabledButton}
            className={classes.submit}
            >
            Log In
            </Button>
          </Link>

        </form>
      </div>
    </Container>
  );
}

export default Login;