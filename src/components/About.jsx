import React from "react";
import { ArrowRight, Zap, Shield, Users, Building2, Rocket, Globe } from "lucide-react";

const About = () => {
  const innovations = [
    { 
      icon: Users, 
      title: "Competitive Bidding System", 
      desc: "Transparent marketplace where contractors, suppliers, and architects compete for projects with real-time pricing and proposal comparison.",
      tech: "Advanced Matching Algorithms"
    },
    { 
      icon: Shield, 
      title: "Secure Escrow Platform", 
      desc: "Protected payment system with milestone-based releases, dispute resolution, and automated fund management for complete transaction security.",
      tech: "Bank-Grade Security & Encryption"
    },
    { 
      icon: Zap, 
      title: "Real-Time Project Hub", 
      desc: "Centralized communication platform with instant messaging, file sharing, progress tracking, and collaborative project management tools.",
      tech: "Cloud-Based Collaboration"
    }
  ];

  const metrics = [
    { value: "50K+", label: "Verified Professionals" },
    { value: "2.5M+", label: "Projects Delivered" },
    { value: "$1.2B+", label: "Transaction Value" },
    { value: "95%", label: "Match Accuracy" }
  ];

  const features = [
    "Project marketplace connecting clients with verified professionals",
    "Competitive bidding system with transparent pricing comparison", 
    "Secure escrow payments with milestone-based fund releases",
    "Real-time communication hub with file sharing and messaging",
    "Professional verification and rating system for quality assurance",
    "Comprehensive project management with progress tracking tools"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-8">
            <Rocket className="w-4 h-4" />
            Next-Generation Construction Platform
          </div>
          
          <h1 className="text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Innovation Meets
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Construction
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Bid2Build leverages advanced platform technology, secure payment systems, and streamlined workflows to revolutionize 
            construction project management. We connect clients with verified professionals through transparent bidding and secure collaboration.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {metrics.map(({ value, label }, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-slate-900 mb-2">{value}</div>
                <div className="text-sm text-slate-600">{label}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Animated Background */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
      </section>

      {/* Innovation Core */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Technology Innovation</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Powered by breakthrough technologies that transform how construction projects are conceived, managed, and delivered.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {innovations.map(({ icon: Icon, title, desc, tech }, i) => (
              <div key={i} className="group p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{desc}</p>
                <div className="text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full inline-block">
                  {tech}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 px-6 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
          <p className="text-xl text-slate-300 leading-relaxed mb-12">
            To democratize construction through intelligent technology that makes complex projects simple, 
            transparent, and successful. We believe every vision deserves the perfect team to bring it to life.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">40%</div>
              <div className="text-slate-400">Faster Project Delivery</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">35%</div>
              <div className="text-slate-400">Cost Reduction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-400 mb-2">98%</div>
              <div className="text-slate-400">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Advanced Capabilities</h2>
            <p className="text-xl text-slate-600">
              Experience construction management reimagined with intelligent automation and predictive insights.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-slate-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Call to Action */}
      <section className="py-24 px-6 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Join the construction revolution. Transform your projects with AI-powered intelligence, 
            blockchain security, and seamless collaboration.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-bold transition-all hover:scale-105 hover:shadow-xl">
              Start Building Smart
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 rounded-full font-semibold transition-all hover:bg-white/10">
              Explore Platform
              <Globe className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;