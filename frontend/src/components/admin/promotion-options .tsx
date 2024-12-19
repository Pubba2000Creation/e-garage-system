import { useState } from "react";
import  DeleteAlertBox  from "@/components/admin/delete-alert-box";
import { Switch } from "@/components/ui/switch"
import { MdOutlineEdit } from "react-icons/md";
import { useRouter } from 'next/navigation'
import PromotionMore from "@/components/admin/promotion-more";

export default function PromotionOptions() {

  const [active, setActive] = useState<boolean>(true)
  const router = useRouter()

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
      <div className="flex gap-2 ">
        <div  onClick={() => handleOptionBtn("block")}> 
          <Switch
              className="mt-1" 
              checked={active} // Bind the state
              onCheckedChange={setActive} // Update the state             
              aria-readonly
            />
        </div>

        <div onClick={() => handleOptionBtn("more")}>
            <PromotionMore />
        </div>

        <div onClick={() => handleOptionBtn("edit")}>
          <button
            onClick={() => router.push('/admin/edit-service')}
            type="button"
            className="bg-sky-500 p-1 border rounded-full hover:bg-sky-600"
          >
            <MdOutlineEdit />
          </button>
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
