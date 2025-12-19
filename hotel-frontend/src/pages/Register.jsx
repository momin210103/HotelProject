import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImg from '../assets/Backgound1.png';
import { authService } from '../services/authService';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    username: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);

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
      await authService.register(formData);
      setSuccess(true);
    } catch (err) {
      setError(err?.message || 'Registration failed');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex">
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

      {/* Right Panel - Registration Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-8 py-12">
        <div className="w-full max-w-[480px]">
          {!success && (
            <>
              <h2 className="text-[40px] font-medium mb-12 text-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Create Account
              </h2>

              <form onSubmit={handleSubmit} className="space-y-8" noValidate>
            {/* Name Field */}
            <div>
              <label className="block text-[24px] font-normal mb-2 text-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full h-[70px] px-6 text-[22px] border-[2.5px] border-[#d2d2d2] rounded-[10px] outline-none focus:border-[#3252df] transition-colors"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-[24px] font-normal mb-2 text-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
                E mail
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@gmail.com"
                className="w-full h-[70px] px-6 text-[22px] border-[2.5px] border-[#d2d2d2] rounded-[10px] outline-none focus:border-[#3252df] transition-colors"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              />
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-[24px] font-normal mb-2 text-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Phone No
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="With Country Code"
                className="w-full h-[70px] px-6 text-[22px] border-[2.5px] border-[#d2d2d2] rounded-[10px] outline-none focus:border-[#3252df] transition-colors"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              />
            </div>

            {/* Country Field */}
            <div>
              <label className="block text-[24px] font-normal mb-2 text-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Country
              </label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Country Name"
                className="w-full h-[70px] px-6 text-[22px] border-[2.5px] border-[#d2d2d2] rounded-[10px] outline-none focus:border-[#3252df] transition-colors"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              />
            </div>

            {/* Username Field */}
            <div>
              <label className="block text-[24px] font-normal mb-2 text-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
                className="w-full h-[70px] px-6 text-[22px] border-[2.5px] border-[#d2d2d2] rounded-[10px] outline-none focus:border-[#3252df] transition-colors"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-[24px] font-normal mb-2 text-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="6+ characters"
                  className="w-full h-[70px] px-6 pr-14 text-[22px] border-[2.5px] border-[#d2d2d2] rounded-[10px] outline-none focus:border-[#3252df] transition-colors"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-[#d2d2d2] hover:text-[#3252df] transition-colors"
                >
                  {showPassword ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Terms & Conditions */}
            <p className="text-[16px] font-normal text-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
              By signing up you agree to{' '}
              <a href="#" className="text-[#003dfc] hover:underline">
                terms and conditions
              </a>{' '}
              at zoho.
            </p>

            {error && (
              <div className="text-red-600 text-base" role="alert">{error}</div>
            )}

            {/* Register Button */}
            <button
              type="submit"
              className="w-full h-20 bg-[#003dfc] hover:bg-[#0035d6] text-white text-[30px] font-medium rounded-[10px] transition-colors"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {submitting ? 'Creating account...' : 'Register'}
            </button>

            {/* Login Link */}
            <div className="text-center pt-4">
              <Link 
                to="/login" 
                className="text-[24px] font-normal text-black underline hover:text-[#003dfc] transition-colors"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Login
              </Link>
            </div>
          </form>
            </>
          )}

          {success && (
            <div className="w-full">
              <div className="mb-8 flex items-center gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <h2 className="text-[34px] md:text-[40px] font-medium text-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Account Created
                </h2>
              </div>
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm">
                <p className="text-[18px] md:text-[20px] text-[#152c5b] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Your account has been created successfully. You can now log in and start booking your perfect stay.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/login"
                    className="inline-flex h-14 items-center justify-center rounded-[10px] bg-[#003dfc] px-6 text-white text-[20px] font-medium hover:bg-[#0035d6]"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Go to Login
                  </Link>
                  <Link
                    to="/"
                    className="inline-flex h-14 items-center justify-center rounded-[10px] border-2 border-[#d2d2d2] px-6 text-[20px] text-[#152c5b] hover:border-[#3252df] hover:text-[#3252df]"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
