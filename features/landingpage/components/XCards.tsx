import ShimmerText from "@/components/kokonutui/shimmer-text";
import SocialButton from "@/components/kokonutui/social-button";
import TweetCard from "@/components/kokonutui/tweet-card";
import React from "react";

const XCards = () => {
  return (
    <div
      style={{
        background: "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)",
      }}
      className=" flex flex-col ">
      <div className=" flex justify-center mt-30 ">
        <ShimmerText className=' text-6xl' text={"MY TWEETS"} />
      </div>
      <div className=" h-[50vh] items-center w-full flex justify-evenly">
        <TweetCard
          authorName={"Aniket Prashar"}
          authorHandle={"anikettt_tsx"}
          authorImage={
            "https://pbs.twimg.com/profile_images/1941829109262528512/WTgPV2dk_400x400.jpg"
          }
          reply={{
            authorName: "Tech Community",
            authorHandle: "techdev2025",
            authorImage:
              "https://pbs.twimg.com/profile_images/1593304942210478080/TUYae5z7_400x400.jpg",
            content: "This is the way! 🚀",
            isVerified: true,
            timestamp: "Jan 15, 2026",
          }}
          content={["Building SaaS tools that merge automation + aesthetics + analytics 🚀 Dream in code. Build in logic. Launch in style."]}
          timestamp={"Jan 15, 2026"}
        />
        <TweetCard
          authorName={"Aniket Prashar"}
          authorHandle={"anikettt_tsx"}
          reply={{
            authorName: "Dev Friends",
            authorHandle: "devfriends",
            authorImage:
              "https://pbs.twimg.com/profile_images/1593304942210478080/TUYae5z7_400x400.jpg",
            content: "Debugging at 3 AM hits different 💀",
            isVerified: true,
            timestamp: "Jan 20, 2026",
          }}
          authorImage={
            "https://pbs.twimg.com/profile_images/1941829109262528512/WTgPV2dk_400x400.jpg"
          }
          content={["Debugging feels like hacking NASA systems at 3 AM ☕ Fueled by caffeine and cosmic vibes 🪐"]}
          timestamp={"Jan 20, 2026"}
        />
      </div>
      <div className=" p-10 flex justify-center ">
        <SocialButton />
      </div>
    </div>
  );
};

export default XCards;
