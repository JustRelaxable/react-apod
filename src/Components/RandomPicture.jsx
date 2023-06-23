import { useEffect, useState, useRef } from "react";
import "../StyleModules/RandomPicture.css";
import PrimaryButton from "./PrimaryButton";

export default function RandomPicture({}) {
  const [randomRequestCount, setRandomRequestCount] = useState(0);
  const [explanation, setExplanation] = useState("");
  const [date, setDate] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [fullImageURL, setFullImageURL] = useState("");
  const [title, setTitle] = useState("");
  const [dataReceived, setDataReceived] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [mediaType, setMediaType] = useState("");
  const [datePickerDate, setDatePickerDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [connectionError, setConnectionError] = useState(false);
  const datePickerRef = useRef();

  useEffect(() => {
    setDataReceived(false);
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
        setMediaType(x["media_type"]);
        setDataReceived(true);
      })
      .catch((x) => setConnectionError(true));
  }, [randomRequestCount]);

  useEffect(() => {
    if (selectedDate === "") return;
    setDataReceived(false);
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
        setMediaType(x["media_type"]);
        setDataReceived(true);
      })
      .catch((x) => setConnectionError(true));
  }, [selectedDate]);

  const containerHeightStyle = dataReceived ? {} : { height: "700px" };

  return (
    <div className="random-picture-container" style={containerHeightStyle}>
      {!dataReceived && <p>Waiting to receive data</p>}
      {connectionError && (
        <div>
          <p>Connection to API resulted in an error!</p>
          <PrimaryButton
            onClick={() => {
              setConnectionError(false);
              setRandomRequestCount(randomRequestCount + 1);
            }}
          >
            Try again!
          </PrimaryButton>
        </div>
      )}
      {dataReceived && (
        <>
          <h1 className="main-header">Random Astronomy Picture of the Day</h1>
          {mediaType === "image" && (
            <img
              src={imageURL}
              className="random-picture-picture"
              onLoad={() => {}}
            ></img>
          )}
          {mediaType === "video" && (
            <iframe className="random-picture-picture" src={imageURL}></iframe>
          )}
          <h2>
            {title} - {date}
          </h2>
          <div className="date-selector-container">
            <input
              type="date"
              ref={datePickerRef}
              value={datePickerDate}
              onChange={(e) => setDatePickerDate(e.target.value)}
            ></input>
            <PrimaryButton
              customStyle={{ padding: "5px" }}
              onClick={() => {
                setSelectedDate(datePickerDate);
              }}
            >
              Go to selected Date
            </PrimaryButton>
          </div>

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
