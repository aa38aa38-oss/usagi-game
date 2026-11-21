/* 選區登錄表：依中選會 115年8月20日 中選務字第1153150253號公告 */
var REGIONS = {
  tpe: { name: "臺北市", mayor: { id: "tpe-mayor", title: "臺北市長（第9屆）" },
    council: [
      { id: "tpe-c01", no: 1, title: "第1選舉區", areas: ["北投區","士林區"], seats: 12, women: 3 },
      { id: "tpe-c02", no: 2, title: "第2選舉區", areas: ["內湖區","南港區"], seats: 9, women: 2 },
      { id: "tpe-c03", no: 3, title: "第3選舉區", areas: ["松山區","信義區"], seats: 9, women: 2 },
      { id: "tpe-c04", no: 4, title: "第4選舉區", areas: ["中山區","大同區"], seats: 8, women: 2 },
      { id: "tpe-c05", no: 5, title: "第5選舉區", areas: ["中正區","萬華區"], seats: 8, women: 2 },
      { id: "tpe-c06", no: 6, title: "第6選舉區", areas: ["大安區","文山區"], seats: 13, women: 3 },
      { id: "tpe-c07", no: 7, title: "第7選舉區（平地原住民）", areas: [], indigenous: "plain", seats: 1, women: 0 },
      { id: "tpe-c08", no: 8, title: "第8選舉區（山地原住民）", areas: [], indigenous: "mountain", seats: 1, women: 0 }
    ] },
  ntpc: { name: "新北市", mayor: { id: "ntpc-mayor", title: "新北市長（第5屆）" },
    council: [
      { id: "ntpc-c01", no: 1, title: "第1選舉區", areas: ["石門區","三芝區","淡水區","八里區"], seats: 4, women: 1 },
      { id: "ntpc-c02", no: 2, title: "第2選舉區", areas: ["林口區","五股區","泰山區"], seats: 5, women: 1 },
      { id: "ntpc-c03", no: 3, title: "第3選舉區", areas: ["新莊區"], seats: 7, women: 1 },
      { id: "ntpc-c04", no: 4, title: "第4選舉區", areas: ["蘆洲區","三重區"], seats: 9, women: 2 },
      { id: "ntpc-c05", no: 5, title: "第5選舉區", areas: ["板橋區"], seats: 9, women: 2 },
      { id: "ntpc-c06", no: 6, title: "第6選舉區", areas: ["中和區"], seats: 6, women: 1 },
      { id: "ntpc-c07", no: 7, title: "第7選舉區", areas: ["永和區"], seats: 3, women: 0 },
      { id: "ntpc-c08", no: 8, title: "第8選舉區", areas: ["樹林區","鶯歌區","土城區","三峽區"], seats: 9, women: 2 },
      { id: "ntpc-c09", no: 9, title: "第9選舉區", areas: ["新店區","深坑區","石碇區","坪林區","烏來區"], seats: 5, women: 1 },
      { id: "ntpc-c10", no: 10, title: "第10選舉區", areas: ["平溪區","瑞芳區","雙溪區","貢寮區"], seats: 1, women: 0 },
      { id: "ntpc-c11", no: 11, title: "第11選舉區", areas: ["金山區","萬里區","汐止區"], seats: 4, women: 1 },
      { id: "ntpc-c12", no: 12, title: "第12選舉區（平地原住民）", areas: [], indigenous: "plain", seats: 4, women: 1 },
      { id: "ntpc-c13", no: 13, title: "第13選舉區（山地原住民）", areas: [], indigenous: "mountain", seats: 2, women: 0 }
    ] }
};
var READY = {}; // 由各資料檔 REGISTER 時填入
