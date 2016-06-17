"use strict";

export default {
  getJson(url) {
    return new Promise((resolve, reject) => {
      var request = new XMLHttpRequest();
      request.open('GET', url, true);

      request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
          // Success!
          var data = JSON.parse(request.responseText);
          resolve(data);
        } else {
          // We reached our target server, but it returned an error
          reject(request.responseText);
        }
      };

      request.onerror = function() {
        // There was a connection error of some sort
        reject("Error");
      };

      request.send();
    })
  },
  post(url, data) {
    return new Promise((resolve, reject) => {
      var request = new XMLHttpRequest();
      request.open('POST', url, true);

      request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
          // Success!
          var data = JSON.parse(request.responseText);
          resolve(data);
        } else {
          // We reached our target server, but it returned an error
          reject(request.responseText);
        }
      };

      request.onerror = function() {
        // There was a connection error of some sort
        reject("Error");
      };

      const formData = new FormData();
      for (let key in data) {
        formData.append(key, data[key]);
      }

      request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      request.send(formData);
    })
  }
}
