import { useState } from "react";
import  DeleteAlertBox  from "@/components/admin/delete-alert-box";
import  ServiceProviderEditForm  from "@/components/admin/service-provider-edit-form";
import { Switch } from "@/components/ui/switch"
// import  BlockAlertBox  from "@/components/admin/block-alert-box";
// import { MdBlockFlipped } from "react-icons/md";

export default function ServiceProviderOptions() {

  const [active, setActive] = useState<boolean>(true)

  const handleOptionBtn = (btn: string) => {
    switch (btn) {
      case "delete":
        console.log("delete button clicked");
        break;
      case "edit":
        console.log("Edit button clicked");
        break;
      case "block":
        console.log("Block button clicked");
        break;
      default:
        console.log("Unknown action");
    }
  };

  return (
    <>
      <div className="flex gap-2 ">
        <div  onClick={() => handleOptionBtn("block")}> 
          <Switch
              className="mt-1" 
              checked={active} // Bind the state
              onCheckedChange={setActive} // Update the state             
              aria-readonly
            />
        </div>

        <div
          onClick={() => handleOptionBtn("edit")}                    
        >
          <ServiceProviderEditForm/> 
        </div>

        <div
          onClick={() => handleOptionBtn("delete")}
        >
          <DeleteAlertBox /> 
        </div>                     
      </div>
    </>
  );
}
