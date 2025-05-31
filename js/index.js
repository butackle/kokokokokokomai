/**
 * ゲームモード選択
 */
const selectQuestion = document.getElementById('questions');
const radioMode = document.querySelectorAll('input[name="mode"]');
const gameStartLink = document.getElementById('gameStartLink');
// ゲームページへのリンクのparamを設定する
const setGameLinkParams = (paramName, paramValue) => {
	const linkHref = gameStartLink.getAttribute('href');
	const gamePageURL = linkHref ? new URL(linkHref) : GAME_PAGE_URL;
	const gamePageParams = gamePageURL.searchParams;
	gamePageParams.set(paramName, paramValue);
	gameStartLink.href = gamePageURL;
}
// ゲームページへのリンクに問題番号をセットする関数
const setQuestion = () => {
	const selectedValue = selectQuestion.value;
	setGameLinkParams(QUESTION_PARAM, selectedValue);
}
// モード選択のラジオボタンが変更された時の処理
radioMode.forEach((radio) =>
	radio.addEventListener('change', () => {
		radio.checked && setGameLinkParams(MODE_PARAM, radio.value);
	})
);
// 問題を選択した際の処理
selectQuestion.addEventListener('change', setQuestion);
// ページ読み込み時の処理
window.addEventListener("pageshow", () => {
	selectQuestion.value = 1;
	setQuestion();

	const seirekiRadioBtn = document.getElementById('seireki_radio');
	seirekiRadioBtn.checked = true;
	const warekiRadioBtn = document.getElementById('wareki_radio');
	warekiRadioBtn.value = WAREKI_MODE;
});


/*
 古米の定義
*/
setDialogBtn('definitionDialog', 'definitionOpenBtn', 'definitionCloseBtn');
/*
西暦・和暦の対応について
 */
setDialogBtn('warekiSeirekiDialog', 'warekiSeirekiOpenBtn', 'warekiSeirekiCloseBtn');
const warekiSeirekiTable = document.querySelector('#warekiSeirekiDialog table tbody');
document.addEventListener('DOMContentLoaded', () => {
	WAREKI_SEIREKI.forEach(({wareki, seireki}) => {
		const row = document.createElement('tr');
		const tdSeireki = document.createElement('td');
		tdSeireki.textContent = seireki;
		const tdWareki = document.createElement('td');
		tdWareki.textContent = wareki;

		row.appendChild(tdSeireki);
		row.appendChild(tdWareki);
		warekiSeirekiTable.appendChild(row);
	})
})

/*
寄付のお願い
 */
setDialogBtn('donationDialog', 'donationOpenBtn', 'donationCloseBtn');


/*
 前年・前々年を入れる処理
*/
document.querySelectorAll('.p1Year').forEach((element) => {
	element.textContent = currentYear - 1
});
document.querySelectorAll('.p2Year').forEach((element) => {
	element.textContent = currentYear - 2
});