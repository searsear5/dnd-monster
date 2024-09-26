import { Link } from "react-router-dom";

interface DndCardProps {
  image: string | undefined;
  name: string;
  type: string;
  size: string;
  index: string;
}

const DndCard = ({ image, name, type, size, index }: DndCardProps) => {
  return (
    <div>
      <div className="max-w-[275px] m-[auto]  overflow-hidden bg-[url('/image/wooden-floor-background.jpg')]  rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700 p-[16px]">
        <div className='bg-[url("/image/bgcom.webp")] bg-center aspect-square w-full bg-cover rounded-[20px] '>
          <Link to={`/detail/${index}`} className="">
            <img
              className="rounded-t-lg max-h-[240px] p-[40px] w-full"
              src={image}
              alt=""
            />
          </Link>
        </div>
        <div className="py-5 ">
          <div className="flex justify-between">
            <h6 className="mb-2 text-m font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h6>
            <h6 className="mb-2 text-m font-bold tracking-tight text-gray-900 dark:text-white">
              {size}
            </h6>
          </div>
          <div className="flex gap-2 justify-end">
            <span className={`badge-type-${type}`}>{type}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DndCard;
