import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, ChevronRight, ArrowRight, CircleCheckBig } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';


export default function TermsConditions() {

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
                        </p>                    </div>
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
