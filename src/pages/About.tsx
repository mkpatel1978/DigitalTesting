import { Target, Heart, Award, Users } from 'lucide-react';

const teamMembers = [
    {
        name: 'Mayank Patel',
        role: 'CEO & Founder',
        bio: 'Visionary leader with extensive experience in software quality assurance and automation strategies.',
        image: '/images/MKPhoto.jpg'
    },
    {
        name: 'David Chen',
        role: 'Head of Automation',
        bio: 'Expert in Selenium, Cypress, and AI-driven testing frameworks.',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        name: 'Emily Rodriguez',
        role: 'Security QA Lead',
        bio: 'Certified Ethical Hacker with a passion for securing fintech apps.',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        name: 'Michael Chang',
        role: 'Performance Engineer',
        bio: 'Specializes in high-load systems and scalability optimization.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
];

const About = () => {
    return (
        <div className="bg-white">
            {/* Header */}
            <div className="bg-gray-900 py-20 text-center text-white">
                <h1 className="text-4xl font-bold mb-4">About QA Pro Services</h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">
                    Dedicated to elevating software quality through innovation, expertise, and a passion for perfection.
                </p>
            </div>

            {/* Mission & Values */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            Our mission is to empower innovative companies to release bug-free software with confidence. We believe that quality is not an afterthought but a fundamental driver of user satisfaction and business success.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            By combining human intelligence with cutting-edge automation, we aim to redefine the standards of software testing.
                        </p>
                    </div>
                    <div className="bg-gray-100 rounded-xl p-8 flex items-center justify-center h-64 md:h-80">
                        <Target className="h-32 w-32 text-blue-500 opacity-80" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-6">
                        <div className="mx-auto w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                            <Heart className="h-8 w-8 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Client-Centric</h3>
                        <p className="text-gray-600">Your success is our success. We integrate seamlessly with your team.</p>
                    </div>
                    <div className="p-6">
                        <div className="mx-auto w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mb-4">
                            <Award className="h-8 w-8 text-purple-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
                        <p className="text-gray-600">We set high standards and strive for zero-defect delivery.</p>
                    </div>
                    <div className="p-6">
                        <div className="mx-auto w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
                            <Users className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Collaboration</h3>
                        <p className="text-gray-600">Open communication and transparency are at the core of our partnerships.</p>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Experts</h2>
                        <p className="text-lg text-gray-600">The minds behind our quality assurance strategies.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                                    <p className="text-blue-600 font-medium text-sm mb-3">{member.role}</p>
                                    <p className="text-gray-500 text-sm">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
