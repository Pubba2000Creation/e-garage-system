import React, { useEffect, useState } from 'react';
import { services } from '@/data/serviceOptions';
import { FaStar } from "react-icons/fa6";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import CustomDropdown from "@/components/user/custom-dropdown-menu";

const options = ['Relevance', 'New', 'Old'];

export default function SearchFilterForm(
  props: {
    five_stars_count: number;
    four_stars_count: number;
    three_stars_count: number;
    two_stars_count: number;
    one_stars_count: number;
  }
) {
  const [selectedValue, setSelectedValue] = useState(options[0]);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<string | undefined>();

  const handleSelect = (selected: string) => {
    setSelectedValue(selected);
    console.log('Selected:', selected);
  };

  const handleServiceChange = (service: string) => {
    setSelectedServices((prev) => {
      if (prev.includes(service)) {
        return prev.filter((s) => s !== service);
      } else {
        return [...prev, service];
      }
    });
  };

  // Log the selected services whenever they change
  useEffect(() => {
    console.log('Selected Services:', selectedServices);
  }, [selectedServices]);
  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Sort Option:', selectedValue);
    console.log('Selected Services:', selectedServices);
    console.log('Selected Rating:', selectedRating);   
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="p-3 bg-white rounded-md">
        <div className='flex justify-between'>
          <h2 className="text-lg font-semibold my-1">Categories</h2>
          <CustomDropdown options={options} onSelect={handleSelect} />
        </div>

        {/* Service categories */}
        <ul className="list-none">
          {services.map((service, index) => (
            <li key={index} className="flex items-center my-2">
              <input 
                type="checkbox" 
                name="" 
                id={service.value}
                value={service.value}
                onChange={() => handleServiceChange(service.value)}
                className="accent-primary h-4 w-4" 
              />
              
              <label
                htmlFor={service.value}
                className="-mt-0.5 pl-2 text-sm cursor-pointer font-medium"
              >
                {service.label}
              </label>
            </li>
          ))}
        </ul>

        <h2 className="text-lg font-semibold mt-8 mb-4">Service Ratings</h2>
        <RadioGroup value={selectedRating} onValueChange={setSelectedRating}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="5" id="5" />
            <label htmlFor="" className="flex items-center space-x-1">
              <FaStar className="text-yellow-400" size={20} />
              <FaStar className="text-yellow-400" size={20} />
              <FaStar className="text-yellow-400" size={20} />
              <FaStar className="text-yellow-400" size={20} />
              <FaStar className="text-yellow-400" size={20} />
              <span>({props.five_stars_count})</span>
            </label>
          </div>
        </RadioGroup>

        <RadioGroup value={selectedRating} onValueChange={setSelectedRating}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="4" id="4" />
            <label htmlFor="" className="flex items-center space-x-1">
              <FaStar className="text-yellow-400" size={20} />
              <FaStar className="text-yellow-400" size={20} />
              <FaStar className="text-yellow-400" size={20} />
              <FaStar className="text-yellow-400" size={20} />
              <FaStar className="text-light_gray" size={20} />
              <span>({props.four_stars_count})</span>
            </label>
          </div>
        </RadioGroup>

        <RadioGroup value={selectedRating} onValueChange={setSelectedRating}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="3" id="3" />
            <label htmlFor="" className="flex items-center space-x-1">
              <FaStar className="text-yellow-400" size={20} />
              <FaStar className="text-yellow-400" size={20} />
              <FaStar className="text-yellow-400" size={20} />
              <FaStar className="text-light_gray" size={20} />
              <FaStar className="text-light_gray" size={20} />
              <span>({props.three_stars_count})</span>
            </label>
          </div>
        </RadioGroup>

        <RadioGroup value={selectedRating} onValueChange={setSelectedRating}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="2" id="2" />
            <label htmlFor="" className="flex items-center space-x-1">
              <FaStar className="text-yellow-400" size={20} />
              <FaStar className="text-yellow-400" size={20} />
              <FaStar className="text-light_gray" size={20} />
              <FaStar className="text-light_gray" size={20} />
              <FaStar className="text-light_gray" size={20} />
              <span>({props.two_stars_count})</span>
            </label>
          </div>
        </RadioGroup>

        <RadioGroup value={selectedRating} onValueChange={setSelectedRating}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="1" id="1" />
            <label htmlFor="" className="flex items-center space-x-1">
              <FaStar className="text-yellow-400" size={20} />
              <FaStar className="text-light_gray" size={20} />
              <FaStar className="text-light_gray" size={20} />
              <FaStar className="text-light_gray" size={20} />
              <FaStar className="text-light_gray" size={20} />
              <span>({props.one_stars_count})</span>
            </label>
          </div>
        </RadioGroup>

        {/* Submit button */}
        <div className='flex justify-center mt-2'>
            <button type="submit" className="mt-4 px-4 py-2 bg-primary text-sm hover:bg-primary_hover text-white rounded-md">
                Apply Filters
            </button>
        </div>
   
      </div>
    </form>
  );
}
