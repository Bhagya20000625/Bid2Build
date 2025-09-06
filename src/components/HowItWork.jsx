import React, { useState } from "react";
import { ArrowRight, FileText, Users, CheckCircle, Play } from "lucide-react";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Post Project",
      description: "Define your vision with clear requirements and budget",
      details: "Upload plans, set timeline, define scope"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Get Proposals",
      description: "Receive competitive bids from verified professionals",
      details: "Review portfolios, compare pricing, check ratings"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Build Together",
      description: "Collaborate securely with milestone tracking",
      details: "Escrow payments, progress updates, quality control"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            Simple Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It <span className="text-blue-600">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three streamlined steps to bring your construction vision to life
          </p>
        </div>

        {/* Interactive Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer group ${
                activeStep === index
                  ? "border-blue-500 bg-blue-50 shadow-lg"
                  : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-md"
              }`}
              onClick={() => setActiveStep(index)}
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-8">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                  activeStep === index
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-600 group-hover:bg-gray-300"
                }`}>
                  {index + 1}
                </div>
              </div>

              {/* Icon */}
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors ${
                activeStep === index
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-600 group-hover:bg-gray-200"
              }`}>
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 mb-4">{step.description}</p>
              
              {/* Details */}
              <div className={`text-sm transition-all duration-300 ${
                activeStep === index ? "text-blue-600 opacity-100" : "text-gray-500 opacity-70"
              }`}>
                {step.details}
              </div>

              {/* Active Indicator */}
              {activeStep === index && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 rounded-b-2xl"></div>
              )}
            </div>
          ))}
        </div>

        {/* Process Flow Visualization */}
        <div className="relative">
          <div className="flex items-center justify-center mb-16">
            <div className="flex items-center gap-4">
              {steps.map((_, index) => (
                <React.Fragment key={index}>
                  <div className={`w-4 h-4 rounded-full transition-colors ${
                    index <= activeStep ? "bg-blue-500" : "bg-gray-300"
                  }`}></div>
                  {index < steps.length - 1 && (
                    <div className={`w-16 h-0.5 transition-colors ${
                      index < activeStep ? "bg-blue-500" : "bg-gray-300"
                    }`}></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Feature Highlight */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop"
                  alt="Construction collaboration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110">
                    <Play className="w-6 h-6 text-blue-600 ml-1" />
                  </button>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                ✓ Proven Process
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Built for <span className="text-blue-600">Success</span>
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Our streamlined approach connects you with the right professionals while ensuring 
                transparency and security throughout your project journey.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">98%</div>
                  <div className="text-sm text-gray-500">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">5K+</div>
                  <div className="text-sm text-gray-500">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">24h</div>
                  <div className="text-sm text-gray-500">Avg Response</div>
                </div>
              </div>

              <button className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
