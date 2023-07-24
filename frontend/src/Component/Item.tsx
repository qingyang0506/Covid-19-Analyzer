import { MenuItem, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";
import { ItemProp } from "../Type";

const Item = ({ title, to, icon, selected, setSelected }: ItemProp) => {
  const { toggleSidebar } = useProSidebar();
  const navigate = useNavigate();

  return (
    <MenuItem
      active={selected === title}
      icon={icon}
      onClick={() => {
        setSelected(title);
        toggleSidebar();
        navigate(to);
      }}
    >
      {title}
    </MenuItem>
  );
};

export default Item;
