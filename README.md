# AI Knowledge Atlas｜AI 概念知識圖鑑

一個以繁體中文編寫的 AI 學習筆記網站，包含原理介紹、計算範例、常見誤解和理解測驗。

## 專案目標

這份專案展示 **AGENTS.md 作為可重複使用的 AI 開發規範**：讓不同 AI 助理在讀完規範後，都能以一致結構持續新增文章，而不是每次從零設計網頁。

## 使用技術

- 純 HTML / CSS / JavaScript
- 不使用後端、不需要 API Key、不依賴建置工具
- 適用 GitHub Pages 靜態網頁託管

## 現有文章

- [Transformer：Self-Attention](pages/transformer.html)
- [RNN 與 LSTM](pages/rnn-lstm.html)
- [AI Agent：Tool Use](pages/ai-agent.html)

## 在本機預覽

直接打開 `index.html` 即可瀏覽主要功能。建議也可以在專案目錄執行：

```bash
python -m http.server 8000
```

在瀏覽器開啟 `http://localhost:8000/`。

## 部署到 GitHub Pages

1. 登入 GitHub，新建 **Public** repository，建議命名 `ai-knowledge-atlas`。
2. 將此專案所有檔案與資料夾上傳到 repository 的根目錄，保留 `AGENTS.md`。
3. 打開 repository 的 **Settings → Pages**。
4. 在 **Build and deployment → Source** 選擇 **Deploy from a branch**。
5. Branch 選 `main`，Folder 選 `/(root)`，按 **Save**。
6. 待部署完成，預設網址通常為 `https://<你的GitHub帳號>.github.io/ai-knowledge-atlas/`。
7. 實際開啟網站，逐一測試搜尋、分類、三篇文章與返回首頁。

詳細設定可參考官方說明：https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 未來新增一篇文章

請 AI 先讀取 `AGENTS.md`，再依照「新增文章時的操作程序」完成。例如：

> 請依照 AGENTS.md，新增 `pages/cnn.html`，介紹 CNN 的卷積、池化、數值範例與理解測驗，並更新首頁文章卡片、顯示篇數以及 README。

此流程將內容格式、檔案命名、頁面導覽及最後驗收都寫成可重複使用的規則。

## 驗收建議

- 首頁三張卡片都能開啟正確文章。
- 搜尋 `Attention` 或 `Agent` 時，卡片能正確篩選。
- 切換「模型原理」及「實作方法」分類正常。
- 每篇文章的五個章節及展開答案功能正常。
- 手機也能閱讀、目錄不會遮蔽文章。

## 授權與聲明

本專案為課程練習用途。筆記內容為原創簡述，非官方課本或課堂講義，技術觀念請搭配正式教材理解。
