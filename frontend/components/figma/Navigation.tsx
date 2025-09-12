import { useState } from 'react'
import { Button } from './ui/button'
import { Menu, X, Palette } from 'lucide-react'

interface NavigationProps {
  currentPage: string
  onPageChange: (page: string) => void
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const pages = [
    { id: 'home', name: 'ホーム' },
    { id: 'about', name: '部活紹介' },
    { id: 'news', name: 'ニュース' },
    { id: 'gallery', name: 'ギャラリー' },
    { id: 'contact', name: 'コンタクト' }
  ]

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Palette className="h-8 w-8 text-primary" />
            <span className="text-xl font-medium text-gray-900">美術部</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {pages.map((page) => (
                <button
                  key={page.id}
                  onClick={() => onPageChange(page.id)}
                  className={`px-3 py-2 rounded-md transition-colors ${
                    currentPage === page.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {page.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => {
                  onPageChange(page.id)
                  setIsMenuOpen(false)
                }}
                className={`block px-3 py-2 rounded-md w-full text-left transition-colors ${
                  currentPage === page.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {page.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}