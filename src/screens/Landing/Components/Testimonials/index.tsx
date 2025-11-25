import React from "react";

export const Testimonials = (): React.ReactElement => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer",
      avatar: "👩‍💻",
      content:
        "Polyfy helped me become fluent in Spanish in just 6 months. The pronunciation training is incredible!",
      rating: 5,
      language: "Spanish",
    },
    {
      name: "Marcus Johnson",
      role: "Business Analyst",
      avatar: "👨‍💼",
      content:
        "The spaced repetition system is genius. I've learned over 3000 Japanese words and actually remember them.",
      rating: 5,
      language: "Japanese",
    },
    {
      name: "Elena Rodriguez",
      role: "Teacher",
      avatar: "👩‍🏫",
      content:
        "As an educator, I appreciate how Polyfy makes learning engaging. My students love the gamification features.",
      rating: 5,
      language: "French",
    },
    {
      name: "Ahmed Hassan",
      role: "Medical Student",
      avatar: "👨‍⚕️",
      content:
        "Perfect for busy schedules. I practice German during my commute and have made amazing progress.",
      rating: 5,
      language: "German",
    },
    {
      name: "Lisa Park",
      role: "Marketing Manager",
      avatar: "👩‍💼",
      content:
        "The social features are fantastic. I found a language exchange partner and we practice together daily.",
      rating: 5,
      language: "Korean",
    },
    {
      name: "David Thompson",
      role: "Freelancer",
      avatar: "👨‍💻",
      content:
        "Polyfy's content library is amazing. Learning through real videos and podcasts feels so natural.",
      rating: 5,
      language: "Portuguese",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            What our learners
            <span className="block bg-gradient-to-r from-brand-500 to-accent-500 bg-clip-text text-transparent">
              are saying
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Real stories from real people who transformed their lives through
            language learning with Polyfy.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Rating stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span
                    key={i}
                    className="text-yellow-400 text-lg"
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author info */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-brand-400 to-accent-400 flex items-center justify-center text-xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-brand-500 font-medium">
                    Learning {testimonial.language}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-brand-50 to-accent-50 dark:from-brand-900/20 dark:to-accent-900/20 border border-border rounded-2xl p-6">
            <div className="flex -space-x-2">
              {["👩‍💻", "👨‍💼", "👩‍🏫", "👨‍⚕️", "👩‍💼"].map((avatar, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-brand-400 to-accent-400 flex items-center justify-center text-sm border-2 border-background"
                >
                  {avatar}
                </div>
              ))}
            </div>
            <div className="text-center sm:text-left">
              <div className="font-semibold text-foreground">
                Join 2M+ happy learners
              </div>
              <div className="text-sm text-muted-foreground">
                Start your language journey today
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
