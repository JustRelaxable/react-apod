import { useEffect, useState } from "react";
import "../StyleModules/RandomPicture.css";
import PrimaryButton from "./PrimaryButton";

export default function RandomPicture({ selectedDate }) {
  const [randomRequestCount, setRandomRequestCount] = useState(0);
  const [explanation, setExplanation] = useState("");
  const [date, setDate] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [fullImageURL, setFullImageURL] = useState("");
  const [title, setTitle] = useState("");
  const [dataReceived, setDataReceived] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setDataReceived(false);
    setImageLoaded(false);
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=xVAwzJcqMnRhu5ikdWqjghdIKf65P3GkR6V97t0c&count=1"
    )
      .then((x) => x.json())
      .then((x) => x[0])
      .then((x) => {
        setDate(x.date);
        setExplanation(x.explanation);
        setImageURL(x.url);
        setTitle(x.title);
        setFullImageURL(x.hdurl);
        setDataReceived(true);
        const image = new Image();
        image.src = x.url;
        image.onload = () => {
          setImageLoaded(true);
        };
      });
  }, [randomRequestCount]);

  useEffect(() => {
    if (selectedDate === "") return;
    setDataReceived(false);
    setImageLoaded(false);
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=xVAwzJcqMnRhu5ikdWqjghdIKf65P3GkR6V97t0c&date=${selectedDate}`
    )
      .then((x) => x.json())
      .then((x) => {
        setDate(x.date);
        setExplanation(x.explanation);
        setImageURL(x.url);
        setTitle(x.title);
        setFullImageURL(x.hdurl);
        setDataReceived(true);
        const image = new Image();
        image.src = x.url;
        image.onload = () => {
          setImageLoaded(true);
        };
      });
  }, [selectedDate]);

  const containerHeightStyle = dataReceived ? {} : { height: "700px" };

  return (
    <div className="random-picture-container" style={containerHeightStyle}>
      {!dataReceived && <p>Waiting to receive data</p>}
      {dataReceived && (
        <>
          <h1 className="main-header">Random Astronomy Picture of the Day</h1>
          {imageLoaded ? (
            <img
              src={imageURL}
              className="random-picture-picture"
              onLoad={() => {}}
            ></img>
          ) : (
            <p>Event Image is Loading...</p>
          )}

          <h2>
            {title} - {date}
          </h2>
          <p>{explanation}</p>
          <div className="button-container">
            <PrimaryButton
              onClick={() => setRandomRequestCount(randomRequestCount + 1)}
            >
              Another Random Event!
            </PrimaryButton>
            <PrimaryButton
              onClick={() => {
                window.open(fullImageURL, "_blank");
              }}
            >
              Load Full Size Image
            </PrimaryButton>
          </div>
        </>
      )}
    </div>
  );
}
