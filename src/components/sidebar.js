import React, { useState, useEffect } from "react";
import { List, ListItem, ListItemText, Collapse, Drawer } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';
import menuItems from '../config/sidebar.json';
import './style/sidebar.scss';

const findCurrentStateForSidebar = (pathname, targetString) => {
  const normalizedPathname = pathname.toLowerCase().replace(/\s/g, '');
  const normalizedTargetString = targetString.toLowerCase().replace(/\s/g, '');
  const result = normalizedPathname.includes(normalizedTargetString);

  return result
}

const SidebarItem = ({ item, depth = 0, selectedIndex, setSelectedUrl, handleClick }) => {
  const navigate = useNavigate();
  const location = useLocation();


  let currentOpenState = findCurrentStateForSidebar(location.pathname, item.name)
  
  const [open, setOpen] = useState(currentOpenState);

  const handleItemClick = () => {
    if (item.url) {
      navigate(item.url);
      setSelectedUrl(item.url);
    } else {
      setOpen(!open);
      if (handleClick) {
        handleClick(item.name);
      }
    }
  };

  return (
    <div >
      <ListItem
        button
        onClick={handleItemClick}
        className={`${
          selectedIndex === item.url ? 'selected ' : ''
        }sidebar-child-listitem ${depth > 0 ? 'nested-list-item' : ''}`}
      >
        {item.children && (open ? <ExpandLess /> : <ExpandMore />)}
        <ListItemText primary={item.name} />
      </ListItem>
      {item.children && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List>
            {item.children.map((subOption) => (
              <SidebarItem
                key={subOption.name}
                item={subOption}
                depth={depth + 1}
                handleClick={handleClick}
                selectedIndex={selectedIndex}
                setSelectedUrl={setSelectedUrl}
              />
            ))}
          </List>
        </Collapse>
      )}
    </div>
  );
};

const Sidebar = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedIndex, setSelectedUrl] = useState("");
  let { entity } = useParams();
  let constantConfig = menuItems[entity] || {};

  useEffect(() => {
    const resultArray = location.pathname;
    setSelectedUrl(resultArray);
  }, [location.pathname]);

  const handleItemClick = (name) => {
    // Additional logic for handling click on parent items if needed
    console.log(`Clicked on parent item: ${name}`);
  };

  return (
    <div className='sidebar-container'>
      <Drawer variant="permanent" anchor="left" open>
        <div>
          <List>
            {constantConfig.map((item) => (
              <SidebarItem
                key={item.name}
                item={item}
                handleClick={handleItemClick}
                selectedIndex={selectedIndex}
                setSelectedUrl={setSelectedUrl}
              />
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default Sidebar;
