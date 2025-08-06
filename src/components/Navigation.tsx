import { Button } from "@/components/ui/button";
import { User, Heart, UserPlus } from "lucide-react";

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navigation = ({ activeTab, setActiveTab }: NavigationProps) => {
  return (
    <div className="border-b border-border bg-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Heart className="h-4 w-4 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">PulseAid Pro</h1>
              <p className="text-sm text-muted-foreground">Thalassemia care management platform</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center space-x-2">
            <Button
              variant={activeTab === "patient" ? "default" : "ghost"}
              onClick={() => setActiveTab("patient")}
              className="flex items-center space-x-2"
            >
              <User className="h-4 w-4" />
              <span>Patient Dashboard</span>
            </Button>

            <Button
              variant={activeTab === "blood-request" ? "default" : "ghost"}
              onClick={() => setActiveTab("blood-request")}
              className="flex items-center space-x-2"
            >
              <Heart className="h-4 w-4" />
              <span>Blood Request</span>
            </Button>

            <Button
              variant={activeTab === "donor-registration" ? "default" : "ghost"}
              onClick={() => setActiveTab("donor-registration")}
              className="flex items-center space-x-2"
            >
              <UserPlus className="h-4 w-4" />
              <span>Donor Registration</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;