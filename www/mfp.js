/*global cordova, module*/
// module.exports = {
//     greet: function (name, successCallback, errorCallback) {
//         cordova.exec(successCallback, errorCallback, "MFPAndroid", "greet", [name]);
//     }
// };
 (function(cordova){
    var mfp = function() {

    };

    mfp.prototype.ACTION_SEND = "android.intent.action.SEND";
    mfp.prototype.ACTION_VIEW= "android.intent.action.VIEW";
    mfp.prototype.EXTRA_TEXT = "android.intent.extra.TEXT";
    mfp.prototype.EXTRA_SUBJECT = "android.intent.extra.SUBJECT";
    mfp.prototype.EXTRA_STREAM = "android.intent.extra.STREAM";
    mfp.prototype.EXTRA_EMAIL = "android.intent.extra.EMAIL";
    mfp.prototype.ACTION_CALL = "android.intent.action.CALL";
    mfp.prototype.ACTION_SENDTO = "android.intent.action.SENDTO";

    mfp.prototype.startActivity = function(params, success, fail) {
        return cordova.exec(function(args) {
            success(args);
        }, function(args) {
            fail(args);
        }, 'mfp', 'startActivity', [params]);
    };

    mfp.prototype.hasExtra = function(params, success, fail) {
        return cordova.exec(function(args) {
            success(args);
        }, function(args) {
            fail(args);
        }, 'mfp', 'hasExtra', [params]);
    };

    mfp.prototype.getUri = function(success, fail) {
        return cordova.exec(function(args) {
            success(args);
        }, function(args) {
            fail(args);
        }, 'mfp', 'getUri', []);
    };

    mfp.prototype.getExtra = function(params, success, fail) {
        return cordova.exec(function(args) {
            success(args);
        }, function(args) {
            fail(args);
        }, 'mfp', 'getExtra', [params]);
    };


    mfp.prototype.onNewIntent = function(callback) {
        return cordova.exec(function(args) {
            callback(args);
        }, function(args) {
        }, 'mfp', 'onNewIntent', []);
    };

    mfp.prototype.sendBroadcast = function(params, success, fail) {
        return cordova.exec(function(args) {
            success(args);
        }, function(args) {
            fail(args);
        }, 'mfp', 'sendBroadcast', [params]);
    };
})(window.PhoneGap || window.Cordova || window.cordova);
