"use strict";
console.log('Analytics is running & will send soon...');
var logged;
var sendAnalytics = function (data) {
    console.log(data);
    logged = true;
    console.log(logged);
};
sendAnalytics('The data is here!');
//# sourceMappingURL=analytics.js.map