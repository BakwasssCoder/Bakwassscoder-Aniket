import { Skiper30 } from '@/components/ui/skiper-ui/skiper30'
import React from 'react'

const GridCarousel = () => {
  const image = [
    "https://i.ibb.co/PzGWxCqT/image.jpg",
    "https://i.ibb.co/CpnV0TM4/image.jpg",
    "https://i.ibb.co/xKPbwzMZ/image.jpg",
    "https://i.ibb.co/27KHmhFP/image.jpg",
    "https://i.ibb.co/SDxJrW6s/image.jpg",
    "https://i.ibb.co/SDxJrW6s/image.jpg",
    "https://i.ibb.co/SDxJrW6s/image.jpg",
    "https://i.ibb.co/5gjQcZjS/image.jpg",
    "https://i.ibb.co/gLyt0Zb9/image.jpg",
    "https://i.ibb.co/xKWwCwSN/image.jpg",
    "https://i.ibb.co/JwZ5NYDK/image.jpg",
    "https://i.ibb.co/399yd3nt/image.jpg",
    "https://i.ibb.co/N24xsQ49/image.jpg",
  ];
  return (
    <div>
      <Skiper30 img={image} />
    </div>
  )
}

export default GridCarousel
