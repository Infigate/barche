import React from 'react';

const Map: React.FC = () => {
  return (
    <div className="map-container" style={{ margin: '20px 0', position: 'relative', width: '100%', paddingTop: '56.25%' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178.23898980657188!2d141.40507442875287!3d43.03345449396247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b2bac84e55169%3A0x508b716869a52fc5!2z44CSMDYyLTAwNTMg5YyX5rW36YGT5pyt5bmM5biC6LGK5bmz5Yy65pyI5a-S5p2x77yT5p2h77yX5LiB55uu77yT4oiS77yS77yQIOODieODq-ODgeOCpw!5e0!3m2!1sja!2sjp!4v1737767707744!5m2!1sja!2sjp"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 0,
        }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default Map;