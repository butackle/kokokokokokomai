// 古米の定義ボタンを押された時の動作
const defineDialog = document.getElementById('definitionDialog');
const definitionOpenBtn = document.getElementById('definitionOpenBtn');
const definitionCloseBtn = document.getElementById('definitionCloseBtn');definitionOpenBtn.addEventListener('click', () => defineDialog.showModal());
definitionCloseBtn.addEventListener('click', () => defineDialog.close());

// 前年・前々年を入れる処理
document.querySelectorAll('.p1Year').forEach((element) => {
	element.textContent = currentYear - 1
});
document.querySelectorAll('.p2Year').forEach((element) => {
	element.textContent = currentYear - 2
});