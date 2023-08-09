import { ImageResponse } from '@vercel/og';
import Image from "next/image";
 
export const config = {
  runtime: 'edge',
};

export const contentType = 'image/png'
 
export default function () {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative'
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        SHARULL
      </div>
    ),
    {
      width: 1200,
      height: 600,
    },
  );
}