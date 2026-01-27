import { Skiper30 } from '@/components/ui/skiper-ui/skiper30'
import React from 'react'

const GridCarousel = () => {
  const image = [
  "https://i.ibb.co/ymvRCKFY/kjnkk.jpg",
  "https://i.ibb.co/d4jKdqgt/bubuj.jpg",
  "https://i.ibb.co/8D26CYsH/vhbbj.jpg",
  "https://i.ibb.co/sprzRJqG/fhgh.jpg",
  "https://i.ibb.co/jkhW77M3/hhj.jpg",
  "https://i.ibb.co/v6RTDtkc/jjb.jpg",
  "https://i.ibb.co/5xRwVq3C/jikl.jpg",
  "https://i.ibb.co/201ccF8x/ghhj.jpg",
  "https://i.ibb.co/FbwrMg0W/hvvh.jpg",
  "https://i.ibb.co/fYJP76My/ffggh.jpg",
  "https://i.ibb.co/r9QW3t5/hhhb.jpg",
  "https://i.ibb.co/WNsshPgz/hbhyvv.jpg",
  "https://i.ibb.co/V0JDVJbx/mkk.jpg",
];
  return (
    <div>
      <Skiper30 img={image} />
    </div>
  )
}

export default GridCarousel
