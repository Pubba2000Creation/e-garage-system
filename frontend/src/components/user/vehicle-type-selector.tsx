import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { VehicleTypeSelectorProps, VehicleType } from "@/app/types/user-components";

const vehicleTypes: VehicleType[] = [
  { id: "car", label: "Car" },
  { id: "van", label: "Van" },
  { id: "bus", label: "Bus" },
  { id: "truck", label: "Truck" },
  { id: "motorbike", label: "Motorbike" },
];

export default function VehicleTypeSelector({ onSelectionChange }: VehicleTypeSelectorProps) {
  const [selectedVehicles, setSelectedVehicles] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleVehicleToggle = (vehicleId: string) => {
    setSelectedVehicles((prev) =>
      prev.includes(vehicleId) ? prev.filter((id) => id !== vehicleId) : [...prev, vehicleId]
    );
  };

  const handleConfirm = () => {
    if (selectedVehicles.length > 0) {
      // Pass the selected vehicles to the parent component
      onSelectionChange(selectedVehicles);
      setIsOpen(false);
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button className="w-full h-11 text-gray" variant="outline">Vehicle Types</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="sm:max-w-[425px] bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle>Select Vehicle Types</AlertDialogTitle>
          <AlertDialogDescription>
            Choose the main types of vehicles you want to select. You can select multiple options.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="grid gap-4 py-4">
          {vehicleTypes.map((vehicle) => (
            <div key={vehicle.id} className="flex items-center space-x-2">
              <Checkbox
                id={vehicle.id}
                checked={selectedVehicles.includes(vehicle.id)}
                onCheckedChange={() => handleVehicleToggle(vehicle.id)}
                className="border-gray-300"
              />
              <Label
                htmlFor={vehicle.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {vehicle.label}
              </Label>
            </div>
          ))}
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setSelectedVehicles([])}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleConfirm} disabled={selectedVehicles.length === 0}>
            Confirm
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
