import React, { useContext } from "react";
import { ApiContext } from "../context/ApiContext";
import { styled } from "@mui/system";
import { 
  AppBar, Toolbar,
  Typography, Badge
} from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { FiLogOut } from "react-icons/fi";
import { withCookies } from "react-cookie";

const classes = styled((theme) => ({
  bg: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = (props) => {
  const { askList, profiles } = useContext(ApiContext);
  const Logout = () => (event) => {
    props.cookies.remove("current-token");
    window.location.href = "/";
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" className={classes.title}>
          Band SNS
        </Typography>
        <Badge
          className={classes.bg}
          badgeContent={
            askList.filter((ask) => {
              return (
                ask.approved === false &&
                profiles.filter((item) => {
                  return item.userPro === ask.askFrom;
                })[0]
              );
            }).length
          }
          color="secondary"
        >
          <NotificationsIcon />
        </Badge>
        <button className="signOut" onClick={Logout()}>
          <FiLogOut />
        </button>
      </Toolbar>
    </AppBar>
  );
};

export default withCookies(Navbar);