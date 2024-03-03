import logo from '../../assets/images/logo.svg';
import home from '../../assets/icons/home.svg';
import notification from '../../assets/icons/notification.svg';
import logout from '../../assets/icons/logout.svg';
import avatar from '../../assets//images/avatars/avatar_1.png';

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 border-b border-[#3F3F3F] bg-[#1E1F24] py-4">
            <div className="container flex flex-col items-center justify-between gap-6 sm:flex-row">
                
                <a href="./index.html">
                    <img className="max-w-[100px] rounded-full lg:max-w-[130px]" src={logo} />
                </a>
                

                <div className="flex items-center space-x-4">
                    <a href="./index.html" className="btn-primary">
                        <img src={home} alt="Home" />
                        Home
                    </a>
                    <button className="icon-btn">
                        <img src={notification} alt="Notification" />
                    </button>
                    <button className="icon-btn">
                        <img src={logout} alt="Logout" />
                    </button>

                    <button className="flex-center !ml-8 gap-3">
                        <span className="text-lg font-medium lg:text-xl">Sumit</span>
                        <img className="max-h-[32px] max-w-[32px] lg:max-h-[44px] lg:max-w-[44px]"
                            src={avatar} alt="User Avatar" />
                    </button>
                </div>
                
            </div>
        </nav>
    );
};

export default Navbar;