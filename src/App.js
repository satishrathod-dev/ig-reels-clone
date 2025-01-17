import "./App.css";
import VideosCard from "./components/VideosCard";

function App() {
  return (
    <div className="app">
      <h1>Hey there!</h1>

      <div className="app_top">
        <img
          className="app_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png"
          alt="Insta Logo"
        />
        <h1>Reels</h1>
      </div>
      <div className="app_videos">
        {/* Container of app videos */}
        <VideosCard
          channel="satish"
          avatarSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6F1vMnsas1FKgHUp51s39s5lhnaz8KdRy0g&s"
          song="Test Song - Satishhh"
          url="/assets/reel.mp4"
          likes={950}
          shares={300}
        />
        <VideosCard
          channel="satish"
          avatarSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6F1vMnsas1FKgHUp51s39s5lhnaz8KdRy0g&s"
          song="Test Song"
          url="/assets/reel1.mp4"
          likes={100}
          shares={30}
        />

        {/* Video */}
        {/* Video */}
        {/* Video */}
        {/* Video */}
      </div>
    </div>
  );
}

export default App;
