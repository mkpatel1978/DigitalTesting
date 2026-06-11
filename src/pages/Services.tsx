import { useState } from 'react';
import { CheckCircle, Shield, Smartphone, Globe, Cpu, Terminal, Users } from 'lucide-react';

const servicesData = [
    {
        id: 1,
        title: 'Functional Testing',
        category: 'Functional',
        description: 'Ensure your application works exactly as intended with our comprehensive functional testing strategies.',
        icon: <CheckCircle className="h-8 w-8 text-blue-500" />
    },
    {
        id: 2,
        title: 'Test Automation',
        category: 'Automation',
        description: 'Speed up release cycles with robust, maintainable automated test scripts for web, mobile, and API.',
        icon: <Terminal className="h-8 w-8 text-green-500" />
    },
    {
        id: 3,
        title: 'Security Testing',
        category: 'Security',
        description: 'Identify vulnerabilities and protect your data with our rigorous penetration testing and security audits.',
        icon: <Shield className="h-8 w-8 text-red-500" />
    },
    {
        id: 4,
        title: 'Performance Testing',
        category: 'Performance',
        description: 'Optimize system behavior under load. We test scalability, reliability, and speed.',
        icon: <Cpu className="h-8 w-8 text-purple-500" />
    },
    {
        id: 5,
        title: 'Mobile App Testing',
        category: 'Mobile',
        description: 'Deliver seamless mobile experiences across iOS and Android devices with fragment testing.',
        icon: <Smartphone className="h-8 w-8 text-orange-500" />
    },
    {
        id: 6,
        title: 'API Testing',
        category: 'API',
        description: 'Validate your backend logic, data exchange, and integration points directly at the API level.',
        icon: <Globe className="h-8 w-8 text-indigo-500" />
    },
    {
        id: 7,
        title: 'AI & LLM Testing',
        category: 'AI',
        description: ' specialized testing for AI models and Large Language Models to ensure accuracy, safety, and bias mitigation.',
        icon: <Cpu className="h-8 w-8 text-teal-500" />
    },
    {
        id: 8,
        title: 'Usability Testing',
        category: 'Functional',
        description: 'Evaluate the user experience (UX) to ensure your product is intuitive and easy to use.',
        icon: <Users className="h-8 w-8 text-pink-500" />
    }
];

const categories = ['All', 'Functional', 'Automation', 'performance', 'Security', 'Mobile', 'API', 'AI'];

const Services = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredServices = activeCategory === 'All'
        ? servicesData
        : servicesData.filter(service => service.category.toLowerCase() === activeCategory.toLowerCase());

    return (
        <div className="bg-gray-50 min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Expertise</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We offer a full spectrum of QA services tailored to your specific needs.
                    </p>
                </div>

                {/* Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === category
                                    ? 'bg-blue-600 text-white shadow-md'
                                    : 'bg-white text-gray-600 hover:bg-white hover:text-blue-600 border border-gray-200'
                                }`}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredServices.map((service) => (
                        <div key={service.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8 border border-gray-100 flex flex-col h-full">
                            <div className="mb-6 bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center self-start">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed flex-grow">
                                {service.description}
                            </p>
                            <div className="mt-6 pt-6 border-t border-gray-100">
                                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-xs font-medium uppercase tracking-wide">
                                    {service.category}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
