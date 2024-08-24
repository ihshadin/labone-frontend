"use client";
import React, { useState } from "react";
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const GalleryContent = () => {
  // Define the gallery categories
  const categories = ["All", "Our Team", "Achievement", "Others"];

  // Set up the initial category state
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Define the lab photos with categories
  const labPhotos = [
    {
      src: "https://res.cloudinary.com/dz4ckryd6/image/upload/v1723805378/Labone-about/ikhhdwweb0gpcjur4gay.jpg",
      category: "Our Team",
    },
    {
      src: "https://res.cloudinary.com/dz4ckryd6/image/upload/v1723805378/Labone-about/fhnlwtdpqylfap1qysjw.jpg",
      category: "Achievement",
    },
    {
      src: "https://res.cloudinary.com/dz4ckryd6/image/upload/v1723805378/Labone-about/q4mwpeacnlia9mntigi0.jpg",
      category: "Others",
    },
    {
      src: "https://res.cloudinary.com/dz4ckryd6/image/upload/v1723805378/Labone-about/mmf4ne1q4mrqgtsbrfnw.jpg",
      category: "Our Team",
    },
    {
      src: "https://res.cloudinary.com/dz4ckryd6/image/upload/v1723805378/Labone-about/rlau2jdweuu7xls2wimj.jpg",
      category: "Achievement",
    },
    {
      src: "https://res.cloudinary.com/dz4ckryd6/image/upload/v1723805378/Labone-about/exrwmbibgk1jv3rrvjpz.jpg",
      category: "Others",
    },
    {
      src: "https://res.cloudinary.com/dz4ckryd6/image/upload/v1723806192/nicu/djlnugyrujoqaql1ydd3.jpg",
      category: "Our Team",
    },
    {
      src: "https://res.cloudinary.com/dz4ckryd6/image/upload/v1723806192/nicu/irqmqrp0rp0czlhuwedt.jpg",
      category: "Others",
    },
    {
      src: "https://res.cloudinary.com/dz4ckryd6/image/upload/v1723806192/nicu/dmii1zfp7w70df53lqpy.jpg",
      category: "Achievement",
    },
    {
      src: "https://res.cloudinary.com/dz4ckryd6/image/upload/v1723806192/nicu/ituatglb06vw310mqb0t.jpg",
      category: "Others",
    },
  ];

  // Filter photos based on the selected category
  const filteredPhotos =
    selectedCategory === "All"
      ? labPhotos
      : labPhotos.filter((photo) => photo.category === selectedCategory);

  return (
    <div className="mx-auto">
      {/* Category Tabs */}
      <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2 mb-6 md:mb-8 lg:mb-10">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-2 py-1 text-sm sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5 rounded ${
              selectedCategory === category
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-800"
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
          {filteredPhotos.map((photo, index) => (
            <PhotoView key={index} src={photo.src}>
              <div className="relative overflow-hidden rounded-lg shadow-md cursor-pointer">
                <Image
                  src={photo.src}
                  alt={`Labone Hospital Image ${index + 1}`}
                  layout="responsive"
                  width={500}
                  height={500}
                  className="object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
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
