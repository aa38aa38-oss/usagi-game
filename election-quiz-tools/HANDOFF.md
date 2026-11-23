# 政見配對網站：交接說明（給新的 Claude 對話）

## 這是什麼
- 網站：https://aa38aa38-oss.github.io/usagi-game/election-quiz/
- 2026-11-28 臺北市、新北市「市長＋市議員」政見配對測驗（靜態網站，GitHub Pages 由 `main` 分支發布）。
- 程式：`election-quiz/index.html`（單一頁面，含全部 CSS/JS）。
- 資料：`election-quiz/data/<id>.js`，每個選區一個檔，內容是 `REGISTER({...JSON...});`。
  - `data/index.js`：選區登錄表（`REGIONS`）與目前涵蓋範圍（`COVERED`）。
  - 已上線：`ntpc-mayor`、`tpe-mayor`、`ntpc-c02`（林口五股泰山）、`ntpc-c03`（新莊）、`ntpc-c04`（三重蘆洲）、`ntpc-c07`（永和）、`ntpc-c08`（樹林鶯歌土城三峽）、`ntpc-c09`（新店等五區）、`tpe-c03`（松山信義）、`tpe-c06`（大安文山）。
  - 網頁只顯示 `verified` 欄位非空白的資料檔。

## 工具（本資料夾）
- `quiz_spec.md`：資料檔格式與研究方法（新增或修改資料前必讀）。
- `verify_spec.md`：查核程序。
- `validate.js`：結構檢查，`node election-quiz-tools/validate.js election-quiz/data/<id>.js`，必須輸出 OK。
- `verify_log/`：歷次查核紀錄。

## 使用者已確認的規則（不要改回）
1. 計分：選項分數 0–1，未表態 0.3；「特別重要」×2；市長適合度用契合度三次方換算成加總 100%。
2. 誠信題只計正式司法紀錄（起訴中、有罪判決）；指控、家屬案件、不起訴、無罪不計分。
3. 過往政見兌現率＝(已實現＋0.5×部分)÷(已實現＋部分＋未實現)；無法查證不計入。
4. 沒有個人選舉公報的人（沈伯洋：不分區立委；李四川：從未參選、皆官派）用 `promise.norate: true`，不顯示 %，只列查得到的項目與說明。
5. 秦慧珠以 107 年（2018）公報計算（111 年公報無具體項目）。
6. 市長「施政方向」題放在市長題最後，問法為「整體來說，你對○○市府過去四年的施政表現有什麼看法？」。
7. 不出冷門、獵奇題目；選項文字不得出現候選人姓名；說明保持中立。
8. 里長經歷不追蹤兌現度。
9. 使用者在意 token 用量：一次只處理一個選區，只查必要的部分。

## 部署方式（使用者已同意推送到 main）
```
git add -A election-quiz election-quiz-tools
git commit -m "說明"
git push origin HEAD:main
```
推送後 1–2 分鐘生效。資料檔是以 `?t=時間戳` 載入，不會有快取問題。

## 測試
Playwright 已預裝。用 `file:///<repo>/election-quiz/index.html#ntpc/三重區` 開啟測試；作答可用
`page.evaluate(()=>{for(let i=0;i<Q.length;i++)ans[i].o=0;results()})`。
注意：沙箱連不到 cdnjs（PDF 函式庫），測試 PDF 時需用本機 npm 安裝的 html2pdf.js@0.10.1 攔截替換；使用者端正常。

## 網路
需使用雲端環境「Election research (CEC access)」，才能下載中選會公報（bulletin.cec.gov.tw）。部分新聞網站（自由時報、ETtoday、TVBS）在沙箱無法連線，改用搜尋結果或其他媒體交叉確認。
