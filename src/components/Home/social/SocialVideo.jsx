import "./SocialVideo.css";

const ReelsSection = () => {

  const reelsData = [
    {
      id: 1,
      videoSrc: "src/assets/video/video1.mp4",
      caption: "Loved this very much! My food tastes so fresh! 💛",
      user: "@naturalfoodslover",
    },
    {
      id: 2,
      videoSrc: "src/assets/video/video2.mp4",
      caption: "Rosier Ghee made my makhan mishri taste heavenly! 😍",
      user: "@healthykitchenqueen",
    },
    {
      id: 3,
      videoSrc: "src/assets/video/video3.mp4",
      caption: "My mom swears by it now! Authentic and pure.",
      user: "@vediclivingdaily",
    },
    {
      id: 4,
      videoSrc: "src/assets/video/video4.mp4",
      caption: "Cooking with Rosier feels like returning to tradition.",
      user: "@flavorroots",
    },
    {
      id: 5,
      videoSrc: "src/assets/video/Video5.mp4",
      caption: "Pure and honest food product that my family trusts.",
      user: "@momapprovedeats",
    },
  ];
  return (
    <section className="reels-section">
      <h2 className="title">Real People. Real Stories.</h2>
      <p className="subtitle">See how our customers enjoy Rosier Foods every day.</p>

      <div className="reels-wrapper">
        {reelsData.map(({ id, videoSrc, caption, user }) => (
          <div className="reel-card" key={id}>
            <video
              src={videoSrc}
              muted
              loop
              playsInline
              onMouseOver={e => e.target.play()}
              onMouseOut={e => e.target.pause()}
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
