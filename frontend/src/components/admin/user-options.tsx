import { useState } from "react";
import  DeleteAlertBox  from "@/components/admin/delete-alert-box";
import  EditUserForm  from "@/components/admin/edit-user-form ";
import { Switch } from "@/components/ui/switch"
import UserMore from "@/components/admin/user-more";
// import  BlockAlertBox  from "@/components/admin/block-alert-box";
// import { MdBlockFlipped } from "react-icons/md";

export default function UserOptions() {

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

        <div>
          <UserMore/>
        </div>

        <div
          onClick={() => handleOptionBtn("edit")}                    
        >
          <EditUserForm/> 
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
