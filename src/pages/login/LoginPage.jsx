import React, { useState } from 'react';
import { Eye, EyeOff, User, Lock, Sun, Moon } from 'lucide-react';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempted with:', { username, password });
  };

  // Warm beige color palette
  const colors = {
    primary: darkMode ? '#D4C5B2' : '#8B7355',
    background: darkMode ? '#1A1A1A' : '#F5F1EA',
    input: darkMode ? 'rgba(212, 197, 178, 0.1)' : 'rgba(139, 115, 85, 0.1)',
    text: darkMode ? '#F5F1EA' : '#4A3F35',
    focus: darkMode ? '#D4C5B2' : '#8B7355'
  };

  return (
    <div 
      className="min-h-screen w-full relative overflow-hidden flex items-center justify-center transition-colors duration-300"
      style={{ backgroundColor: colors.background }}
    >
      {/* Animated Background SVG */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <pattern 
          id="iso-pattern" 
          x="0" 
          y="0" 
          width="40" 
          height="40" 
          patternUnits="userSpaceOnUse"
        >
          <path 
            d="M20 0 L40 10 L20 20 L0 10 Z" 
            fill="none" 
            stroke={colors.primary} 
            strokeWidth="0.5" 
            opacity="0.2"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#iso-pattern)"/>
        
        {/* Animated floating cubes */}
        <g className="animate-spin" style={{ transformOrigin: '650px 125px', animationDuration: '20s' }}>
          <path d="M600 100 L650 125 L650 175 L600 150 Z" fill={colors.primary} opacity="0.6">
            <animate
              attributeName="opacity"
              values="0.6;0.8;0.6"
              dur="3s"
              repeatCount="indefinite"
            />
          </path>
          <path d="M650 125 L700 100 L700 150 L650 175 Z" fill={colors.primary} opacity="0.4">
            <animate
              attributeName="opacity"
              values="0.4;0.6;0.4"
              dur="3s"
              repeatCount="indefinite"
            />
          </path>
          <path d="M600 100 L650 75 L700 100 L650 125 Z" fill={colors.primary} opacity="0.5">
            <animate
              attributeName="opacity"
              values="0.5;0.7;0.5"
              dur="3s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </svg>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-4 right-4 p-2 rounded-full transition-colors duration-300 z-20"
        style={{ backgroundColor: colors.input }}
      >
        {darkMode ? 
          <Sun size={24} style={{ color: colors.primary }} /> : 
          <Moon size={24} style={{ color: colors.primary }} />
        }
      </button>

      {/* Login Container */}
      <div 
        className="relative z-10 w-full max-w-md p-8 mx-4 rounded-2xl backdrop-blur-lg shadow-xl transition-colors duration-300"
        style={{ 
          backgroundColor: darkMode ? 'rgba(26, 26, 26, 0.8)' : 'rgba(245, 241, 234, 0.8)',
          boxShadow: `0 4px 24px ${darkMode ? 'rgba(0,0,0,0.4)' : 'rgba(139, 115, 85, 0.2)'}` 
        }}
      >
        <div className="text-center mb-8">
          <h1 
            className="text-3xl font-bold mb-2 transition-colors duration-300"
            style={{ color: colors.text }}
          >
            Welcome Back
          </h1>
          <p style={{ color: colors.primary }}>Please sign in to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username Input */}
          <div className="relative">
            <User 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-300" 
              size={20}
              style={{ color: colors.primary }}
            />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg outline-none ring-offset-2 transition-colors duration-300"
              style={{ 
                backgroundColor: colors.input,
                color: colors.text,
                border: `2px solid transparent`,
                '--tw-ring-color': colors.focus,
                '--tw-ring-offset-color': colors.background,
              }}
              onFocus={(e) => e.target.style.border = `2px solid ${colors.focus}`}
              onBlur={(e) => e.target.style.border = '2px solid transparent'}
              placeholder="Username"
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <Lock 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-300" 
              size={20}
              style={{ color: colors.primary }}
            />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-12 py-3 rounded-lg outline-none ring-offset-2 transition-colors duration-300"
              style={{ 
                backgroundColor: colors.input,
                color: colors.text,
                border: `2px solid transparent`,
                '--tw-ring-color': colors.focus,
                '--tw-ring-offset-color': colors.background,
              }}
              onFocus={(e) => e.target.style.border = `2px solid ${colors.focus}`}
              onBlur={(e) => e.target.style.border = '2px solid transparent'}
              placeholder="Password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 transition-colors duration-300"
              style={{ color: colors.primary }}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg transition-colors duration-300 hover:opacity-90"
            style={{ 
              backgroundColor: colors.primary,
              color: darkMode ? '#1A1A1A' : '#F5F1EA',
              outline: 'none'
            }}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
