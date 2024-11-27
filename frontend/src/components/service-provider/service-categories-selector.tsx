import { useState } from 'react'
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
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Input } from "@/components/ui/input"
import { VehicleTypeSelectorProps, VehicleType } from '@/types/user-components'

const serviceCategories: VehicleType[] = [
  { id: 'Repair Shops', label: 'Repair Shops' },
  { id: 'Spare Parts', label: 'Spare Parts' },
  { id: 'Oil Changes', label: 'Oil Changes' },
  { id: 'Vehicle Inspections', label: 'Tire Services' },
  { id: 'Service Centers', label: 'Service Centers' },
] 

export default function ServiceCategoriesSelector({
  onSelectionChange,
}: VehicleTypeSelectorProps) {
  const [selectedCategories, setselectedCategories] = useState<string[]>([])
  const [addNewCategory, setaddNewCategory] = useState<string>('')
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleVehicleToggle = (vehicleId: string) => {
    setselectedCategories((prev) =>
      prev.includes(vehicleId)
        ? prev.filter((id) => id !== vehicleId)
        : [...prev, vehicleId]
    )
    
  }

  const handleConfirm = () => {
    if (selectedCategories.length > 0) {
      // Pass the selected vehicles to the parent component
      onSelectionChange(selectedCategories)
      console.log({addNewCategory, selectedCategories})
      setIsOpen(false)
    }
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button className="w-full h-11 text-gray" variant="outline">
          Select Service Categories
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="sm:max-w-[425px] bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle>Select Service Categories</AlertDialogTitle>
          <AlertDialogDescription>
            Choose the Service Categories that you want to select. You can select
            multiple options.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="grid gap-4 py-4">
          {serviceCategories.map((vehicle) => (
            <div key={vehicle.id} className="flex items-center space-x-2">
              <Checkbox
                id={vehicle.id}
                checked={selectedCategories.includes(vehicle.id)}
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

        <div>
          <label className='text-sm  mb-2' htmlFor="">Add New Category</label>
          <Input 
            id="name" 
            type="text" 
            placeholder="New Category"
            value={addNewCategory}
            onChange={(e) => setaddNewCategory(e.target.value)} 
          />
        </div>

        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setselectedCategories([])}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleConfirm}
            disabled={selectedCategories.length === 0 && addNewCategory === ''}
          >
            Confirm
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
