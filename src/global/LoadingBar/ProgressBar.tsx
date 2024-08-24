import "./ProgressBar.css";
const LoadingBar = () => {
  return (
    <div className="my-8">
      <div className="load-wrapp">
        <div className="load-10">
          <p>Loading ........</p>
          <div className="bar"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingBar;
