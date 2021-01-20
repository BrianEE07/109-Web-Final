import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Chicken from '../img/login//chicken.png';
import { useHistory } from "react-router-dom";
import { checkUser, useAuthState, useAuthDispatch } from '../Context' 
import {createChick} from  '../chicken/axios.js'



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Web Final
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Login() {
  const classes = useStyles();
  // 
  // const rememberedAccount = localStorage.getItem("checked") === true ? localStorage.account : ""
  // console.log(localStorage.getItem("checked"))
  // console.log(rememberedAccount)
  const [account, setAccount] = useState("q");
  const [password, setPassword] = useState();
  const [error, setError] = useState({target: "", type: ""});
  const [isLogin, setIsLogin] = useState(false);
  const [checked, setChecked] = useState(false);
  let history = useHistory();

  const handleAccountChange = (e) => {
    setAccount(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  const handleCheck = () => {
    setChecked(!checked);
    console.log(checked)
    // localStorage.setItem("checked", checked)
  }
  const handleError = () => {
    if (account === "") {
      setError({target: "account", type: "Required text."});
    }
    else if (password === "") {
      setError({target: "password", type: "Required text."});
    }
    else return false;
    return true;
  }

  const handleMsgError = (msg) => {
    if (msg === "Account incorrect.") {
      setError({target: "account", type: "Can't find account. If you don't have one, please sign up!!"});
      // setAccount("");
    }
    else if (msg === "Password incorrect.") {
      setError({target: "password", type: "Password incorrect."});
      // setPassword("");
    }
    else return false;
    return true;
  }

  const redirect = () => {
    history.push("/game");
  }
  const dispatch = useAuthDispatch() //get the dispatch method from the useDispatch custom hook
  
  const onSubmit = async (e) => {
    e.preventDefault()
    if (handleError()) return;
    let payload = {account, password}
    let msg = await checkUser(dispatch, payload);
    try {
      if (handleMsgError(msg)) return;
      else {
        setError({target: "", type: ""});
      }
      if (msg === "Login Successfully!!"){
        console.log('hewertyutrewertytrewrtyu')
          // const chicken = await createChick("fat", 'firstTime')
          console.log("this is ", account)
          localStorage.setItem("account", account)
          await createChick({account: account, name: 4})
          // console.log(chicken)
          setIsLogin(true);
          console.log("Login SSSSSUUUUUCCCCCCEEEEESSSSS!!!!!");
          redirect();
      }
    }catch (error) {
      console.log(error)
    }
  }
  

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar} src={Chicken} alt="chicken">
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          {(error.target === 'account')
          ?<TextField
            error
            variant="outlined"
            margin="normal"
            fullWidth
            id="outlined-error-helper-text"
            label="Account"
            name="account"
            autoComplete="account"
            autoFocus
            helperText={error.type}
            value={account}
            onChange={handleAccountChange}
          />
          :<TextField
            variant="outlined"
            margin="normal"
            // required
            fullWidth
            id="account"
            label="Account"
            name="account"
            autoComplete="account"
            autoFocus
            value={account}
            onChange={handleAccountChange}
          />}
          {(error.target === 'password')
          ?<TextField
            error
            variant="outlined"
            margin="normal"
            fullWidth
            id="outlined-error-helper-text"
            label="Password"
            type="password"
            name="password"
            autoComplete="current-password"
            helperText={error.type}
            value={password}
            onChange={handlePasswordChange}
          />
          :<TextField
            variant="outlined"
            margin="normal"
            // required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={handlePasswordChange}
          />}
          <FormControlLabel
            control={<Checkbox checked={checked} onChange={handleCheck} value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={onSubmit}
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default Login
