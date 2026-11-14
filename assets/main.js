// 只負責首頁卡片搜尋與分類；內容與排版規則請參考根目錄 AGENTS.md。
(function () {
  const search = document.getElementById('topic-search');
  const buttons = Array.from(document.querySelectorAll('[data-filter]'));
  const cards = Array.from(document.querySelectorAll('[data-topic]'));
  const count = document.getElementById('result-count');
  const empty = document.getElementById('empty-state');
  if (!search || !buttons.length) return;
  let category = 'all';
  function update() {
    const term = search.value.trim().toLocaleLowerCase();
    let visible = 0;
    cards.forEach(card => {
      const matchesText = card.textContent.toLocaleLowerCase().includes(term);
      const matchesCategory = category === 'all' || card.dataset.category === category;
      const show = matchesText && matchesCategory;
      card.hidden = !show;
      if (show) visible++;
    });
    count.textContent = `顯示 ${visible} / ${cards.length} 篇筆記`;
    empty.hidden = visible > 0;
  }
  buttons.forEach(button => button.addEventListener('click', () => {
    category = button.dataset.filter;
    buttons.forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    update();
  }));
  search.addEventListener('input', update);
  update();
})();
