import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you for contacting us! We will get back to you shortly.');
        setFormData({ name: '', email: '', company: '', phone: '', message: '' });
    };

    return (
        <div className="relative min-h-screen">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                    alt="Modern Office"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row items-center gap-12">
                {/* Contact Info */}
                <div className="flex-1 text-white">
                    <h1 className="text-4xl font-bold mb-6">Let's Discuss Your QA Strategy</h1>
                    <p className="text-lg text-gray-300 mb-10 leading-relaxed">
                        Ready to improve your software quality? Fill out the form, and our team will provide a tailored testing plan for your project.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-blue-600 p-3 rounded-lg">
                                <Mail className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-xl">Email Us</h3>
                                <p className="text-gray-300">info@qaproservices.com</p>
                                <p className="text-gray-300">sales@qaproservices.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-blue-600 p-3 rounded-lg">
                                <Phone className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-xl">Call Us</h3>
                                <p className="text-gray-300">+1 (555) 123-4567</p>
                                <p className="text-gray-300">Mon-Fri, 9am - 6pm EST</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-blue-600 p-3 rounded-lg">
                                <MapPin className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-xl">Visit Us</h3>
                                <p className="text-gray-300">
                                    123 Tech Park, Suite 400<br />
                                    San Francisco, CA 94107
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Lead Gen Form */}
                <div className="flex-1 w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Get a Free Quote</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                placeholder="John Doe"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                    placeholder="(555) 123-4567"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                placeholder="Acme Corp"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                required
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                placeholder="Tell us about your project requirement along with brief description..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md transition-colors flex items-center justify-center gap-2"
                        >
                            Send Message <Send className="h-4 w-4" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
