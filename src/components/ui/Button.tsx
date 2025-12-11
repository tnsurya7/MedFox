import { ButtonHTMLAttributes, forwardRef, ReactElement, cloneElement } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading, asChild, children, disabled, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
    
    const variants = {
      primary: 'btn-premium text-white hover:shadow-xl hover:shadow-medfox-orange/30 hover:scale-105 focus:ring-medfox-orange transform transition-all duration-300 relative overflow-hidden',
      secondary: 'bg-gradient-to-r from-medfox-blue to-medfox-blue/90 text-white border-2 border-medfox-blue hover:from-medfox-blue/90 hover:to-medfox-blue hover:shadow-lg hover:shadow-medfox-blue/25 hover:scale-105 focus:ring-medfox-blue transform transition-all duration-300',
      outline: 'bg-transparent text-gray-900 border-2 border-medfox-blue hover:bg-medfox-blue hover:text-white hover:border-medfox-blue hover:scale-105 focus:ring-medfox-blue transform transition-all duration-300',
      ghost: 'bg-transparent text-gray-900 hover:bg-gradient-to-r hover:from-medfox-orange/10 hover:to-medfox-blue/10 hover:scale-105 focus:ring-medfox-blue transform transition-all duration-300'
    }
    
    const sizes = {
      sm: 'px-4 py-2 text-sm rounded-xl',
      md: 'px-6 py-3 text-base rounded-2xl',
      lg: 'px-8 py-4 text-lg rounded-2xl'
    }
    
    const buttonClasses = cn(
      baseClasses,
      variants[variant],
      sizes[size],
      loading && 'cursor-wait',
      className
    )

    if (asChild && children) {
      const child = children as ReactElement<any>
      return cloneElement(child, {
        className: cn(buttonClasses, child.props?.className),
        ...props
      })
    }

    return (
      <button
        ref={ref}
        className={buttonClasses}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }