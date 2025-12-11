import { formatCurrency, formatDate, calculateDaysAgo, getStatusColor } from '../utils'

describe('Utils', () => {
  describe('formatCurrency', () => {
    it('should format currency correctly', () => {
      expect(formatCurrency(1234.56)).toBe('$1,234.56')
      expect(formatCurrency(0)).toBe('$0.00')
      expect(formatCurrency(1000000)).toBe('$1,000,000.00')
    })
  })

  describe('formatDate', () => {
    it('should format date correctly', () => {
      const date = new Date('2024-12-10')
      const formatted = formatDate(date)
      expect(formatted).toMatch(/Dec \d{1,2}, 2024/)
    })

    it('should handle string dates', () => {
      const formatted = formatDate('2024-12-10')
      expect(formatted).toMatch(/Dec \d{1,2}, 2024/)
    })
  })

  describe('calculateDaysAgo', () => {
    it('should calculate days correctly', () => {
      const yesterday = new Date()
      yesterday.setDate(yesterday.getDate() - 1)
      
      const daysAgo = calculateDaysAgo(yesterday)
      expect(daysAgo).toBe(1)
    })
  })

  describe('getStatusColor', () => {
    it('should return correct colors for statuses', () => {
      expect(getStatusColor('paid')).toContain('green')
      expect(getStatusColor('pending')).toContain('yellow')
      expect(getStatusColor('denied')).toContain('red')
      expect(getStatusColor('submitted')).toContain('blue')
      expect(getStatusColor('unknown')).toContain('gray')
    })
  })
})