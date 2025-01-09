import { Card } from "@/components/ui/card";
import { Video, Image, Music, Film, AudioLines, Badge } from "lucide-react";

const stats = [
  {
    title: "Total Videos Processed",
    value: "1,234",
    icon: Video,
    trend: "+12.5%",
  },
  {
    title: "Thumbnails Generated",
    value: "856",
    icon: Image,
    trend: "+8.2%",
  },
  {
    title: "Audio Extractions",
    value: "432",
    icon: Music,
    trend: "+15.3%",
  },
  {
    title: "GIFs Created",
    value: "678",
    icon: Film,
    trend: "+10.1%",
  },
];

const Dashboard = () => {
  return (
    <div className="p-8 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600 mt-2">Welcome to your media services dashboard</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                <p className="text-sm font-medium text-green-600 mt-2">{stat.trend}</p>
              </div>
              <stat.icon className="h-8 w-8 text-primary" />
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {/* Placeholder for recent activity */}
            <p className="text-gray-600">No recent activity to display</p>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">System Status</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">System Status</span>
              <span className="text-green-600 font-medium">Operational</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">API Status</span>
              <span className="text-green-600 font-medium">Online</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;