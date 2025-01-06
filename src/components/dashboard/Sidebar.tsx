import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Book, Crown, Users, Settings, LogOut, Menu, X, Upload, BookOpen } from 'lucide-react';
import { useAuth } from '../../lib/AuthContext';
import Logo from '../ui/Logo';

const navigation = [
  { name: 'Overview', href: '/dashboard', icon: Book },
  { name: 'Media Upload', href: '/dashboard/media', icon: Upload },
  { name: 'Story So Far', href: '/dashboard/story', icon: BookOpen },
  { name: 'Upgrades', href: '/dashboard/upgrades', icon: Crown },
  { name: 'Collaboration', href: '/dashboard/collaboration', icon: Users },
];

export default function Sidebar() {
  const { signOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="fixed top-0 left-0 z-50 lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 text-gray-600 hover:text-gray-900"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 h-full w-64 bg-white border-r transform transition-transform duration-200 ease-in-out z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="h-full flex flex-col">
          <div className="h-16 flex items-center px-4 border-b">
            <Logo />
          </div>

          <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`
                    flex items-center px-2 py-2 text-sm font-medium rounded-lg
                    ${isActive 
                      ? 'bg-legacy-50 text-legacy-600' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
                  `}
                >
                  <item.icon className={`mr-3 h-5 w-5 ${isActive ? 'text-legacy-600' : 'text-gray-400'}`} />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="p-4 border-t">
            <button
              onClick={() => signOut()}
              className="flex items-center w-full px-2 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-900"
            >
              <LogOut className="mr-3 h-5 w-5 text-gray-400" />
              Sign Out
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}