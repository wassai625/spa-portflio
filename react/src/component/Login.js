import React, { useReducer } from "react";
import { withCookies } from "react-cookie";
import axios from "axios";
import { 
  Avatar, Button, 
  TextField, Typography,
  Container, CircularProgress
} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { styled } from "@mui/system";
import {
  START_FETCH,
  FETCH_SUCCESS,ERROR_CATCHED,
  INPUT_EDIT_LOG,
  INPUT_EDIT_REG,TOGGLE_MODE,
} from "./ActionTypes";


const classes = styled((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  span: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "teal",
  },
  spanError: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "fuchsia",
    marginTop: 10,
  },
}));

const initialState = {
  isLoading: false,
  isLoginView: true,
  error: "",
  credentialsLog: {
    username: "",
    password: "",
  },
  credentialsReg: {
    email: "",
    password: "",
  },
};

const loginReducer = (state, action) => {
  switch (action.type) {
    case START_FETCH: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case ERROR_CATCHED: {
      return {
        ...state,
        error: "Email or password is not correct!",
        isLoading: false,
      };
    }
    case INPUT_EDIT_LOG: {
      return {
        ...state,
        credentialsLog: {
          ...state.credentialsLog,
          [action.inputName]: action.payload,
        },
        error: "",
      };
    }
    case INPUT_EDIT_REG: {
      return {
        ...state,
        credentialsReg: {
          ...state.credentialsReg,
          [action.inputName]: action.payload,
        },
        error: "",
      };
    }
    case TOGGLE_MODE: {
      return {
        ...state,
        isLoginView: !state.isLoginView,
      };
    }
    default:
      return state;
  }
};

const Login = (props) => {
  const [state, dispatch] = useReducer(loginReducer, initialState);

  const inputChangedLog = () => (event) => {
    dispatch({
      type: INPUT_EDIT_LOG,
      inputName: event.target.name,
      payload: event.target.value,
    });
  };

  const inputChangedReg = () => (event) => {
    dispatch({
      type: INPUT_EDIT_REG,
      inputName: event.target.name,
      payload: event.target.value,
    });
  };

  const login = async (event) => {
    event.preventDefault();
    if (state.isLoginView) {
      try {
        dispatch({ type: START_FETCH });
        const res = await axios.post(
          // process.env.BACKEND_URL + "authen/",
          "http://52.194.180.73:8000/authen",
          state.credentialsLog,
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        props.cookies.set("current-token", res.data.token);
        res.data.token
          ? (window.location.href = "/home")
          : (window.location.href = "/");
        dispatch({ type: FETCH_SUCCESS });
      } catch {
        dispatch({ type: ERROR_CATCHED });
      }
    } else {
      try {
        dispatch({ type: START_FETCH });
        await axios.post(
          // process.env.BACKEND_URL + "api/user/create/",
          "http://52.194.180.73:8000/api/user/create",
          state.credentialsReg,
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        dispatch({ type: FETCH_SUCCESS });
        dispatch({ type: TOGGLE_MODE });
      } catch {
        dispatch({ type: ERROR_CATCHED });
      }
    }
  };

  const toggleView = () => {
    dispatch({ type: TOGGLE_MODE });
  };

  return (
    <Container maxWidth="xs">
      <form onSubmit={login}>
        <div className={classes.paper}>
          {state.isLoading && <CircularProgress />}
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5">
            {state.isLoginView ? "Login" : "Register"}
          </Typography>

          {state.isLoginView ? (
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Email"
              name="username"
              value={state.credentialsLog.username}
              onChange={inputChangedLog()}
              autoFocus
            />
          ) : (
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Email"
              name="email"
              value={state.credentialsReg.email}
              onChange={inputChangedReg()}
              autoFocus
            />
          )}

          {state.isLoginView ? (
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={state.credentialsLog.password}
              onChange={inputChangedLog()}
            />
          ) : (
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={state.credentialsReg.password}
              onChange={inputChangedReg()}
            />
          )}
          <span className={classes.spanError}>{state.error}</span>

          {state.isLoginView ? (
            !state.credentialsLog.password || !state.credentialsLog.username ? (
              <Button
                className={classes.submit}
                type="submit"
                fullWidth
                disabled
                variant="contained"
                color="primary"
              >
                Login
              </Button>
            ) : (
              <Button
                className={classes.submit}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Login
              </Button>
            )
          ) : !state.credentialsReg.password || !state.credentialsReg.email ? (
            <Button
              className={classes.submit}
              type="submit"
              fullWidth
              disabled
              variant="contained"
              color="primary"
            >
              Register
            </Button>
          ) : (
            <Button
              className={classes.submit}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Register
            </Button>
          )}

          <span onClick={() => toggleView()} className={classes.span}>
            {state.isLoginView ? "Create Accout ?" : "Back to login ?"}
          </span>
        </div>
      </form>
    </Container>
  );
};

export default withCookies(Login);