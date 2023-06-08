import {
  AdjustmentsHorizontalIcon,
  
} from "@heroicons/react/24/outline";


const AdjustBar = () => {

  return (
    <div className="hidden md:block md:col-span-9">
      <div className=" bg-white rounded-3xl px-4 flex items-center">
        <div className="flex gap-x-2 items-center ml-4">
          <AdjustmentsHorizontalIcon className="w-6 h-6" />
          <span className="text-gray-700">مرتب سازی:</span>
          <div>
            <ul className="flex items-center gap-x-8">
              <li className="cursor-pointer text-gray-700 hover:underline  underline-offset-8  hover:text-purple-500  py-4">
                پربازدیدترین
              </li>
              <li className="cursor-pointer text-gray-700 hover:underline  underline-offset-8 hover:text-purple-500 py-4">
                محبوبترین
              </li>
              <li className="cursor-pointer text-gray-700 hover:underline  underline-offset-8 hover:text-purple-500 py-4">
                جدیدترین
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdjustBar;
