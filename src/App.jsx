import React, { useState, useEffect } from "react";
import Questions from "./components/Questions";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Results from "./components/Results";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [loading, setLoading] = useState(false);

  const questions = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question:
        "In the UK, the abbreviation NHS stands for National what Service?",
      answers: [
        {
          text: "Humanity",
          correct: false,
        },
        {
          text: "Healthy",
          correct: true,
        },
        {
          text: "Honour",
          correct: false,
        },
        {
          text: "HouseHold",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question:
        "W200 - Which Disney character famously leaves a glass slipper behind at a royal ball?",
      answers: [
        {
          text: "Pocahontas",
          correct: false,
        },
        {
          text: "Cindirella",
          correct: true,
        },
        {
          text: "Sleeping Beauty",
          correct: false,
        },
        {
          text: "Elsa",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question:
        " 300 - What name is given to the revolving belt machinery in an airport that delivers checked luggage from the plane to baggage reclaim?",
      answers: [
        {
          text: "Hangar",
          correct: false,
        },
        {
          text: "Terminal",
          correct: false,
        },
        {
          text: "Concourse",
          correct: false,
        },
        {
          text: "Carousel",
          correct: true,
        },
      ],
    },
    {
      id: 7,
      question:
        "500 - Which of these brands was chiefly associated with the manufacture of household locks?",
      answers: [
        {
          text: "Phillips",
          correct: false,
        },
        {
          text: "Phillips",
          correct: false,
        },
        {
          text: "Chubb",
          correct: true,
        },
        {
          text: "Ronseal",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question:
        "1,000 - The hammer and sickle is one of the most recognisable symbols of which political ideology?",
      answers: [
        {
          text: "Republicanism",
          correct: false,
        },
        {
          text: "Communism",
          correct: true,
        },
        {
          text: "Conservatism",
          correct: false,
        },
        {
          text: "Liberalism",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question:
        "2,000 - Which toys have been marketed with the phrase “robots in disguise”?",
      answers: [
        {
          text: "Bratz Dolls",
          correct: false,
        },
        {
          text: "Sylvanian Families",
          correct: false,
        },
        {
          text: "Hatchimals",
          correct: false,
        },
        {
          text: "Transformers",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "4,000 - What does the word loquacious mean?",
      answers: [
        {
          text: "Angry",
          correct: false,
        },
        {
          text: "Chatty",
          correct: true,
        },
        {
          text: "Beautiful",
          correct: false,
        },
        {
          text: "Shy",
          correct: false,
        },
      ],
    },

    {
      id: 11,
      question:
        "8,000 - Obstetrics is a branch of medicine particularly concerned with what?",
      answers: [
        {
          text: "Childbirth",
          correct: true,
        },
        {
          text: "Broken bones",
          correct: false,
        },
        {
          text: "Heart conditions",
          correct: false,
        },
        {
          text: "Old age",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question:
        "1 million - In 1718, which pirate died in battle off the coast of what is now North Carolina?",
      answers: [
        {
          text: "Calico Jack",
          correct: false,
        },
        {
          text: "Blackbeard",
          correct: true,
        },
        {
          text: "Bartholomew Roberts",
          correct: false,
        },
        {
          text: "Captain Kidd",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question:
        "500,000 - Who is the only British politician to have held all four “Great Offices of State” at some point during their career",
      answers: [
        {
          text: "David Lloyd George",
          correct: false,
        },
        {
          text: "Harold Wilson",
          correct: false,
        },
        {
          text: "James Callaghan",
          correct: true,
        },
        {
          text: "John Major",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question:
        " 64,000 - At the closest point, which island group is only 50 miles south-east of the coast of Florida?",
      answers: [
        {
          text: "Bahamas",
          correct: true,
        },
        {
          text: "US Virgin Islands",
          correct: false,
        },
        {
          text: "Turks and Caicos Islands",
          correct: false,
        },
        {
          text: "Bermuda",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question:
        "32,000 - Which of these religious observances lasts for the shortest period of time during the calendar year?",
      answers: [
        {
          text: "Ramadan",
          correct: false,
        },
        {
          text: "Diwali",
          correct: true,
        },
        {
          text: "Lent",
          correct: false,
        },
        {
          text: "Hanukkah",
          correct: false,
        },
      ],
    },
  ];

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Start />
        </Route>
        <Route path="/question">
          <div className="quiz_box">
            <Questions
              loading={loading}
              setLoading={setLoading}
              setStop={setStop}
              stop={stop}
              questions={questions}
              questionNumber={questionNumber}
              setQuestionNumber={setQuestionNumber}
            />
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
