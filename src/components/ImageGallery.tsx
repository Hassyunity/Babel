import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="relative">
      <div className="aspect-square w-full overflow-hidden rounded-lg">
        <img
          src={images[selectedImage]}
          alt="Product"
          className="h-full w-full object-cover object-center cursor-zoom-in"
          onClick={() => setIsZoomed(true)}
        />
      </div>
      <div className="mt-4 grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`aspect-square w-full overflow-hidden rounded-lg ${
              selectedImage === index ? 'ring-2 ring-[#70A0AF]' : ''
            }`}
          >
            <img
              src={image}
              alt={`Product ${index + 1}`}
              className="h-full w-full object-cover object-center"
            />
          </button>
        ))}
      </div>

      {isZoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onClick={() => setIsZoomed(false)}
        >
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setIsZoomed(false)}
          >
            <X size={24} color="#70A0AF" />
          </button>
          <img
            src={images[selectedImage]}
            alt="Zoomed product"
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};
