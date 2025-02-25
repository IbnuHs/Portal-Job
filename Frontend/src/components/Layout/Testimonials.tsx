// src/components/Layout/Testimonials.tsx
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: "John Doe",
        feedback: "This platform helped me find my dream job quickly and easily!",
        role: "Software Engineer"
    },
    {
        name: "Jane Smith",
        feedback: "Great user experience and a lot of job opportunities available.",
        role: "Product Manager"
    },
    {
        name: "Michael Johnson",
        feedback: "Highly recommend this job portal for job seekers and recruiters alike.",
        role: "HR Specialist"
    }
];

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="p-8 bg-gray-50">
            <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <motion.div 
                        key={index} 
                        className="bg-white p-6 shadow-md border border-gray-200 transition-all duration-300 transform hover:scale-105 rounded-md flex flex-col justify-between"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div>
                            <p className="text-lg text-gray-700 italic mb-4">"{testimonial.feedback}"</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-xl text-gray-800 mb-1">{testimonial.name}</h3>
                            <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
