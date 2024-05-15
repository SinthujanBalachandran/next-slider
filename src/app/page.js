import AutoSlider from "./components/AutoSlider";

export default function Home() {
  return (
    <div className="hero">
      <div className="container">
        <div className="top-note">Over 3 million ready-to-work creatives!</div>
        <h1>{`The world's destination for design`}</h1>
        <div className="description">
          Get inspired by the work of millions of top-rated designers & agencies
          around the world.
        </div>
        <button className="btn">Get Started</button>
      </div>
      <AutoSlider />
    </div>
  );
}
