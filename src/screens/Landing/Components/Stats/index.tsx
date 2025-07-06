import React from 'react'

export const Stats = (): React.ReactElement => {
  const stats = [
    {
      number: '2M+',
      label: 'Active Learners',
      description: 'Students worldwide trust Polyfy'
    },
    {
      number: '50+',
      label: 'Languages',
      description: 'From Spanish to Mandarin'
    },
    {
      number: '95%',
      label: 'Success Rate',
      description: 'Students reach their goals'
    },
    {
      number: '4.9★',
      label: 'User Rating',
      description: 'Loved by our community'
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-accent-50/50 to-brand-50/30 dark:from-accent-900/10 dark:to-brand-900/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Trusted by millions of
            <span className="block bg-gradient-to-r from-brand-500 to-accent-500 bg-clip-text text-transparent">
              language learners
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Join a global community that's already transforming their lives through language learning.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                {/* Number */}
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-brand-500 to-accent-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                
                {/* Label */}
                <div className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                
                {/* Description */}
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom section with logos */}
        <div className="mt-20 text-center">
          <p className="text-sm text-muted-foreground mb-8">
            Featured in leading publications
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 hover:opacity-80 transition-opacity duration-300">
            {/* Placeholder for publication logos */}
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-8 h-8 rounded bg-muted flex items-center justify-center">
                📰
              </div>
              <span className="font-medium">TechCrunch</span>
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-8 h-8 rounded bg-muted flex items-center justify-center">
                📱
              </div>
              <span className="font-medium">Product Hunt</span>
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-8 h-8 rounded bg-muted flex items-center justify-center">
                🏆
              </div>
              <span className="font-medium">EdTech Awards</span>
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-8 h-8 rounded bg-muted flex items-center justify-center">
                🌟
              </div>
              <span className="font-medium">App Store</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
