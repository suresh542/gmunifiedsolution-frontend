import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle  } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

import headerLogo from '../assets/GM-Footer.png'; // Adjust the path to your logo image

// Simple SVG social icons
const SocialFacebook = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);
const SocialTwitter = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
);
const SocialYoutube = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58a2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" /></svg>
);
const SocialInstagram = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
);
const SocialLinkedin = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
);

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Link to="/" className="flex items-center gap-2">

                <img src={headerLogo} alt="Logo" className="w-auto h-10 pe-3" />
                <span className="font-black text-lg text-white tracking-tight">GM <span>UNIFIED SOLUTION</span></span>
              </Link>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              GM Unified Solutions delivers tailored HR services — recruitment, payroll, training, and
              culture consulting — to help organizations attract, develop, and retain top talent.
            </p>
            <div className="flex gap-3">
              {[SocialFacebook, SocialTwitter, SocialYoutube, SocialInstagram, SocialLinkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-violet-400 hover:text-violet-400 transition-colors">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-3 text-sm">
              {['Talent Recruitment', 'Payroll & Benefits', 'Team Training', 'Culture Consulting', 'HR Outsourcing'].map((item) => (
                <li key={item}>
                  <Link to="/solutions" className="hover:text-violet-400 transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Utility Pages */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-wider">Utility pages</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'About Us', to: '/about' },
                { label: 'Services', to: '/solutions' },
                { label: 'Terms & Conditions', to: '/terms-conditions' },
                { label: 'Privacy Policy', to: '/privacy-policy' },
                { label: 'FAQs', to: '/faqs' },
                { label: 'Contact Us', to: '/contact' },
              ].map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-violet-400 transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-wider">Get in touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <FaWhatsapp   size={16} className="text-violet-400 mt-0.5 shrink-0" />
                <a
                  href="https://wa.me/919500499538"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-violet-400 transition-colors"
                >
                  +91 9500499538
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="text-violet-400 mt-0.5 shrink-0" />
                <a
                  href="mailto:support@GM.com"
                  className="hover:text-violet-400 transition-colors"
                >
                  support@gmunifiedsolution.com
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin size={16} className="text-violet-400 mt-0.5 shrink-0" />
                <span>1234 Maple Street, Suite 567 Los Angeles, CA 90001 USA</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-center text-sm text-gray-500">
          Copyright © 2026 GM | Developed by Suresh Kumar R, Freelancer
        </div>
      </div>
    </footer>
  );
}
