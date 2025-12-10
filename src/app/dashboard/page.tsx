import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { 
  DollarSign, 
  FileText, 
  TrendingUp, 
  Clock,
  Users,
  CheckCircle
} from 'lucide-react'

export default function DashboardPage() {
  // Mock data - in a real app, this would come from your API
  const stats = [
    {
      title: 'Total Revenue',
      value: '$2,847,392',
      change: '+12.5%',
      icon: DollarSign,
      color: 'text-green-600',
    },
    {
      title: 'Active Claims',
      value: '1,247',
      change: '+3.2%',
      icon: FileText,
      color: 'text-blue-600',
    },
    {
      title: 'Clean Claim Rate',
      value: '98.5%',
      change: '+2.1%',
      icon: CheckCircle,
      color: 'text-green-600',
    },
    {
      title: 'Avg AR Days',
      value: '22.3',
      change: '-5.4%',
      icon: Clock,
      color: 'text-orange-600',
    },
  ]

  const recentClaims = [
    {
      id: 'CLM000001',
      patient: 'John Smith',
      provider: 'Dr. Sarah Johnson',
      amount: '$1,250.00',
      status: 'Paid',
      date: '2024-12-08',
    },
    {
      id: 'CLM000002',
      patient: 'Mary Johnson',
      provider: 'Dr. James Wilson',
      amount: '$850.00',
      status: 'Pending',
      date: '2024-12-07',
    },
    {
      id: 'CLM000003',
      patient: 'Robert Davis',
      provider: 'Dr. Sarah Johnson',
      amount: '$2,100.00',
      status: 'Submitted',
      date: '2024-12-06',
    },
    {
      id: 'CLM000004',
      patient: 'Jennifer Wilson',
      provider: 'Dr. Michael Chen',
      amount: '$675.00',
      status: 'Denied',
      date: '2024-12-05',
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'paid':
        return 'bg-green-100 text-green-800'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'submitted':
        return 'bg-blue-100 text-blue-800'
      case 'denied':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-primary-navy">Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Welcome back! Here's what's happening with your revenue cycle.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-primary-navy">{stat.value}</p>
                  <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change} from last month
                  </p>
                </div>
                <div className={`p-3 rounded-2xl bg-gray-100`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Claims */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Claims</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentClaims.map((claim) => (
                <div key={claim.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                  <div>
                    <div className="font-medium text-primary-navy">{claim.id}</div>
                    <div className="text-sm text-gray-600">{claim.patient}</div>
                    <div className="text-sm text-gray-500">{claim.provider}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-primary-navy">{claim.amount}</div>
                    <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(claim.status)}`}>
                      {claim.status}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{claim.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <button className="w-full p-4 text-left bg-primary-gold/10 hover:bg-primary-gold/20 rounded-2xl transition-colors">
                <div className="flex items-center space-x-3">
                  <FileText className="w-6 h-6 text-primary-gold" />
                  <div>
                    <div className="font-medium text-primary-navy">Submit New Claim</div>
                    <div className="text-sm text-gray-600">Create and submit a new insurance claim</div>
                  </div>
                </div>
              </button>
              
              <button className="w-full p-4 text-left bg-accent-green/10 hover:bg-accent-green/20 rounded-2xl transition-colors">
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-accent-green" />
                  <div>
                    <div className="font-medium text-primary-navy">Add New Client</div>
                    <div className="text-sm text-gray-600">Register a new healthcare provider</div>
                  </div>
                </div>
              </button>
              
              <button className="w-full p-4 text-left bg-blue-100 hover:bg-blue-200 rounded-2xl transition-colors">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="font-medium text-primary-navy">Generate Report</div>
                    <div className="text-sm text-gray-600">Create revenue cycle analytics report</div>
                  </div>
                </div>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}