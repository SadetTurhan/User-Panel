import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    Input,
  } from "@material-tailwind/react";
  import { Link } from "react-router-dom";
  import SearchIcon from '@mui/icons-material/Search';
  import LogoutIcon from '@mui/icons-material/Logout';
  import HomeIcon from '@mui/icons-material/Home';
  import TaskIcon from '@mui/icons-material/Task';
  import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
  import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
  import HelpIcon from '@mui/icons-material/Help';
  import SettingsIcon from '@mui/icons-material/Settings';
function Sidebar(){
    return (
      <div className="h-screen bg-gradient-to-r from-blue-gray-50 to-blue-gray-100">
        <Card className=" primary fixed top-4 left-4 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <Typography variant="h3" color="stone-300">
            Malwation
          </Typography>
        <Input label="Search" icon={<SearchIcon />} />
        </div>
        <List>
          <ListItem>
            <HomeIcon></HomeIcon> Home
          </ListItem>
          <ListItem>
            <FormatListBulletedIcon></FormatListBulletedIcon>Projects
          </ListItem>
          <ListItem>
            <TaskIcon></TaskIcon>Tasks
          </ListItem>
          <Link to="/userpanel"><ListItem selected>
            <SupervisorAccountIcon></SupervisorAccountIcon>Users
          </ListItem></Link>
          <ListItem>
            <HelpIcon></HelpIcon>Support
          </ListItem>
          <ListItem>
            <SettingsIcon></SettingsIcon>Settings
          </ListItem>
          <ListItem>
          <Link to="/">
            <LogoutIcon></LogoutIcon>Sign Out
            </Link>
          </ListItem>
        
        </List>
      </Card>
      </div>
    );
  }

export { Sidebar };