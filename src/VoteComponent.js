import { useState } from "react";

const VoteComponent = ({ question, options }) => {
  // let votes = new Array(options.length).fill(0);
  let [votes, setVotes] = useState(new Array(options.length).fill(0));

  let buttons = options.map((option, index) => (
    <button
      data-idx={index}
      onClick={(e) => {
        let idx = e.target.getAttribute("data-idx");
        votes[idx]++;
        // setVotes(votes.map((e) => e)); sau a doua varianta...
        setVotes([...votes]);
        console.log(votes);
      }}
    >
      {option} ({votes[index]})
    </button>
  ));

  // HW 1 : Create and fill the array using at least 2 other variants.
  // hint: use .map()
  // HW 3 : render total votes...!
  return (
    <div>
      <h2>{question}</h2>
      {buttons}
    </div>
  );
};

export default VoteComponent;
