import { FC, useState, useEffect } from "react";
import axios from "axios";
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
  const [mainImage, setMainImage] = useState<Image | null>(null);
  const [mainBlog, setMainBlog] = useState(blogs[0]);

  useEffect(() => {
    const fetchImages = async () => {
      const ids = getRandomImageIds(4);
      const imagePromises = ids.map((id) =>
        axios.get(`https://picsum.photos/id/${id}/info`)
      );
      try {
        const imageResponses = await Promise.all(imagePromises);
        const imagesData = imageResponses.map((res) => res.data);
        setImages(imagesData);
        setMainImage(imagesData[0]);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  const handleThumbnailClick = (index: number) => {
    setMainImage(images[index]);
    setMainBlog(blogs[index]);
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#6366F1] to-[#EC4899] dark:from-gray-800 dark:to-gray-700">
      <div className="container px-4 md:px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-2 animate-fade-in">
          Explore Our Blog Sites
        </h2>
        <p className="text-lg text-white text-center mb-8 animate-fade-in-delay">
          We specialize in developing a variety of blog sites. Here are some of
          our projects.
        </p>
        <div className="flex flex-col md:flex-row items-start gap-6">
          {mainImage && (
            <div className="w-full md:w-1/2 lg:w-2/3">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <img
                  src={mainImage.download_url}
                  alt={mainImage.author}
                  width={1200}
                  height={675}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          )}
          <div className="w-full md:w-1/2 lg:w-1/3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Project Title: {mainBlog.title}
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-400 mb-4">
              Project Description: {mainBlog.description}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-400 mb-4">
              URL for Project:
              <Link
                to={mainBlog.link}
                className="text-indigo-600 hover:text-indigo-800"
              >
                {mainBlog.link}
              </Link>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="relative aspect-square overflow-hidden rounded-md border cursor-pointer"
              onClick={() => handleThumbnailClick(index)}
            >
              <img
                src={image.download_url}
                alt={image.author}
                width={200}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const blogs = [
  {
    title: "The Rise of Full-Stack Development",
    description:
      "Project Description: Explore the world of full-stack development and how it can enhance your web projects.Explore the world of full-stack development and how it can enhance your web projects. Explore the world of full-stack development and how it can enhance your web projects.Explore the world of full-stack development and how it can enhance your web projects.",
    link: "https://test.com/full-stack-development",
  },
  {
    title: "Blog Two",
    description:
      "Project Description: Project Description: Explore the world of full-stack development and how it can enhance your web projects.Explore the world of full-stack development and how it can enhance your web projects. Explore the world of full-stack development and how it can enhance your web projects.Explore the world of full-stack development and how it can enhance your web projects.",
    link: "https://test.com/blog-two",
  },
  {
    title: "Blog Three",
    description:
      "Project Description: Project Description: Explore the world of full-stack development and how it can enhance your web projects.Explore the world of full-stack development and how it can enhance your web projects. Explore the world of full-stack development and how it can enhance your web projects.Explore the world of full-stack development and how it can enhance your web projects.",
    link: "https://test.com/blog-three",
  },
  {
    title: "Blog Four",
    description:
      "Project Description: Project Description: Explore the world of full-stack development and how it can enhance your web projects.Explore the world of full-stack development and how it can enhance your web projects. Explore the world of full-stack development and how it can enhance your web projects.Explore the world of full-stack development and how it can enhance your web projects.",
    link: "https://test.com/blog-four",
  },
];

export default Blog;
