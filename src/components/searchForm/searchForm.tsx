import { typesList, sizeList } from "@/utils/optionList";
import { useSearchForm } from "@/components/searchForm";

const searchForm = () => {
  const { fieldKeyword, fieldsize, fieldtype } = useSearchForm();
  return (
    <form className="grid grid-cols-3 gap-x-[50px] mx-8">
      <div>
        <label
          htmlFor="type"
          className="block mb-2 text-mb font-medium text-white dark:text-white"
        >
          type
        </label>
        <select
          {...fieldtype}
          id="type"
          className="bg-[#253641] border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        >
          {typesList.map((item, index) => {
            return (
              <option key={`type-key-${index}`} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label
          htmlFor="size"
          className="block mb-2 text-mb font-medium text-white dark:text-white"
        >
          size
        </label>
        <select
          {...fieldsize}
          id="size"
          className="bg-[#253641] border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        >
          {sizeList.map((item, index) => {
            return (
              <option key={`size-key-${index}`} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label
          htmlFor="search"
          className="block mb-2 text-mb font-medium text-white dark:text-white"
        >
          search
        </label>

        <input
          {...fieldKeyword}
          id="search"
          className="bg-[#253641] border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        />
      </div>
    </form>
  );
};

export default searchForm;
