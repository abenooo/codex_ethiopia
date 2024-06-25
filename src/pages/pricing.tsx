import Hero from "@/components/Hero";
import Price from "@/components/Pricing";

const pricing = () => {
  return (
    <>
      <Hero
        title="Pricing"
        description="Choose the plan that fits your needs. All plans are billed monthly and exclude VAT"
      />
      <Price />
    </>
  );
};

export default pricing;
