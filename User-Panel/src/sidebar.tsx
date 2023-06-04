import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
  } from "@material-tailwind/react";
  import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
  } from "@heroicons/react/24/solid";
  import { Link } from "react-router-dom";
   

function Sidebar(){
    return (
        <Card className="fixed top-4 left-4 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <Typography variant="h3" color="blue-gray">
            Malwation
          </Typography>
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
          <ListItem>
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