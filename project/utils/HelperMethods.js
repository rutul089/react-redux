import { NetInfo, Platform } from "react-native";

//All helper methods so you can use them in any other file and do not need to right code for multiple time
export const LogType = {
  ERROR: "ERROR",
  DEBUG: "DEBUG",
  INFO: "INFO"
};

/*
    *To create custom log so in future if u need to stop showing log u dont need to go 
    * and remove the log from all file simply comment out bellow and it wil stop showing log 
  */
export function customLog(str, logType) {
  switch (logType) {
    case LogType.ERROR:
      console.error(str);
      break;
    case LogType.DEBUG:
      console.debug(str);
      break;
    case LogType.INFO:
      console.info(str);
      break;

    default:
      console.log("====================================");
      console.log(str);
      console.log("===================================");
      break;
  }
}

//To check for valid string
export function checkForValidString(str) {
  var re = /^([a-z0-9]{5,})$/;
  return re.test(str);
}

//To check for valid email
export function checkForValidEmail(email) {
  var re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return re.test(email);
}

//To check for number validation
export function checkForNumber(number) {
  var num = /^[0-9]*$/;
  return num.test(number);
}

//To find that string is blank or not
export function empty(string) {
  var str = /.*\S.*/;
  return str.test(string);
}

//to find version and platform
export function checkOS() {
  if (Platform.OS === "android") {
    return true;
  } else {
    return false;
  }
}

export function checkVersion() {
  var str = Platform.Version;
  return str;
}

//To check networkConnection
export function checkNetwork() {
  NetInfo.getConnectionInfo().then(connectionInfo => {});

  function handleFirstConnectivityChange(connectionInfo) {
    if (connectionInfo.type === "none ") {
      return false;
    } else {
      return true;
      console.log(
        "First change, type: " +
          connectionInfo.type +
          ", effectiveType: " +
          connectionInfo.effectiveType
      );
    }

    NetInfo.removeEventListener(
      "connectionChange",
      handleFirstConnectivityChange
    );
  }
  NetInfo.addEventListener("connectionChange", handleFirstConnectivityChange);
}
