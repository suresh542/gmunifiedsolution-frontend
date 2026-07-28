import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronDown, ArrowRight, Star } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import ServiceImg1 from '../assets/ServiceImg1.png'; // Adjust the path to your image

// Services for small & growing businesses (offices, startups, service companies)
const smallBusinessServices = [
  {
    icon: '🏭',
    title: 'Factory License Registration and Renewals',
    desc: 'End-to-end factory license registration and renewal support under the Factories Act, ensuring uninterrupted, compliant plant operations.',
    bgColor: 'bg-blue-100',
  },
  {
    icon: '👷',
    title: 'Contract Labour License Registration and Renewals',
    desc: 'Registration and renewal of contract labour licenses under the CLRA Act for both principal employers and contractors.',
    bgColor: 'bg-green-100',
  },
  {
    icon: '♻️',
    title: 'Pollution Control Board Registration and Renewals',
    desc: 'Consent to Establish/Operate and other Pollution Control Board registrations and renewals, managed end-to-end.',
    bgColor: 'bg-emerald-100',
  },
  {
    icon: '🔥',
    title: 'Fire License Registration and Renewals',
    desc: 'Fire safety license registration and renewal coordination to keep your facility compliant and audit-ready.',
    bgColor: 'bg-red-100',
  },
  {
    icon: '🍽️',
    title: 'Food License Registration and Renewals',
    desc: 'FSSAI food license registration and renewal support for manufacturing units and facilities with food handling operations.',
    bgColor: 'bg-orange-100',
  },
  {
    icon: '👥',
    title: 'Staffing Solutions',
    desc: 'Temporary, contract, and bulk workforce deployment for plants and industrial units.',
    bgColor: 'bg-cyan-100',
  },
  {
    icon: '🎓',
    title: 'Apprenticeship Act Process – NAPS & NATS',
    desc: 'End-to-end apprentice registration and compliance under NAPS & NATS.',
    bgColor: 'bg-indigo-100',
  },
  {
    icon: '🏢',
    title: 'Shop & Establishment Registration and Renewals',
    desc: 'Complete registration and timely renewal support under the Shops & Establishment Act.',
    bgColor: 'bg-violet-100',
  },
  {
    icon: '💵',
    title: 'Payroll Processing Services',
    desc: 'Accurate, on-time payroll processing including salary computation and statutory deductions.',
    bgColor: 'bg-lime-100',
  },
  {
    icon: '📑',
    title: 'Statutory Compliance Services',
    desc: 'EPF, ESI, PT & LWF filings and compliance management.',
    bgColor: 'bg-yellow-100',
  },
  {
    icon: '🧾',
    title: 'GST Registration, Returns & Compliance',
    desc: 'GST registration, return filing, annual returns, and reconciliation.',
    bgColor: 'bg-pink-100',
  },
  {
    icon: '🪪',
    title: 'Trade License Registration and Renewals',
    desc: 'Hassle-free trade license registration and renewal support.',
    bgColor: 'bg-sky-100',
  },
  {
    icon: '🔍',
    title: 'HR Audit Services',
    desc: 'Independent audit of HR policies, payroll records, and statutory compliance.',
    bgColor: 'bg-purple-100',
  },
  {
    icon: '📁',
    title: 'HR Documentation',
    desc: 'Professionally drafted offer letters, HR policies, and employee handbooks.',
    bgColor: 'bg-rose-100',
  },
];
// Services for industrial & manufacturing companies (plants, factories, units)

const faqLinks = [
  {
    title: 'Factory Plan Approval',
    desc: 'Approval support for factory setup and expansion projects.',
    action: 'EXPLORE SERVICE',
  },
  {
    title: 'Factory Licence',
    desc: 'Factory licence registration and renewal assistance.',
    action: 'VIEW DETAILS',
  },
  {
    title: 'Pressure Vessel Testing Certificate',
    desc: 'Certification services for pressure vessels and equipment.',
    action: 'LEARN MORE',
  },
  {
    title: 'ISM Contract Labour Registration',
    desc: 'Contract labour registration and compliance support.',
    action: 'GET STARTED',
  },
  {
    title: 'Fire NOC & Fire Licence',
    desc: 'Fire NOC and licence approval assistance.',
    action: 'EXPLORE SERVICE',
  },
  {
    title: 'Pollution Control Board',
    desc: 'CTE and CTO approval services from PCB authorities.',
    action: 'VIEW DETAILS',
  },
  {
    title: 'Trade Licence',
    desc: 'Quick trade licence registration and renewal support.',
    action: 'LEARN MORE',
  },
  {
    title: 'Calibration Certificate',
    desc: 'Calibration certification for industrial instruments.',
    action: 'GET IN TOUCH',
  },
];

const testimonials = [
  {
    company: "TATA Steel",
    person: "Operations Manager",
    feedback:
      "GM Unified Solutions has been a reliable partner in managing workforce compliance and statutory requirements. Their proactive approach and industry expertise have significantly improved our operational efficiency.",
  },
  {
    company: "Nutri Pluses India Private Limited",
    person: "HR Head",
    feedback:
      "The team provides exceptional payroll and compliance support. Their attention to detail and timely execution have helped us maintain complete regulatory compliance.",
  },
  {
    company: "Ariesdec Global",
    person: "Managing Director",
    feedback:
      "Professional, responsive, and highly knowledgeable. GM Unified Solutions streamlined our HR documentation and compliance processes, saving valuable time and resources.",
  },
  {
    company: "Sreeja Enterprises",
    person: "Business Owner",
    feedback:
      "Their staffing and payroll services have simplified our day-to-day operations. We appreciate their commitment to accuracy and customer support.",
  },
  {
    company: "Sunil Enterprises",
    person: "Administration Manager",
    feedback:
      "GM Unified Solutions consistently delivers quality service and ensures all statutory filings are completed on time. A trusted business partner.",
  },
  {
    company: "KEK Solutions",
    person: "Director",
    feedback:
      "From employee onboarding to compliance management, the team handled every process professionally and efficiently. Highly recommended.",
  },
  {
    company: "Senthoor Foods",
    person: "Plant Manager",
    feedback:
      "Their expertise in labour law compliance and licensing support has helped us focus on production while remaining fully compliant.",
  },
  {
    company: "Vanam Facility Management Services",
    person: "Operations Head",
    feedback:
      "Excellent support in workforce deployment and payroll administration. Their responsiveness and professionalism stand out.",
  },
  {
    company: "CRP (India) Private Limited",
    person: "HR Manager",
    feedback:
      "GM Unified Solutions has become an integral part of our HR operations. Their services are dependable, transparent, and cost-effective.",
  },
  {
    company: "Neo Waste Innovation Private Limited",
    person: "Managing Partner",
    feedback:
      "The team's knowledge of statutory compliance and business registrations helped us navigate complex regulatory requirements with ease.",
  },
];


// Reusable card for the first two "large" featured-style slots
function BigCard({ s, i }) {
  return (
    <AnimatedSection delay={i * 100}>
      <div
        className={`p-8 rounded-2xl border h-full transition-all duration-500 hover:shadow-xl ${s.featured
          ? `${s.bgColor} text-white border-gray-900 scale-105 shadow-xl`
          : 'bg-white border-gray-200'
          }`}
      >
        <div className="text-4xl mb-5">{s.icon}</div>
        <h3 className={`font-bold text-xl mb-3 ${s.featured ? 'text-black' : 'text-gray-900'}`}>{s.title}</h3>
        <p className={`text-sm leading-relaxed mb-6 ${s.featured ? 'text-cyan-800' : 'text-gray-500'}`}>{s.desc}</p>
        <Link to="/contact">
          <button className={`inline-flex items-center gap-2 font-bold text-sm px-5 py-2.5 rounded-full ${s.featured ? 'bg-violet-400 text-black' : 'bg-gray-900 text-white'} hover:opacity-90 transition-opacity`}>
            READ MORE <ChevronRight size={14} />
          </button>
        </Link>
      </div>
    </AnimatedSection>
  );
}

// Reusable card for the smaller 3-column slots
function SmallCard({ s, i }) {
  return (
    <AnimatedSection delay={i * 80}>
      <div
        className={`p-8 rounded-2xl border h-full transition-all duration-500 hover:shadow-xl ${s.featured
          ? `${s.bgColor} text-white border-gray-900 scale-105 shadow-xl`
          : 'bg-white border-gray-200'
          }`}
      >
        <div className="text-4xl mb-5">{s.icon}</div>
        <h3 className={`font-bold text-xl mb-3 ${s.featured ? 'text-black' : 'text-gray-900'}`}>{s.title}</h3>
        <p className={`text-sm leading-relaxed mb-6 ${s.featured ? 'text-cyan-800' : 'text-gray-500'}`}>{s.desc}</p>
        <Link to="/contact">
        <button className={`inline-flex items-center gap-2 font-bold text-sm px-5 py-2.5 rounded-full ${s.featured ? 'bg-violet-400 text-black' : 'bg-gray-900 text-white'} hover:opacity-90 transition-opacity`}>
          READ MORE <ChevronRight size={14} />
        </button>
        </Link>
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
        <p className="text-violet-500 font-semibold text-3xl uppercase tracking-wider mb-3">{eyebrow}</p>
        <h2 className="text-3xl lg:text-4xl font-black text-gray-900">{heading}</h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">{subheading}</p>
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
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonialIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[activeTestimonialIndex];

  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="bg-white border-b py-14 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between">
          <div>
            <h1 className="text-4xl font-black text-gray-900">Services</h1>
            <p className="text-sm text-gray-500 mt-2">
              <span className="hover:text-violet-500 cursor-pointer">HOME</span>
              <span className="mx-2">»</span>
              <span>SERVICES</span>
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
            <p className="text-violet-500 font-semibold text-3xl uppercase tracking-wider mb-3">Our Service</p>
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
            eyebrow="Pan India Business Compliance Solutions for Offices"
            heading="Factories & Service Companies"
            subheading="Complete support for Factory Plan Approval, Factory Licence, Fire NOC, Pollution Control Board Approvals, Labour Compliance, and Statutory Registrations."
            services={smallBusinessServices}
          />

        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-[linear-gradient(0deg,_rgba(34,112,195,1)_0%,_rgba(222,45,253,1)_100%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="">

            <AnimatedSection delay={150}>
              <p className="font-semibold text-3xl uppercase tracking-wider mb-3 text-white">
                Client Testimonials
              </p>

              <h2 className="text-4xl font-black text-white mb-8">
                Trusted by Leading Businesses Across Industries
              </h2>
              <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${activeTestimonialIndex * 100}%)` }}
                >
                  {testimonials.map((item) => (
                    <div key={item.company} className="min-w-full p-8">
                      <blockquote>
                        <p className="text-gray-700 italic text-lg leading-relaxed mb-6">
                          "{item.feedback}"
                        </p>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-bold text-gray-900">{item.company}</p>
                            <p className="text-violet-500 text-sm font-semibold">
                              {item.person}
                            </p>
                          </div>

                          <div className="flex gap-0.5">
                            {[1, 2, 3, 4, 5].map((i) => (
                              <Star
                                key={i}
                                size={14}
                                className="text-violet-400 fill-violet-400"
                              />
                            ))}
                          </div>
                        </div>
                      </blockquote>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex justify-center gap-3">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveTestimonialIndex(idx)}
                    className={`rounded-full transition-all duration-300 ${idx === activeTestimonialIndex ? 'w-4 h-4 bg-white' : 'w-3 h-3 bg-white/70'}`}
                    aria-label={`Show testimonial ${idx + 1}`}
                  />
                ))}
              </div>
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