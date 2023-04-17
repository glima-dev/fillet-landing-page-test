import { StyledHeader } from "./styles";
import logo from "../../assets/Logo.svg";
import Nav from "../Nav";
import { CgMenu, CgClose } from "react-icons/cg";
import { useEffect, useState } from "react";

const Header = () => {
  const [switchBtIcon, setSwitchBtIcon] = useState(false);
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [navAnimation, setNavAnimation] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (document.body.clientWidth < 500) {
        setNavIsOpen(false);
        setNavAnimation(false);
        setSwitchBtIcon(true);
      } else {
        setNavIsOpen(true);
        setNavAnimation(true);
        setSwitchBtIcon(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClique = () => {
    setNavAnimation(!navAnimation);
    setSwitchBtIcon(!switchBtIcon);
    if (navAnimation) {
      setTimeout(() => setNavIsOpen(!navIsOpen), 500);
    } else {
      setSwitchBtIcon(!switchBtIcon);
      setNavIsOpen(!navIsOpen);
    }
  };

  return (
    <StyledHeader>
      <div>
        <img src={logo} alt="Logo" />
        <button onClick={handleClique}>
          <span className={switchBtIcon ? "menu" : "close"}>
            {switchBtIcon ? <CgMenu /> : <CgClose />}
          </span>
        </button>
        {navIsOpen && <Nav isOpen={navAnimation} />}
      </div>
    </StyledHeader>
  );
};

export default Header;
