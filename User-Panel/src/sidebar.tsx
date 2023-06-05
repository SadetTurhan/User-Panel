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
            Home
          </ListItem>
          <ListItem>
            Projects
          </ListItem>
          <ListItem>
            Tasks
          </ListItem>
          <ListItem selected>
            Users
          </ListItem>
          <ListItem>
            Support
          </ListItem>
          <ListItem>
            <ListItemPrefix>
             
            </ListItemPrefix>
                 
          </ListItem>
          <ListItem>
          
            Settings
          </ListItem>
          
          <ListItem>
          <Link to="/">
            Sign Out
            </Link>
          </ListItem>
        
        </List>
      </Card>
      </div>
    );
  }

export { Sidebar };