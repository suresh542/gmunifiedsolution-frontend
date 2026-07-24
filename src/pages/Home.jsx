import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, BarChart2, TrendingUp, Users, Globe, Award, Play, ChevronRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import HeroImage from "../assets/homeImage1.png"
import HomeAboutImg from "../assets/HomeAboutImg.png"
import HomeImg3 from "../assets/HomeImg3.png"
import { useEffect, useState } from 'react';


const services = [
  {
    icon: '📋',
    title: 'Talent Recruitment',
    desc: 'Find the right talent with our recruitment and staffing solutions. We support permanent hiring, contract staffing, and workforce deployment across industries.',
  },
  {
    icon: '💰',
    title: 'Payroll & Benefits',
    desc: 'Simplify payroll processing with accurate salary calculations, statutory deductions, payslip generation, and employee record management.',
    featured: true,
  },
  {
    icon: '🎓',
    title: 'Team Training',
    desc: 'Enhance your team’s skills with our comprehensive training programs designed to drive performance and development.',
  },
  {
    icon: '🤝',
    title: 'Culture Consulting',
    desc: 'Improve your organizational culture with our expert consulting services tailored to your unique needs.',
  },
  {
    icon: '🌐',
    title: 'HR Outsourcing',
    desc: 'Outsource your HR functions with our comprehensive solutions, allowing you to focus on core business activities.',
  },
];

const caseStudies = [
  {
    logo: 'SOCCA',
    title: 'The HR platform that powers productivity, engagement',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
  },
  {
    logo: 'Payroll Management',
    title: 'Accurate payroll processing with complete statutory compliance',
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80',
  },
  {
    logo: 'GST & Business Compliance',
    title: 'Simplifying registrations, filings, and regulatory requirements',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
  },
  {
    logo: 'Staffing & Recruitment',
    title: 'Connecting businesses with the right talent',
    img: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80',
  },
  {
    logo: 'PF, ESI & Labour Law Services',
    title: 'Ensuring seamless statutory compliance',
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80',
  },
  {
    logo: 'HR & Workforce Management',
    title: 'Building efficient and productive workplaces',
    img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80',
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


export default function Home() {
  const [openIdx, setOpenIdx] = useState(null);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [form, setForm] = useState({ email: '', name: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonialIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[activeTestimonialIndex];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('https://gm-unified-solutions-backend.vercel.app/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Failed to submit quote');

      setSubmitted(true);
      setForm({ email: '', name: '', message: '' });
    } catch (err) {
      console.error(err);
      alert('Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      {/* Hero */}
      <section className="pt-24 lg:pt-32 pb-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <p className="text-violet-500 font-semibold text-3xl uppercase tracking-wider mb-4">Modern HR Platform</p>
              <h1 className="text-24xl sm:text-5xl lg:text-5xl font-black text-gray-900 leading-tight mb-6">
                MODERN HR FOR<br />
                <span className="text-gray-900">MODERN BUSINESS</span>
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-lg">
                The HR platform that drives productivity, engagement, and retention for modern, fast-growing, global businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/services" className="bg-violet-400 hover:bg-violet-500 text-black font-bold px-8 py-3.5 rounded-full transition-colors flex items-center gap-2 justify-center">
                  Check our Serives <ArrowRight size={16} />
                </Link>
                {/* <button className="flex items-center gap-2 text-gray-700 font-semibold hover:text-violet-500 transition-colors justify-center">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <Play size={14} fill="currentColor" />
                  </div>
                  Watch Video
                </button> */}
              </div>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/40?img=${i + 10}`} alt="" className="w-9 h-9 rounded-full border-2 border-white" />
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5 mb-0.5">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} className="text-violet-400 fill-violet-400" />)}
                  </div>
                  <p className="text-xs text-gray-500">7200+ reviews 4.9</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150} className="relative">
              <div className="relative">
                <img
                  src={HeroImage}
                  alt="HR Professional"
                  className="w-full rounded-3xl  object-cover object-top h-80 sm:h-96 lg:h-[28rem]"
                />

                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 max-w-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-violet-400 rounded-full flex items-center justify-center">
                      <TrendingUp size={18} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">+40% Growth</p>
                      <p className="text-xs text-gray-500">Employee Productivity</p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-6 -right-6 bg-gray-900 text-white rounded-2xl shadow-xl p-4">
                  <p className="text-violet-400 font-bold text-xl">Modern,</p>
                  <p className="text-sm">Fast-Growing</p>
                  <p className="text-sm">Global Businesses</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Features Bar */}
        <AnimatedSection delay={200}>
          <div className="flex items-center gap-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
              <div className="bg-gray-900 rounded-3xl p-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
                {[
                  {
                    title: "How We Work",
                    desc: "Factory Setup, Regulatory Approvals, Labour Compliance & Payroll Services Under One Roof."
                  },
                  {
                    title: "How We Lead",
                    desc: "Expert guidance to keep your business compliant and efficient."
                  },
                  {
                    title: "How We Succeed",
                    desc: "Reliable services that support growth and reduce compliance risks."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex  items-center  gap-4">
                    <div className="w-10 h-10 bg-violet-400 rounded-xl shrink-0 flex items-center justify-center">
                      <CheckCircle size={18} className="text-black  mx-auto block" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Made for All Users */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <AnimatedSection delay={150}>
              <div className="relative">
                <img
                  src={HomeAboutImg}
                  alt="Team collaboration"
                  className="rounded-3xl w-full h-80 object-cover"
                />
                <div className="absolute bottom-6 right-6 bg-white rounded-2xl shadow-xl p-4 text-center">
                  <p className="text-3xl font-black text-violet-500">89%</p>
                  <p className="text-xs text-gray-500">My score</p>
                  <div className="flex gap-1 justify-center mt-1">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={10} className="text-violet-400 fill-violet-400" />)}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <p className="text-violet-500 font-semibold text-3xl uppercase tracking-wider mb-3">About  Us</p>
              <h2 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight mb-6">
                Empowering Businesses with Complete HR & Compliance Solutions.              </h2>
              <blockquote className="border-l-4 border-violet-400 pl-6 mb-6">
                <p className="text-gray-600 italic leading-relaxed mb-4">
                  "At GM Unified Solutions, we simplify complex business processes through expert HR management,
                  statutory compliance, payroll administration, staffing solutions, and business registrations. Since 2021, we have been committed to delivering reliable,
                  cost-effective, and compliant solutions that enable businesses to focus on their core operations while we manage the administrative and regulatory requirements."</p>
                <div className="flex items-center gap-3">
                  {/* <img src="https://i.pravatar.cc/40?img=5" alt="" className="w-10 h-10 rounded-full" /> */} <br />
                  <div>
                    <p className="font-bold text-gray-900 text-sm">GM Unified Solutions</p>
                    <p className="text-xs text-gray-500">Trusted Partner for HR, Compliance & Business Support Services Since 2021</p>
                  </div>
                </div>
              </blockquote>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* Data Insights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <AnimatedSection delay={150}>
              <p className="text-violet-500 font-semibold text-3xl uppercase tracking-wider mb-3">Business Solutions That Drive Growth</p>
              <h2 className="text-3xl font-black text-gray-900 mb-6">
                Empowering businesses with reliable HR, payroll, compliance, and staffing services.              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At GM Unified Solution, we help businesses simplify workforce management, maintain statutory compliance, and optimize operations through expert-driven HR, payroll, GST, and staffing solutions. Our proactive approach ensures efficiency, accuracy, and sustainable business growth.              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <BarChart2 size={18} />, label: 'Analytical Insights' },
                  { icon: <TrendingUp size={18} />, label: 'Actionable Outcomes' },
                  { icon: <CheckCircle size={18} />, label: 'Retainable Outcomes' },
                  { icon: <Globe size={18} />, label: 'Informed Growth' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <span className="text-violet-500">{item.icon}</span>
                    {item.label}
                  </div>
                ))}
              </div>
              <Link to="/services" className="mt-8 inline-flex items-center gap-2 bg-gray-900 text-white font-bold px-6 py-3 rounded-full hover:bg-gray-700 transition-colors">
                READ MORE <ChevronRight size={16} />
              </Link>
            </AnimatedSection>

            <AnimatedSection>
              <img
                src={HomeImg3}
                alt="Business professional"
                className="rounded-3xl w-full h-80 object-cover"
              />
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="text-violet-500 font-semibold text-3xl uppercase tracking-wider mb-3">Our Services</p>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">
              Cross-platform HR solutions  &<br /> Business Solutions for Modern Organizations
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Find the right talent with our recruitment and staffing solutions. We support permanent hiring, contract staffing, and workforce deployment across industries.            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className={`p-7 rounded-2xl border h-full transition-shadow hover:shadow-lg ${s.featured ? 'bg-gray-900 text-white border-gray-900' : 'bg-white border-gray-200'}`}>
                  <div className="text-3xl mb-4">{s.icon}</div>
                  <h3 className={`font-bold text-lg mb-3 ${s.featured ? 'text-white' : 'text-gray-900'}`}>{s.title}</h3>
                  <p className={`text-sm leading-relaxed mb-4 ${s.featured ? 'text-gray-300' : 'text-gray-500'}`}>{s.desc}</p>
                  <Link to="/services" className={`inline-flex items-center gap-1 text-sm font-semibold ${s.featured ? 'text-violet-400' : 'text-violet-500'} hover:underline`}>
                    READ MORE <ChevronRight size={14} />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 bg-gray-900 text-white font-bold px-8 py-3.5 rounded-full hover:bg-gray-700 transition-colors">
              SEE ALL SERVICES <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="flex flex-col sm:flex-row sm:items-center justify-between mb-12">
            <div>
              <p className="text-violet-500 font-semibold text-3xl uppercase tracking-wider mb-2">HR & Compliance Solutions</p>
              <h2 className="text-3xl font-black text-gray-900">
                Empowering Businesses with Reliable Workforce & Compliance Management
              </h2>
            </div>
            <Link to="/services" className="mt-4 sm:mt-0 text-sm font-bold text-gray-700 hover:text-violet-500 underline underline-offset-4 transition-colors whitespace-nowrap">
              EXPLORE OUR SERVICES →
            </Link>
          </AnimatedSection>

          {/* Featured */}
          <AnimatedSection>
            <div className="bg-gray-900 rounded-3xl p-8 mb-8 grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-4xl font-black text-white mb-4">GM Unified Solution</p>
                <h3 className="text-white text-xl font-bold mb-4">Your Trusted Partner for HR, Payroll & Compliance</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  We help businesses streamline payroll, statutory compliance, staffing, and workforce management through efficient, reliable, and customized solutions tailored to their operational needs.                </p>
                <Link to="/services" className="inline-flex items-center gap-2 text-violet-400 font-bold hover:underline">
                  READ MORE <ChevronRight size={16} />
                </Link>
              </div>
              <div className="relative">
                <img src={caseStudies[0].img} alt="" className="rounded-2xl w-full h-60 object-cover" />
                <div className="absolute top-4 right-4 bg-violet-400 rounded-xl p-4 text-sm">
                  <p className="font-bold text-sm">Have you met GM</p>
                  <p className="text-xs mt-1">Watch this 3-minute demo to see how GM powers productivity, engagement, and retention.</p>
                  <button className="mt-3 flex items-center gap-2 bg-gray-900 text-white text-xs font-bold px-4 py-2 rounded-full">
                    <Play size={10} fill="white" /> WATCH NOW
                  </button>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.slice(1).map((cs, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                  <img src={cs.img} alt="" className="w-full h-44 object-cover" />
                  <div className="p-5">
                    <p className="font-black text-lg text-gray-900 mb-2">{cs.logo}</p>
                    <p className="text-sm text-gray-600 mb-4">{cs.title}</p>
                    <Link to="/services" className="inline-flex items-center gap-1 text-sm font-bold text-violet-500 hover:underline">
                      READ MORE <ChevronRight size={14} />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
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

      {/* Pricing CTA */}
      <section className="py-20 bg-white mt-20 rounded-3xl shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-gray-200 rounded-3xl p-10 grid lg:grid-cols-2 gap-12 items-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-400 to-violet-200" />
            <AnimatedSection>
              <p className="text-violet-500 font-semibold text-sm uppercase tracking-wider mb-3">Get A Quote</p>
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                Customized HR, Payroll & Compliance Solutions for Your Business
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From payroll processing and statutory compliance to GST filing and staffing
                services, GM Unified Solution delivers reliable, cost-effective support for
                businesses of all sizes. Get a customized quote tailored to your needs.                       </p>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Quote Requested!</h3>
                  <p className="text-gray-500">We will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    required
                    placeholder="Business Email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
                  />
                  <textarea
                    required
                    placeholder="Share why you are contacting"
                    rows={4}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 resize-none"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gray-900 text-white font-bold py-3.5 rounded-xl hover:bg-gray-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Sending...' : 'GET A QUOTE'}
                  </button>
                  <p className="text-center text-sm text-gray-500 font-medium">Claim your spot today!</p>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
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

// Need Phone icon
function Phone({ size, className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
