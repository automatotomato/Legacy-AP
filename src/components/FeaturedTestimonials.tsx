import React from 'react';
import { Star, Quote } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const testimonials = [
  {
    quote: "The memoir they created for my grandmother is absolutely priceless. Every detail, every story - it's like having her wisdom preserved forever.",
    author: "Sarah Mitchell",
    role: "Loving Granddaughter",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    rating: 5
  },
  {
    quote: "I never thought sharing my life story could be this easy. The interviewers made me feel so comfortable, and the final book is beautiful.",
    author: "Robert Chen",
    role: "Legacy Creator",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    rating: 5
  },
  {
    quote: "The best gift we could have given our parents for their 50th anniversary. The quality of the book and the stories they captured are amazing.",
    author: "Emily Thompson",
    role: "Grateful Daughter",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    rating: 5
  }
];

export default function FeaturedTestimonials() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Trusted by Families Everywhere
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Join thousands who have preserved their family legacy
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <div className="bg-white rounded-xl shadow-lg p-6 relative">
                <div className="absolute -top-3 -left-3 bg-emerald-100 rounded-full p-2">
                  <Quote className="w-4 h-4 text-emerald-600" />
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-gray-700 mb-6">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-medium text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-emerald-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}