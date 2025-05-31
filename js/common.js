const INDEX_PAGE_URL = new URL("index.html", location.href);
const GAME_PAGE_URL = new URL("game.html", location.href);
const QUESTION_PARAM = "q";
const MODE_PARAM = "m";
const WAREKI_MODE = "wareki";

const currentYear = new Date().getFullYear();

// ダイアログの開閉ボタンの設定
const setDialogBtn = (dialogId, openBtnId, closeBtnId) => {
	const dialog = document.getElementById(dialogId);
	const openBtn = document.getElementById(openBtnId);
	const closeBtn = document.getElementById(closeBtnId);
	openBtn.addEventListener('click', () => dialog.showModal());
	closeBtn.addEventListener('click', () => dialog.close());
}