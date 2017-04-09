// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


function click(e) {
  // chrome.tabs.executeScript injects java code into the webpage"
  chrome.tabs.executeScript(null,
    /*what this one is doing is changing the background color of the webpage
    to whatever "e.target.id" happens to be. e.target.id is based on the location of
    the click "e", which maps to a Red, Green Blue, or Yellow portion of the popup window. 
    Ergo, when you click on the "red" area, it reads the ID of that area ("red") and changes
    the background color accordingly */
      {code:"document.body.style.backgroundColor='red'"});
  /*this closes the tab window*/
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});