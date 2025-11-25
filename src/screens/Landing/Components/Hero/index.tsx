import React from "react";
import { Button } from "@/components/Button";

export const Hero = (): React.ReactElement => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-accent-50/30 to-brand-50/20 dark:from-background dark:via-accent-900/20 dark:to-brand-900/10">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-brand-400/20 to-accent-400/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:py-40">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-border bg-card/50 backdrop-blur-sm px-4 py-2 text-sm font-medium text-muted-foreground mb-8">
            <span className="mr-2">🚀</span>
            The future of language learning is here
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="block">Learn Languages</span>
            <span className="block bg-gradient-to-r from-brand-500 via-accent-500 to-brand-600 bg-clip-text text-transparent">
              The Natural Way
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed">
            Master any language through immersive content, smart vocabulary
            training, and AI-powered pronunciation coaching. Join millions
            learning naturally with Polyfy.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Start Learning Free
              <span className="ml-2">→</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-border hover:bg-accent/10 px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              Watch Demo
              <span className="ml-2">▶</span>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-brand-500">✓</span>
              <span>Free forever plan</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-brand-500">✓</span>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-brand-500">✓</span>
              <span>50+ languages available</span>
            </div>
          </div>
        </div>

        {/* Hero image/illustration */}
        <div className="mt-20 relative">
          <div className="relative mx-auto max-w-4xl">
            <div className="relative rounded-2xl bg-card/50 backdrop-blur-sm border border-border shadow-2xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-brand-50 to-accent-50 dark:from-brand-900/20 dark:to-accent-900/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-brand-400 to-accent-400 flex items-center justify-center text-4xl">
                    🌍
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Interactive Learning Dashboard
                  </h3>
                  <p className="text-muted-foreground">
                    Experience personalized language learning
                  </p>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -top-4 -left-4 bg-card border border-border rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-bold">
                    ✓
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Daily Goal</div>
                    <div className="text-xs text-muted-foreground">
                      15 min completed
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-card border border-border rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center text-white text-sm">
                    🔥
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Streak</div>
                    <div className="text-xs text-muted-foreground">7 days</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card border border-border rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-accent-500 flex items-center justify-center text-white text-sm">
                    📚
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Words Learned</div>
                    <div className="text-xs text-muted-foreground">
                      1,247 total
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
