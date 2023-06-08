"use client";
import React, { useEffect, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5500/api/post-category");
        const { data } = await res.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between py-4 px-4 cursor-pointer bg-purple-200"
      >
        <span>دسته بندی مقالات</span>
        <ChevronDownIcon
          className={`w-6 h-6 stroke-purple-800 transition-all duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      <div className={`${isOpen ? "block" : "hidden"}`}>
        <Link
          key={12}
          href={`http://localhost:3000/blogs/`}
          className="block py-2 mb-1 pr-2 hover:bg-purple-50"
        >
          همه مقالات{" "}
        </Link>
        {data.map((item) => {
          return (
            <Link
              key={item._id}
              href={`http://localhost:3000/blogs/${item.title}`}
              className="block py-2 mb-1 pr-2 hover:bg-purple-50"
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
