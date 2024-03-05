import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import menuItems from '../config/sidebar.json';
import './style/sidebar.scss';


const findCurrentStateForSidebar = (pathname, targetString) => {
  const normalizedPathname = pathname.toLowerCase().replace(/\s/g, '');
  const normalizedTargetString = targetString.toLowerCase().replace(/\s/g, '');
  const result = normalizedPathname.includes(normalizedTargetString);

  return result;
};

const SidebarItem = ({ item, depth = 0, selectedIndex, setSelectedUrl, handleClick }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isOpen = item.url ? location.pathname === item.url : false;
  const [open, setOpen] = useState(isOpen);

  const handleItemClick = () => {
    if (item.url) {
      navigate(item.url);
      setSelectedUrl(item.url);
    } else if (item.children) {
      setOpen(!open);
    }
    if (handleClick) {
      handleClick(item.name);
    }
  };

  return (
    <div>
      <div className={`sidebar-item ${selectedIndex === item.url ? 'selected' : ''} ${depth > 0 ? 'nested' : 'main'} hover`} onClick={handleItemClick}>
        <div className="sidebar-item-content">
          {item.children && (open ? '-' : '+')}
          <span>{item.name}</span>
        </div>
      </div>
      {item.children && (
        <div className={`sidebar-item-children ${open ? 'open' : 'closed'}`}>
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
        </div>
      )}
    </div>
  );
};

const Sidebar = (props) => {
  const location = useLocation();
  const [selectedIndex, setSelectedUrl] = useState("");
  let { entity } = useParams();
  let constantConfig = menuItems[entity] || {};

  useEffect(() => {
    setSelectedUrl(location.pathname);
  }, [location.pathname]);

  const handleItemClick = (name) => {
    // Additional logic for handling click on parent items if needed
    console.log(`Clicked on parent item: ${name}`);
  };

  return (
    <div className='sidebar-container'>
      <div className="sidebar">
        {constantConfig.map((item) => (
          <SidebarItem
            key={item.name}
            item={item}
            handleClick={handleItemClick}
            selectedIndex={selectedIndex}
            setSelectedUrl={setSelectedUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
