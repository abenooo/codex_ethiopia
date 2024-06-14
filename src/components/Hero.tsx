function Hero(props: { title: string; description: string }) {
  return (
    <div className='bg-[url("/hero.png")] h-[40vh] flex flex-col items-center justify-center text-white gap-5'>
      <p className="text-4xl md:text-5xl font-bold ">{props.title}</p>
      <p className="max-w-sm text-center text-xl">{props.description}</p>
    </div>
  );
}

export default Hero;
