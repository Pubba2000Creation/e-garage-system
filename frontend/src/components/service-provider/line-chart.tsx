"use client";

import React from "react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  views: {
    label: "Views",
    color: "#E88B1C",
  },
} satisfies ChartConfig;

interface LineChartCardProps {
  data: { month: string; views: number }[];
  title : string // Define the shape of the data
}

export default function LineChartCard({ data,title }: LineChartCardProps) {
  return (
    <Card>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[350px]  w-full"
        >
          <LineChart
            accessibilityLayer
            data={data} // Use the passed data
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="views"
              type="natural"
              stroke="#E88B1C"
              strokeWidth={2}
              dot={true}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">      
          {title}        
      </CardFooter>
    </Card>
  );
}
