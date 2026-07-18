import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, ChevronRight, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

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
  const [openIdx, setOpenIdx] = useState(null);
  const [form, setForm] = useState({ email: '', name: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
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
                <p className="text-violet-500 font-semibold text-3xl uppercase tracking-wider mb-3">FAQ</p>
                <h2 className="text-3xl font-black text-gray-900 mb-3">Popular questions</h2>
                <p className="text-gray-500 mb-8">Inventore veritatis et architecto beatae vitae dicta sunt explicabo.</p>
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
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80"
                alt="Team meeting"
                className="rounded-2xl w-full h-44 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
                alt="Discussion"
                className="rounded-2xl w-full h-44 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80"
                alt="Collaboration"
                className="rounded-2xl w-full h-44 object-cover"
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
                  <button type="submit" className="w-full bg-gray-900 text-white font-bold py-3.5 rounded-xl hover:bg-gray-700 transition-colors">
                    GET A QUOTE
                  </button>
                  <p className="text-center text-sm text-gray-500 font-medium">Claim your spot today!</p>
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
