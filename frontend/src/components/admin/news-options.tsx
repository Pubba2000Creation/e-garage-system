import { useState } from "react";
import  DeleteAlertBox  from "@/components/admin/delete-alert-box";
import { Switch } from "@/components/ui/switch"
import EditNewsForm from "@/components/admin/edit-news-form";
import NewsMore from "@/components/admin/news-more";


export default function NewsOptions() {

  const [active, setActive] = useState<boolean>(true)

  const handleOptionBtn = (btn: string) => {
    switch (btn) {
      case "delete":
        console.log("delete button clicked");
        break;
      case "edit":
        console.log("Edit button clicked");
        break;
        case "more":
          console.log("more button clicked");
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
      <div className="flex gap-2 justify-center ">
        <div  onClick={() => handleOptionBtn("block")}> 
          <Switch
              className="mt-1" 
              checked={active} // Bind the state
              onCheckedChange={setActive} // Update the state             
              aria-readonly
            />
        </div>

        <div onClick={() => handleOptionBtn("more")} >
          <NewsMore/>
        </div>

        <div
          onClick={() => handleOptionBtn("edit")}                    
        >
          <EditNewsForm/> 
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
