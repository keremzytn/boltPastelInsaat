import { Menu, X, Home } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  scrolled: boolean;
}

export default function Navigation({ scrolled }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Ana Sayfa', href: '#hero' },
    { label: 'Hakkımızda', href: '#about' },
    { label: 'Kat Planları', href: '#floor-plans' },
    { label: 'Olanaklar', href: '#amenities' },
    { label: 'Galeri', href: '#gallery' },
    { label: 'İletişim', href: '#contact' },
  ];

  const handleClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Home className={`h-8 w-8 ${scrolled ? 'text-slate-800' : 'text-white'}`} />
            <span
              className={`text-2xl font-bold ${scrolled ? 'text-slate-800' : 'text-white'
                }`}
            >
              Pastel İnşaat
            </span>
          </div>

          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleClick(item.href)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${scrolled ? 'text-slate-700' : 'text-white'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden ${scrolled ? 'text-slate-800' : 'text-white'}`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleClick(item.href)}
                className="block w-full text-left text-slate-700 hover:text-blue-600 font-medium py-2"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
