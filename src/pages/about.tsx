import About from "@/components/About";
import Hero from "@/components/Hero";
import Teams from "@/components/Team";

const about = () => {
  return (
    <div>
      <Hero
        title="About Us"
        description="We specialize in helping you build a team of expert developers."
      />
      <About />
      <Teams />
    </div>
  );
};

export default about;
