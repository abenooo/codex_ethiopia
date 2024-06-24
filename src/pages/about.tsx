import About from "@/components/About";
import Hero from "@/components/Hero";

const about = () => {
  return (
    <div>
      <Hero
        title="About Us"
        description="We specialize in helping you build a team of expert developers."
      />
      <About />
    </div>
  );
};

export default about;
