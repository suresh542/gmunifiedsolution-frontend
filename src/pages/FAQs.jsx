import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, ChevronRight, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import FAQImage1 from '../assets/FaqImg1.png';
import FAQImage2 from '../assets/FaqImg2.png';

const faqs = [
  { q: 'What services does GM Unified Solution provide?', a: 'We provide recruitment, payroll management, PF and ESI/NPS administration, GST registration and returns, establishment registration and renewals, monthly and annual compliance filings, and staffing solutions — all under one roof.' },
  { q: 'How long does PF/ESI registration take?', a: 'New establishment registration for PF and ESI typically takes 7–15 working days from submission of complete documents, subject to government processing timelines.' },
  { q: 'Do you handle GST returns for small businesses too?', a: 'Yes! We support both regular and composition scheme taxpayers, including monthly, quarterly, and annual GST return filing.' },
  { q: 'Can you manage payroll for a company with staff across multiple states?', a: 'Yes, our payroll and compliance processes are designed to handle multi-state statutory requirements including state-specific Professional Tax and Labour Welfare Fund rules.' },
  { q: 'What is included in your staffing solutions?', a: 'We offer temporary/contract staffing, permanent recruitment, bulk blue-collar deployment, and executive search, along with statutory compliance management for deployed staff.' },
  { q: 'How do you ensure we never miss a compliance deadline?', a: 'Every client is placed on a compliance calendar with advance reminders, and our team tracks all filing due dates — PF, ESI, GST, TDS, and labour law returns — proactively.' },
  { q: 'How is pricing structured?', a: 'Pricing depends on the number of employees, services required, and filing frequency. We provide a transparent, fixed-fee quotation before any engagement begins.' },
  { q: 'Is our business and employee data kept confidential?', a: 'Yes! All client and employee information is handled under strict confidentiality, as detailed in our Privacy Policy.' },
];

const faqLinks = [

  {
    title: 'Factory Licence',
    desc: 'Factory licence registration, Our compliance, HR experts and renewal assistance.',
    action: 'VIEW DETAILS',
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
    title: 'Payroll & Compliance',
    desc: 'Learn how we manage payroll processing, statutory deductions, PF, ESI, and labour law compliance.',
    action: 'EXPLORE SERVICES',
  },
];

function AccordionItem({ q, a, open, onClick }) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-900 text-sm pr-4">{q}</span>
        <span className="shrink-0 text-violet-500">
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5 bg-white">
          <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQs() {
  const initialFormState = { name: '', phone: '', company: '', email: '', message: '', subject: '' };
  const [openIdx, setOpenIdx] = useState(null);
  const [form, setForm] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };


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
      setForm(initialFormState);
    } catch (err) {
      console.error(err);
      alert('Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="bg-white border-b py-14 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between">
          <div>
            <h1 className="text-4xl font-black text-gray-900">FAQS</h1>
            <p className="text-sm text-gray-500 mt-2">
              <span className="hover:text-violet-500 cursor-pointer">HOME</span>
              <span className="mx-2">»</span>
              <span>FAQS</span>
            </p>
          </div>
          <p className="text-gray-600 max-w-xs mt-4 sm:mt-0 text-right">
            Your questions, answered clearly and quickly.
          </p>
        </div>
        <div className="max-w-7xl mx-auto mt-6">
          <div className="h-1 bg-violet-400 rounded-full" />
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <AnimatedSection>
                {/* <p className="text-violet-500 font-semibold text-3xl uppercase tracking-wider mb-3">FAQ</p> */}
                <h2 className="text-3xl font-black text-gray-900 mb-3">Popular questions</h2>
                <p className="text-gray-500 mb-8">Your new subtitle or description goes here.</p>
                <div className="space-y-3">
                  {faqs.map((item, i) => (
                    <AccordionItem
                      key={i}
                      q={item.q}
                      a={item.a}
                      open={openIdx === i}
                      onClick={() => setOpenIdx(openIdx === i ? null : i)}
                    />
                  ))}
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={150} className="space-y-10 flex flex-col items-center ">
              <img
                src={FAQImage1}
                alt="Team meeting"
                className="rounded-2xl w-full h-80 object-cover"
              />
              <img
                src={FAQImage2}
                alt="Discussion"
                className="rounded-2xl w-full h-80 object-cover"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10 test-center flex flex-col items-center text-center">
            <h2 className="text-3xl font-black text-gray-900">
              Explore Our Business Support Services
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl">
              From payroll and statutory compliance to GST filing and staffing solutions,
              find the resources and support your business needs to stay compliant and grow confidently.
            </p>          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {faqLinks.map((item, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="border border-gray-200 rounded-2xl p-6 bg-white hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{item.desc}</p>
                  <Link to="/contact" className="inline-flex items-center gap-1 text-sm font-bold text-violet-500 hover:underline">
                    {item.action} <ChevronRight size={14} />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-gray-200 rounded-3xl p-10 grid lg:grid-cols-2 gap-12 items-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-400 to-violet-200" />
            <AnimatedSection>
              <p className="text-violet-500 font-semibold text-sm uppercase tracking-wider mb-3">Get A Quote</p>
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                Get custom pricing tailored to your needs
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Sed ut unde omnis iste natus sit volur tatem accusantium laudantium totam rem aperiam eaque ipsa ab illo inventore veritatis et architecto beatae vitae dicta sunt explicabo.
              </p>
              {/* <div className="bg-gray-900 text-white rounded-2xl p-4 inline-flex items-center gap-4">
                <div className="w-10 h-10 bg-violet-400 rounded-full flex items-center justify-center">
                  <span className="text-black text-lg">📞</span>
                </div>
                <div>
                  <p className="text-xs text-gray-400">CALL US NOW</p>
                  <p className="font-bold">(555) 123-4567</p>
                </div>
              </div> */}
            </AnimatedSection>

            <AnimatedSection delay={150}>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Quote Requested!</h3>
                  <p className="text-gray-500">We will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* First Name & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your name"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Enter phone number"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
                      />
                    </div>
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter company name"
                      value={form.company}
                      onChange={e => setForm({ ...form, company: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
                    />
                  </div>

                  {/* Business Email */}
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Enter business email"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
                    >
                      <option value="">Select a Service</option>
                      <option value="Factory Compliance & Licensing">
                        Factory Compliance & Licensing
                      </option>

                      <option value="Labour Law & Statutory Compliance">
                        Labour Law & Statutory Compliance
                      </option>

                      <option value="Fire, Safety & Environmental Approvals">
                        Fire, Safety & Environmental Approvals
                      </option>

                      <option value="Payroll, ESIC, EPF & Labour Welfare">
                        Payroll, ESIC, EPF & Labour Welfare
                      </option>

                      <option value="Business Registrations & Certifications">
                        Business Registrations & Certifications
                      </option>

                      <option value="HR Documentation & Compliance">
                        HR Documentation & Compliance
                      </option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">
                      Message *
                    </label>
                    <textarea
                      required
                      placeholder="Share why you are contacting us"
                      rows={4}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 resize-none"
                    />
                  </div>

                  {/* Subject */}


                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gray-900 text-white font-bold py-3.5 rounded-xl hover:bg-violet-600 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Sending...' : 'GET A QUOTE'}
                  </button>

                  <p className="text-center text-sm text-gray-500">
                    Our team will contact you shortly.
                  </p>

                </form>
              )}
            </AnimatedSection>
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
