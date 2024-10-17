
import { useRouter } from 'next/navigation';

export default function AlertBox(props: { title: string; description: string; time: string; type?: "default" | "error" | "success" | "info" | "warning"; href?: string;  }) {
  
  const router = useRouter();
  function handleClick() {
    console.log('clicked alert box');
    // Add routing or other logic here if needed
    if (props.href) {
      router.push(props.href); // Correctly passing the href as a string
    }
  }

  return (
    <div 
      onClick={handleClick} 
      className={` border rounded p-4 text-black my-1 cursor-pointer 
        ${props.type === 'default' ? 'border-orange-300 bg-orange-100' : ''} 
        ${props.type === 'error' ? 'border-red-300 bg-red-100' : ''}
        ${props.type === 'success' ? 'border-green-300 bg-green-100' : ''}
        ${props.type === 'info' ? 'border-blue-300 bg-blue-100' : ''}
        ${props.type === 'warning' ? 'border-yellow-300 bg-yellow-100' : ''}        
        `}
    >
      <p>{props.title}</p>
      <p>{props.description}</p>
      <div className="flex justify-end">
        <span className="text-xs text-gray">{props.time} ago</span>
      </div>
    </div>
  );
}
