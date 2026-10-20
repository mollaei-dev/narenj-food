type CategoryCardProps = {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
};

function CategoryCard({
  title,
  description,
  image,
  reverse = false,
}: CategoryCardProps) {
  return (
    <div className="mb-4 flex h-80 w-52 cursor-pointer flex-col items-center justify-between rounded-full bg-[#353537a8] text-center transition-all duration-300 hover:-translate-y-2 hover:border min-[370px]:h-70 min-[370px]:w-38 min-[400px]:w-40 min-[460px]:h-83 min-[460px]:w-52 sm:w-55 md:mb-4 md:h-80 md:w-60 lg:mb-4 lg:h-83 xl:w-65 2xl:w-54">
      <img
        src={image}
        alt={title}
        className={`h-1/2 w-full rounded-full object-cover ${
          reverse ? "order-2" : "order-1"
        }`}
      />
      <div className={`px-4 py-7 ${reverse ? "order-1" : "order-2"}`}>
        <h3 className="mb-4 text-lg font-bold text-[#F5F1EB]">{title}</h3>

        <p className="text-sm leading-7 text-[#A7A7B0]">{description}</p>
      </div>
    </div>
  );
}

export default CategoryCard;
