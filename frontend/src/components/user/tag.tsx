import React from 'react'

export default function Tag(props: { tag?: string }) {
  const { tag = "SPECIAL DISCOUNTS" } = props; // Set default value
  return (
    <>
      <p className="text-center text-sm text-white bg-primary rounded-md px-2 py-1 w-fit my-2">
        {tag}
      </p>
    </>
  );
}
