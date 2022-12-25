import React, { ReactFragment, ReactPortal } from 'react';

export interface Content {
  previewImgUrl: string;
  slug: string;
  title: string;
}

export function instanceOfContent(
  object:
    | number
    | boolean
    | Content
    | React.ReactNode
    | ReactFragment
    | ReactPortal
    | null
    | undefined
): object is Content {
  return (
    !!object &&
    typeof object === 'object' &&
    'previewImgUrl' in object &&
    'slug' in object &&
    'title' in object
  );
}
