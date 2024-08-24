import GalleryContent from "@/components/Gallery/GalleryContent";
import Breadcamp from "@/utils/Breadcamp";
import React from "react";

const GalleryPage = () => {
  return (
    <>
      <Breadcamp title={"Our Gallery"} subTitle="Gallery" />
      <div className="mx-auto max-w-[1250px] px-2 py-14 md:pb-20 md:pt-18 lg:pb-28 lg:pt-24">
        <GalleryContent />
      </div>
    </>
  );
};

export default GalleryPage;
