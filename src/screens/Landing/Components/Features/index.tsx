import React from "react";

export const Features = (): React.ReactElement => {
  const features = [
    {
      icon: "🎯",
      title: "Smart Vocabulary System",
      description:
        "Learn words efficiently with our spaced repetition algorithm that adapts to your learning pace.",
      color: "from-brand-400 to-brand-600",
    },
    {
      icon: "🔊",
      title: "Pronunciation Training",
      description:
        "Perfect your accent with AI-powered phonetic coaching and real-time feedback.",
      color: "from-accent-400 to-accent-600",
    },
    {
      icon: "📚",
      title: "Immersive Content",
      description:
        "Learn through authentic videos, podcasts, and articles from native speakers.",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: "📊",
      title: "Progress Analytics",
      description:
        "Track your learning journey with detailed insights and personalized recommendations.",
      color: "from-green-400 to-green-600",
    },
    {
      icon: "👥",
      title: "Social Learning",
      description:
        "Connect with learners worldwide, join study groups, and find language exchange partners.",
      color: "from-orange-400 to-orange-600",
    },
    {
      icon: "🎮",
      title: "Gamified Experience",
      description:
        "Stay motivated with achievements, streaks, and friendly competition.",
      color: "from-pink-400 to-pink-600",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Everything you need to
            <span className="block bg-gradient-to-r from-brand-500 to-accent-500 bg-clip-text text-transparent">
              master any language
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Our comprehensive platform combines proven learning methods with
            cutting-edge technology to make language learning effective,
            engaging, and enjoyable.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-accent-50/50 dark:to-accent-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-card border border-border rounded-full px-6 py-3">
            <span>🌟</span>
            <span>Join over 2 million learners worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
};
