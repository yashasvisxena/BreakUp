import { ChevronRightCircle } from "lucide-react";
function Group() {
  return (
    <div className="my-1  sm:mx-1 flex flex-row justify-between w-full  items-center border-2 py-1 rounded-md">
      <div className="flex flex-row">
        <img
          src="https://github.com/shadcn.png"
          alt="category"
          className="w-12 h-12 mx-2 my-1 rounded-md"
        />

        <div className="flex flex-col justify-center">
          <p className="text-lg font-semibold">Category</p>
          <small className="text-sm font-medium ">Description</small>
        </div>
      </div>

      <ChevronRightCircle className="mx-3" />
    </div>
  );
}

export default Group;
