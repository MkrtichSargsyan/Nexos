import React from 'react';
import s from './VideoExplanation.module.scss';
import poster from '../../../assets/poster.png';

function VideoExplanation() {
  const [status, setStatus] = React.useState({});

  const renderPoster = () => {
    if (status.isLoaded) {
      return null;
    }
    return (
      <div>
        <img src={poster} alt="poster" className={s.videoPoster} />
      </div>
    );
  };

  return (
    <section className={s.videoExplanationSection}>
      <h2>How are Nexos tokens Issued</h2>
      <div className={s.videoContainer}>
        <video
          controls
          preload="metadata"
          playsInline
          // poster={poster}
        >
          <source
            src={
              'https://firebasestorage.googleapis.com/v0/b/nexos-879bb.appspot.com/o/promo.mp4?alt=media&token=f9babe1c-7451-42bd-acfd-06be7dbf4636'
            }
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

export default VideoExplanation;
