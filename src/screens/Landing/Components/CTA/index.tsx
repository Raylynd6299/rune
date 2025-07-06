import React from 'react'
import { Button } from '@/components/Button'

export const CTA = (): React.ReactElement => {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-500 via-accent-500 to-brand-600 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white/90 mb-8">
          <span className="mr-2">🎉</span>
          Limited time offer - Start free today
        </div>
        
        {/* Main heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          Ready to start your
          <span className="block">language journey?</span>
        </h2>
        
        {/* Subtitle */}
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join millions of learners who are already mastering new languages with Polyfy. 
          Start your free trial today - no credit card required.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-white text-brand-600 hover:bg-white/90 font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Get Started Free
            <span className="ml-2">🚀</span>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold transition-all duration-300"
          >
            Download App
            <span className="ml-2">📱</span>
          </Button>
        </div>
        
        {/* Features list */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-white/90">
          <div className="flex items-center justify-center gap-2">
            <span className="text-white">✓</span>
            <span>Free forever plan</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-white">✓</span>
            <span>No credit card needed</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-white">✓</span>
            <span>Cancel anytime</span>
          </div>
        </div>
        
        {/* Bottom stats */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-white mb-1">2M+</div>
              <div className="text-sm text-white/80">Happy Users</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">50+</div>
              <div className="text-sm text-white/80">Languages</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">4.9★</div>
              <div className="text-sm text-white/80">App Rating</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">95%</div>
              <div className="text-sm text-white/80">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
