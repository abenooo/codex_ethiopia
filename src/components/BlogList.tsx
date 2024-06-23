import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#6366F1] to-[#EC4899]">
      <div className="container px-4 md:px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-2 animate-fade-in">
          Explore Our Site 
        </h2>
        <p className="text-lg text-white text-center mb-8 animate-fade-in-delay">
         Some of the blog websites we made with love.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 my-5">
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center animate-fade-in-up">
            <div className="bg-[#FEF2F2] rounded-full p-4 mb-4">
              <PlusIcon className="w-10 h-10 text-[#EF4444]" />
            </div>
            <h3 className="text-xl font-bold mb-2">The Rise of Full-Stack Development</h3>
            <p className="text-muted-foreground text-sm">
              Learn to add numbers and build a solid foundation.
            </p>
            <div className="w-full bg-muted rounded-full mt-4 relative">
              <div
                className="bg-[#EF4444] text-xs font-medium text-white text-center p-0.5 leading-none rounded-full"
                style={{ width: "100%" }}
              >
                100%
              </div>
            </div>

            <Link
              to="/blogs/full-stack-development"
              className="mt-4 inline-flex h-9 items-center justify-center rounded-md bg-[#EF4444] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#DC2626] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Start Learning
            </Link>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center animate-fade-in-up delay-100">
          <div className="bg-[#FEF2F2] rounded-full p-4 mb-4">
              <PlusIcon className="w-10 h-10 text-[#EF4444]" />
            </div>
            <h3 className="text-xl font-bold mb-2">Blog Two</h3>
            <p className="text-muted-foreground text-sm">
              Explore the art of taking away and finding differences.
            </p>
            <div className="w-full bg-muted rounded-full mt-4 relative">
              <div
                className="bg-[#10B981] text-xs font-medium text-white text-center p-0.5 leading-none rounded-full"
                style={{ width: "100%" }}
              >
                100%
              </div>
            </div>

            <Link
              to="/blogs/blog-two"
              className="mt-4 inline-flex h-9 items-center justify-center rounded-md bg-[#10B981] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#059669] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Start Learning
            </Link>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center animate-fade-in-up delay-200">
          <div className="bg-[#FEF2F2] rounded-full p-4 mb-4">
              <PlusIcon className="w-10 h-10 text-[#EF4444]" />
            </div>
            <h3 className="text-xl font-bold mb-2">Blog Three</h3>
            <p className="text-muted-foreground text-sm">
              Discover the power of repeated addition and arrays.
            </p>
            <div className="w-full bg-muted rounded-full mt-4 relative">
              <div
                className="bg-[#06B6D4] text-xs font-medium text-white text-center p-0.5 leading-none rounded-full"
                style={{ width: "100%" }}
              >
                100%
              </div>
            </div>

            <Link
              to="/blogs/blog-three"
              className="mt-4 inline-flex h-9 items-center justify-center rounded-md bg-[#06B6D4] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#0891B2] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Start Learning
            </Link>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center animate-fade-in-up delay-300">
          <div className="bg-[#FEF2F2] rounded-full p-4 mb-4">
              <PlusIcon className="w-10 h-10 text-[#EF4444]" />
            </div>
            <h3 className="text-xl font-bold mb-2">Blog Four</h3>
            <p className="text-muted-foreground text-sm">
              Explore the concept of equal sharing and partitioning.
            </p>
            <div className="w-full bg-muted rounded-full mt-4 relative">
              <div
                className="bg-[#F59E0B] text-xs font-medium text-white text-center p-0.5 leading-none rounded-full"
                style={{ width: "100%" }}
              >
                100%
              </div>
            </div>

            <Link
              to="/blogs/blog-four"
              className="mt-4 inline-flex h-9 items-center justify-center rounded-md bg-[#F59E0B] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#D97706] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Start Learning
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 my-5">
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center animate-fade-in-up">
            <div className="bg-[#FEF2F2] rounded-full p-4 mb-4">
              <PlusIcon className="w-10 h-10 text-[#EF4444]" />
            </div>
            <h3 className="text-xl font-bold mb-2">The Rise of Full-Stack Development</h3>
            <p className="text-muted-foreground text-sm">
              Learn to add numbers and build a solid foundation.
            </p>
            <div className="w-full bg-muted rounded-full mt-4 relative">
              <div
                className="bg-[#EF4444] text-xs font-medium text-white text-center p-0.5 leading-none rounded-full"
                style={{ width: "100%" }}
              >
                100%
              </div>
            </div>

            <Link
              to="/blogs/full-stack-development"
              className="mt-4 inline-flex h-9 items-center justify-center rounded-md bg-[#EF4444] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#DC2626] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Start Learning
            </Link>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center animate-fade-in-up delay-100">
          <div className="bg-[#FEF2F2] rounded-full p-4 mb-4">
              <PlusIcon className="w-10 h-10 text-[#EF4444]" />
            </div>
            <h3 className="text-xl font-bold mb-2">Blog Two</h3>
            <p className="text-muted-foreground text-sm">
              Explore the art of taking away and finding differences.
            </p>
            <div className="w-full bg-muted rounded-full mt-4 relative">
              <div
                className="bg-[#10B981] text-xs font-medium text-white text-center p-0.5 leading-none rounded-full"
                style={{ width: "100%" }}
              >
                100%
              </div>
            </div>

            <Link
              to="/blogs/blog-two"
              className="mt-4 inline-flex h-9 items-center justify-center rounded-md bg-[#10B981] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#059669] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Start Learning
            </Link>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center animate-fade-in-up delay-200">
          <div className="bg-[#FEF2F2] rounded-full p-4 mb-4">
              <PlusIcon className="w-10 h-10 text-[#EF4444]" />
            </div>
            <h3 className="text-xl font-bold mb-2">Blog Three</h3>
            <p className="text-muted-foreground text-sm">
              Discover the power of repeated addition and arrays.
            </p>
            <div className="w-full bg-muted rounded-full mt-4 relative">
              <div
                className="bg-[#06B6D4] text-xs font-medium text-white text-center p-0.5 leading-none rounded-full"
                style={{ width: "100%" }}
              >
                100%
              </div>
            </div>

            <Link
              to="/blogs/blog-three"
              className="mt-4 inline-flex h-9 items-center justify-center rounded-md bg-[#06B6D4] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#0891B2] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Start Learning
            </Link>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center animate-fade-in-up delay-300">
          <div className="bg-[#FEF2F2] rounded-full p-4 mb-4">
              <PlusIcon className="w-10 h-10 text-[#EF4444]" />
            </div>
            <h3 className="text-xl font-bold mb-2">Blog Four</h3>
            <p className="text-muted-foreground text-sm">
              Explore the concept of equal sharing and partitioning.
            </p>
            <div className="w-full bg-muted rounded-full mt-4 relative">
              <div
                className="bg-[#F59E0B] text-xs font-medium text-white text-center p-0.5 leading-none rounded-full"
                style={{ width: "100%" }}
              >
                100%
              </div>
            </div>

            <Link
              to="/blogs/blog-four"
              className="mt-4 inline-flex h-9 items-center justify-center rounded-md bg-[#F59E0B] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#D97706] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Start Learning
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


function PlusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

