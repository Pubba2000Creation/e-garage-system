'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Tag from '@/components/user/tag';

export function ServicesCard(props: {
  imageUrl: string;
  rating: number;
  reviewCount: number;
  title: string;
  address: string;
  onClick: () => void;
  setDiscount?: true | false;
}) {
  return (
    <Card
      className="w-full max-w-md cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
      onClick={props.onClick}
    >
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
        {props.setDiscount && <Tag />}
        <div className="flex items-center mb-2">
          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          <span className="ml-1 text-sm font-medium flex">
            <span>{props.rating}</span>
            <span className="ml-1">({props.reviewCount})</span>
          </span>
        </div>
        <CardTitle className="text-xl font-bold mb-2">{props.title}</CardTitle>
        <p className="text-sm text-gray-600">{props.address}</p>
      </CardContent>
    </Card>
  );
}