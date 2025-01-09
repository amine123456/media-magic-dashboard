import { Video, Image, Music, Film, AudioLines, Badge, LayoutDashboard } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    url: "/",
  },
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
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center space-x-2">
          <Video className="h-6 w-6 text-primary" />
          <span className="text-lg font-semibold text-primary">MediaHub</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-sidebar-foreground/70 px-2 py-4">
            Media Services
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title} className="px-2 py-1">
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="flex items-center gap-3 p-2 rounded-md hover:bg-sidebar-accent transition-colors duration-200"
                    >
                      <item.icon className="h-5 w-5 text-primary" />
                      <span className="font-medium">{item.title}</span>
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