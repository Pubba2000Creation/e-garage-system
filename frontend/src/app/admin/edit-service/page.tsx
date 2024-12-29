'use client'

import { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

import SelectProvinceCombobox from '@/components/user/select-province'
import SelectDistrictCombobox from '@/components/user/select-district'
import VehicleTypeSelector from '@/components/user/vehicle-type-selector'
import ServiceCategoriesSelector from '@/components/service-provider/service-categories-selector'
import MultiImageInput from '@/components/service-provider/multiIple-image-uploader'
import PdfFileInput from '@/components/service-provider/pdf-file-input'

export default function EditNewService() {

  const [serviceTitle, setServiceTitle] = useState<string>('')
  const [selectServiceCategories, setSelectServiceCategories] = useState<string[]>([])
  const [Description, setDescription] = useState<string>('')
  const [vehicleType, setVehicleType] = useState<string[]>([])
  const [images, setImages] = useState<string>('')
  const [certificate, setCertificate] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [whatsAppPhoneNumber, setWhatsAppPhoneNumber] = useState<string>('')
  const [address, setAddress] = useState<string>('')
  const [mapLink, setMapLink] = useState<string>('')
  const [ownerName, setOwnerName] = useState<string>('')
  const [nic, setNic] = useState<string>('')
  const [province, setProvince] = useState<string>('')
  const [district, setDistrict] = useState<string>('')
  const [error, setError] = useState<string>('')
  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (
      !serviceTitle ||
      !selectServiceCategories ||
      !district ||
      !Description ||
      !vehicleType ||
      !phoneNumber ||
      !whatsAppPhoneNumber||
      !address ||
      !mapLink ||
      !images ||
      !ownerName ||
      !nic || 
      !certificate || 
      !province||
      !district 
      
    ) {
      setError('Please enter all required fields')
      return
    }
    setError('')
    console.log('service updated successfully')
    console.log(
      {serviceTitle, 
      selectServiceCategories, 
      district,
      Description,
      vehicleType,
      phoneNumber,
      whatsAppPhoneNumber,
      address,
      mapLink,
      images,
      ownerName,
      nic, 
      certificate,
      province,
      error })
  }

  const handleFileSelect = (file: File | null) => {
    if (file) {
      console.log("Selected file:", file.name)
      setCertificate(file.name)
      // Here you can add your logic to handle the selected file,
      // such as uploading it to a server or processing it
    } else {
      console.log("No file selected")
    }
  }

  const handleImagesSelect = (files: File[]) => {
    setImages(files.map(file => file.name).join(', '))
    console.log("Selected files:", files.map(file => file.name))
    // Here you can add your logic to handle the selected files,
    // such as uploading them to a server or processing them
  }


  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError('') // Clear the error after 3 seconds (3000 ms)
      }, 2000)

      return () => clearTimeout(timer) // Cleanup the timer if the component unmounts or error changes
    }
  }, [error])

  const handleServiceSelection = (selectServiceCategories: string[]) => {
    setSelectServiceCategories(selectServiceCategories)
  }

  const handleVehicleSelection = (vehicleType: string[]) => {
    setVehicleType(vehicleType)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl  "
    >
      <h1 className="text-lg font-semibold md:text-2xl mb-8">Edit NewService</h1>
     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">     
          <div className='my-auto'>
            <Label className="block font-bold">Service Title</Label>
            <p className="text-sm text-gray">Add your Service tittle here</p>
          </div>
          <div className="  ">
            <Input
              id="serviceTitle"
              value={serviceTitle}
              onChange={(e) => setServiceTitle(e.target.value)}
              placeholder={serviceTitle || 'Service Name'}
              className=" focus:ring-white"
              required
            />
          </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
        <div className=''>
          <Label className="block font-bold">Description:</Label>
          <p className="text-sm text-gray">Add your Service description here (small descriptions)</p>
        </div>
        <div>         
          <Textarea
            rows={2}
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder={Description || 'Small Description'}
            className="focus:ring-white"
            required
          />
        </div>        
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">     
          <div className='my-auto'>
            <Label className="block font-bold">Service Categories</Label>
            {!selectServiceCategories.length &&  <p className="text-sm text-gray">Add your Service search Key words here</p>}           
            {selectServiceCategories.length > 0 && (
            <p className="text-sm text-gray">
              You have selected: ({selectServiceCategories.join(', ')})
            </p>
            )}
          </div>
          <div className="">
            <ServiceCategoriesSelector             
              onSelectionChange={handleServiceSelection}
              selectedVehicles={[]}
              isOpen={false}
            />
          </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
        <div className="my-auto">
          <Label className="block font-bold">Special for Which Kind of Vehicles</Label>
          {!vehicleType.length &&  <p className="text-sm text-gray">Select your traget vehicles</p>}                  
          {vehicleType.length > 0 && (
            <p className="text-sm text-gray">
              You have selected: ({vehicleType.join(', ')})
            </p>
          )}
        </div>
        <div className="">
          <VehicleTypeSelector
            onSelectionChange={handleVehicleSelection}
            selectedVehicles={[]}
            isOpen={false}
          />
        </div>
      </div>


      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
         <div>
          <p className="block font-bold mb-0">Contact Infomations</p>
          <p className="text-sm text-gray">Customers see your contact information</p>
         </div>
         <div className='grid gap-2'>
            <div>
              <Label className="block font-bold my-1">Phone Number:</Label>
              <Input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                maxLength={10}
                placeholder={phoneNumber || '0762343516'}
                className="focus:ring-white"
                required
              />         
          </div>
          <div>
            <Label className="block font-bold my-1">What App Phone Number:</Label>
            <Input
              type="text"
              value={whatsAppPhoneNumber}
              onChange={(e) => setWhatsAppPhoneNumber(e.target.value.replace(/\D/g, ''))}
              maxLength={10}
              placeholder={whatsAppPhoneNumber || '0762767516'}
              className="focus:ring-white"
              required
            />
          </div>
         </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
        <div>
          <p className="block font-bold mb-0">Location Infomations</p>
          <p className="text-sm text-gray">Customers see your Location information</p>
        </div>
        
        <div className="grid gap-3">
          <div>
            <Label className="block font-bold my-1">Address:</Label>
            <Textarea
              rows={2}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder={address || '368 Old Moor Street, 12'}
              className="focus:ring-white"
              required
            />
          </div>

          <div className="grid gap-3">
            <div>
              <Label className="block font-bold my-1">Province:</Label>
              <SelectProvinceCombobox value={province} onChange={setProvince} />
            </div>

            <div>
              <Label className="block font-bold my-1">District:</Label>
              <SelectDistrictCombobox value={district} onChange={setDistrict} />
            </div>           
          </div>

          <div className="">
            <Label className="block font-bold my-1">Google Map Integration</Label>         
            <Input
              id="mapLink"
              value={mapLink}
              onChange={(e) => setMapLink(e.target.value)}
              placeholder={mapLink || 'https://maps.app.goo.gl/HXvpUrB5WQPqCcFU7'}
              className=" focus:ring-white"
              required
            />
          </div>
       </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">            
          <div className=''>
            <Label className="block font-bold">Image Gallery</Label>
            <p className="text-sm text-gray">This 5 images show your service card</p>
          </div>

          <div className=" ">
            <MultiImageInput onImagesSelect={handleImagesSelect} maxImages={5} />
          </div>       
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">     
        
          <div className=''>
            <Label className="block font-bold">Business Info</Label>
            <p className="text-sm text-gray">Pleace enter your business info</p>
          </div>

          <div className="grid  gap-3">
            <div>          
              <Label className="block font-bold my-1">Owner Name</Label>
              <Input
                id="OwnerName"
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
                placeholder={ownerName || 'Jon'}
                className=" focus:ring-white"
                required
              />
            </div>
            <div>          
              <Label className="block font-bold my-1">Owner NIC Number</Label>
              <Input
                id="OwnerNICNumber"
                value={nic}
                onChange={(e) => setNic(e.target.value)}
                placeholder={nic || '20002365767812'}
                className=" focus:ring-white"
                required
              />
            </div>
            <div>          
              <Label className="block font-bold my-1" >Business Registration Certificate</Label>
              <PdfFileInput onFileSelect={handleFileSelect} />
            </div>
          </div>
      </div>


      {/* Error Message */}
      {error && <p className="text-red-600 mb-4">{error}</p>}

      {/* Submit Button */}
      <div className="flex justify-center md:justify-end my-3">     
        <button
          type="submit"
          className="bg-primary hover:bg-primary_hover  text-white py-3 w-full md:w-1/4 rounded-lg hover:bg-primary-dark"
        >
          Update Changes
        </button>
      </div>

    </form>
  )
}


