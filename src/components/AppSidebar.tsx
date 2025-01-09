import { Video, Image, Music, Film, AudioLines, Badge } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const menuItems = [
  {
    title: "Video Customizer",
    icon: Video,
    url: "#video-customizer",
  },
  {
    title: "Thumbnail Generator",
    icon: Image,
    url: "#thumbnail-generator",
  },
  {
    title: "Audio Extraction",
    icon: Music,
    url: "#audio-extraction",
  },
  {
    title: "Video to GIF",
    icon: Film,
    url: "#video-to-gif",
  },
  {
    title: "Audio Converter",
    icon: AudioLines,
    url: "#audio-converter",
  },
  {
    title: "Watermark & Branding",
    icon: Badge,
    url: "#watermark",
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Media Services</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}