const ProductBanner = () => {
  return (
    <div className="my-[120px]">
      <div className="flex bg-[#6a8c33]  rounded-lg p-6  gap-6 h-[620px]">
        <div className="w-1/2">
          <img
            className="object-fill w-full h-[580px]  "
            src="/The-Sill_OliveTree_Medium_Hyde_Black_Variant.webp"
            alt=""
          />
        </div>
        <div className="w-1/2">
          <h2 className="text-5xl font-bold leading-normal font-sans text-[#F5F5DC]">
            Nurturing Nature and Beautifying Homes with High-Quality Trees,
            Expert Care, and Exceptional Service
          </h2>
          <button className="btn mt-8 bg-[#FFD700] text-[#4a6622] border-none">
            Purchese Now{' '}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
