import React, { useState } from "react";
import { MessageCircle, Shield, Users, Star, Building2, ArrowRight } from "lucide-react";

const PlatformServices = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Project Marketplace",
      description: "Post your construction projects and connect with verified professionals instantly",
      icon: <Building2 className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1541976844346-f18aeac57b06?w=600&h=400&fit=crop",
      stats: "2.4K+ Projects"
    },
    {
      title: "Competitive Bidding", 
      description: "Contractors, suppliers, and architects compete for your project with transparent pricing",
      icon: <Users className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      stats: "95% Fair Pricing"
    },
    {
      title: "Secure Platform",
      description: "Escrow-based payments and real-time communication ensure project success",
      icon: <Shield className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop", 
      stats: "100% Protected"
    }
  ];

  const features = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Easy Project Posting",
      description: "Simple interface to post construction projects and reach qualified professionals"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Competitive Bidding",
      description: "Multiple contractors bid on your project ensuring best value and quality"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Real-time Communication",
      description: "Built-in messaging and notifications keep everyone connected and informed"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Escrow Payments",
      description: "Protected payments released only when milestones are completed successfully"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Transparent Evaluation",
      description: "Automated bid assessment and user ratings ensure fair project awards"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            Platform Features
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Smart <span className="text-blue-600">Construction Platform</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Connecting customers with verified construction professionals through transparent bidding and secure project management
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Services List */}
          <div className="space-y-3">
            {services.map((service, index) => (
              <div
                key={index}
                className={`p-5 rounded-xl border-2 transition-all cursor-pointer ${
                  activeService === index
                    ? "border-blue-500 bg-blue-50"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    activeService === index
                      ? "bg-blue-500 text-white"
                      : "bg-slate-100 text-slate-600"
                  }`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-slate-900">{service.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        activeService === index
                          ? "bg-blue-500 text-white"
                          : "bg-slate-200 text-slate-600"
                      }`}>
                        {service.stats}
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Display */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden">
              <img
                src={services[activeService].image}
                alt={services[activeService].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="text-xl font-bold mb-1">{services[activeService].title}</h4>
                <p className="text-white/90 text-sm">{services[activeService].description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-all text-center group"
            >
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mx-auto mb-3 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h4 className="font-semibold text-gray-900 mb-1 text-sm">{feature.title}</h4>
              <p className="text-xs text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PlatformServices;