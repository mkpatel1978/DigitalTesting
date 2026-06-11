import { Link } from 'react-router-dom';
import { ShieldCheck, Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <ShieldCheck className="h-8 w-8 text-blue-500" />
                            <span className="font-bold text-xl text-white tracking-tight">Digital - QA Pro Services</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Leading the industry in software quality assurance and testing services. Ensuring your digital products are robust, secure, and user-friendly.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Services</h3>
                        <ul className="space-y-3">
                            <li><Link to="/services" className="text-base text-gray-400 hover:text-white transition-colors">Functional & Non-Functional Testing</Link></li>
                            <li><Link to="/services" className="text-base text-gray-400 hover:text-white transition-colors">Automation & RPA</Link></li>
                            <li><Link to="/services" className="text-base text-gray-400 hover:text-white transition-colors">AI and Agentic Testing</Link></li>
                            <li><Link to="/services" className="text-base text-gray-400 hover:text-white transition-colors">Project Management</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li><Link to="/about" className="text-base text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/about" className="text-base text-gray-400 hover:text-white transition-colors">Our Team</Link></li>
                            <li><Link to="/contact" className="text-base text-gray-400 hover:text-white transition-colors">Career</Link></li>
                            <li><Link to="/contact" className="text-base text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-gray-400">
                                <Mail className="h-4 w-4 text-blue-500" />
                                <span>mayank.master@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-2 text-gray-400">
                                <Phone className="h-4 w-4 text-blue-500" />
                                <span>+91 9033464137</span>
                            </li>
                            <li className="flex items-center gap-2 text-gray-400">
                                <MapPin className="h-4 w-4 text-blue-500" />
                                <span>Gujarat, India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center bg-gray-900">
                    <p className="text-base text-gray-500">&copy; {new Date().getFullYear()} Digital - QA Pro Services. | All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-white">
                            <span className="sr-only">Facebook</span>
                            <Facebook className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <span className="sr-only">Twitter</span>
                            <Twitter className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <span className="sr-only">LinkedIn</span>
                            <Linkedin className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
