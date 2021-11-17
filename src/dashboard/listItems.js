import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import BookIcon from "@mui/icons-material/Book";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import { NavLink } from "react-router-dom";

export const mainListItems = (
  <div>
    <NavLink
      to="/dashboard"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </NavLink>
    <NavLink to="/books" style={{ textDecoration: "none", color: "inherit" }}>
      <ListItem button>
        <ListItemIcon>
          <LibraryBooksIcon />
        </ListItemIcon>
        <ListItemText primary="Books" />
      </ListItem>
    </NavLink>
    <NavLink to="/users" style={{ textDecoration: "none", color: "inherit" }}>
      <ListItem button>
        <ListItemIcon>
          <PeopleOutlineIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
      </ListItem>
    </NavLink>
    <NavLink to="/mybooks" style={{ textDecoration: "none", color: "inherit" }}>
      <ListItem button>
        <ListItemIcon>
          <BookIcon />
        </ListItemIcon>
        <ListItemText primary="My books" />
      </ListItem>
    </NavLink>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>My Profile</ListSubheader>
    <NavLink
      to="/dashboard"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <ListItem button>
        <ListItemIcon>
          <PersonOutlineIcon />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItem>
    </NavLink>
    <NavLink
      to="/dashboard"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <ListItem button>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
    </NavLink>
  </div>
);
