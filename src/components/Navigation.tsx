
import { Link, useLocation } from 'react-router-dom';
import { Github, Linkedin } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/blog', label: 'Blog' },
    { path: '/resume', label: 'Resume' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="bg-slate-800 px-8 py-4 flex justify-between items-center">
      <div className="text-white text-xl font-bold">
        UFITINEMA Nickson
      </div>
      
      <div className="flex items-center space-x-8">
        <div className="flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-gray-300 hover:text-white transition-colors duration-200 ${
                location.pathname === item.path ? 'text-white font-semibold' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        
        <div className="flex space-x-3">
          <Github size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
          <Linkedin size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
