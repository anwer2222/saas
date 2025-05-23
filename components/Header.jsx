import ButtonSecondary from "./ButtonSecondary";
import Logo from "./Logo";
const Header = () => {
    return (
        <header className="h-[80px] bg-[#1e4f43] fixed top-0 left-0 right-0 z-10 flex items-center">
            <div className="container mx-auto flex justify-between items-center px-6 xl:px-0">
              {/* logo */}
              <Logo/>
              {/* btn */}
              <ButtonSecondary btnText="سجل الان"/>

            </div>
        </header>
    )
}

export default Header;