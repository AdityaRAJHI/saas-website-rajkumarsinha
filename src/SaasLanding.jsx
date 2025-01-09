import React from 'react';
    import { ArrowRight, Check, Star, User, Zap, Shield } from 'lucide-react';

    const SaasLanding = () => {
      return (
        <div className="min-h-screen bg-gray-50">
          {/* Navigation */}
          <nav className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16 items-center">
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-blue-600">SaasApp</span>
                </div>
                <div className="flex items-center space-x-4">
                  <a href="#features" className="text-gray-700 hover:text-blue-600">Features</a>
                  <a href="#pricing" className="text-gray-700 hover:text-blue-600">Pricing</a>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    Get Started
                  </button>
                </div>
              </div>
              <div className="text-center text-gray-500 text-sm">
                Made with love by Rajkumar Sinha
              </div>
            </div>
          </nav>

          {/* Hero Section */}
          <div className="relative bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Transform Your Workflow</span>
                  <span className="block text-blue-600">with Our SaaS Solution</span>
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  Streamline your business operations with our powerful platform. Save time, reduce costs, and boost productivity.
                </p>
                <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                  <div className="rounded-md shadow">
                    <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                      Start Free Trial <ArrowRight className="ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div id="features" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-900">
                  Powerful Features
                </h2>
              </div>
              <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
                {[
                  {
                    icon: <Zap className="h-8 w-8 text-blue-600" />,
                    title: "Lightning Fast",
                    description: "Experience blazing fast performance with our optimized platform."
                  },
                  {
                    icon: <Shield className="h-8 w-8 text-blue-600" />,
                    title: "Secure by Design",
                    description: "Enterprise-grade security to protect your valuable data."
                  },
                  {
                    icon: <User className="h-8 w-8 text-blue-600" />,
                    title: "User Friendly",
                    description: "Intuitive interface designed for the best user experience."
                  }
                ].map((feature, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow">
                    <div className="flex items-center justify-center">{feature.icon}</div>
                    <h3 className="mt-4 text-xl font-medium text-gray-900 text-center">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-gray-500 text-center">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div id="pricing" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">
                Simple, Transparent Pricing
              </h2>
              <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
                {[
                  {
                    name: "Starter",
                    price: "29",
                    features: ["5 Users", "Basic Features", "Email Support"]
                  },
                  {
                    name: "Professional",
                    price: "99",
                    features: ["20 Users", "Advanced Features", "Priority Support"]
                  },
                  {
                    name: "Enterprise",
                    price: "299",
                    features: ["Unlimited Users", "Custom Features", "24/7 Support"]
                  }
                ].map((plan, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg shadow p-8">
                    <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                    <p className="mt-4 text-4xl font-bold">${plan.price}</p>
                    <p className="text-gray-500">/month</p>
                    <ul className="mt-6 space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="h-5 w-5 text-blue-600 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="mt-8 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                      Choose {plan.name}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">
                What Our Customers Say
              </h2>
              <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
                {[
                  {
                    text: "This platform has transformed how we work. Highly recommended!",
                    author: "Jane Cooper",
                    role: "CEO, TechCorp"
                  },
                  {
                    text: "The best SaaS solution we've used. Simple yet powerful.",
                    author: "John Smith",
                    role: "CTO, StartupX"
                  }
                ].map((testimonial, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow">
                    <div className="flex items-center mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4">{testimonial.text}</p>
                    <div>
                      <p className="font-medium text-gray-900">{testimonial.author}</p>
                      <p className="text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="bg-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Product
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Features</a></li>
                    <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Pricing</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Company
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">About</a></li>
                    <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Blog</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Support
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Help Center</a></li>
                    <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Contact</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Legal
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Privacy</a></li>
                    <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Terms</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      );
    };

    export default SaasLanding;
