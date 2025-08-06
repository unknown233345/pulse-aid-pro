import { useState } from "react";
import Navigation from "@/components/Navigation";
import PatientDashboard from "@/components/PatientDashboard";
import BloodRequestForm from "@/components/BloodRequestForm";
import DonorRegistration from "@/components/DonorRegistration";

const Index = () => {
  const [activeTab, setActiveTab] = useState("patient");

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="container mx-auto px-4 py-6">
        {activeTab === "patient" && <PatientDashboard />}
        {activeTab === "blood-request" && <BloodRequestForm />}
        {activeTab === "donor-registration" && <DonorRegistration />}
      </main>
    </div>
  );
};

export default Index;