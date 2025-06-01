const INDEX_PAGE_URL = new URL("index.html", location.href);
const GAME_PAGE_URL = new URL("game.html", location.href);
const QUESTIONS_URL = new URL("questions/questions", location.href);
const QUESTION_PARAM = "q";
const MODE_PARAM = "m";
const WAREKI_MODE = "wareki";
const SEIREKI_MODE = "seireki";
const QUESTION_COUNT = 5;
const QUESTION_SEPARATOR = "\t";

const currentYear = new Date().getFullYear();
const params = new URLSearchParams(location.search);
const modeLabels = {
	[WAREKI_MODE]: "和暦",
	[SEIREKI_MODE]: "西暦"
}

/**
 * 問題の表示番号を取得
 */
const getQuestionIndexLabel = (questionIndex) => questionIndex + 1 || 0;

/**
 * 問題集を取得する関数
 *
 */
const getQuestions = async () => {
	const response = await fetch(QUESTIONS_URL);
	if (!response.ok) {
		alert(`問題集の取得に失敗しました: ${response.statusText}`);
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	const questions = await response.text();

	return questions.split('\n');
}

/**
 * 問題を取得する関数
 */
const getQuestion = async (questionIndex) => {
	const questions = await getQuestions();
	if (!Array.isArray(questions)) {
		alert("問題集が取得できませんでした。")
		return null;
	}

	if (!Number.isInteger(questionIndex)) {
		alert("無効な問題番号です");
		return null;
	}

	const question = questions[questionIndex];
	if (!question) {
		alert(`問題が見つかりません: 問題${getQuestionIndexLabel(questionIndex)}番`);
		return null;
	}

	///-------
	const detailQuestions = question.split(QUESTION_SEPARATOR).map((item) => {
		const count = Number(item);
		if (!Number.isInteger(count)) {
			return null;
		}
		return `${"古".repeat(count)}米`
	}).filter(Boolean).join(QUESTION_SEPARATOR);
	///-------

	const questionArray = `${detailQuestions}`.split(QUESTION_SEPARATOR);
	if (questionArray.length !== QUESTION_COUNT) {
		alert(`問題${getQuestionIndexLabel(questionIndex)}番の形式が正しくありません。`);
		return null;
	}

	return questionArray;
}

/**
 * ダイアログを開くボタンと閉じるボタンを設定する関数
 *
 * @param dialogId
 * @param openBtnId
 * @param closeBtnId
 */
const setDialogBtn = (dialogId, openBtnId, closeBtnId) => {
	const dialog = document.getElementById(dialogId);
	const openBtn = document.getElementById(openBtnId);
	const closeBtn = document.getElementById(closeBtnId);
	openBtn.addEventListener('click', () => dialog.showModal());
	closeBtn.addEventListener('click', () => dialog.close());
}