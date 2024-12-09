import React, { ReactElement } from "react";

interface StatisticCardProps {
  title: string;
  subtitle: string;
  icon: ReactElement<{ size?: number }>; // Ensure the icon supports a `size` prop
  iconSize?: number; // Optional size for the icon
}

export default function StatisticCard({
  title,
  subtitle,
  icon,
  iconSize = 50, // Default size
}: StatisticCardProps) {
  return (
    <div className="border rounded border-light_gray p-4 w-full bg-light_gray shadow m-0.5">
      <div className="flex space-x-3">
        {/* Icon Section */}
        <div className="my-auto">
          {React.cloneElement(icon, { size: iconSize })}
        </div>

        {/* Content Section */}
        <div>
          <p className="text-lg font-semibold text-black">{title}</p>
          <p className="text-gray text-sm text-left">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
