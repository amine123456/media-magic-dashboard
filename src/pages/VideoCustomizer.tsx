import { useState } from "react";
import { Upload, Settings, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";

const PLATFORM_PRESETS = {
  instagram: {
    square: { width: 1080, height: 1080 },
    portrait: { width: 1080, height: 1350 },
    landscape: { width: 1080, height: 608 },
  },
  youtube: {
    standard: { width: 1920, height: 1080 },
    shorts: { width: 1080, height: 1920 },
  },
  tiktok: {
    default: { width: 1080, height: 1920 },
  },
};

export default function VideoCustomizer() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [platform, setPlatform] = useState<string>("");
  const [format, setFormat] = useState<string>("");
  const [quality, setQuality] = useState<number>(80);
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('video/')) {
      setSelectedFile(file);
      toast({
        title: "Video uploaded",
        description: `${file.name} has been selected for customization.`,
      });
    } else {
      toast({
        title: "Invalid file type",
        description: "Please upload a valid video file.",
        variant: "destructive",
      });
    }
  };

  const handleExport = () => {
    if (!selectedFile || !platform || !format) {
      toast({
        title: "Missing information",
        description: "Please select a video, platform, and format before exporting.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Processing video",
      description: "Your video is being processed. This may take a few moments.",
    });
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Video Customizer</h1>
      
      <div className="grid gap-6 mb-6">
        <Card className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <Upload className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-semibold">Upload Video</h2>
          </div>
          
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-8 bg-gray-50">
            <input
              type="file"
              accept="video/*"
              onChange={handleFileUpload}
              className="hidden"
              id="video-upload"
            />
            <label
              htmlFor="video-upload"
              className="cursor-pointer flex flex-col items-center"
            >
              <Upload className="w-12 h-12 text-gray-400 mb-2" />
              <span className="text-sm text-gray-600">
                {selectedFile ? selectedFile.name : "Click to upload or drag and drop"}
              </span>
            </label>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <Settings className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-semibold">Customize Settings</h2>
          </div>

          <div className="space-y-6">
            <div className="grid gap-4">
              <label className="text-sm font-medium">Platform</label>
              <Select onValueChange={setPlatform} value={platform}>
                <SelectTrigger>
                  <SelectValue placeholder="Select platform" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="youtube">YouTube</SelectItem>
                  <SelectItem value="tiktok">TikTok</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-4">
              <label className="text-sm font-medium">Format</label>
              <Select onValueChange={setFormat} value={format}>
                <SelectTrigger>
                  <SelectValue placeholder="Select format" />
                </SelectTrigger>
                <SelectContent>
                  {platform === "instagram" && (
                    <>
                      <SelectItem value="square">Square (1:1)</SelectItem>
                      <SelectItem value="portrait">Portrait (4:5)</SelectItem>
                      <SelectItem value="landscape">Landscape (16:9)</SelectItem>
                    </>
                  )}
                  {platform === "youtube" && (
                    <>
                      <SelectItem value="standard">Standard (16:9)</SelectItem>
                      <SelectItem value="shorts">Shorts (9:16)</SelectItem>
                    </>
                  )}
                  {platform === "tiktok" && (
                    <SelectItem value="default">Default (9:16)</SelectItem>
                  )}
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-4">
              <label className="text-sm font-medium">Quality ({quality}%)</label>
              <Slider
                value={[quality]}
                onValueChange={(value) => setQuality(value[0])}
                min={1}
                max={100}
                step={1}
              />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <Share2 className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-semibold">Export</h2>
          </div>

          <Button
            onClick={handleExport}
            className="w-full"
            disabled={!selectedFile || !platform || !format}
          >
            Export Video
          </Button>
        </Card>
      </div>
    </div>
  );
}