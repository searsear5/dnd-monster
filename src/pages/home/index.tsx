import DndCard from "@/components/dndCard";
import SearchForm from "@/components/searchForm";
import { useDndListStore } from "@/store/dndList";
import { LoadingOverlay } from "@achmadk/react-loading-overlay";
import DndImage from "/image/DnD.png"

const HomePage = () => {
  const { dnd, fetchDnd } = useDndListStore();

  return (
    <div className="m-[auto]">
      <div className="flex justify-between items-center">
        <img src={DndImage} className="max-h-[120px] mt-[50px]" />
        <p
          className={`font-bold text-green-500 text-lg bg-black/50 p-2 rounded-md shadow-lg ${
            fetchDnd.isBatchSuccess ? "text-green-500" : "text-yellow-500"
          }`}
        >
          {fetchDnd.isBatchSuccess
            ? `All ${fetchDnd.data.length} monsters loaded. (Completed)`
            : `${fetchDnd.data.length} monsters loaded.`}
        </p>
      </div>
      <SearchForm />

      {fetchDnd.loading && (
        <div className="h-[600px] flex justify-center items-center">
          <LoadingOverlay
            spinner
            text="Loading your content..."
          ></LoadingOverlay>
        </div>
      )}

      {!fetchDnd.loading && (
        <div className=" grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-[20px] mt-[50px]">
          {dnd.data?.map((item) => {
            return (
              <DndCard
                image={item.image}
                name={item.name}
                type={item.type}
                size={item.size}
                index={item.index}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default HomePage;
