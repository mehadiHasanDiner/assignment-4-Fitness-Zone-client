import { categoriesData } from "../../../../utils/categoriesData";

type TCategoriesCardProps = {
  handleCategory: (category: string) => void;
};

const ProductByCategoryCard = ({ handleCategory }: TCategoriesCardProps) => {
  return (
    <>
      <div className="my-8">
        <h2 className="text-2xl font-bold mb-4"> Product Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categoriesData?.map((category, index) => (
            <div
              key={index}
              className="cursor-pointer border p-4 rounded-lg"
              onClick={() => handleCategory(category.name)}
            >
              <div className="w-full h-48 flex items-center justify-center">
                <img
                  className="w-full h-48 object-contain transition ease-in-out delay-250 hover:-translate-y-1 hover:scale-110 "
                  src={category.image}
                  alt={category.name}
                />
              </div>
              <h2 className="text-center text-xl font-semibold mt-2">
                {category.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductByCategoryCard;
