import { useNavigate } from "react-router-dom";
import { Video, Image, Music, Film, AudioLines, Badge } from "lucide-react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ServiceCard } from "@/components/ServiceCard";
import { useToast } from "@/hooks/use-toast";
import Dashboard from "./Dashboard";

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
    if (serviceId === "video-customizer") {
      navigate("/video-customizer");
    } else {
      toast({
        title: "Coming Soon",
        description: "This service will be available soon!",
      });
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <main className="flex-1">
          <div className="flex items-center justify-end p-4 border-b bg-white">
            <SidebarTrigger className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 border border-gray-200 shadow-sm" />
          </div>
          <Dashboard />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;