import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import backgroundImg from '../assets/Backgound1.png';
import { authService } from '../services/authService';

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      const res = await authService.login(formData);
      localStorage.setItem('token', res.token);
      // TODO: redirect to dashboard/home after success
      alert('Login success');
      navigate('/dashboard');
    } catch (err) {
      setError(err?.message || 'Login failed');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col lg:flex-row">
      {/* Left Panel - Background Image with Logo */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img 
          src={backgroundImg} 
          alt="LankaStay Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-white/70 border border-neutral-200 m-16 rounded-[30px] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-[80px] font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <span className="text-[#3252df]">Lanka</span>
              <span className="text-[#152c5b]">Stay.</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-8 py-10 sm:py-12">
        <div className="w-full max-w-[480px]">
          <h2 className="text-[32px] sm:text-[40px] font-medium mb-8 sm:mb-12 text-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Login Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8" noValidate>
                        {error && (
                          <div className="text-red-600 text-sm sm:text-base" role="alert">
                            {error}
                          </div>
                        )}
            {/* Username Field */}
            <div>
              <label className="block text-[18px] sm:text-[24px] font-normal mb-1 sm:mb-2 text-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
                className="w-full h-14 sm:h-[70px] px-4 sm:px-6 text-[16px] sm:text-[22px] border-2 sm:border-[2.5px] border-[#d2d2d2] rounded-[10px] outline-none focus:border-[#3252df] transition-colors"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-[18px] sm:text-[24px] font-normal mb-1 sm:mb-2 text-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="6+ characters"
                  className="w-full h-14 sm:h-[70px] px-4 sm:px-6 pr-12 sm:pr-14 text-[16px] sm:text-[22px] border-2 sm:border-[2.5px] border-[#d2d2d2] rounded-[10px] outline-none focus:border-[#3252df] transition-colors"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 text-[#d2d2d2] hover:text-[#3252df] transition-colors"
                >
                  {showPassword ? (
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Terms & Conditions */}
            <p className="text-[14px] sm:text-[16px] font-normal text-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
              By signing up you agree to{' '}
              <a href="#" className="text-[#003dfc] hover:underline">
                terms and conditions
              </a>{' '}
              at zoho.
            </p>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full h-16 sm:h-20 bg-[#003dfc] hover:bg-[#0035d6] text-white text-[22px] sm:text-[30px] font-medium rounded-[10px] transition-colors"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {submitting ? 'Logging in...' : 'Login'}
            </button>

            {/* Create Account Link */}
            <div className="text-center pt-3 sm:pt-4">
              <Link 
                to="/register" 
                className="text-[18px] sm:text-[24px] font-normal text-black underline hover:text-[#003dfc] transition-colors"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Create Account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
