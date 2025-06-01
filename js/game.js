// 初期値の読み込み
const mode = params.get(MODE_PARAM) === WAREKI_MODE ? WAREKI_MODE : SEIREKI_MODE;
const questionIndex = Number(params.get(QUESTION_PARAM));
console.log({mode, questionIndex});

// 問題・モードの表示
const questionNumberElement = document.getElementById('questionNumber');
questionNumberElement.textContent = getQuestionIndexLabel(questionIndex);
const modeElement = document.getElementById('mode');
modeElement.textContent = modeLabels[mode];


// 問題の取得・配置
const container = document.getElementById("questionsContainer");

getQuestion(questionIndex).then((questionList) => {
	console.log({questionList});
	questionList.forEach((question, index) => {
		const questionDiv = document.createElement("div");
		questionDiv.className = "question";
		// 問題文
		const p = document.createElement("p");
		p.textContent = question;
		// 答え用div
		const answerDiv = document.createElement("div");
		answerDiv.className = "answer";
		// 年号入力
		const label1 = document.createElement("label");
		const inputList = document.createElement("input");
		inputList.setAttribute("list", "wareki");
		inputList.setAttribute("placeholder", "年号を入力");
		inputList.className = `answer${index}`;
		label1.appendChild(inputList);
		// 年入力
		const label2 = document.createElement("label");
		const inputNumber = document.createElement("input");
		inputNumber.type = "number";
		inputNumber.setAttribute("placeholder", "年を入力");
		inputNumber.className = `answer${index}`;
		label2.appendChild(inputNumber);
		label2.insertAdjacentText("beforeend", "年");
		// 判定表示用 span
		const correctionSpan = document.createElement("span");
		correctionSpan.className = `answer${index} correction`;
		// 隠し入力：問題文
		const hiddenInput = document.createElement("input");
		hiddenInput.type = "hidden";
		hiddenInput.className = `answer${index}`;
		hiddenInput.value = question;

		// 要素を組み立て
		answerDiv.appendChild(label1);
		answerDiv.appendChild(label2);
		answerDiv.appendChild(correctionSpan);
		answerDiv.appendChild(hiddenInput);
		questionDiv.appendChild(p);
		questionDiv.appendChild(answerDiv);
		container.appendChild(questionDiv);
	})
});
