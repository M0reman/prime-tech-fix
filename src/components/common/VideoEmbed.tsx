
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, X } from 'lucide-react';

interface VideoEmbedProps {
  initialUrl?: string;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ initialUrl = '' }) => {
  const [videoUrl, setVideoUrl] = useState(initialUrl);
  const [embedUrl, setEmbedUrl] = useState('');
  const [showVideo, setShowVideo] = useState(false);

  const extractVideoId = (url: string): string | null => {
    // YouTube regular videos
    const youtubeMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
    if (youtubeMatch) return youtubeMatch[1];

    // YouTube Shorts
    const shortsMatch = url.match(/youtube\.com\/shorts\/([^&\n?#]+)/);
    if (shortsMatch) return shortsMatch[1];

    return null;
  };

  const handleVideoLoad = () => {
    if (!videoUrl) return;

    const videoId = extractVideoId(videoUrl);
    if (videoId) {
      setEmbedUrl(`https://www.youtube.com/embed/${videoId}`);
      setShowVideo(true);
    } else {
      alert('Пожалуйста, введите корректную ссылку на YouTube видео');
    }
  };

  const closeVideo = () => {
    setShowVideo(false);
    setEmbedUrl('');
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-center">Добавить видео</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {!showVideo ? (
          <>
            <div className="space-y-2">
              <label htmlFor="video-url" className="text-sm font-medium text-gray-700">
                Ссылка на YouTube видео:
              </label>
              <Input
                id="video-url"
                type="url"
                placeholder="https://youtube.com/watch?v=... или https://youtube.com/shorts/..."
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                className="w-full"
              />
            </div>
            <Button 
              onClick={handleVideoLoad} 
              className="w-full bg-blue-600 hover:bg-blue-700"
              disabled={!videoUrl}
            >
              <Play className="w-4 h-4 mr-2" />
              Загрузить видео
            </Button>
          </>
        ) : (
          <div className="space-y-4">
            <div className="relative">
              <Button
                onClick={closeVideo}
                variant="outline"
                size="sm"
                className="absolute -top-2 -right-2 z-10 rounded-full w-8 h-8 p-0"
              >
                <X className="w-4 h-4" />
              </Button>
              <div className="aspect-[9/16] w-full max-w-[300px] mx-auto">
                <iframe
                  src={embedUrl}
                  title="Embedded Video"
                  className="w-full h-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <Button 
              onClick={() => setShowVideo(false)} 
              variant="outline" 
              className="w-full"
            >
              Добавить другое видео
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default VideoEmbed;
