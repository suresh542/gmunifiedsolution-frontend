import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const SocialFacebook = () => <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>;
const SocialTwitter = () => <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>;
const SocialYoutube = () => <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58a2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" /></svg>;
const SocialInstagram = () => <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>;

const team = [
  { name: 'Michael Robert', role: 'CEO & Founder', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80' },
  { name: 'James Roberts', role: 'Sales Manager', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80' },
  { name: 'Michael Thompson', role: 'Senior Engineer', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80' },
  { name: 'Emily Davis', role: 'Chief Marketing (CMO)', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&q=80' },
];

const values = [
  { num: '.01', title: 'Our Mission', desc: 'Guiding our actions toward meaningful impact.', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&q=80' },
  { num: '.02', title: 'Our Vision', desc: 'Inspiring a future of opportunity and success.', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&q=80' },
  { num: '.03', title: 'Core Values', desc: 'Anchored in trust, innovation, and excellence.', img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&q=80' },
  { num: '.04', title: 'Why It Matters', desc: 'Connecting principles and performance with impact.', img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&q=80' },
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="bg-white border-b py-14 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between">
          <div>
            <h1 className="text-4xl font-black text-gray-900">ABOUT US</h1>
            <p className="text-sm text-gray-500 mt-2">
              <span className="hover:text-violet-500 cursor-pointer">HOME</span>
              <span className="mx-2">»</span>
              <span>ABOUT US</span>
            </p>
          </div>
          <p className="text-gray-600 max-w-xs mt-4 sm:mt-0 text-right">
            Learn more about our mission, values, and the team behind our success.
          </p>
        </div>
        <div className="max-w-7xl mx-auto mt-6">
          <div className="h-1 bg-violet-400 rounded-full" />
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=700&q=80"
                alt="Team meeting"
                className="rounded-3xl w-full h-96 object-cover"
              />
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <p className="text-violet-500 font-semibold text-sm uppercase tracking-wider mb-3">About GM</p>
              <h2 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight mb-6">
                Empowering people and businesses through innovative workplace solutions
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Sed ut unde omnis iste natus sit volur tatem accusantium laudantium totam rem aperiam eaque ipsa ab illo inventore veritatis et architecto beatae vitae dicta sunt explicabo.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <div className="flex items-center gap-3">
                  <img src="https://i.pravatar.cc/48?img=5" alt="" className="w-12 h-12 rounded-full" />
                  <div>
                    <p className="font-bold text-gray-900">Michael Robert</p>
                    <p className="text-sm text-violet-500 font-semibold">CEO & Founder</p>
                  </div>
                </div>
                <div className="bg-violet-400 rounded-2xl px-6 py-4 text-center">
                  <p className="text-3xl font-black text-gray-900">20+</p>
                  <p className="text-sm font-semibold">Years of Experience</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="text-violet-500 font-semibold text-sm uppercase tracking-wider mb-3">Integrity Growth</p>
            <h2 className="text-3xl font-black text-gray-900">
              Driving purpose, vision, and values into action
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <AnimatedSection key={i} delay={i * 80} className="text-center">
                <p className="text-4xl font-black text-gray-200 mb-4">{v.num}</p>
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-5 border-4 border-white shadow-lg">
                  <img src={v.img} alt={v.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500">{v.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="flex flex-col sm:flex-row sm:items-center justify-between mb-12">
            <div>
              <p className="text-violet-500 font-semibold text-sm uppercase tracking-wider mb-2">Our Team</p>
              <h2 className="text-3xl font-black text-gray-900">Meet our professional team member</h2>
            </div>
            <button className="mt-4 sm:mt-0 bg-gray-900 text-white font-bold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-700 transition-colors">
              ALL MEMBER <span className="text-violet-400 font-bold">+</span>
            </button>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="bg-gray-100 p-2 pb-0">
                    <p className="font-bold text-gray-900 text-sm">{member.name}</p>
                    <p className="text-xs text-gray-500 mb-2">{member.role}</p>
                    <div className="bg-violet-400 rounded-t-xl overflow-hidden h-48">
                      <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top" />
                    </div>
                  </div>
                  <div className="p-3 flex gap-3 justify-center border-t">
                    {[SocialFacebook, SocialTwitter, SocialYoutube, SocialInstagram].map((Icon, j) => (
                      <a key={j} href="#" className="text-gray-400 hover:text-violet-500 transition-colors">
                        <Icon size={14} />
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section> */}

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
