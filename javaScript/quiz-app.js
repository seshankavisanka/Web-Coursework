document.getElementById("closebutton").addEventListener("click", function () {
  window.location.href = "quiz-index.html";
});

let questions = [
  {
    numb: 1,
    question:
      "Which UNESCO World Heritage site is located in the central highlands of Sri Lanka and is famous for its ancient ruins and magnificent frescoes?",
    answer: "Sigiriya Rock Fortress",
    answers: [
      "Sigiriya Rock Fortress",
      "Polonnaruwa Ancient City",
      "Galle Fort",
      "Dambulla Cave Temple",
    ],
  },
  {
    numb: 2,
    question:
      "Which coastal town in Sri Lanka is renowned for its beautiful beaches, vibrant nightlife, and excellent whale-watching opportunities?",
    answer: "Mirissa",
    answers: ["Mirissa", "Galle", "Unawatuna", "Hiriketiya"],
  },
  {
    numb: 3,
    question:
      "This city, known as the cultural capital of Sri Lanka, hosts the annual Esala Perahera, a grand festival featuring traditional dancers and majestic elephants.",
    answer: "Kandy",
    answers: ["Nuwara Eliya", "Kurunegala", "Kandy", "Mathale"],
  },
  {
    numb: 4,
    question:
      "What is the name of the famous rock formation located in the Horton Plains National Park, offering breathtaking views of the surrounding landscape?",
    answer: "World's End",
    answers: ["Adam's Peak", "Ella Rock", "Pidurangala Rock", "World's End"],
  },
  {
    numb: 5,
    question:
      "Which ancient city in Sri Lanka served as the capital for over a thousand years and is now a UNESCO World Heritage site with well-preserved stupas and monastic complexes?",
    answer: "Anuradhapura",
    answers: ["Polonnaruwa Ancient City", "Anuradhapura", "Kurunegala", "Dambadeniya"],
  },
  {
    numb: 6,
    question:
      'This popular hill station is known for its cool climate, picturesque tea plantations, and is often referred to as "Little England."',
    answer: "Nuwara Eliya",
    answers: ["Bandulla", "Nuwara Eliya", "Arugam Bay", "Kandy"],
  },
  {
    numb: 7,
    question:
      "Which wildlife reserve in Sri Lanka is famous for its large elephant population and offers excellent opportunities for wildlife safaris?",
    answer: "Udawalawe National Park",
    answers: [
      "Udawalawe National Park",
      "Minneriya National Park",
      "Bundala National Park",
      "Pinnawala Elephant Orphanage",
    ],
  },
  {
    numb: 8,
    question:
      "Which UNESCO World Heritage site is located in the central highlands of Sri Lanka and is famous for its ancient ruins and magnificent frescoes?",
    answer: "Galle",
    answers: ["Dambulla", "Sigiriya", "Galle", "Matara"],
  },
  {
    numb: 9,
    question:
      "Which beautiful waterfall, one of the widest in Sri Lanka, is located near the town of Ella and attracts many nature enthusiasts?",
    answer: "Diyaluma Falls",
    answers: [
      "Ravana Falls",
      "Diyaluma Falls",
      "Bambarakanda Falls",
      "Devon Falls",
    ],
  },
  {
    numb: 10,
    question:
      "This ancient city is famous for its cave temples, which house a large collection of Buddha statues and stunning murals.",
    answer: "Dambulla",
    answers: ["Dambulla", "Anuradhapura", "Yapahuwa", "Polonnaruwa"],
  },
];


const rule_box = document.querySelector(".rule-box");
const continue_btn = rule_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const answer_list = document.querySelector(".answer_list");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

continue_btn.onclick = () => {
  rule_box.classList.add("hideRuleBox");
  quiz_box.classList.add("showQuiz");
  showQuetions(0);
  questionCounter(1);
  startTimer(0);
};

function showQuetions(index) {
  const quetion_text = document.querySelector(".quetion_text");

  let quetion_quetion =
    "<span>" +
    questions[index].numb +
    ". " +
    questions[index].question +
    "</span>";
  let quetion_answers =
    '<div class="answer"><span>' +
    questions[index].answers[0] +
    "</span></div>" +
    '<div class="answer"><span>' +
    questions[index].answers[1] +
    "</span></div>" +
    '<div class="answer"><span>' +
    questions[index].answers[2] +
    "</span></div>" +
    '<div class="answer"><span>' +
    questions[index].answers[3] +
    "</span></div>";
  quetion_text.innerHTML = quetion_quetion;
  answer_list.innerHTML = quetion_answers;

  const answer = answer_list.querySelectorAll(".answer");

  for (i = 0; i < answer.length; i++) {
    answer[i].setAttribute("onclick", "answerselected(this)");
  }
}

let counter;
let counterLine;
let total_time = 0;

function answerselected(answer) {
  clearInterval(counter);
  clearInterval(counterLine);
  let userAnswer = answer.textContent;
  let correctAnswer = questions[question_count].answer;
  const allanswers = answer_list.children.length;

  if (userAnswer == correctAnswer) {
    userScore += 1;
    answer.classList.add("correct");
    answer.insertAdjacentHTML("beforeend", tickIconTag);
  } else {
    answer.classList.add("incorrect");
    answer.insertAdjacentHTML("beforeend", crossIconTag);

    for (i = 0; i < allanswers; i++) {
      if (answer_list.children[i].textContent == correctAnswer) {
        answer_list.children[i].setAttribute("class", "answer correct");
        answer_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
        console.log("Auto selected correct answer.");
      }
    }
  }
  for (i = 0; i < allanswers; i++) {
    answer_list.children[i].classList.add("disabled");
  }
  next_button.classList.add("show");
}

function startTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    timeCount.textContent = time;
    time++;
  }
}

const next_button = document.querySelector("footer .next_button");
const bottom_questions_counter = document.querySelector("footer .total_que");

next_button.onclick = () => {
  if (question_count < questions.length - 1) {
    question_count++;
    question_number++;
    showQuetions(question_count);
    questionCounter(question_number);
    clearInterval(counter);
    clearInterval(counterLine);
    startTimer(timeValue);
    timeText.textContent = "Time";
    next_button.classList.remove("show");
  } else {
    clearInterval(counter);
    clearInterval(counterLine);
    showResult();
  }
};

let timeValue = 0;
let question_count = 0;
let question_number = 1;
let userScore = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

restart_quiz.onclick = () => {
  quiz_box.classList.add("showQuiz");
  result_box.classList.remove("activeResult");
  timeValue = 0;
  question_count = 0;
  question_number = 1;
  userScore = 0;
  showQuetions(question_count);
  questionCounter(question_number);
  clearInterval(counter);
  clearInterval(counterLine);
  startTimer(timeValue);
  timeText.textContent = "Time";
  next_button.classList.remove("show");
};

quit_quiz.onclick = () => {
  window.location.reload();
};

let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function showResult() {
  quiz_box.classList.remove("showQuiz");
  result_box.classList.add("activeResult");
  const scoreText = result_box.querySelector(".score_text");
  if (userScore > 2) {
    let score =
      "<span>and nice, You got <p>" +
      userScore +
      "</p> out of <p>" +
      questions.length +
      "</p></span>";
    scoreText.innerHTML = score;
  } else {
    let score =
      '<span>and sorry, You got only <p style="color: red;">' +
      userScore +
      "</p> out of <p>" +
      questions.length +
      "</p></span>";
    scoreText.innerHTML = score;
  }
}

function questionCounter(index) {
  let totalQuestionCount =
    "<span><p>" +
    index +
    "</p> of <p>" +
    questions.length +
    "</p> Questions</span>";
  bottom_questions_counter.innerHTML = totalQuestionCount;
}
