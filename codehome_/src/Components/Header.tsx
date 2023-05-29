import logo from '../Assets/HeaderComponent/logo.svg'
import imgRanting from '../Assets/HeaderComponent/ranting.svg'
import HomeImg from '../Assets/HeaderComponent/HomeImgLight.svg'
import ProjectImg from '../Assets/HeaderComponent/ProjectImg.svg'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="flex bg-blue-600 text-white">
        <div className="my-4 mx-4">
        <Link to="/">
            <img
                className="h-22 w-22"
                src={logo} alt="logo" 
            />
            </Link>
        </div>
        
        <div className="flex mx-auto space-x-4">
        <div className="flex text-gray-400 space-x-4">
          <div className="my-auto text-sm">
            <div className="my-auto">

            </div>
          </div>
          <div className="my-auto flex space-x-1">
            <img
              className="h-4 w-4 mt-1" 
              src={HomeImg} alt="" />
              Home
          </div>
          <div className="my-auto flex space-x-1">
          <img
              className="h-4 w-4 mt-1" 
              src={ProjectImg} alt="" />
              Project
          </div>
        </div>
          <div className="my-auto flex space-x-1">
            <div>
                <img
                    className="h-4 w-4 mt-1" 
                    src={imgRanting} alt="imgRanting" />
            </div>
            <div className="text-base">
              Ranking
            </div>
          </div>
        </div>
    </div>
    );
};

export default Header;
