import React from "react";
import { 
  Building2, Users, Rocket, Target, ShieldCheck, 
  MapPin, Check, Sparkles, MessageCircle, Star,
  Phone, Mail
} from "lucide-react";

interface AboutViewProps {
  setTab: (tab: string) => void;
}

export default function AboutView({ setTab }: AboutViewProps) {
  return (
    <div className="animate-fadeIn">
      
      {/* Editorial Header */}
      <section className="bg-slate-50 py-16 sm:py-20 border-b border-slate-200" id="about-hero">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block">Our Mission & Identity</span>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Helping Local Businesses Forge Stronger Growth
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We believe small business owners are the absolute backbone of our communities. Our mission is to secure their digital footprints so they can compete—and win—against heavily-funded corporate franchises.
          </p>
        </div>
      </section>

      {/* Core Narrative / Compelling story */}
      <section className="bg-white py-20 border-b border-slate-100" id="about-narrative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-[11px] font-bold text-blue-700">
                <Building2 className="h-3.5 w-3.5 text-blue-600" />
                An M&H OnlineServices Company
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                Our Story: Why We Built LeadForge Local
              </h2>
              
              <div className="text-xs sm:text-sm text-slate-600 space-y-4 leading-relaxed">
                <p>
                  Most digital marketing agencies talk in circle metrics. They charge $2,000+ per month retainers for abstract search keyword clusters, decorative social impressions, or 'click rates' that nobody can put in the bank. 
                </p>
                <p>
                  We saw honest, hardworking local business owners—plumbers, concrete builders, roofers, landscapers—getting overcharged by lazy agencies or lost in complex algorithms. Many were leaking dozens of high-paying calls simply because their Google maps pin was unoptimized or they missed client inquiries on active job sites.
                </p>
                <p>
                  That's why we founded <strong>LeadForge Local</strong> as a dedicated agency division under the <strong>M&H OnlineServices</strong> corporate family. By combining M&H's advanced container hosting and automations infrastructure with localized, hyper-targeted trade copy, we designed a client-finding machine that operates fractionally at a tiny segment of traditional agency overheads.
                </p>
                <p>
                  We don't build long, confusing tech contracts. We build simple, incredibly high-speed digital tools, optimize your maps pack directory properly, and install immediate call text-back systems that preserve incoming cash flow from day one.
                </p>
              </div>

              <div className="pt-4 flex gap-4">
                <button
                  onClick={() => { setTab("audit"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-3.5 px-6 shadow-md transition-all cursor-pointer"
                >
                  Request A Free Audit
                </button>
                <button
                  onClick={() => { setTab("pricing"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className="rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-xs py-3.5 px-5 transition-all cursor-pointer"
                >
                  View Marketing Packages
                </button>
              </div>
            </div>

            {/* Large visually polished side card representing M&H Parent association details */}
            <div className="lg:col-span-5 bg-slate-950 text-white rounded-2xl p-8 border border-slate-900 relative">
              <div className="absolute top-0 right-0 h-24 w-24 bg-blue-600/10 blur-2xl pointer-events-none rounded-full" />
              
              <div className="space-y-6 relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg">
                  <Target className="h-6 w-6 text-white" />
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] text-sky-400 font-bold uppercase tracking-wider block">Enterprise-backed Security</span>
                  <h3 className="font-display font-extrabold text-white text-lg">Backed by M&H OnlineServices</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    By operating as a proud, integrated division of M&H OnlineServices, LeadForge Local has instant, native access to high-performance web servers, advanced cloud databases, and certified SMS communication servers.
                  </p>
                </div>

                <div className="space-y-3 pt-2 text-xs">
                  <div className="flex items-start gap-2.5">
                    <Check className="h-4.5 w-4.5 text-sky-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-semibold text-[11px]">99.9% Uptime SLA Guarantee</strong>
                      <span className="text-slate-400 block text-[10px]">Your web lead channels never go down.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="h-4.5 w-4.5 text-sky-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-semibold text-[11px]">HIPAA & Carrier Compliant SMS</strong>
                      <span className="text-slate-400 block text-[10px]">Your missed call responses trigger safely 24/7.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-850 flex items-center justify-between text-[11px] text-slate-400 italic">
                  <span>Reliable Growth Partnerships</span>
                  <span>Est. 2026</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: CORE BRAND VALUES */}
      <section className="bg-slate-50 py-20 border-b border-slate-200" id="about-values">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block">The Foundation of Our Business</span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Core Agency Operational Standards
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We guide all client campaigns with a set of four humble, clear-cut promises.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "1. No Corporate Fluff",
                desc: "We skip complex computer jargon and telemetry lines. We talk plainly in inbound phone rings, appointment volumes, and customer cash flow."
              },
              {
                title: "2. Absolute Price Integrity",
                desc: "With websites starting at $500, we show our pricing options upfront. No hidden setup fees or unannounced marketing charges."
              },
              {
                title: "3. Trade Specialization",
                desc: "We study local service contractor search metrics specifically, optimizing structures for plumbers, HVAC tech, roofers, and local trades."
              },
              {
                title: "4. Month-to-Month Freedom",
                desc: "We don't lock your business down into legal annual contracts. If you ever feel our systems aren't moving the needle, modify anytime."
              }
            ].map((val, idx) => (
              <div key={idx} className="bg-white border border-slate-200 shadow-sm p-6 rounded-2xl hover:shadow-md transition-shadow">
                <span className="font-mono text-xs font-black text-blue-500 block mb-2">PROMISE 0{idx+1}</span>
                <h3 className="font-display font-bold text-slate-900 text-sm mb-1.5">{val.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 3.5: MEET THE FOUNDERS */}
      <section className="bg-white py-20 border-b border-slate-200" id="about-founders">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block">Direct Accountability</span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Meet Our Founders & Leadership
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We don't hide behind automated email response portals or outsourced customer centers. You get direct access to our agency principals whenever you need coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Heather Tucker Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 h-2 bg-blue-600 w-full" />
              <div className="space-y-4">
                <div>
                  <h3 className="font-display font-extrabold text-slate-950 text-lg">Heather Tucker</h3>
                  <span className="text-xs text-blue-600 font-bold block uppercase tracking-wider mt-0.5">Co-Founder & Client Success Director</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Heather manages our local onboarding schedules, citation reviews loops, and client partnership retention. She ensures your brand receives elite representation and persistent localized placement.
                </p>
                <div className="pt-3 border-t border-slate-200 space-y-2 text-xs font-medium">
                  <a href="tel:6822099273" className="flex items-center gap-2.5 text-slate-705 hover:text-blue-600 transition-colors">
                    <Phone className="h-4 w-4 text-blue-500" />
                    <span>(682) 209-9273</span>
                  </a>
                  <a href="mailto:m.h.onlineservices722@gmail.com" className="flex items-center gap-2.5 text-slate-705 hover:text-blue-600 transition-colors">
                    <Mail className="h-4 w-4 text-blue-500" />
                    <span>m.h.onlineservices722@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Matthew Tucker Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 h-2 bg-blue-600 w-full" />
              <div className="space-y-4">
                <div>
                  <h3 className="font-display font-extrabold text-slate-950 text-lg">Matthew Tucker</h3>
                  <span className="text-xs text-blue-600 font-bold block uppercase tracking-wider mt-0.5">Co-Founder & Technical Operations Director</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Matthew leads our custom container infrastructure, digital optimization systems, Google API synchronizations, and automated call SMS responders. He keeps your inbound funnel secure and loading at 99.9% speeds.
                </p>
                <div className="pt-3 border-t border-slate-200 space-y-2 text-xs font-medium">
                  <a href="tel:4693402871" className="flex items-center gap-2.5 text-slate-705 hover:text-blue-600 transition-colors">
                    <Phone className="h-4 w-4 text-blue-500" />
                    <span>(469) 340-2871</span>
                  </a>
                  <a href="mailto:m.h.onlineservices722@gmail.com" className="flex items-center gap-2.5 text-slate-705 hover:text-blue-600 transition-colors">
                    <Mail className="h-4 w-4 text-blue-500" />
                    <span>m.h.onlineservices722@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-12 bg-blue-50 rounded-2xl p-6 border border-blue-150 text-center max-w-2xl mx-auto border-blue-100">
            <span className="text-[10px] text-blue-600 font-bold uppercase tracking-widest block mb-1">Our Location & Availability</span>
            <p className="text-xs font-semibold text-slate-800">
              Executive Office: Dallas, Texas
            </p>
            <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
              We support contractors nationwide, with centralized strategic hubs operating out of Texas and Colorado. Schedule a direct callback session with Matthew or Heather today.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 4: TRUST SEAL BADGES AND DIRECT OUTREACH MESSAGE */}
      <section className="bg-white py-16 text-center" id="about-badges">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600 mx-auto">
            <ShieldCheck className="h-6 w-6 stroke-[2.5]" />
          </div>
          <h3 className="font-display font-extrabold text-slate-950 text-xl tracking-tight">
            Ready To Upgrade Your Online Presence?
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed max-w-lg mx-auto">
            Our team is online and ready to prepare your custom free performance audit. In under 24 hours, you will know exactly what citations are broken and how to rank Page 1 in your target town.
          </p>
          <button
            onClick={() => { setTab("audit"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="inline-flex items-center gap-1.5 font-bold text-xs uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 px-6 py-3.5 rounded-xl shadow-md cursor-pointer"
          >
            <span>Request Your Free Visibility Audit</span>
          </button>
        </div>
      </section>

    </div>
  );
}
