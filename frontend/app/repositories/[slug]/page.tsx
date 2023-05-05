import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props) {
  return {
    title: params.slug,
  };
}

export default function Page({ params }: Props) {
  return (
    <div className="flex flex-1 items-center justify-center">
      Info about {params.slug} goes here...
    </div>
  );
}
