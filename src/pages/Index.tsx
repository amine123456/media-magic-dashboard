import { useNavigate } from "react-router-dom";
import { Video, Image, Music, Film, AudioLines, Badge } from "lucide-react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ServiceCard } from "@/components/ServiceCard";
import { useToast } from "@/hooks/use-toast";

const services = [
  {
    id: "video-customizer",
    title: "Video Customizer",
    description: "Resize and optimize videos for Instagram, YouTube, TikTok, and more.",
    icon: Video,
  },
  {
    id: "thumbnail-generator",
    title: "Thumbnail Generator",
    description: "Automatically create engaging thumbnails for your videos.",
    icon: Image,
  },
  {
    id: "audio-extraction",
    title: "Audio Extraction",
    description: "Easily extract high-quality audio from any video.",
    icon: Music,
  },
  {
    id: "video-to-gif",
    title: "Video to GIF Converter",
    description: "Convert videos into shareable GIFs with just one click.",
    icon: Film,
  },
  {
    id: "audio-converter",
    title: "Audio Converter",
    description: "Convert audio files between various formats like MP3, WAV, FLAC.",
    icon: AudioLines,
  },
  {
    id: "watermark",
    title: "Watermark & Branding",
    description: "Add watermarks and branding elements to your videos.",
    icon: Badge,
  },
];

const Index = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleServiceClick = (serviceId: string) => {
    // For now, just show a toast. Later, you can implement the actual navigation
    toast({
      title: "Coming Soon",
      description: "This service will be available soon!",
    });
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <main className="flex-1 p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Media Services Dashboard</h1>
              <p className="text-gray-600 mt-2">Select a service to get started</p>
            </div>
            <SidebarTrigger />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                onClick={() => handleServiceClick(service.id)}
              />
            ))}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;