import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, ChevronRight, ArrowRight, CircleCheckBig } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';


export default function TermsConditions() {
    const [openIdx, setOpenIdx] = useState(null);
    const [form, setForm] = useState({ email: '', name: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };
    return (
        <div className="pt-20 bg-slate-50 text-slate-900">
            <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <h1 className="text-5xl font-black tracking-tight">Terms and Conditions.</h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                    These Terms & Conditions govern your access to and use of the website  and the services offered by GM Unified Solutions. By accessing our Site or engaging our services, you agree to be bound by these Terms.        </p>

                <div className="mt-14 space-y-6">
                    <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white"><CircleCheckBig className="h-6 w-6" /></span>
                        <h2 className="text-2xl font-semibold text-slate-900">1.Scope of Service</h2>
                    </div>
                    <div className="mt-5 space-y-3 text-slate-600">
                        <p>The Company provides HR, recruitment, payroll management, statutory compliance (PF, ESI, NPS, GST, establishment registrations), and staffing services as described on the Site. The exact scope of services for any engagement will be defined in a separate service agreement or quotation with the client.</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white"><CircleCheckBig className="h-6 w-6" /></span>
                        <h2 className="text-2xl font-semibold text-slate-900">2. Client Obligations</h2>
                    </div>
                    <div className="mt-5 space-y-3 text-slate-600">
                        <ul className="list-disc pl-5">
                            <li>Provide accurate, complete, and timely information/documents required to deliver the services</li>
                            <li>Ensure timely approvals and payments as agreed</li>
                            <li>Notify the Company promptly of any changes affecting service delivery (e.g., employee data changes, business structure changes)</li>
                        </ul>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white"><CircleCheckBig className="h-6 w-6" /></span>
                        <h2 className="text-2xl font-semibold text-slate-900">3. Fees & Payment</h2>
                    </div>
                    <div className="mt-5 space-y-3 text-slate-600">
                        <p>Service fees will be communicated through a formal quotation or agreement prior to commencement of work. Payment terms, due dates, and applicable taxes will be specified in the respective invoice or agreement. Delayed payments may result in suspension of ongoing services.</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white"><CircleCheckBig className="h-6 w-6" /></span>
                        <h2 className="text-2xl font-semibold text-slate-900">4. Confidentiality</h2>
                    </div>
                    <div className="mt-5 space-y-3 text-slate-600">
                        <p>Both parties agree to keep confidential any business, financial, or employee data shared during the course of the engagement, and to use such information solely for the purpose of delivering the agreed services.</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white"><CircleCheckBig className="h-6 w-6" /></span>
                        <h2 className="text-2xl font-semibold text-slate-900">5. Intellectual Property</h2>
                    </div>
                    <div className="mt-5 space-y-3 text-slate-600">
                        <p>All content on the Site, including text, graphics, logos, and design, is the property of GM Unified Solutions and may not be reproduced or used without prior written consent.</p>
                    </div>

                     <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white"><CircleCheckBig className="h-6 w-6" /></span>
                        <h2 className="text-2xl font-semibold text-slate-900">6. Limitation of Liability</h2>
                    </div>
                    <div className="mt-5 space-y-3 text-slate-600">
                        <p>While the Company exercises due diligence in delivering statutory and compliance services, it shall not be liable for penalties, losses, or damages arising from inaccurate or incomplete information provided by the client, delays caused by government authorities, or changes in applicable law beyond the Company's control.</p>
                    </div>

                     <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white"><CircleCheckBig className="h-6 w-6" /></span>
                        <h2 className="text-2xl font-semibold text-slate-900">7. Indemnification</h2>
                    </div>
                    <div className="mt-5 space-y-3 text-slate-600">
                        <p>The client agrees to indemnify and hold the Company harmless from any claims, damages, or liabilities arising from misuse of services, breach of these Terms, or provision of false/incomplete information.</p>
                    </div>

                     <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white"><CircleCheckBig className="h-6 w-6" /></span>
                        <h2 className="text-2xl font-semibold text-slate-900">8. Termination</h2>
                    </div>
                    <div className="mt-5 space-y-3 text-slate-600">
                        <p>Either party may terminate an ongoing service engagement with prior written notice as specified in the respective service agreement. Fees for services rendered up to the date of termination remain payable.</p>
                    </div>

                     <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white"><CircleCheckBig className="h-6 w-6" /></span>
                        <h2 className="text-2xl font-semibold text-slate-900">9. Governing Law & Jurisdiction</h2>
                    </div>
                    <div className="mt-5 space-y-3 text-slate-600">
                        <p>These Terms shall be governed by the laws of India. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts at Krishnagiri, Tamil Nadu.</p>
                    </div>

                     <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white"><CircleCheckBig className="h-6 w-6" /></span>
                        <h2 className="text-2xl font-semibold text-slate-900">10. Changes to These Terms</h2>
                    </div>
                    <div className="mt-5 space-y-3 text-slate-600">
                        <p>The Company reserves the right to modify these Terms at any time. Continued use of the Site or services after changes are posted constitutes acceptance of the revised Terms.</p>
                    </div>

                     <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white"><CircleCheckBig className="h-6 w-6" /></span>
                        <h2 className="text-2xl font-semibold text-slate-900">11. Contact Information</h2>
                    </div>
                    <div className="mt-5 space-y-3 text-slate-600">
                        <p>For questions regarding these Terms, please contact us at [Contact Email] / [Phone Number] / [Company Address].</p>
                    </div>
                </div>
                <section className="py-20 bg-white mt-20 rounded-3xl shadow-lg">
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
                                <div className="bg-gray-900 text-white rounded-2xl p-4 inline-flex items-center gap-4">
                                    <div className="w-10 h-10 bg-violet-400 rounded-full flex items-center justify-center">
                                        <span className="text-black text-lg">📞</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400">CALL US NOW</p>
                                        <p className="font-bold">(555) 123-4567</p>
                                    </div>
                                </div>
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
            </div>
        </div>
    );
}
