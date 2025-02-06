import React, { useState } from 'react';
import { 
  Home, Users, Settings, LogOut,
  Menu, Sun, Moon
} from 'lucide-react';

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const colors = {
    primary: darkMode ? '#D4C5B2' : '#8B7355',
    background: darkMode ? '#1A1A1A' : '#F5F1EA',
    secondary: darkMode ? '#2D2D2D' : '#FFFFFF',
    text: darkMode ? '#F5F1EA' : '#4A3F35',
  };

  const menuItems = [
    { icon: Home, label: 'Dashboard' },
    { icon: Users, label: 'Team' },
    { icon: Settings, label: 'Settings' },
    { icon: LogOut, label: 'Logout' }
  ];

  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: colors.background }}
    >
      {/* Header */}
      <header 
        className="h-16 flex items-center justify-between px-4 z-30"
        style={{ backgroundColor: colors.secondary }}
      >
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden"
          >
            <Menu size={24} style={{ color: colors.text }} />
          </button>

          {/* Animated Cube Logo */}
          <div className="w-12 h-12">
            <svg viewBox="0 0 100 100" className="w-full h-full animate-spin" style={{ animationDuration: '20s' }}>
              <path d="M50 20 L80 35 L80 65 L50 80 L20 65 L20 35 Z" 
                fill={colors.primary} 
                opacity="0.6"
              >
                <animate
                  attributeName="opacity"
                  values="0.6;0.8;0.6"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </path>
              <path d="M50 20 L80 35 L50 50 L20 35 Z" 
                fill={colors.primary} 
                opacity="0.8"
              />
              <path d="M50 50 L80 35 L80 65 L50 80 Z" 
                fill={colors.primary} 
                opacity="0.4"
              />
            </svg>
          </div>

          <h1 
            className="text-xl font-bold"
            style={{ color: colors.text }}
          >
            Dashboard
          </h1>
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full"
          style={{ backgroundColor: `${colors.primary}20` }}
        >
          {darkMode ? 
            <Sun size={20} style={{ color: colors.primary }} /> : 
            <Moon size={20} style={{ color: colors.primary }} />
          }
        </button>
      </header>

      <div className="flex-1 flex">
        {/* Sidebar */}
        <aside 
          className={`fixed lg:static w-64 h-[calc(100vh-4rem)] transition-all duration-300 z-20 ${
            sidebarOpen ? 'left-0' : '-left-64'
          }`}
          style={{ backgroundColor: colors.secondary }}
        >
          {/* Welcome Message */}
          <div className="p-6 border-b" style={{ borderColor: `${colors.primary}20` }}>
            <h2 
              className="text-lg font-semibold mb-2"
              style={{ color: colors.text }}
            >
              Welcome Back!
            </h2>
            <p style={{ color: colors.primary }}>
              Have a great day ahead
            </p>
          </div>

          {/* Navigation Menu */}
          <nav className="p-4">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className="w-full flex items-center space-x-3 p-3 mb-2 rounded-lg transition-colors duration-200 hover:opacity-80"
                style={{ 
                  backgroundColor: index === 0 ? `${colors.primary}20` : 'transparent',
                  color: colors.text
                }}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-6">
          <div 
            className="mb-6 p-6 rounded-xl"
            style={{ backgroundColor: colors.secondary }}
          >
            <h2 
              className="text-2xl font-bold mb-2"
              style={{ color: colors.text }}
            >
              Welcome to Your Dashboard
            </h2>
            <p style={{ color: colors.primary }}>
              This is a simple and clean dashboard layout. Add your content here.
            </p>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer 
        className="h-16 flex items-center justify-center px-4"
        style={{ backgroundColor: colors.secondary }}
      >
        <p style={{ color: colors.text }}>
          © 2025 Your Company. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Dashboard;
