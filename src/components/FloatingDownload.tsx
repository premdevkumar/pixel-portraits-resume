import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const FloatingDownload = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/prem_resume.pdf';
    link.download = 'Prem_Dev_Kumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 animate-fade-in">
      <Button
        onClick={handleDownloadResume}
        size="lg"
        className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-semibold px-6 shadow-2xl hover-glow rounded-full"
      >
        <Download className="mr-2 h-5 w-5" />
        Resume
      </Button>
    </div>
  );
};

export default FloatingDownload;
