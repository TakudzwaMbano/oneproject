'use client';

import Image, { type ImageProps } from 'next/image';

interface OptimizedImageProps extends Omit<ImageProps, 'quality' | 'placeholder' | 'sizes'> {
  quality?: number;
  sizes?: string;
}

export function OptimizedImage({
  quality = 55,
  placeholder = 'blur',
  loading = 'lazy',
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  ...props
}: OptimizedImageProps) {
  return (
    <Image
      {...props}
      quality={quality}
      placeholder={placeholder}
      loading={loading}
      sizes={sizes}
    />
  );
}
