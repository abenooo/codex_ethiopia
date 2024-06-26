import { FC, useState, useEffect } from "react";
import axios from "axios";

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

const Teams: FC = () => {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const ids = getRandomImageIds(5);
      const imagePromises = ids.map((id) =>
        axios.get(`https://picsum.photos/id/${id}/info`)
      );
      try {
        const imageResponses = await Promise.all(imagePromises);
        const imagesData = imageResponses.map((res) => res.data);
        setImages(imagesData);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <section className="w-full py-12 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl xl:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-700 dark:from-white dark:to-gray-300">
            Meet the Team
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400 md:text-xl">
            Our talented team is dedicated to building innovative software solutions.
          </p>
        </div>
        <div className="w-full max-w-full space-y-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 border border-gray-200 dark:border-gray-800 p-4 rounded-lg dark:shadow-md dark:shadow-gray-700 transition-transform hover:scale-105"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden">
                  {images[index] ? (
                    <img
                      src={images[index].download_url}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 dark:bg-gray-700"></div>
                  )}
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  {member.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const teamMembers = [
  {
    name: "John Doe",
    role: "Co-Founder, CEO",
    description:
      "John has over 10 years of experience in the tech industry, with a strong background in product management and business strategy.",
  },
  {
    name: "Jane Smith",
    role: "Co-Founder, CTO",
    description:
      "Jane is a seasoned software engineer with a passion for building scalable and efficient systems.",
  },
  {
    name: "Michael Johnson",
    role: "Lead Designer",
    description:
      "Michael is a creative and user-focused designer with a strong background in UI/UX design.",
  },
  {
    name: "Emily Davis",
    role: "Marketing Manager",
    description:
      "Emily has a strong background in digital marketing and is passionate about driving growth for the company.",
  },
  {
    name: "David Lee",
    role: "Software Engineer",
    description:
      "David is a skilled full-stack developer with a strong understanding of modern web technologies.",
  },
];

export default Teams;
