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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(findCurrentStateForSidebar(location.pathname, item.name));
  }, [location.pathname, item.name]);

  const handleParentItemClick = () => {
    if (item.url) {
      navigate(item.url);
      setSelectedUrl(item.url);
    } else {
      setOpen(!open); // Toggle the open state
      if (handleClick) {
        handleClick(item.name);
      }
    }
  };

  const handleNestedItemClick = (url) => {
    navigate(url);
    setSelectedUrl(url);
  };

  return (
    <div>
      <div
        onClick={handleParentItemClick}
        className={`sidebar-item ${selectedIndex === item.url ? 'selected' : ''} ${depth > 0 ? 'nested' : ''}`}
      >
        {item.children && (open ? '-' : '+')}
        <span>{item.name}</span>
      </div>
      {item.children && open && (
        <div className="sidebar-item-children">
          {item.children.map((subOption) => (
            <div key={subOption.name} onClick={() => handleNestedItemClick(subOption.url)}>
              <div className={`sidebar-item ${selectedIndex === subOption.url ? 'selected' : ''} nested`}>
                <span>{subOption.name}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Sidebar = () => {
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
