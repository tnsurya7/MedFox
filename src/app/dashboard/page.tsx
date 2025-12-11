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
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Welcome back! Here's what's happening with your revenue cycle.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="card-premium group relative overflow-hidden animate-card-hover">
            <div className="absolute inset-0 bg-gradient-to-br from-medfox-orange/5 to-medfox-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-medfox-orange/10 to-transparent rounded-full blur-lg animate-pulse"></div>
            <CardContent className="p-6 relative">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 group-hover:text-medfox-orange transition-colors duration-300">{stat.value}</p>
                  <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'} group-hover:font-medium transition-all duration-300`}>
                    {stat.change} from last month
                  </p>
                </div>
                <div className={`p-3 rounded-2xl ${index % 2 === 0 ? 'icon-bg-orange' : 'icon-bg-blue'} group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <stat.icon className={`w-6 h-6 ${stat.color} group-hover:animate-pulse`} />
                </div>
              </div>
            </CardContent>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Claims */}
        <Card className="card-premium group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-medfox-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <CardHeader className="relative">
            <CardTitle className="group-hover:text-medfox-blue transition-colors duration-300">Recent Claims</CardTitle>
          </CardHeader>
          <CardContent className="relative">
            <div className="space-y-4">
              {recentClaims.map((claim, index) => (
                <div key={claim.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-2xl hover:from-medfox-orange/5 hover:to-medfox-blue/5 transition-all duration-300 group/item">
                  <div>
                    <div className="font-medium text-gray-900 group-hover/item:text-medfox-orange transition-colors duration-300">{claim.id}</div>
                    <div className="text-sm text-gray-600 group-hover/item:text-gray-700 transition-colors duration-300">{claim.patient}</div>
                    <div className="text-sm text-gray-500 group-hover/item:text-gray-600 transition-colors duration-300">{claim.provider}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900 group-hover/item:text-medfox-blue transition-colors duration-300">{claim.amount}</div>
                    <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(claim.status)} group-hover/item:scale-105 transition-transform duration-300`}>
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
              <button className="w-full p-4 text-left bg-gradient-to-r from-medfox-orange/10 to-medfox-orange/5 hover:bg-gradient-to-r hover:from-medfox-orange/20 hover:to-medfox-orange/10 rounded-2xl transition-colors">
                <div className="flex items-center space-x-3">
                  <FileText className="w-6 h-6 text-medfox-orange" />
                  <div>
                    <div className="font-medium text-gray-900">Submit New Claim</div>
                    <div className="text-sm text-gray-600">Create and submit a new insurance claim</div>
                  </div>
                </div>
              </button>
              
              <button className="w-full p-4 text-left bg-gradient-to-r from-medfox-blue/10 to-medfox-blue/5 hover:bg-gradient-to-r hover:from-medfox-blue/20 hover:to-medfox-blue/10 rounded-2xl transition-colors">
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-medfox-blue" />
                  <div>
                    <div className="font-medium text-gray-900">Add New Client</div>
                    <div className="text-sm text-gray-600">Register a new healthcare provider</div>
                  </div>
                </div>
              </button>
              
              <button className="w-full p-4 text-left bg-gradient-to-r from-green-500/10 to-green-500/5 hover:bg-gradient-to-r hover:from-green-500/20 hover:to-green-500/10 rounded-2xl transition-colors">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                  <div>
                    <div className="font-medium text-gray-900">Generate Report</div>
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