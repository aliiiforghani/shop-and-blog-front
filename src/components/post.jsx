import Link from "next/link";


async function PostList({ post }) {
  
  return post.map((item, index) => {
    return (
      <div
        key={index}
        className="col-span-6 md:col-span-3 lg:col-span-2
                  bg-gray-100 flex flex-col
                  rounded-3xl p-2 max-h-[400px]"
      >
        {/* cover image */}
        <div className="aspect-w-1 aspect-h-1">
          <img
            src={`${item.coverImage}`}
            className="rounded-2xl w-full h-full object-center object-cover lg:w-full lg:h-full"
          />
        </div>

        {/* blog content */}

        <div className="bg-gray-50 mt-1 p-2 rounded-2xl flex flex-col w-full justify-between flex-1">
          <h2 className="mb-4">{item.title}</h2>
          <div className="flex justify-between items-center">
            <div className="flex item-center ">
              <img
                src={`${item.coverImage}`}
                className="w-6 h-6 rounded-full ring-2 ring-gray-400 ml-2 "
              />
              <span className="text-small"> {item.author.name} </span>
            </div>
            <Link href={`http://localhost:3000/blogs/${item.category.title}`}>
            <span
              className="text-xs px-2 py-1 rounded-xl bg-blue-100
              text-blue-600 hover:text-blue-100 hover:bg-blue-600
              transition-all duration-300 cursor-pointer "
              >
              {item.category.title}
            </span>
              </Link>
          </div>
        </div>
      </div>
    );
  });
}



export default PostList;
