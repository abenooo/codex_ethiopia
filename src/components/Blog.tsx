import { FC, useState, useEffect } from 'react';
import axios from 'axios';

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

  useEffect(() => {
    const fetchImages = async () => {
      const ids = getRandomImageIds(6);
      const imagePromises = ids.map(id => axios.get(`https://picsum.photos/id/${id}/info`));
      try {
        const imageResponses = await Promise.all(imagePromises);
        const imagesData = imageResponses.map(res => res.data);
        setImages(imagesData);
        setMainImage(imagesData[0]);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  const handleThumbnailClick = (image: Image) => {
    setMainImage(image);
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {mainImage ? (
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <img
            src={mainImage.download_url}
            alt={mainImage.author}
            width={1200}
            height={675}
            className="object-cover w-full h-full"
          />
        </div>
      ) : (
        <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-200">
          Loading...
        </div>
      )}
      <div className="grid grid-cols-6 gap-2 mt-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative aspect-square overflow-hidden rounded-md border cursor-pointer"
            onClick={() => handleThumbnailClick(image)}
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
  );
};

export default Blog;
