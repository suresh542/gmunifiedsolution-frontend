import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, ChevronRight, ArrowRight, CircleCheckBig } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';


export default function TermsConditions() {
    const [openIdx, setOpenIdx] = useState(null);
    const [form, setForm] = useState({ email: '', name: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

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
        <div className="pt-20 bg-slate-50 text-slate-900">
            <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <h1 className="text-5xl font-black tracking-tight">Privacy Policy.</h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                    GM Unified Solutions our operates the website Site. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit our Site or use our services.        </p>

                <div className="mt-14 space-y-6">
                    <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white"><CircleCheckBig className="h-6 w-6" /></span>
                        <h2 className="text-2xl font-semibold text-slate-900"> Information We Collect</h2>
                    </div>
                    <div className="mt-5">
                        <ul className="list-disc pl-6 space-y-3 text-slate-600">
                            <li>
                                Personal details you provide: name, phone number, email address,
                                company name, and message content submitted through enquiry or
                                contact forms.
                            </li>
                            <li>
                                The Service Provider will deliver the final work in the agreed-upon
                                format upon completion and full payment of the service fee.
                            </li>
                            <li>
                                The Service Provider will deliver the final work in the agreed-upon
                                format upon completion and full payment of the service fee.
                            </li>
                        </ul>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white"><CircleCheckBig className="h-6 w-6" /></span>
                        <h2 className="text-2xl font-semibold text-slate-900"> How We Use Your Information</h2>
                    </div>
                    <div className="mt-5">
                        <ul className="list-disc pl-6 space-y-3 text-slate-600">
                            <li>
                                To respond to enquiries and provide requested services.
                            </li>
                            <li>
                                To process recruitment, payroll, or compliance-related engagements.
                            </li>
                            <li>
                                To send service updates, invoices, and relevant communications.
                            </li>
                            <li>
                                To improve our Site, services, and customer experience.
                            </li>
                            <li>
                                To comply with applicable legal and regulatory requirements.
                            </li>
                        </ul>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white"><CircleCheckBig className="h-6 w-6" /></span>
                        <h2 className="text-2xl font-semibold text-slate-900"> Cookies</h2>
                    </div>
                    <div className="mt-5 space-y-3 text-slate-600">
                        <p>Our Site may use cookies and similar tracking technologies to enhance user experience and analyse Site traffic. You may disable cookies through your browser settings; some features of the Site may not function properly if cookies are disabled.</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white"><CircleCheckBig className="h-6 w-6" /></span>
                        <h2 className="text-2xl font-semibold text-slate-900"> Sharing of Information</h2>
                    </div>
                    <div className="mt-5 space-y-3 text-slate-600">
                        <p>We do not sell or rent personal information to third parties. Information may be shared with:</p>
                        <ul className="list-disc pl-5">
                            <li>Statutory/government authorities where required for compliance filings (PF, ESI, GST, etc.)</li>
                            <li>Trusted third-party service providers who assist in operating our Site or delivering services, under confidentiality obligations</li>
                            <li>Authorities where disclosure is required by law</li>
                        </ul>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white"><CircleCheckBig className="h-6 w-6" /></span>
                        <h2 className="text-2xl font-semibold text-slate-900"> Data Security</h2>
                    </div>
                    <div className="mt-5 space-y-3 text-slate-600">
                        <p>We implement reasonable administrative, technical, and physical safeguards to protect personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white"><CircleCheckBig className="h-6 w-6" /></span>
                        <h2 className="text-2xl font-semibold text-slate-900"> Data Retention</h2>
                    </div>
                    <div className="mt-5 space-y-3 text-slate-600">
                        <p>We retain personal information only for as long as necessary to fulfil the purposes described in this Policy, or as required by applicable statutory and regulatory obligations.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white"><CircleCheckBig className="h-6 w-6" /></span>
                        <h2 className="text-2xl font-semibold text-slate-900"> Your Rights</h2>
                    </div>
                    <div className="mt-5 space-y-3 text-slate-600">
                        <p>You may request access to, correction of, or deletion of your personal information held by us, subject to any legal or contractual restrictions, by contacting us using the details below.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white"><CircleCheckBig className="h-6 w-6" /></span>
                        <h2 className="text-2xl font-semibold text-slate-900"> Third-Party Links</h2>
                    </div>
                    <div className="mt-5 space-y-3 text-slate-600">
                        <p>Our Site may contain links to third-party websites. We are not responsible for the privacy practices or content of such external sites.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white"><CircleCheckBig className="h-6 w-6" /></span>
                        <h2 className="text-2xl font-semibold text-slate-900"> Children's Privacy</h2>
                    </div>
                    <div className="mt-5 space-y-3 text-slate-600">
                        <p>Our services are intended for business use and are not directed at individuals under the age of 18. We do not knowingly collect personal information from minors.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white"><CircleCheckBig className="h-6 w-6" /></span>
                        <h2 className="text-2xl font-semibold text-slate-900"> Contact Us</h2>
                    </div>
                    <div className="mt-5 space-y-3 text-slate-600">
                        <p>For questions regarding this Privacy Policy, please contact us at [Contact Email] / [Phone Number] / [Company Address].</p>
                    </div>
                </div>
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
            </div>
        </div>
    );
}
