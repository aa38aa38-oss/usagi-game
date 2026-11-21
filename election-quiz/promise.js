/* 政見兌現度：僅適用「過去曾當選並有公開政見」者。研究中，稍後填入。 */
const PROMISE = {
  m2: { na: "從未當選公職，無過往任期政見可追蹤。" },
  m3: { na: "過去職務均為官派（副市長、副縣長等），2026年為首次參選，沒有選舉政見可追蹤。" }
};
["c3","c5","c6","c8","c9","c11","c12","c16","c17"].forEach(id => PROMISE[id] = { na: "未曾當選本職，無過往任期政見可追蹤。" });

const P111 = "111年（2022）公報政見";
const NOTE_B = "依搜尋引擎新聞摘要判定，未取得議會質詢與提案紀錄；「無法查證」不代表沒做。蘆南蘆北、蘆洲醫院、銀新未來城等案由市府或中央主導，議員影響力有限。";
PROMISE.c4 = { rate: 30, basis: P111, done: 0, partial: 3, no: 2, unk: 2, note: NOTE_B, items: [
  { s: "部分", t: "活化閒置空間設公幼、長照：三重都更案附設長照與公幼，但查不到其角色", u: "https://taiwanpost.net/2026/life/169737" },
  { s: "部分", t: "排水改善：三重高中滯洪池2026年完工；曾就聯醫箱涵坍塌辦會勘", u: "https://news.m.pchome.com.tw/politics/cnews/20260807/index-78607316826284227001.html" },
  { s: "未實現", t: "蘆南蘆北重劃：曾質詢提高容積，但計畫2025年遭內政部退回", u: "https://udn.com/news/story/7323/9134964" },
  { s: "未實現", t: "提升蘆洲容積率、加速危老：仍為200%", u: "https://news.ltn.com.tw/news/politics/breakingnews/4839628" },
  { s: "部分", t: "淡水河疏濬：河川分署持續疏濬，查不到其角色", u: "https://water.moenv.gov.tw/Public/CHT/River/Tamsui.aspx" },
  { s: "無法查證", t: "公園遊具更新、延長青年就業獎勵", u: "" } ] };
PROMISE.c7 = { rate: 39, basis: P111, done: 2, partial: 3, no: 4, unk: 3, note: NOTE_B, items: [
  { s: "已實現", t: "監督三重分館改建：2026年7月開工，曾質詢設計落差", u: "https://news.ltn.com.tw/news/politics/breakingnews/5587503" },
  { s: "已實現", t: "共融遊具：參與三重六合公園特色遊戲場改造", u: "https://www.ctwant.com/article/504917/" },
  { s: "部分", t: "外師入校、英語情境教室：任內角色查不到", u: "https://www.chinatimes.com/realtimenews/20221110003690-263101" },
  { s: "部分", t: "生育補助加碼：2026年市府調高，查不到其角色", u: "https://wantrich.chinatimes.com/news/20251126900140-420501" },
  { s: "部分", t: "社宅與租屋補貼：曾質詢中籤率與包租代管；三重社宅未完工", u: "https://www.ctwant.com/search/%E6%9D%8E%E5%80%A9%E8%90%8D/" },
  { s: "未實現", t: "銀新未來城：招商流標未動工", u: "https://udn.com/news/story/7323/9609732" },
  { s: "未實現", t: "蘆洲南北側都更、區域醫院、蘆洲容積率：計畫遭退回、尚未興建", u: "https://udn.com/news/story/7323/9134964" },
  { s: "無法查證", t: "閒置空間托育、反霸凌、長照補助加碼", u: "" } ] };
PROMISE.c13 = { rate: 0, basis: P111, done: 0, partial: 0, no: 3, unk: 8, note: "可查證項目只有3項、另有8項無法查證，此比率參考性很低。" + NOTE_B, items: [
  { s: "未實現", t: "聯開宅歸還市府出租：市府僅表示「研議」", u: "https://money.udn.com/money/story/5621/9054897" },
  { s: "未實現", t: "公托臨時、夜間托育：未普遍開辦", u: "https://www.sw.ntpc.gov.tw/userfiles/1102400/files/新北市公共托育中心設置及管理要點修正全文版.pdf" },
  { s: "未實現", t: "65歲以上免費裝假牙：市長答詢全面擴大需約40億元，補助仍限中低收入", u: "https://udn.com/news/story/7323/9509914" },
  { s: "無法查證", t: "管線刨鋪、拆除違法線路、電線地下化、共照育兒空間、2歲收托班、藝文班、公共托老、青銀共餐", u: "" } ] };
PROMISE.c15 = { rate: 39, basis: P111, done: 0, partial: 7, no: 2, unk: 2, note: NOTE_B, items: [
  { s: "部分", t: "行人友善：長榮路、永樂街口人行道外推完成（點狀改善）", u: "https://www.ctee.com.tw/news/20261006701405-431401" },
  { s: "部分", t: "機車族權益：爭取三民路、集賢路機車直接左轉", u: "https://www.scooptw.com/cnews/516074/" },
  { s: "部分", t: "通學巷道：蘆洲國小通學廊道完成，其角色為提建議", u: "https://news.ltn.com.tw/news/NewTaipei/paper/1700581" },
  { s: "部分", t: "停車空間：督促信義公園地下停車場（流標多次）", u: "https://news.ltn.com.tw/news/life/breakingnews/4258453" },
  { s: "部分", t: "監督圖書館改建、環狀線北環段、校園心理健康：進行中或成果不明", u: "https://www.cna.com.tw/news/aloc/202607150296.aspx" },
  { s: "未實現", t: "蘆南蘆北與果菜市場遷建脫鉤：計畫仍遭退回", u: "https://news.ltn.com.tw/news/politics/breakingnews/5573724" },
  { s: "未實現", t: "公托臨時、夜間托育：未普遍開辦", u: "" },
  { s: "無法查證", t: "參與式預算、充實警力", u: "" } ] };

PROMISE.m1 = { rate: 79, basis: "2016、2020 立委公報政見（兩屆已完成任期）", done: 5, partial: 1, no: 1, unk: 20,
  note: "立委沒有行政權，「已實現」須同時有結果與本人參與證據（爭取預算、會勘等）。20項為口號或查無個人角色，不計入。2020年4項多於撰寫公報時已核定，比率偏高。另 2024 年（第11屆，任期至2028）3項未來承諾目前查無進展，若一併計入則為55%。三鶯線、萬大線功勞歸屬有藍綠爭議。",
  items: [
  { s: "已實現", t: "2016｜三鶯線動起來：2026年6月30日通車（國民黨指其搶功）", u: "https://www.cna.com.tw/news/aloc/202607010279.aspx" },
  { s: "部分", t: "2016｜萬大線樹林段動起來：第9屆任內僅到核定", u: "https://www.cna.com.tw/news/ahel/202403280304.aspx" },
  { s: "未實現", t: "2016｜樹林火車站原線地下化：本人2026年表示「不可能發生」", u: "https://www.cna.com.tw/news/aloc/202607280242.aspx" },
  { s: "已實現", t: "2020｜萬大線樹林段兩年後動工：2022年8月開工（晚約1年）", u: "https://www.cna.com.tw/news/ahel/202403280304.aspx" },
  { s: "已實現", t: "2020｜鳳鳴簡易站：2024年11月30日啟用，市府公開感謝其爭取預算", u: "https://www.cna.com.tw/news/ahel/202411300095.aspx" },
  { s: "已實現", t: "2020｜台65浮洲匝道：2023年8月通車", u: "https://news.ltn.com.tw/news/life/breakingnews/2640499" },
  { s: "已實現", t: "2020｜新莊鐵路橋至柑園大橋堤外便道：2024年7月通車", u: "https://www.cna.com.tw/news/aloc/202407180118.aspx" },
  { s: "無法查證", t: "2024期中（不計入79%）：樹林鐵道觀光大城、鶯歌藝術學院、工業聚落規劃，目前查無具體進展", u: "https://www.cna.com.tw/news/aloc/202606130172.aspx" } ] };
PROMISE.m2.na = "從未當選公職（2024年參選立委新北第4選區得1,924票落選），無過往任期政見可追蹤。";

const NOTE_A = "「部分」多為建設已完成或進行中、但報導未提及該議員出力，因此本數字反映「有公開證據的兌現」，可能低估實際努力。未實現多為超出議員權限的大型建設（蘆洲醫院、銀新未來城等）。";
PROMISE.c14 = { rate: 33, basis: P111, done: 0, partial: 4, no: 2, unk: 3, note: NOTE_A, items: [
  { s: "部分", t: "集美街玫瑰停車場改建立體停車場：2026年9月啟用，與政見吻合但報導未提及其角色", u: "https://udn.com/news/story/7323/9785880" },
  { s: "部分", t: "增設機車停車格：三重新增4,101格", u: "https://udn.com/news/story/7323/9712864" },
  { s: "部分", t: "公幼、托嬰名額增加（全市數字）", u: "https://udn.com/news/story/6885/9872996" },
  { s: "部分", t: "三重第二行政中心、聯醫新大樓：二辦年底完工，聯醫僅完成都計變更", u: "https://udn.com/news/story/7323/9610505" },
  { s: "未實現", t: "機捷A2a博愛站：曾質詢，卡在號誌系統", u: "https://udn.com/news/story/7323/9130716" },
  { s: "未實現", t: "忠孝碼頭—大稻埕跨河橋：尚未推動", u: "https://udn.com/news/story/124652/9828821" },
  { s: "無法查證", t: "創新育成中心低租金、長輩日照、國小共融遊具", u: "" } ] };
PROMISE.c1 = { rate: 25, basis: P111, done: 0, partial: 2, no: 2, unk: 3, note: NOTE_A, items: [
  { s: "部分", t: "廣設公托、幼兒園（全市增班，查不到其角色）", u: "https://udn.com/news/story/6885/9872996" },
  { s: "部分", t: "國中小雙語課程（雙語學校擴增，查不到其角色）", u: "https://udn.com/news/story/6885/8079090" },
  { s: "未實現", t: "設立銀髮社區（銀新未來城2026年流標）", u: "https://udn.com/news/story/7241/9609692" },
  { s: "未實現", t: "加速蘆洲醫院（仍在都市計畫變更）", u: "https://udn.com/news/story/7323/9796526" },
  { s: "無法查證", t: "三胎優先、社區老人關懷據點、以里為單位辦都更說明會", u: "" } ] };
PROMISE.c10 = { rate: 33, basis: P111, done: 0, partial: 6, no: 3, unk: 8, note: NOTE_A + "政見外成果：成蘆橋下匹克球場等。", items: [
  { s: "部分", t: "捷運北環段：Y21站動工，出席典禮", u: "https://udn.com/news/story/7323/9615540" },
  { s: "部分", t: "增設幼兒園；校園、公園地下停車場", u: "https://udn.com/news/story/7323/9712864" },
  { s: "部分", t: "第二行政中心（進行中）", u: "https://udn.com/news/story/7323/9518953" },
  { s: "部分", t: "五華國小新大樓：2025年協調補足經費，預計2029完工", u: "https://udn.com/news/story/6898/8650215" },
  { s: "部分", t: "長安停車場改建：預定2026年底完工", u: "https://udn.com/news/story/7323/9211879" },
  { s: "未實現", t: "蘆洲醫院（多次質詢）、銀新未來城、堤外水樂園", u: "https://udn.com/news/story/7323/9796526" },
  { s: "無法查證", t: "變電所室內化、滑板攀岩場、淹水感測器、5G公園、青創補助等8項", u: "" } ] };
PROMISE.c2 = { rate: 30, basis: P111, done: 1, partial: 4, no: 5, unk: 11, note: NOTE_A + "「校園設備」判為已實現屬從寬（其出力證據為課桌椅經費改統籌）；從嚴則為25%。", items: [
  { s: "已實現", t: "提升校園設備：批評課桌椅經費申請制後，教育局改為統籌、免自籌", u: "https://udn.com/news/story/6898/9130675" },
  { s: "部分", t: "三蘆公幼增班、社宅（爭取提高婚育宅比例）、聯醫新醫療大樓、公園停車場", u: "https://udn.com/news/story/7323/9441072" },
  { s: "未實現", t: "銀新未來城、蘆洲醫院、新北兒童醫院", u: "https://udn.com/news/story/7323/9856208" },
  { s: "未實現", t: "到宅坐月子普及（仍以弱勢優先）", u: "https://udn.com/news/story/7323/9682573" },
  { s: "未實現", t: "育兒減工時（新北未跟進北市）", u: "https://udn.com/news/story/7323/9419197" },
  { s: "無法查證", t: "9所公托、2歲專班、婦女庇護所、玩具租借網等11項", u: "" } ] };
