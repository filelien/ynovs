import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSectionNavigation } from '../hooks/useSectionNavigation';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { navigateToSection } = useSectionNavigation();

  const handleNavigate = (id: string) => {
    if (location.pathname === '/') {
      navigateToSection(id);
    } else {
      window.location.href = `/#${id}`;
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex items-center space-x-4">
            <Logo className="h-20 w-auto" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">YNOV-AFRIK</h1>
              <p className="text-sm text-gray-600">Excellence IT & Data Services</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            <Link to="/services" className="text-gray-700 hover:text-blue-600 transition font-semibold text-lg">
              Services
            </Link>
            {location.pathname === '/' && (
              <>
                <button onClick={() => handleNavigate('expertise')} className="text-gray-700 hover:text-blue-600 transition font-medium">
              Expertise
            </button>
                <button onClick={() => handleNavigate('presence')} className="text-gray-700 hover:text-blue-600 transition font-medium">
                  Présence
                </button>
              </>
            )}
            <Link to="/projects" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Projets
            </Link>
            {location.pathname === '/' && (
              <>
                <button onClick={() => handleNavigate('technologies')} className="text-gray-700 hover:text-blue-600 transition font-medium">
                  Technologies
            </button>
                <button onClick={() => handleNavigate('certifications')} className="text-gray-700 hover:text-blue-600 transition font-medium">
              Certifications
            </button>
              </>
            )}
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition font-medium">
              À Propos
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Blog
            </Link>
            <Link to="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold text-lg">
              Contact
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <Link to="/services" onClick={() => setIsOpen(false)} className="block w-full text-left text-gray-700 hover:text-blue-600 py-2">
              Services
            </Link>
            {location.pathname === '/' && (
              <>
                <button onClick={() => handleNavigate('expertise')} className="block w-full text-left text-gray-700 hover:text-blue-600 py-2">
              Expertise
            </button>
                <button onClick={() => handleNavigate('presence')} className="block w-full text-left text-gray-700 hover:text-blue-600 py-2">
                  Présence
                </button>
              </>
            )}
            <Link to="/projects" onClick={() => setIsOpen(false)} className="block w-full text-left text-gray-700 hover:text-blue-600 py-2">
              Projets
            </Link>
            {location.pathname === '/' && (
              <>
                <button onClick={() => handleNavigate('technologies')} className="block w-full text-left text-gray-700 hover:text-blue-600 py-2">
                  Technologies
            </button>
                <button onClick={() => handleNavigate('certifications')} className="block w-full text-left text-gray-700 hover:text-blue-600 py-2">
              Certifications
            </button>
              </>
            )}
            <Link to="/about" onClick={() => setIsOpen(false)} className="block w-full text-left text-gray-700 hover:text-blue-600 py-2">
              À Propos
            </Link>
            <Link to="/blog" onClick={() => setIsOpen(false)} className="block w-full text-left text-gray-700 hover:text-blue-600 py-2">
              Blog
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition text-center">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
