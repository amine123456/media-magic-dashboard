import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick: () => void;
}

export function ServiceCard({ title, description, icon: Icon, onClick }: ServiceCardProps) {
  return (
    <Card 
      className="p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] animate-fade-in"
      onClick={onClick}
    >
      <div className="flex items-start space-x-4">
        <div className="p-3 rounded-lg bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </Card>
  );
}