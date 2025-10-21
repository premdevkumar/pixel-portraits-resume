import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="text-center space-y-8 max-w-md animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-9xl font-bold gradient-text">404</h1>
          <h2 className="text-3xl font-bold">Page Not Found</h2>
          <p className="text-lg text-muted-foreground">
            Oops! The page you're looking for doesn't exist.
          </p>
        </div>
        
        <Button 
          asChild
          size="lg"
          className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-semibold px-8"
        >
          <a href="/">
            <Home className="mr-2 h-5 w-5" />
            Back to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
