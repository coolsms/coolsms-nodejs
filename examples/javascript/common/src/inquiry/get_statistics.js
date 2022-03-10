/**
 * 통계 조회 예제
 */
const coolsms = require("coolsms-node-sdk").default;
const messageService = new coolsms("ENTER_YOUR_API_KEY", "ENTER_YOUR_API_SECRET");

messageService.getStatistics({
  // 날짜로 검색하는 경우
  /*duration: {
    startDate: '2022-03-01 00:00:00', // Date 객체로도 요청 가능
    endDate: '2022-03-31 23:59:59' // Date 객체로도 요청 가능
  }*/
}).then(res => console.log(res));
