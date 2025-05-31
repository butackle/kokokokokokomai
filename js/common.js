const INDEX_PAGE_URL = new URL("index.html", location.href);
const GAME_PAGE_URL = new URL("game.html", location.href);
const QUESTIONS_URL = new URL("questions/questions", location.href);
const QUESTION_PARAM = "q";
const MODE_PARAM = "m";
const WAREKI_MODE = "wareki";
const QUESTION_COUNT = 5;

const currentYear = new Date().getFullYear();

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