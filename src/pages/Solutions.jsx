import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronDown, ArrowRight, Star } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import ServiceImg1 from '../assets/ServiceImg1.png'; // Adjust the path to your image

// Services for small & growing businesses (offices, startups, service companies)
const smallBusinessServices = [
  {
    icon: '🏢',
    title: 'Shop & Establishment Registration and Renewals',
    desc: 'Complete registration and timely renewal support under the Shops & Establishment Act, ensuring your business operates on a fully compliant legal footing from day one.',
    featured: false,
  },
  {
    icon: '💵',
    title: 'Payroll Processing Services',
    desc: 'Accurate, on-time payroll processing including salary computation, statutory deductions, payslip generation, and full & final settlements.',
    featured: false,
  },
  {
    icon: '📑',
    title: 'Statutory Compliance Services',
    desc: 'EPF, ESI, PT & LWF — end-to-end monthly, half-yearly and annual return filing, so you never miss a statutory deadline.',
    featured: false,
  },
  {
    icon: '🧾',
    title: 'GST Registration, Returns & Compliance',
    desc: 'New GST registration, monthly/quarterly return filing, annual returns, and reconciliation — handled accurately and on schedule.',
    featured: false,
  },
  {
    icon: '🪪',
    title: 'Trade License Registration and Renewals',
    desc: 'Hassle-free trade license registration and renewal support to keep your business legally authorized to operate.',
    featured: false,
  },
  {
    icon: '🔍',
    title: 'HR Audit Services',
    desc: 'Independent audit of your HR policies, payroll records, and statutory compliance to identify and close gaps before they become penalties.',
    featured: false,
  },
  {
    icon: '📁',
    title: 'HR Documentation',
    desc: 'Professionally drafted offer letters, appointment letters, HR policies, employee handbooks, and compliance-ready documentation.',
    featured: false,
  },
];

// Services for industrial & manufacturing companies (plants, factories, units)
const industrialServices = [
  {
    icon: '🏭',
    title: 'Factory License Registration and Renewals',
    desc: 'End-to-end factory license registration and renewal support under the Factories Act, ensuring uninterrupted, compliant plant operations.',
    featured: false,
  },
  {
    icon: '👷',
    title: 'Contract Labour License Registration and Renewals',
    desc: 'Registration and renewal of contract labour licenses under the CLRA Act for both principal employers and contractors.',
    featured: false,
  },
  {
    icon: '♻️',
    title: 'Pollution Control Board Registration and Renewals',
    desc: 'Consent to Establish/Operate and other Pollution Control Board registrations and renewals, managed end-to-end.',
    featured: false,
  },

  {
    icon: '🔥',
    title: 'Fire License Registration and Renewals',
    desc: 'Fire safety license registration and renewal coordination to keep your facility compliant and audit-ready.',
    featured: false,
  },
  {
    icon: '🍽️',
    title: 'Food License Registration and Renewals',
    desc: 'FSSAI food license registration and renewal support for manufacturing units and facilities with food handling operations.',
    featured: false,
  },
  {
    icon: '👥',
    title: 'Staffing Solutions',
    desc: 'Temporary, contract, and bulk workforce deployment for plants and industrial units — charges starting from 5% of annual CTC.',
    featured: false,
  },
  {
    icon: '🎓',
    title: 'Apprenticeship Act Process – NAPS & NATS',
    desc: 'End-to-end apprentice registration and compliance under NAPS & NATS, including onboarding, stipend reimbursement claims, and reporting.',
    featured: false,
  },
];

const faqLinks = [
  {
    title: 'Payroll & Compliance',
    desc: 'Learn how we manage payroll processing, statutory deductions, PF, ESI, and labour law compliance.',
    action: 'EXPLORE SERVICES',
  },
  {
    title: 'GST & Registration',
    desc: 'Get answers about GST registration, return filing, business registrations, and renewals.',
    action: 'VIEW DETAILS',
  },
  {
    title: 'Staffing Solutions',
    desc: 'Discover our recruitment, contract staffing, workforce management, and hiring support services.',
    action: 'LEARN MORE',
  },
  {
    title: 'Contact Our Experts',
    desc: 'Need personalized assistance? Our compliance and HR experts are ready to help your business.',
    action: 'GET IN TOUCH',
  },
];

// Reusable card for the first two "large" featured-style slots
function BigCard({ s, i }) {
  return (
    <AnimatedSection delay={i * 100}>
      <div
        className={`p-8 rounded-2xl border h-full transition-all duration-500 hover:shadow-lg ${s.featured
          ? 'bg-gray-900 text-white border-gray-900 scale-105'
          : 'bg-white border-gray-200'
          }`}
      >
        <div className="text-4xl mb-5">{s.icon}</div>
        <h3 className={`font-bold text-xl mb-3 ${s.featured ? 'text-white' : 'text-gray-900'}`}>{s.title}</h3>
        <p className={`text-sm leading-relaxed mb-6 ${s.featured ? 'text-gray-300' : 'text-gray-500'}`}>{s.desc}</p>
        <button className={`inline-flex items-center gap-2 font-bold text-sm px-5 py-2.5 rounded-full ${s.featured ? 'bg-violet-400 text-black' : 'bg-gray-900 text-white'} hover:opacity-90 transition-opacity`}>
          READ MORE <ChevronRight size={14} />
        </button>
      </div>
    </AnimatedSection>
  );
}

// Reusable card for the smaller 3-column slots
function SmallCard({ s, i }) {
  return (
    <AnimatedSection delay={i * 80}>
      <div
        className={`p-8 rounded-2xl border h-full transition-all duration-500 hover:shadow-lg ${s.featured
          ? 'bg-gray-900 text-white border-gray-900 scale-105'
          : 'bg-white border-gray-200'
          }`}
      >
        <div className="text-3xl mb-4">{s.icon}</div>
        <h3 className={`font-bold text-xl mb-3 ${s.featured ? 'text-white' : 'text-gray-900'}`}>{s.title}</h3>
        <p className={`text-sm leading-relaxed mb-6 ${s.featured ? 'text-gray-300' : 'text-gray-500'}`}>{s.desc}</p>
        <button className={`inline-flex items-center gap-2 font-bold text-sm px-5 py-2.5 rounded-full ${s.featured ? 'bg-violet-400 text-black' : 'bg-gray-900 text-white'} hover:opacity-90 transition-opacity`}>
          READ MORE <ChevronRight size={14} />
        </button>
      </div>
    </AnimatedSection>
  );
}

// A full category block: eyebrow + heading + 5 visible cards + expandable remainder
function ServiceCategory({ eyebrow, heading, subheading, services }) {
  const [showAll, setShowAll] = useState(false);
  const [featuredIndex, setFeaturedIndex] = useState(0);

  const visibleCount = Math.min(5, services.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedIndex((prev) => (prev + 1) % visibleCount);
    }, 5000);

    return () => clearInterval(interval);
  }, [visibleCount]);

  const featuredServices = services.map((service, index) => ({
    ...service,
    featured: index === featuredIndex,
  }));

  const visible = featuredServices.slice(0, 5);
  const rest = featuredServices.slice(5);


  return (
    <div className="mb-20 last:mb-0">
      <AnimatedSection className="text-center mb-12">
        <p className="text-violet-500 font-semibold text-sm uppercase tracking-wider mb-3">{eyebrow}</p>
        <h2 className="text-3xl lg:text-4xl font-black text-gray-900">{heading}</h2>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto">{subheading}</p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
        {visible.slice(0, 2).map((s, i) => <BigCard key={s.title} s={s} i={i} />)}
      </div>

      <div className="grid sm:grid-cols-3 gap-6">
        {visible.slice(2).map((s, i) => <SmallCard key={s.title} s={s} i={i} />)}
      </div>

      {rest.length > 0 && (
        <>
          <div
            className={`grid sm:grid-cols-3 gap-6 overflow-hidden transition-all duration-700 ease-out ${showAll ? 'max-h-[1000px] opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'
              }`}
          >
            {rest.map((s, i) => <SmallCard key={s.title} s={s} i={i} />)}
          </div>

          <AnimatedSection className="text-center mt-10">
            <button
              onClick={() => setShowAll(v => !v)}
              className="inline-flex items-center gap-2 bg-gray-900 text-white font-bold px-8 py-3.5 rounded-full hover:bg-gray-700 transition-colors"
            >
              {showAll ? 'SHOW LESS' : 'SEE ALL SERVICES'}
              {showAll ? (
                <ChevronDown size={16} className="rotate-180 transition-transform duration-300" />
              ) : (
                <ArrowRight size={16} className="transition-transform duration-300" />
              )}
            </button>
          </AnimatedSection>
        </>
      )}
    </div>
  );
}

export default function Solutions() {


  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="bg-white border-b py-14 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between">
          <div>
            <h1 className="text-4xl font-black text-gray-900">Service</h1>
            <p className="text-sm text-gray-500 mt-2">
              <span className="hover:text-violet-500 cursor-pointer">HOME</span>
              <span className="mx-2">»</span>
              <span>SERVICE</span>
            </p>
          </div>
          <p className="text-gray-600 max-w-xs mt-4 sm:mt-0 text-right">
            Comprehensive Business Compliance, HR & Workforce Solutions          </p>
        </div>
        <div className="max-w-7xl mx-auto mt-6">
          <div className="h-1 bg-violet-400 rounded-full" />
        </div>
      </div>

      {/* Solutions Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-violet-500 font-semibold text-sm uppercase tracking-wider mb-3">Our Service</p>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">
              Complete Business Support Services for <br />Modern Organizations
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              GM Unified Solution offers end-to-end compliance, payroll, staffing, licensing, and HR solutions tailored to businesses of all sizes. Our expert team ensures seamless operations, statutory compliance, and workforce excellence.
            </p>
            <div className="mt-8 flex justify-center">
              <img
                src={ServiceImg1}
                alt="GM Unified Solutions services overview"
                className="w-full max-w-7xl h-auto object-contain rounded-2xl border border-gray-200 shadow-lg bg-white"
              />
            </div>
          </AnimatedSection>

          <ServiceCategory
            eyebrow="For Small & Growing Businesses"
            heading="Solutions for Offices & Service Companies"
            subheading="Core HR, payroll, and statutory compliance services built for startups, offices, and small to mid-size businesses."
            services={smallBusinessServices}
          />

          <ServiceCategory
            eyebrow="For Industrial Companies"
            heading="Solutions for Factories & Manufacturing Units"
            subheading="Licensing, staffing, and compliance services designed for plants, factories, and industrial establishments."
            services={industrialServices}
          />
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-violet-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
                alt="Testimonial"
                className="rounded-3xl w-full h-80 object-cover object-top"
              />
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <p className="font-semibold text-sm uppercase tracking-wider mb-3 text-gray-800">Testimonials</p>
              <h2 className="text-4xl font-black text-gray-900 mb-8">Trusted by Businesses Across Industries</h2>
              <blockquote className="bg-white rounded-2xl p-8 shadow-xl">
                <p className="text-gray-700 italic text-lg leading-relaxed mb-6">
                  "GM Unified Solution has simplified our payroll processing, compliance management, and statutory filings. Their team is responsive, professional, and ensures we never miss important deadlines."
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-900">Michael Robert</p>
                    <p className="text-violet-500 text-sm font-semibold">Full Case Study</p>
                  </div>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} className="text-violet-400 fill-violet-400" />)}
                  </div>
                </div>
              </blockquote>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Links */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10">
            <h2 className="text-3xl font-black text-gray-900">Your questions, answered clearly and quickly</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {faqLinks.map((item, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{item.desc}</p>
                  <Link to="/faqs" className="inline-flex items-center gap-1 text-sm font-bold text-violet-500 hover:underline">
                    {item.action} <ChevronRight size={14} />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <AnimatedSection>
              <h2 className="text-2xl lg:text-3xl font-black text-white max-w-lg">
                Get personalized support for your business requirements.
              </h2>
              <p className="text-gray-400 mt-3">This structure aligns every section with your actual services and will look much more professional and trustworthy than generic HR software content.</p>
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