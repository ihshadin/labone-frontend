import { getNotice } from "@/api/hero.api";
import { TNotices } from "@/types/hero.type";
import React from "react";
import Marquee from "react-fast-marquee";

const NoticeMarquee = async () => {
  const notices: TNotices[] = await getNotice();

  return (
    <div className="flex flex-nowrap items-center font-tiroBangla max-w-[1250px] mx-auto ">
      <span className="h-full hidden w-[160px] bg-gradient-to-r from-[#0a8848] to-[#02a351] md:flex flex-col justify-center px-2 md:px-5 py-2 text-white text-sm md:text-lg font-medium">
        সর্বশেষ নোটিশ
      </span>
      <Marquee speed={100} className="text-lg font-medium text-secondary">
        {notices?.map(({ noticeText }) => "🚀 " + noticeText).join(" || ")}
      </Marquee>
    </div>
  );
};

export default NoticeMarquee;
