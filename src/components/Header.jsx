import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import headerLogo from '../assets/GM-logo.png'; // Adjust the path to your logo image

const usefulPages = [
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Blogs', to: '/blogs' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms of Service', to: '/terms-conditions' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive ? 'text-violet-600' : 'text-gray-800 hover:text-violet-600'
    }`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
           
             <img src={headerLogo} alt="Logo" className="w-auto h-10 pe-3" />
            <span className="font-black text-xl text-gray-900 tracking-tight">GM <span>UNIFIED SOLUTION</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavLink to="/" className={navLinkClass} end>HOME</NavLink>
            <NavLink to="/about" className={navLinkClass}>ABOUT US</NavLink>
            <NavLink to="/solutions" className={navLinkClass}>SERVICES</NavLink>
            <NavLink to="/faqs" className={navLinkClass}>FAQS</NavLink>
          <NavLink to="/contact" className={navLinkClass}>CONTACT US</NavLink> 
          </nav>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Useful Pages Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 text-sm font-medium text-gray-800 hover:text-violet-500 transition-colors border border-gray-200 rounded-full px-4 py-2"
              >
               More <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-xl py-2 z-50">
                  {usefulPages.map((p) => (
                    <Link
                      key={p.to}
                      to={p.to}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-violet-50 hover:text-violet-600 transition-colors"
                    >
                      {p.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {/* <Link
              to="/contact"
              className="bg-violet-400 hover:bg-violet-500 text-black font-bold text-sm px-6 py-2.5 rounded-full transition-colors duration-200"
            >
              CONTACT US
            </Link> */}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 flex flex-col gap-4">
            <NavLink to="/" className={navLinkClass} end>HOME</NavLink>
            <NavLink to="/about" className={navLinkClass}>ABOUT US</NavLink>
            <NavLink to="/solutions" className={navLinkClass}>SOLUTIONS</NavLink>
            <NavLink to="/faqs" className={navLinkClass}>FAQS</NavLink>
            <NavLink to="/contact" className={navLinkClass}>CONTACT US</NavLink>
            <div className="border-t pt-3">
              <p className="text-xs font-bold text-gray-400 mb-2">More</p>
              {usefulPages.map((p) => (
                <Link key={p.to} to={p.to} className="block py-1.5 text-sm text-gray-700 hover:text-violet-500">
                  {p.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
