import Image from 'next/image';

export default function TeamCard(props:{image:string,position:string,name:string}) {
  return (
    <>
        <div  className="text-center">
              <Image
                src={props.image}
                width={150}  // Adjusted size for a better visual appeal
                height={150}  // Adjusted size for a better visual appeal
                alt={`Team member ${props.name}`}
                className="rounded-full border-2 border-primary"
              />
              <p className="mt-4 text-lg font-medium text-gray-800">{props.name}</p> 
              <p className="text-sm text-gray-500">{props.position}</p> 
        </div>
    </>
  )
}
