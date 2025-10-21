import { Download, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const FloatingDownload = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
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

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 animate-fade-in">
      <div className="glass-card p-4 rounded-2xl shadow-2xl flex items-center gap-3 group relative">
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-muted hover:bg-destructive flex items-center justify-center transition-colors"
        >
          <X className="w-3 h-3" />
        </button>
        
        <Button
          onClick={handleDownloadResume}
          size="lg"
          className="bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_rgba(167,139,250,0.6)] text-white font-semibold px-6 rounded-xl"
        >
          <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
          Resume
        </Button>
      </div>
    </div>
  );
};

export default FloatingDownload;
