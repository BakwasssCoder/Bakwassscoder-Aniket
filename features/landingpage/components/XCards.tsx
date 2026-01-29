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
      className=" flex flex-col py-10">
      <div className=" flex justify-center mt-10 mb-8 px-4">
        <ShimmerText className='text-4xl md:text-6xl text-center' text={"MY TWEETS"} />
      </div>
      <div className="min-h-[50vh] py-10 px-4 w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
        <TweetCard
          authorName={"Aniket Prashar"}
          authorHandle={"anikettt_tsx"}
          authorImage={
            "https://i.ibb.co/PzGWxCqT/image.jpg"
          }
          reply={{
            authorName: "AI Enthusiasts",
            authorHandle: "ai_community",
            authorImage:
              "https://pbs.twimg.com/profile_images/1593304942210478080/TUYae5z7_400x400.jpg",
            content: "This is exactly what the industry needs! 🔥",
            isVerified: true,
            timestamp: "Jan 25, 2026",
          }}
          content={["Just finished building an LLM-powered chatbot that understands context across 10+ conversations. The secret? Fine-tuning with domain-specific data + smart prompt engineering. AI isn't magic—it's manipulation of intelligence. 🧠✨ #AI #MachineLearning #LLM"]}
          timestamp={"Jan 25, 2026"}
        />
        <TweetCard
          authorName={"Aniket Prashar"}
          authorHandle={"anikettt_tsx"}
          reply={{
            authorName: "ML Engineers",
            authorHandle: "ml_engineers",
            authorImage:
              "https://pbs.twimg.com/profile_images/1593304942210478080/TUYae5z7_400x400.jpg",
            content: "The future of AI is human-centric! 🚀",
            isVerified: true,
            timestamp: "Jan 27, 2026",
          }}
          authorImage={
            "https://i.ibb.co/PzGWxCqT/image.jpg"
          }
          content={["Most people think AI will replace developers. I think AI will empower developers to build 10x faster. We're not competing with AI—we're collaborating with it. The real skill? Knowing how to manipulate AI to solve real problems. 🤖💡 #ArtificialIntelligence #FutureOfWork"]}
          timestamp={"Jan 27, 2026"}
        />
      </div>
      <div className=" p-10 flex justify-center ">
        <SocialButton />
      </div>
    </div>
  );
};

export default XCards;
