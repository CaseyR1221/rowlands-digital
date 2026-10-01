"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

import { ImagePlaceholder } from "@/components/image-placeholder";
import { cn } from "@/lib/utils";

/**
 * A `fill` image that falls back to the labelled placeholder if it can't be
 * loaded, so a missing or broken file leaves a tidy box rather than a broken
 * image icon. `onError` needs a Client Component, which is why this is one.
 *
 * The container owns the size (pass an aspect ratio in `className`); the image
 * and the placeholder both fill it, so the layout doesn't shift on fallback.
 */
export function ImageWithFallback({
  alt,
  concept,
  className,
  ...imageProps
}: Omit<ImageProps, "fill" | "className"> & {
  /** Brief shown in the placeholder if the image fails to load. */
  concept: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <ImagePlaceholder concept={concept} className={className} />;
  }

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-2xl border border-border bg-surface",
        className,
      )}
    >
      <Image
        {...imageProps}
        alt={alt}
        fill
        className="object-cover"
        onError={() => setFailed(true)}
        ref={(img) => {
          if (img?.complete && img.naturalWidth === 0) setFailed(true);
        }}
      />
    </div>
  );
}
