import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Chicken from '../img/chicken2.png';
import { signUp } from './axios';
import { useHistory } from "react-router-dom";
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';


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
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignUp() {
  const classes = useStyles();
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState({target: "", type: ""});
  const [signupSuccess, setSignUpSuccess] = useState(false);
  let history = useHistory();


  const handleAccountChange = (e) => {
    setAccount(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleError = () => {
    if (email === "") {
      setError({target: "email", type: "Required text."});
    }
    else if (account === "") {
      setError({target: "account", type: "Required text."});
    }
    else if (password === "") {
      setError({target: "password", type: "Required text."});
    }
    else return false;
    return true;
  }

  const handleMsgError = (msg) => {
    if (msg === "Email duplicate.") {
      setError({target: "email", type: `Email \"${email}\" already exists!! Please enter another one.`});
    //   setEmail("");
    }
    else if (msg === "Account duplicate.") {
      setError({target: "account", type: `Account \"${account}\" already exists!! Please choose another one.`});
    //   setAccount("");
    }
    else return false;
    return true;
  }

  const redirect = () => {
    history.push("/login");
  }

  const onSubmit = async () => {
    if (handleError()) return;
    let chicken = [];
    let msg = await signUp({email, account, password, chicken});
    if (handleMsgError(msg)) return;
    else {
      setError({target: "", type: ""});
    }
    if (msg === "Signup Successfully!!"){
        setSignUpSuccess(true);
        console.log("Signup SSSSSUUUUUCCCCCCEEEEESSSSS!!!!!")
        // redirect();
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {(signupSuccess)
        ?<Alert severity="success">This is a success alert — check it out!</Alert>:<div/>}
        <Avatar className={classes.avatar} src={Chicken} alt="chicken">
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
            {(error.target === 'email')
            ?<TextField
                error
                variant="outlined"
                required
                fullWidth
                id="outlined-error-helper-text"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                helperText={error.type}
                value={email}
                onChange={handleEmailChange}
            />
            :<TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={handleEmailChange}
            />}
            </Grid>
            <Grid item xs={12}>
            {(error.target === 'account')
            ?<TextField
                error
                variant="outlined"
                fullWidth
                required
                id="outlined-error-helper-text"
                label="Account"
                name="account"
                autoComplete="account"
                helperText={error.type}
                value={account}
                onChange={handleAccountChange}
            />
            :<TextField
                variant="outlined"
                required
                fullWidth
                id="account"
                label="Account"
                name="account"
                autoComplete="account"
                value={account}
                onChange={handleAccountChange}
            />}
            </Grid>
            <Grid item xs={12}>
            {(error.target === 'password')
            ?<TextField
                error
                variant="outlined"
                fullWidth
                required
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
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={handlePasswordChange}
            />}
            </Grid>
          </Grid>
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={onSubmit}
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
export default SignUp