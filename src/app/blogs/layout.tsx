import AdjustBar from "@/components/adjustBar.jsx";
import Post from "./[categorySlug]/page";
import SideBar from "@/components/sideBar.jsx";
import SideBarMobile from "@/components/SideBarMobile.jsx";
import {
  AdjustmentsHorizontalIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto md:max-w-sx-xl px-4 md:px-0 ">
        <SideBarMobile />
        <div className="grid gap-8 md:grid-cols-12 md:grid-rows-[57px_minmax(300px,_1fr)] min-h-screen">
          <div className="hidden md:block md:row-span-2 md:col-span-3">
            <div className="bg-white rounded-3xl overflow-hidden">
              <SideBar />
            </div>
          </div>
          <AdjustBar />

          <div className="md:col-span-9 grid grid-cols-6 gap-8">{children}</div>
        </div>
      </div>
    </div>
  );
}
