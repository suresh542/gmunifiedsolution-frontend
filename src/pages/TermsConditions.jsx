import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, ChevronRight, ArrowRight, CircleCheckBig } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';


export default function TermsConditions() {

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
                        <p>
                            For questions regarding these Terms, please contact us at{' '}


                            <a
                                href="https://wa.me/919500499538"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline font-medium !font-bold"
                            >
                                +91 9500499538
                            </a>
                            {' , '}

                            <a
                                href="mailto:info.gmunified@yahoo.com"
                                className="hover:underline font-medium !font-bold"
                            >
                                info.gmunified@yahoo.com
                            </a>

                            {' , '}

                            <a
                                href="https://maps.google.com/?q=GM+Unified+Solutions+Bargur+Krishnagiri"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline font-medium !font-bold"
                            >
                                Jagadevi Road, Bargur, Krishnagiri, Tamil Nadu 635104
                            </a>
                        </p>
                    </div>
                </div>
            </div>
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
