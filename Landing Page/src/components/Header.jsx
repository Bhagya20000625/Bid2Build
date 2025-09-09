import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../assets/Logo1.jpg"; // adjust path if needed

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "/about" },
    { name: "How it works", href: "#how-it-works" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "#footer" },
  ];

  const handleNav = (href) => {
    if (href.startsWith("#")) {
      if (location.pathname === "/") {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          setIsMenuOpen(false);
        }
      } else {
        navigate("/", { state: { scrollTo: href } });
        setIsMenuOpen(false);
      }
    } else {
      navigate(href);
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Background Video */}
      <video
        className="fixed inset-0 w-full h-full object-cover -z-10"
        src="https://videos.pexels.com/video-files/19736907/19736907-uhd_2560_1440_30fps.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <header className="fixed top-0 w-full bg-black/20 backdrop-blur-lg border-b border-white/10 z-50">
        <div className="  px-4 sm:px-1 lg:px-1">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Link
                to="/"
                onClick={() => {
                  if (location.pathname === "/")
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  else navigate("/");
                }}
              >
                <img
                  src={Logo}
                  alt="Logo"
                  className="h-20 w-auto object-contain cursor-pointer"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNav(item.href)}
                  className="text-white/90 hover:text-white transition-colors duration-200 font-medium text-sm"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => navigate("/login")}
                className="px-4 py-2 text-white/90 hover:text-white transition-colors font-medium text-sm"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/register")}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg text-white font-medium text-sm transition-all duration-200"
              >
                Register
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-white/90 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-white/10 bg-black/30 backdrop-blur-lg">
              <div className="px-2 py-4 space-y-3">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNav(item.href)}
                    className="block w-full text-left px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 font-medium"
                  >
                    {item.name}
                  </button>
                ))}

                <div className="pt-4 space-y-3 border-t border-white/10">
                  <button
                    onClick={() => {
                      navigate("/login");
                      setIsMenuOpen(false);
                    }}
                    className="w-full px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg font-medium text-left"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => {
                      navigate("/register");
                      setIsMenuOpen(false);
                    }}
                    className="w-full px-3 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-medium transition-all duration-200"
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
