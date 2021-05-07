import { artList } from './allImages';
import { Image } from 'antd';
import { EyeFilled } from '@ant-design/icons';
import "./Gallery.css";

export const Gallery = ({ arts }: { arts: artList }) => {
  return (
    <div className="gallery">
      <Image.PreviewGroup>
        {arts.map(({ name, ext }) => (
          <Image
            key={name}
            width={300}
            src={require(`./images/${name}-crop.${ext}`).default}
            preview={{
              src: require(`./images/${name}.${ext}`).default,
              mask: <EyeFilled />
            //   TODO: mask is not centered for soem reason
            }}
          />
        ))}
      </Image.PreviewGroup>
    </div>
  );
};
