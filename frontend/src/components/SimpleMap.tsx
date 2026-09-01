interface SimpleMapProps {
  width?: string;
  height?: string;
  src: string;
}


export const SimpleMap: React.FC<SimpleMapProps> = ({ width, height, src }) => {
  return (
    <div style={{ width: width || '100%', height: height || '450px', borderRadius: '12px', overflow: 'hidden' }}>
      <iframe
        title="Google Maps Standort"
        src={src}
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};