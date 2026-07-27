import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Users, FileCheck2, Wallet, ClipboardList, Search, GraduationCap, FolderCheck, Trophy, UserCheck, Clock3 } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import isoImg from '../assets/ISOImg.jpg';
import GSTImg from '../assets/GSTImg.jpg';

const services = [
  { icon: ShieldCheck, title: 'Factory Registration', color: 'bg-violet-600' },
  { icon: ClipboardList, title: 'Statutory Compliance', color: 'bg-orange-500' },
  { icon: FileCheck2, title: 'Shop & Establishment', color: 'bg-sky-700' },
  { icon: Wallet, title: 'Payroll Processing', color: 'bg-red-600' },
  // { icon: Users, title: 'Recruitment Services', color: 'bg-sky-500' },
  // { icon: GraduationCap, title: 'NAPS & NATS Registration', color: 'bg-lime-600' },
  // { icon: Search, title: 'HR Audit Services', color: 'bg-fuchsia-700' },
  // { icon: FolderCheck, title: 'Monthly Documentation', color: 'bg-amber-600' },
];

const differentiators = [
  {
    icon: Trophy,
    title: 'Best In Class Solutions',
    desc: 'We offer comprehensive HR, payroll, and statutory compliance solutions across every phase of your company\u2019s growth.',
  },
  {
    icon: UserCheck,
    title: 'Dedicated Professionals',
    desc: 'Our team of dedicated specialists focuses on delivering effective and swift solutions toward all your compliance needs.',
  },
  {
    icon: Clock3,
    title: 'Reduced Time & Costs',
    desc: 'Our end-to-end solutions unburden your team from compliance worries and save valuable time and operational costs.',
  },
];

export default function About() {
  const createCertImage = (label, accent) => {
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
        <rect width="800" height="500" fill="#f8fafc"/>
        <rect x="70" y="70" width="660" height="360" rx="28" fill="#ffffff" stroke="#e2e8f0" stroke-width="3"/>
        <rect x="110" y="120" width="580" height="220" rx="24" fill="${accent}" opacity="0.12"/>
        <circle cx="260" cy="230" r="88" fill="${accent}" opacity="0.14"/>
        <path d="M222 176h76v108h-76z" fill="${accent}" opacity="0.9"/>
        <path d="M240 214h40" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>
        <path d="M240 242h28" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/>
        <text x="400" y="208" text-anchor="middle" font-family="Arial, sans-serif" font-size="48" font-weight="700" fill="#0f172a">${label}</text>
        <text x="400" y="270" text-anchor="middle" font-family="Arial, sans-serif" font-size="26" fill="#475569">Certified Company</text>
        <text x="400" y="320" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" fill="#64748b">Trusted for quality and compliance</text>
      </svg>`;

    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  };

  const certifications = [
    {
      title: 'ISO Certified Company',
      subtitle: 'Quality Management',
      description:
        'Our systems are aligned with internationally recognized standards, giving clients confidence in the quality, consistency, and reliability of our compliance services.',
      image: isoImg,
    },
    {
      title: 'GST Registered Company',
      subtitle: 'Tax-Compliant Operations',
      description:
        'We operate with full GST compliance support, ensuring transparent documentation and dependable business processes for every engagement.',
      image: GSTImg,
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % certifications.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-20">
      <div className="bg-slate-900 py-16 px-4 text-center">
        <p className="text-orange-500 font-bold text-4xl uppercase tracking-widest mb-3">About Us</p>
        <h1 className="text-4xl font-black text-white mb-4">GM Unified Solutions</h1>
        {/* <p className="text-sm text-gray-300">
          <span className="hover:text-orange-400 cursor-pointer">Home</span>
          <span className="mx-2">›</span>
          <span>About Us</span>
        </p> */}
      </div>

      {/* Who We Are */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-orange-500 font-semibold text-xl uppercase tracking-widest mb-3">Who We Are</p>
            <h2 className="text-3xl font-black text-gray-900 mb-8">GM Unified Solutions</h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-justify">
              Founded in 2021, GM Unified Solutions is a trusted HR, Payroll, and Statutory Compliance
              consultancy providing comprehensive business compliance solutions across pan India. We
              specialize in Factory Compliance, Labour Law Compliance, Payroll Processing, EPF, ESIC,
              Professional Tax, Labour Welfare Fund (LWF), Business Registrations, Licences, HR
              Documentation, and other statutory services for manufacturing industries, MSMEs, startups,
              contractors, and commercial establishments.
            </p>

            <p className="text-gray-700 leading-relaxed mb-10 text-justify">
              Our mission is to simplify complex regulatory requirements through reliable, timely, and
              cost-effective solutions. With a strong commitment to professionalism, compliance, and
              client satisfaction, we serve as a one-stop compliance partner, helping businesses stay
              legally compliant while focusing on growth and operational excellence.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-2 border-orange-500 text-orange-500 font-bold text-sm px-8 py-3 rounded-full hover:bg-orange-500 hover:text-white transition-colors uppercase tracking-wide"
            >
              Let Us Help You <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Vision & Mission / Core Commitment */}
      <section className="py-20 bg-emerald-50 border-t border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&q=80"
                alt="Compliance planning illustration"
                className="rounded-3xl w-full h-80 object-cover"
              />
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Vision & Mission</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                To be India's most trusted HR, Payroll, and Statutory Compliance partner by delivering
                reliable, technology-driven, and customer-centric solutions that enable businesses to
                achieve sustainable growth while maintaining complete legal compliance.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                To simplify business compliance through professional, timely, and cost-effective
                services, helping organizations across India with HR management, payroll processing,
                statutory registrations, labour law compliance, licensing, and regulatory support.
              </p>

              <h3 className="text-2xl font-black text-gray-900 mb-3">Core Commitment</h3>
              <p className="text-gray-700 leading-relaxed">
                Delivering Compliance. Empowering Businesses. Building Long-Term Partnerships.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* We're here to help - dark tile section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">We're Here To Help</p>
              <h2 className="text-4xl font-black text-white leading-tight mb-6">
                Flexible, Secure<br />and Reliable
              </h2>
              <p className="text-gray-400 leading-relaxed">
                We at GM Unified Solutions are dedicated to deliver the best possible services with
                absolute professionalism to meet your exact needs and enhance your business performance.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="grid grid-cols-2">
                {services.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <div
                      key={i}
                      className={`${s.color}  flex flex-col items-center text-center gap-3 aspect-square justify-center`}
                    >
                      <Icon className="text-white" size={30} />
                      <p className="text-white text-sm font-semibold leading-tight">{s.title}</p>
                    </div>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">Why Us?</p>
            <h2 className="text-3xl font-black text-gray-900">What Makes Us Different</h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-3 gap-10">
            {differentiators.map((d, i) => {
              const Icon = d.icon;
              return (
                <AnimatedSection key={i} delay={i * 100}>
                  <Icon className="text-orange-500 mb-4" size={32} />
                  <h3 className="font-bold text-gray-900 mb-2">{d.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{d.desc}</p>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
            {/* Certifications Slider */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            {/* <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">Certifications</p> */}
            <h2 className="text-3xl font-black text-gray-900">We Are A Certified Company</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Our commitment to excellence is backed by recognized standards and compliant business practices.
            </p>
          </AnimatedSection>

          <div className="  p-4 sm:p-8">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-5 items-center">
              <AnimatedSection>
                <img
                  src={certifications[activeSlide].image}
                  alt={certifications[activeSlide].title}
                  className="w-auto h-90 rounded-xl ps-10 sm:ps-8 sm:pe-8"
                />
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">
                  {certifications[activeSlide].subtitle}
                </p>
                <h3 className="text-2xl font-black text-gray-900 mb-4">{certifications[activeSlide].title}</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {certifications[activeSlide].description}
                </p>

                <div className="flex gap-2 mt-6">
                  {certifications.map((item, index) => (
                    <button
                      key={item.title}
                      onClick={() => setActiveSlide(index)}
                      className={`h-2.5 rounded-full transition-all ${activeSlide === index ? 'w-8 bg-orange-500' : 'w-2.5 bg-gray-300'}`}
                      aria-label={`Show ${item.title}`}
                    />
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <AnimatedSection>
              <h2 className="text-2xl lg:text-3xl font-black text-white max-w-lg">
                Get personalized support for your HR, Payroll & Compliance needs.
              </h2>
              <p className="text-gray-400 mt-3">
                From factory licensing to statutory returns, our team handles the compliance so you can focus on growing your business.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <Link to="/contact" className="inline-flex items-center gap-2 border-2 border-white text-white font-bold px-8 py-3.5 rounded-full hover:bg-white hover:text-gray-900 transition-colors whitespace-nowrap">
                GET IN TOUCH <ArrowRight size={16} />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}