# 資料檔獨立查核程序（第 N 輪）

你是獨立查核者，不是原作者。目標：找出並修正資料檔中的錯誤。先讀 `/home/user/usagi-game/election-quiz-tools/quiz_spec.md` 了解格式規則。

## 必做
1. **自己重新下載官方公報**（檔案內 `bulletin` 網址；若失效，從中選會 bulletin.cec.gov.tw 目錄找），放到新的空資料夾 `/tmp/claude-0/-home-user-usagi-game/53d9a01e-6bd6-5033-9ffc-ffd1b841f1d8/scratchpad/verify-<id>-r<N>/`。文字用 `pdftotext -layout` / `-raw`，圖片政見用 `pdfimages -png` 後以 Read 逐張看。
2. **逐位候選人逐欄對照公報**：號次、姓名（含罕用字）、政黨（推薦之政黨欄）、性別、出生年、出生地、學歷、經歷、政見摘要。公報有、資料檔漏掉的候選人要補上；雙欄版面張冠李戴要修正。
3. **抽查來源**：每位候選人至少檢查 rec（爭議／司法）與 promise.items 中最重要的 2 筆：來源網址是否真的支持所寫內容（WebSearch/WebFetch/curl）。特別檢查：
   - 「起訴」「判決」的審級、日期、是否本人、是否確定，寫錯是嚴重錯誤。
   - `integrityTargets` 只能包含本人目前起訴中或有罪判決者；不得包含只有指控、不起訴、無罪、家屬案件者。
   - 兌現率 rate 與 done/partial/no 計算一致；項目確實出自上一屆（111年）公報。
4. **題目檢查**：每個選項的 s 分數是否真的對應該候選人公報政見（why 欄要正確）；選項文字不得出現候選人姓名；不得有冷門獵奇題；ex 說明中立、正確、無候選人姓名。
5. 直接**修改資料檔**修正錯誤，保持 JSON 結構。完成後執行
   `node /home/user/usagi-game/election-quiz-tools/validate.js <檔案>` 直到 OK。（本次只做一輪查核）
6. 把資料檔的 `verified` 欄位設為 `"r<N>:2026-11-21"`（若已有前一輪，接在後面，例如 `"r1:2026-11-21,r2:2026-11-21"`）。
7. 把查核紀錄寫到 `/home/user/usagi-game/election-quiz-tools/verify_log/<id>-r<N>.md`：列出每一筆修正（原內容→新內容、依據）、無法確認的項目。

## 回報
最後回覆：修正筆數、最嚴重的錯誤、仍無法確認的項目、validate 結果。

## 第 2 輪附加規則（2026-11-23）
- 這是第 2 輪（N=2）。`verified` 欄改為在原值後面加上 `,r2:2026-11-23`。紀錄寫到 `verify_log/<id>-r2.md`。
- **不要改回**使用者已確認的設計：沈伯洋、李四川的 `promise.norate:true`（不計算兌現率、只列項目）；秦慧珠以 107年公報計算兌現率；市長「施政方向」題目的現行問法；`promise.rate` 公式。
- 額外檢查 2026-11-21 之後的新發展（例如新起訴、判決、候選人退選），有就更新 rec 與 integrityTargets。
- 省 token：已在第 1 輪紀錄（verify_log/<id>-r1.md）確認無誤的項目可略過，聚焦於第 1 輪標示「仍無法確認」的項目、所有起訴／判決紀錄、所有「已實現」兌現項目、以及公報欄位抽查（至少每位候選人姓名、政黨、號次）。
