import { artList } from './allImages';
import { Image } from 'antd';
import { EyeFilled } from '@ant-design/icons';
import './Gallery.css';
import { useState } from 'react';

export const Gallery = ({ arts }: { arts: artList }) => {
  return (
    <div className="gallery">
      <Image.PreviewGroup>
        {arts.map(({ name, ext }) => (
          <FadeInImage key={name} name={name} ext={ext} />
        ))}
      </Image.PreviewGroup>
    </div>
  );
};

const FadeInImage = ({ name, ext }: { name: string; ext: string }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="fade-in-image">
      <Image
        className={`img-${loaded ? 'loaded' : 'not-loaded'}`}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        width={400}
        src={require(`./images/${name}-crop.${ext}`).default}
        preview={{
          src: require(`./images/${name}.${ext}`).default,
          mask: <EyeFilled />,
        }}
      />
    </div>
  );
};
