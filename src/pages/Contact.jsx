import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { FaWhatsapp } from 'react-icons/fa';


export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const API_URL = 'https://gm-unified-solutions-backend.vercel.app';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      console.log(res)
      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setErrorMsg(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg('Unable to connect to server. Please check your connection or try again later.');
    }
  };

  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="bg-white border-b py-14 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between">
          <div>
            <h1 className="text-4xl font-black text-gray-900">CONTACT US</h1>
            <p className="text-sm text-gray-500 mt-2">
              <span className="hover:text-violet-500 cursor-pointer">HOME</span>
              <span className="mx-2">»</span>
              <span>CONTACT US</span>
            </p>
          </div>
          <p className="text-gray-600 max-w-xs mt-4 sm:mt-0 text-right">
            Get in touch with our team — we're here to help.
          </p>
        </div>
        <div className="max-w-7xl mx-auto mt-6">
          <div className="h-1 bg-violet-400 rounded-full" />
        </div>
      </div>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: <FaWhatsapp size={24} />, title: 'Call Us', info: '+91 9500499538', sub: 'Mon-Fri, 9AM–6PM EST' },
              { icon: <Mail size={24} />, title: 'Email Us', info: 'support@GM.com', sub: 'We respond within 24 hours' },
              { icon: <MapPin size={24} />, title: 'Visit Us', info: '1234 Maple Street, Suite 567', sub: 'Los Angeles, CA 90001 USA' },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="bg-white rounded-2xl p-8 text-center border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-violet-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-black">{item.icon}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="font-semibold text-gray-800 text-sm">{item.info}</p>
                  <p className="text-gray-500 text-xs mt-1">{item.sub}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Info */}
            <AnimatedSection>
              <p className="text-violet-500 font-semibold text-sm uppercase tracking-wider mb-3">Get In Touch</p>
              <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6">
                Let's start a conversation about your HR needs
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you're looking to streamline recruitment, improve employee engagement, or outsource your HR operations, our experts are ready to build a solution tailored to your business.
              </p>

              <div className="space-y-5">
                {[
                  { icon: '✅', title: 'Free Consultation', desc: 'Talk to an HR expert with no obligation.' },
                  { icon: '⚡', title: 'Quick Response', desc: 'We reply within one business day.' },
                  { icon: '🔒', title: 'Confidential', desc: 'Your information stays private and secure.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 bg-violet-50 rounded-xl flex items-center justify-center text-xl shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* <div className="mt-10">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80"
                  alt="Contact our team"
                  className="rounded-2xl w-full h-56 object-cover"
                />
              </div> */}
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection delay={150}>
              {status === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={40} className="text-green-500" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3">Message Sent!</h3>
                  <p className="text-gray-500 max-w-sm">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-8 bg-violet-400 text-black font-bold px-8 py-3 rounded-full hover:bg-violet-500 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="bg-gray-50 rounded-3xl p-8">
                  <h3 className="text-xl font-black text-gray-900 mb-6">Send us a message</h3>

                  {status === 'error' && (
                    <div className="flex gap-3 bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
                      <AlertCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
                      <p className="text-sm text-red-700">{errorMsg}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@gm.com"
                          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 75550 00000"
                          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Subject *</label>
                        <select
                          name="subject"
                          required
                          value={form.subject}
                          onChange={handleChange}
                          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
                        >
                          <option value="">Select a topic</option>
                          <option value="Talent Recruitment">Talent Recruitment</option>
                          <option value="Payroll & Benefits">Payroll & Benefits</option>
                          <option value="Team Training">Team Training</option>
                          <option value="Culture Consulting">Culture Consulting</option>
                          <option value="HR Outsourcing">HR Outsourcing</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Others">Others</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Message *</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your HR challenges and how we can help..."
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full bg-gray-900 text-white font-bold py-4 rounded-xl hover:bg-gray-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          SEND MESSAGE
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-72 bg-gray-200 relative overflow-hidden">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3894.724521950684!2d78.3493859744212!3d12.534399924314162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac4b71e840b327%3A0x16511ea3d6b85a7b!2sGM%20Unified%20Solutions!5e0!3m2!1sen!2sin!4v1784035026602!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
        />
      </section>
    </div>
  );
}
