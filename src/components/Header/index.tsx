import React from "react";
import { Navbar } from "./styles";

interface HeaderProps {
  logo: string;
  logoAlt?: string;
  logoHeight?: number;
  logoWidth?: number;
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({
  logo = "/logo.png",
  logoAlt = "logo",
  logoHeight = 50,
  logoWidth = 50,
  children,
}) => {
  return (
    <header>
      <Navbar>
        <img src={logo} alt={logoAlt} height={logoHeight} width={logoWidth} />
        <div>{children}</div>
      </Navbar>
    </header>
  );
};

export default Header;
