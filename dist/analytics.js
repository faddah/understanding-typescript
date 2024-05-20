"use strict";
console.log('Analytics is running & will send soon...');
let logged;
const sendAnalytics = (data) => {
    console.log(data);
    logged = true;
    console.log(logged);
};
sendAnalytics('The data is here!');
//# sourceMappingURL=analytics.js.map