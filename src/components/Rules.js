import "../styles/rules.css";

const Rules = () => {
  return (
    <section className="rules-ctn br-md pd-md">
      <h2>Rules</h2>
      <div className="rules-info">
        <ul>
          <li>
            <span class="material-icons">chevron_right</span>
            Each question consist of 10 points
          </li>
          <li>
            <span class="material-icons">chevron_right</span>
            To pass the test you need to score atleast 70%
          </li>
          <li>
            <span class="material-icons">chevron_right</span>
            There is only one right answer to each question
          </li>
        </ul>
      </div>
      <button className="btn btn-primary">Start Quiz</button>
    </section>
  );
};

export {Rules};
