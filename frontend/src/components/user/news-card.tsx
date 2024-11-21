// NewsCard.tsx
'use client'

import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import TimeBadge from '@/components/user/time-badge'
import { NewsCardProps } from '@/types/user-components' // Import the type

export default function NewsCard(props: NewsCardProps) {
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
        <div className=" absolute  top-1 right-4">
          <TimeBadge time={props.time} />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        {props.setHotNews && (
          <p className="text-sm text-white bg-primary rounded-md px-2 py-1 w-fit my-2">
            HOT NEWS
          </p>
        )}
        <CardTitle className="text-xl font-bold mb-2">{props.title}</CardTitle>
        <p className="text-sm text-gray-600">{props.description}</p>
        {/* <div className="flex justify-end">
          <TimeBadge time={props.time} />
        </div> */}
      </CardContent>
    </Card>
  )
}
