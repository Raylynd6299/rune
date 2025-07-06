import { Button } from '@/components/Button'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Link } from 'react-router-dom'
import React from 'react'

export const Header = ():React.ReactElement => {
  return (
    <header className="relative z-50 px-6 py-4 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 flex items-center justify-center">
              <span className="text-xl">📚</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-brand-500 to-brand-600 bg-clip-text text-transparent">
                Polyfy
              </h1>
              <p className="text-xs text-muted-foreground">The Natural Way to Learn Languages</p>
            </div>
          </Link>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="ghost" className="hover:bg-accent/10" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
            <Button className="bg-gradient-to-r from-brand-400 to-brand-600 hover:from-brand-500 hover:to-brand-700 text-white font-semibold px-6 transition-all duration-300 hover:scale-105" asChild>
              <Link to="/register">Begin Journey</Link>
            </Button>
          </div>
        </div>
      </header>
  )
}
