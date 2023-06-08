"use client";
import React, { useEffect, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const SideBarMobile = () => {
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
    <div className="flex md:hidden gap-x-4 overflow-auto pt-5 pb-5 ">
      <div className="">
        <Link
          key={12}
          href={"http://localhost:3000/blogs"}
          className=" border border-gray-400 bg-white rounded-3xl mx-1 px-5 py-1 "
        >
          all
        </Link>
        {data.map((item, index) => (
          <Link
            key={index}
            href={`http://localhost:3000/blogs/${item.title}`}
            className=" border border-gray-400 bg-white rounded-3xl mx-1 px-5 py-1 "
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBarMobile;
