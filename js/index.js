// ゲームモード選択
const selectQuestion = document.getElementById('questions');
const radioMode = document.querySelectorAll('input[name="mode"]');
const gameStartLink = document.getElementById('gameStartLink');
const setGameLinkParams = (paramName, paramValue) => {
	const linkHref = gameStartLink.getAttribute('href');
	const gamePageURL = linkHref ? new URL(linkHref) : GAME_PAGE_URL;
	const gamePageParams = gamePageURL.searchParams;
	gamePageParams.set(paramName, paramValue);
	gameStartLink.href = gamePageURL;
}
const setQuestion = () => {
	const selectedValue = selectQuestion.value;
	setGameLinkParams(QUESTION_PARAM, selectedValue);
}
radioMode.forEach((radio) =>
	radio.addEventListener('change', () => {
		radio.checked && setGameLinkParams(MODE_PARAM, radio.value);
	})
);
selectQuestion.addEventListener('change', setQuestion);
document.addEventListener('DOMContentLoaded', () => {
	setQuestion();
	const warekiRadioBtn = document.getElementById('wareki_radio');
	if (warekiRadioBtn) {
		warekiRadioBtn.value = WAREKI_MODE;
	}
});


// 古米の定義ボタンを押された時の動作
const defineDialog = document.getElementById('definitionDialog');
const definitionOpenBtn = document.getElementById('definitionOpenBtn');
const definitionCloseBtn = document.getElementById('definitionCloseBtn');
definitionOpenBtn.addEventListener('click', () => defineDialog.showModal());
definitionCloseBtn.addEventListener('click', () => defineDialog.close());

// 前年・前々年を入れる処理
document.querySelectorAll('.p1Year').forEach((element) => {
	element.textContent = currentYear - 1
});
document.querySelectorAll('.p2Year').forEach((element) => {
	element.textContent = currentYear - 2
});