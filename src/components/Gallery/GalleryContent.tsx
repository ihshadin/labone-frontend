"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { getGalleryData } from "@/api/gallery.api";
import { TGallery } from "@/types/gallery.type";

const GalleryContent = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [galleryData, setGalleryData] = useState<TGallery[]>([]);

  const getGallery = async () => {
    const result = await getGalleryData();
    setGalleryData(result);
  };

  useEffect(() => {
    getGallery();
  }, []);

  const uniqueCategories = galleryData.reduce<string[]>((acc, item) => {
    if (!acc.includes(item.category)) {
      acc.push(item.category);
    }
    return acc;
  }, []);

  const categories = [
    "All",
    // "asdfa",
    // "adfdf",
    // "gsfdg",
    // "oiahus",
    // "ewfwsd",
    ...uniqueCategories,
  ];

  const filteredPhotos =
    selectedCategory === "All"
      ? galleryData
      : galleryData?.filter((photo) => photo.category === selectedCategory);

  return (
    <div className="mx-auto">
      {/* Category Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 mb-6 md:mb-8 lg:mb-10 max-w-[1250px] mx-auto">
        {/* <div className="flex items-center max-w-[600px] mx-auto gap-2 mb-6 md:mb-8 lg:mb-10"> */}
        {categories.map((category) => (
          <button
            key={category}
            className={`capitalize px-2 py-1 text-sm sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2 rounded-md ${
              selectedCategory === category
                ? "bg-primary text-white"
                : "bg-gray-200 text-accent"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery */}
      <PhotoProvider>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredPhotos.map((data, index) => (
            <PhotoView key={index} src={data.photo}>
              <div className="relative overflow-hidden rounded-lg shadow-md cursor-pointer">
                <Image
                  src={data.photo}
                  alt={`Labone Hospital Image ${index + 1}`}
                  width={500}
                  height={500}
                  className="object-cover h-full hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </div>
  );
};

export default GalleryContent;
