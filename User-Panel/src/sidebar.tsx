import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    Input,
    Chip,
  } from "@material-tailwind/react";
  import { Link } from "react-router-dom";
  import SearchIcon from '@mui/icons-material/Search';

function Sidebar(){
    return (
        <Card className="fixed top-4 left-4 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <Typography variant="h3" color="blue-gray">
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

    );
  }

export { Sidebar };