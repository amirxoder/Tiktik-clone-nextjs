import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { topics } from "../utils/constants";
import { topicPostsQuery } from "../utils/queries";

const Discover = () => {
  const router = useRouter();
  const { topic } = router.query;

  const ActiveTopicStyle =
    "xl:border-2 hover:bg-primary xl:border-[#f51997] px-3 py-2 flex rounded xl:rounded-full items-center gap-2 justify-center cursor-pointer text-[#ff1997]";
  const TopicStyle =
    "xl:border-2 hover:bg-primary xl:border-gray-300 px-3 py-2 flex rounded xl:rounded-full items-center gap-2 justify-center cursor-pointer text-black";

  return (
    <div className="xl:border-b-2 xl:border-gray-200 pb-6">
      <p className="text-gray-500 font-semibold m-3 mt-4 hidden xl:block">
        Popular Topics
      </p>
      <div className="flex flex-wrap gap-3">
        {topics.map((item) => (
          <Link key={item.name} href={`/?topic=${item.name}`}>
            <div
              className={topic === item.name ? ActiveTopicStyle : TopicStyle}
            >
              <span className="font-bold text-2xl xl:text-md">{item.icon}</span>
              <span className="font-medium text-md hidden xl:block capitalize">
                {item.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Discover;
