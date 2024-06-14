// const redis = require("redis");
// const PubNub = require("pubnub")

// // const credentials = {
// //     publishKey: "pub-c-57d6aa19-7b92-4c53-9f24-50e6d062cbba",
// //     subscribeKey: "sub-c-fd6b94b0-66da-4e1a-92b6-ba3be8b0da90",
// //     secretKey: "sec-c-ZjkyMDUxMjYtNjhhYy00MWYzLTkwNWItMzVmYTc0NGMwZGI4"
// // }

// const CHANNELS = {
//     TEST: "TEST",
//     BLOCKCHAIN: "BLOCKCHAIN"
// }

// class PubSub {
//     constructor() {
//         this.pubnub = new PubNub(credentials);
//         // this.pubnub.subscribe({ channels: Object.values(CHANNELS) });
//         this.pubnub.subscribe({ channels: Object.values(CHANNELS) });

//         this.pubnub.addListener({
//             message: messageObject => {
//                 const { channel, message } = messageObject;
//             }
//         })
//     }

//     listener() {
//         return {
//             message: messageObject => {
//                 const { channel, message } = messageObject;
//                 console.log(`Message received. Channel: ${channel}. Message: ${message}.`)
//             }
//         }
//     }

//     publish({ channel, message }) {
//         this.pubnub.publish({ channel, message });
//     }
// }

// module.exports = PubSub;
