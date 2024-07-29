import styled from 'styled-components';

const items = [
  { id: 1, url: "/public/images/image1.jpg" },
  { id: 2, url: "/public/images/image2.jpg" },
  { id: 3, url: "/public/images/image3.jpg" },
  { id: 4, url: "/public/images/image4.jpg" },
  { id: 5, url: "/public/images/image5.jpg" },
  { id: 6, url: "/public/images/image6.jpg" },
  { id: 7, url: "/public/images/image7.jpg" },
  { id: 8, url: "/public/images/image8.jpg" },
  { id: 9, url: "/public/images/image9.jpg" },
  { id: 10, url: "/public/images/image10.jpg" },
  { id: 11, url: "/public/images/image11.jpg" },
  { id: 12, url: "/public/images/image12.jpg" },
  { id: 13, url: "/public/images/image13.jpg" },
  { id: 14, url: "/public/images/image14.jpg" }
];

const GalleryContainer = styled.div`
  column-count: 3;
  column-gap: 1em;
`;

const GalleryItem = styled.div`
  break-inside: avoid;
  margin-bottom: 1em;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);

  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.2s ease-in-out;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const Gallery = () => {
  return (
    <GalleryContainer>
      {items.map(item => (
        <GalleryItem key={item.id}>
          <img src={item.url} alt={`Gallery item ${item.id}`} />
        </GalleryItem>
      ))}
    </GalleryContainer>
  );
};

export default Gallery;

