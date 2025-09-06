import React from "react";
import {
  Building2,
  Users,
  Shield,
  Clock,
  Award,
  Search,
  MessageSquare,
  FileText,
  CheckCircle,
  TrendingUp,
  Zap,
  ArrowRight,
  Star
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: Search,
      title: "Project Bidding Platform",
      description:
        "Connect with verified contractors and get competitive bids for your construction projects with our intelligent matching system.",
      features: [
        "Real-time bidding system",
        "Verified contractor network",
        "Transparent pricing model",
        "AI-powered project matching"
      ],
      color: "from-blue-500 to-blue-600",
      highlight: "Most Popular"
    },
    {
      icon: Users,
      title: "Contractor Network",
      description:
        "Access our extensive network of pre-vetted, licensed, and insured construction professionals across all specialties.",
      features: [
        "Comprehensive background checks",
        "License verification process",
        "Insurance validation",
        "Performance rating system"
      ],
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: FileText,
      title: "Project Management",
      description:
        "Streamline your construction projects with our comprehensive suite of management tools and analytics.",
      features: [
        "Advanced timeline tracking",
        "Milestone management",
        "Secure document storage",
        "Detailed progress reports"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: MessageSquare,
      title: "Communication Hub",
      description:
        "Centralized communication platform for seamless collaboration between all project stakeholders.",
      features: [
        "Real-time messaging system",
        "Secure file sharing",
        "HD video conferencing",
        "Automated progress updates"
      ],
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description:
        "Protected payment system with advanced escrow services ensuring secure transactions for all parties.",
      features: [
        "Advanced escrow protection",
        "Flexible milestone payments",
        "Professional dispute resolution",
        "Real-time payment tracking"
      ],
      color: "from-red-500 to-red-600"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description:
        "Comprehensive quality control and inspection services to ensure excellence throughout your project lifecycle.",
      features: [
        "Professional inspections",
        "Detailed quality reports",
        "Code compliance checks",
        "Final verification process"
      ],
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const additionalFeatures = [
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock expert customer support for all your construction needs and inquiries.",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: TrendingUp,
      title: "Market Insights",
      description: "Access comprehensive construction market trends, pricing analytics, and industry forecasts.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Zap,
      title: "Fast Matching",
      description: "AI-powered contractor matching system for rapid project assignments and optimal results.",
      color: "from-pink-500 to-pink-600"
    }
  ];

  const stats = [
    { number: "15,000+", label: "Projects Completed", icon: Building2 },
    { number: "8,500+", label: "Verified Contractors", icon: Users },
    { number: "99.2%", label: "Customer Satisfaction", icon: Star },
    { number: "24/7", label: "Support Available", icon: Clock }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-4">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(59,130,246,0.1) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, rgba(168,85,247,0.1) 1px, transparent 1px),
              linear-gradient(90deg, transparent 79px, rgba(59,130,246,0.03) 80px, rgba(59,130,246,0.03) 81px, transparent 82px)
            `,
            backgroundSize: "80px 80px, 40px 40px, 80px 80px"
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Enhanced Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Our Services
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2"></div>
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive construction marketplace solutions designed to transform how you build, 
            bid, and connect in the modern construction industry.
          </p>
        </div>

        {/* Enhanced Main Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {mainServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* Highlight Badge */}
                {service.highlight && (
                  <div className="absolute top-6 right-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    {service.highlight}
                  </div>
                )}

                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full flex-shrink-0`}></div>
                        <span className="text-sm text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-500 group-hover:text-gray-700 transition-colors cursor-pointer">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Additional Features */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Additional Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools and services to support every aspect of your construction journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 mb-20 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 2px, transparent 2px)`,
                backgroundSize: "60px 60px"
              }}
            />
          </div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Trusted by Industry Leaders</h2>
              <p className="text-gray-300 text-lg">Join thousands who've transformed their construction experience</p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="group">
                    <div className="mb-4">
                      <Icon className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                      <div className="text-4xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {stat.number}
                      </div>
                      <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-3xl p-12 max-w-4xl mx-auto shadow-xl border border-gray-100 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ready to Transform Your Construction Experience?
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust Bid2Build for their construction projects. 
                Start building smarter today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="group px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-10 py-4 bg-gray-900 text-white hover:bg-gray-800 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  Schedule Demo
                </button>
              </div>
              
              <p className="text-sm text-gray-500 mt-6">
                ✓ No setup fees • ✓ 30-day free trial • ✓ Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
    </div>
  );
};

export default Services;