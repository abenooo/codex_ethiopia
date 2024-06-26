import { FC, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

interface Image {
  id: string;
  author: string;
  download_url: string;
}

const getRandomImageIds = (num: number) => {
  const ids = [];
  for (let i = 0; i < num; i++) {
    ids.push(Math.floor(Math.random() * 1000));
  }
  return ids;
};

const Blog: FC = () => {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const ids = getRandomImageIds(4);
      const imagePromises = ids.map(id => axios.get(`https://picsum.photos/id/${id}/info`));
      try {
        const imageResponses = await Promise.all(imagePromises);
        const imagesData = imageResponses.map(res => res.data);
        setImages(imagesData);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br dark:from-gray-800 dark:to-gray-700">
      <div className="container px-4 md:px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-2 animate-fade-in">
          Explore Our Site
        </h2>
        <p className="text-lg text-white text-center mb-8 animate-fade-in-delay">
          Some of the blog websites we made with love.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 my-5">
          {blogs.map((blog, index) => (
            <div
              key={blog.title}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col items-center text-center animate-fade-in-up"
            >
              <div className="w-full h-32 overflow-hidden mb-4">
                {images[index] ? (
                  <img
                    src={images[index].download_url}
                    alt={images[index].author}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-700"></div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {blog.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-400 text-sm">
                  {blog.description}
                </p>
                <Link
                  to={blog.link}
                  className="mt-4 inline-flex h-9 items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Start Learning
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const blogs = [
  {
    title: "The Rise of Full-Stack Development",
    description: "Learn to add numbers and build a solid foundation.",
    link: "/blogs/full-stack-development",
  },
  {
    title: "Blog Two",
    description: "Explore the art of taking away and finding differences.",
    link: "/blogs/blog-two",
  },
  {
    title: "Blog Three",
    description: "Discover the power of repeated addition and arrays.",
    link: "/blogs/blog-three",
  },
  {
    title: "Blog Four",
    description: "Explore the concept of equal sharing and partitioning.",
    link: "/blogs/blog-four",
  },
];

export default Blog;
