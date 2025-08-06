import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, AlertTriangle } from "lucide-react";
import { showSuccess, showError } from "@/utils/toast";

const BloodRequestForm = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    bloodType: "",
    unitsNeeded: "",
    urgencyLevel: "",
    hospital: "",
    requiredDate: "",
    contactNumber: "",
    additionalNotes: ""
  });

  const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const urgencyLevels = [
    { value: "emergency", label: "Emergency", color: "destructive" },
    { value: "urgent", label: "Urgent", color: "secondary" },
    { value: "routine", label: "Routine", color: "outline" }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.patientName || !formData.bloodType || !formData.unitsNeeded) {
      showError("Please fill in all required fields");
      return;
    }

    // Simulate form submission
    console.log("Blood request submitted:", formData);
    showSuccess("Blood request submitted successfully! We'll contact available donors.");
    
    // Reset form
    setFormData({
      patientName: "",
      bloodType: "",
      unitsNeeded: "",
      urgencyLevel: "",
      hospital: "",
      requiredDate: "",
      contactNumber: "",
      additionalNotes: ""
    });
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Blood Request Form</h1>
        <p className="text-muted-foreground">Submit your blood transfusion request</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-primary" />
            <span>Request Details</span>
          </CardTitle>
          <CardDescription>
            Please provide accurate information for faster processing
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Patient Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Patient Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="patientName">Patient Name *</Label>
                  <Input
                    id="patientName"
                    value={formData.patientName}
                    onChange={(e) => handleInputChange("patientName", e.target.value)}
                    placeholder="Enter patient's full name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="contactNumber">Contact Number *</Label>
                  <Input
                    id="contactNumber"
                    value={formData.contactNumber}
                    onChange={(e) => handleInputChange("contactNumber", e.target.value)}
                    placeholder="+1 (555) 123-4567"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Blood Requirements */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Blood Requirements</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="bloodType">Blood Type *</Label>
                  <Select value={formData.bloodType} onValueChange={(value) => handleInputChange("bloodType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select blood type" />
                    </SelectTrigger>
                    <SelectContent>
                      {bloodTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="unitsNeeded">Units Needed *</Label>
                  <Input
                    id="unitsNeeded"
                    type="number"
                    min="1"
                    max="10"
                    value={formData.unitsNeeded}
                    onChange={(e) => handleInputChange("unitsNeeded", e.target.value)}
                    placeholder="e.g., 2"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="urgencyLevel">Urgency Level</Label>
                  <Select value={formData.urgencyLevel} onValueChange={(value) => handleInputChange("urgencyLevel", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select urgency" />
                    </SelectTrigger>
                    <SelectContent>
                      {urgencyLevels.map((level) => (
                        <SelectItem key={level.value} value={level.value}>
                          <div className="flex items-center space-x-2">
                            <span>{level.label}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Location & Timing */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Location & Timing</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="hospital">Hospital/Medical Center</Label>
                  <Input
                    id="hospital"
                    value={formData.hospital}
                    onChange={(e) => handleInputChange("hospital", e.target.value)}
                    placeholder="Enter hospital name"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="requiredDate">Required Date</Label>
                  <Input
                    id="requiredDate"
                    type="date"
                    value={formData.requiredDate}
                    onChange={(e) => handleInputChange("requiredDate", e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-2">
              <Label htmlFor="additionalNotes">Additional Notes</Label>
              <Textarea
                id="additionalNotes"
                value={formData.additionalNotes}
                onChange={(e) => handleInputChange("additionalNotes", e.target.value)}
                placeholder="Any special requirements or additional information..."
                rows={3}
              />
            </div>

            {/* Preview Section */}
            {formData.urgencyLevel && (
              <div className="p-4 bg-secondary/20 rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-2">Request Summary:</h4>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="outline">{formData.bloodType}</Badge>
                  <Badge variant="outline">{formData.unitsNeeded} units</Badge>
                  {formData.urgencyLevel && (
                    <Badge 
                      variant={urgencyLevels.find(l => l.value === formData.urgencyLevel)?.color as any}
                    >
                      {urgencyLevels.find(l => l.value === formData.urgencyLevel)?.label}
                    </Badge>
                  )}
                </div>
              </div>
            )}

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              Submit Blood Request
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Emergency Contact Info */}
      <Card className="border-destructive/20">
        <CardHeader>
          <CardTitle className="text-destructive flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5" />
            <span>Emergency Contacts</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <p><strong>Emergency Hotline:</strong> +1 (555) 911-BLOOD</p>
            <p><strong>24/7 Blood Bank:</strong> +1 (555) 24-BLOOD</p>
            <p><strong>Regional Emergency:</strong> +1 (555) 999-HELP</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BloodRequestForm;