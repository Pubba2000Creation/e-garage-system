'use client';

import Image from 'next/image';
// import { Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export  function NewsCard(
  props:{imageUrl: string,
  title: string,
  desctription: string,
  onClick: () => void,
  setHoteNews?: true | false,
  time: string,
  }
  ){
 
  return ( 
    <Card 
      className="w-full max-w-md cursor-pointer transition duration-300 ease-in-out transform hover:scale-105" 
      onClick={props.onClick}>
      <CardHeader className="p-0">
        <Image 
          src={props.imageUrl}
          alt={props.title}
          width={400}
          height={200}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </CardHeader>
      <CardContent className="p-4">
        { props.setHoteNews
          && 
        <p className='text-sm text-white bg-primary rounded-md px-2 py-1 w-fit my-2'>HOTE NEWS</p>
        }      
        <CardTitle className="text-xl font-bold mb-2">{props.title}</CardTitle>
        <p className="text-sm text-gray-600">
          {props.desctription}
        </p>
        <div className='flex justify-end'>
          <p className=" text-right text-sm text-white bg-primary rounded-md px-2 py-1 w-fit my-2 ">{props.time} ago</p>
        </div>
      </CardContent>
    </Card>
  );
}
