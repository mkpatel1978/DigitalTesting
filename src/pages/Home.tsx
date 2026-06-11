import { ArrowRight, CheckCircle, BarChart3, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-gray-900 text-white">
                <div className="absolute inset-0 overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        alt="Team working on QA"
                        className="w-full h-full object-cover opacity-20"
                    />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                            Flawless Software. <br />
                            <span className="text-blue-500">Delivered with Confidence.</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Comprehensive QA and testing services designed to accelerate your release cycle while ensuring the highest standards of quality, security, and performance.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-all"
                            >
                                Get a Free Audit <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link
                                to="/services"
                                className="inline-flex items-center justify-center bg-transparent border border-gray-500 hover:border-white hover:text-white text-gray-300 px-8 py-3 rounded-md text-lg font-medium transition-all"
                            >
                                View Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Indicators */}
            <section className="py-10 bg-gray-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">Trusted by innovative companies</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholders for logos */}
                        <span className="text-xl font-bold text-gray-400">TechCorp</span>
                        <span className="text-xl font-bold text-gray-400">InnovateX</span>
                        <span className="text-xl font-bold text-gray-400">FinSecure</span>
                        <span className="text-xl font-bold text-gray-400">HealthPlus</span>
                        <span className="text-xl font-bold text-gray-400">EduGlobal</span>
                    </div>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose QA Pro Services?</h2>
                        <p className="text-lg text-gray-600">
                            We go beyond bug hunting. We provide a strategic partnership to elevate your product quality and optimize your development flow.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Zap className="h-10 w-10 text-yellow-500" />,
                                title: "Accelerated Time-to-Market",
                                description: "Our automated testing frameworks reduce regression time by up to 70%, allowing you to release faster."
                            },
                            {
                                icon: <CheckCircle className="h-10 w-10 text-green-500" />,
                                title: "Zero Defect Leakage",
                                description: " rigorous multi-layer testing approach aims for zero defect leakage to production environments."
                            },
                            {
                                icon: <Users className="h-10 w-10 text-blue-500" />,
                                title: "Expert QA Engineers",
                                description: "Access a dedicated team of certified QA professionals with deep domain expertise in your industry."
                            },
                            {
                                icon: <BarChart3 className="h-10 w-10 text-purple-500" />,
                                title: "Data-Driven Insights",
                                description: "Comprehensive reporting and analytics to track quality metrics and identify bottlenecks."
                            },
                            {
                                icon: <ArrowRight className="h-10 w-10 text-red-500" />, // Placeholder icon
                                title: "Scalable Solutions",
                                description: "Flexible engagement models that scale with your project needs, from startups to enterprises."
                            },
                            {
                                icon: <ArrowRight className="h-10 w-10 text-indigo-500" />, // Placeholder
                                title: "End-to-End Coverage",
                                description: "From requirements analysis to UAT, we cover the entire software development lifecycle (SDLC)."
                            }

                        ].map((feature, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
                                <div className="mb-4 bg-gray-50 rounded-lg w-16 h-16 flex items-center justify-center">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-blue-600 py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Software Quality?</h2>
                    <p className="text-xl text-blue-100 mb-10">
                        Let's discuss how we can tailor a testing strategy to meet your specific business goals.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-bold hover:bg-gray-100 transition-colors"
                    >
                        Schedule a Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
