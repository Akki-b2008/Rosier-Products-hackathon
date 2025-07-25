import "./SocialVideo.css";
import reelsData from './VideoData'
const ReelsSection = () => {

  return (
    <section className="reels-section">
      <h2 className="title">Real People. Real Stories.</h2>
      <p className="subtitle">See how our customers enjoy Rosier Foods every day.</p>

      <div className="reels-wrapper">
        {reelsData.map(({ id, videoSrc, caption, user }) => (
          <div className="reel-card" key={id}>
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              onMouseOver={e => {
                e.target.muted = false;
                e.target.play();
              }}
              onMouseOut={e => {
                e.target.muted = true;
                e.target.play(); 
              }}
            />
            <div className="caption">
              <p>{caption}</p>
              <span>{user}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReelsSection;
