import styled from 'styled-components';

const items = [
  { id: 1, url: "/src/images/image1.jpg" },
  { id: 2, url: "/src/images/image2.jpg" },
  { id: 3, url: "/src/images/image3.jpg" },
  { id: 4, url: "/src/images/image4.jpg" },
  { id: 5, url: "/src/images/image5.jpg" },
  { id: 6, url: "/src/images/image6.jpg" },
  { id: 7, url: "/src/images/image7.jpg" },
  { id: 8, url: "/src/images/image8.jpg" },
  { id: 9, url: "/src/images/image9.jpg" },
  { id: 10, url: "/src/images/image10.jpg" },
  { id: 11, url: "/src/images/image11.jpg" },
  { id: 12, url: "/src/images/image12.jpg" },
  { id: 13, url: "/src/images/image13.jpg" },
  { id: 14, url: "/src/images/image14.jpg" }
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

