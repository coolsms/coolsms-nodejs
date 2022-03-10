/**
 * 잔액 조회 예제
 */
const coolsms = require("coolsms-node-sdk").default;
const messageService = new coolsms("ENTER_YOUR_API_KEY", "ENTER_YOUR_API_SECRET");

messageService.getBalance().then(res => console.log(res));
