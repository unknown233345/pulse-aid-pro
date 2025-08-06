import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Phone, User } from "lucide-react";

const PatientDashboard = () => {
  const upcomingAppointments = [
    {
      id: 1,
      type: "Blood Transfusion",
      date: "2024-01-15",
      time: "10:00 AM",
      location: "City General Hospital",
      doctor: "Dr. Sarah Wilson"
    },
    {
      id: 2,
      type: "Regular Checkup",
      date: "2024-01-22",
      time: "2:30 PM",
      location: "Thalassemia Care Center",
      doctor: "Dr. Michael Chen"
    }
  ];

  const recentTransfusions = [
    {
      id: 1,
      date: "2024-01-08",
      bloodType: "A+",
      units: 2,
      hospital: "City General Hospital",
      status: "Completed"
    },
    {
      id: 2,
      date: "2023-12-25",
      bloodType: "A+",
      units: 2,
      hospital: "Regional Medical Center",
      status: "Completed"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Patient Dashboard</h1>
        <Button className="bg-primary hover:bg-primary/90">
          Request Blood
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Next Transfusion
            </CardTitle>
            <Calendar className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">7 days</div>
            <p className="text-xs text-muted-foreground">Jan 15, 2024</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Blood Type
            </CardTitle>
            <User className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">A+</div>
            <p className="text-xs text-muted-foreground">Compatible donors: 892</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Transfusions
            </CardTitle>
            <Clock className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">24</div>
            <p className="text-xs text-muted-foreground">This year</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Emergency Contacts
            </CardTitle>
            <Phone className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">3</div>
            <p className="text-xs text-muted-foreground">Available 24/7</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Appointments */}
        <Card>
          <CardHeader>
            <CardTitle className="text-foreground">Upcoming Appointments</CardTitle>
            <CardDescription>Your scheduled medical appointments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingAppointments.map((appointment) => (
                <div key={appointment.id} className="flex items-center space-x-4 p-4 border border-border rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{appointment.type}</h3>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
                      <Calendar className="h-4 w-4" />
                      <span>{appointment.date}</span>
                      <Clock className="h-4 w-4 ml-2" />
                      <span>{appointment.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
                      <MapPin className="h-4 w-4" />
                      <span>{appointment.location}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Dr. {appointment.doctor}</p>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Transfusions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-foreground">Recent Transfusions</CardTitle>
            <CardDescription>Your transfusion history</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransfusions.map((transfusion) => (
                <div key={transfusion.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">{transfusion.bloodType}</Badge>
                      <span className="font-semibold text-foreground">{transfusion.units} units</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{transfusion.date}</p>
                    <p className="text-sm text-muted-foreground">{transfusion.hospital}</p>
                  </div>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    {transfusion.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PatientDashboard;