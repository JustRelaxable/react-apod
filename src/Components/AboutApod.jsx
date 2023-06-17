import "../StyleModules/AboutApod.css";
import questions from "../Assets/AboutApodQuestions.js";

export default function AboutApod() {
  return (
    <>
      <h1 className="about-header">About APOD</h1>
      <div className="about-container">
        {questions.map((x, i) => {
          return (
            <div className={"question-container"}>
              <h2>{x.question}</h2>
              <p>{x.answer}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
