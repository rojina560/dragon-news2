import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";


const MainLayouts = () => {
    return (
        <div className="max-w-6xl mx-auto">
      
          <Outlet></Outlet>
        </div>
    );
};

export default MainLayouts;