// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


/*function click(e) {
  //chrome.tabs.executeScript injects java code into the webpage"
  chrome.tabs.executeScript(null,
    /*what this one is doing is changing the background color of the webpage
    to whatever "e.target.id" happens to be. e.target.id is based on the location of
    the click "e", which maps to a Red, Green Blue, or Yellow portion of the popup window. 
    Ergo, when you click on the "red" area, it reads the ID of that area ("red") and changes
    the background color accordingly */
      //{code:"document.body.style.backgroundColor='" + e.target.id + "'"});
  /*this closes the tab window*/
  /*window.close();
}
*/

function rhubarber(typedChar) {
  return typedChar == "c" ? "B" : typedChar;
  /*var whichChar = counter % 7;
  if (whichChar == 0 || whichChar == 5) {
    return "r";
  } else if (whichChar == 1) {
    return "h";
  } else if (whichChar == 2) {
    return "u";
  } else if (whichChar == 3 || whichChar == 6) {
    return "b";
  } else if (whichChar == 4) {
    return "a";
  } else {
    return typedChar;
  }
  counter += 1;
}
*/


function insertTextAtCursor(text) {
    var sel, range, textNode;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0).cloneRange();
            range.deleteContents();
            textNode = document.createTextNode(text);
            range.insertNode(textNode);

            // Move caret to the end of the newly inserted text node
            range.setStart(textNode, textNode.length);
            range.setEnd(textNode, textNode.length);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    } else if (document.selection && document.selection.createRange) {
        range = document.selection.createRange();
        range.pasteHTML(text);
    }
}


$("#editable").keypress(function(evt) {
    if (evt.which) {
        var counter = 0;
        var charStr = String.fromCharCode(evt.which);
        var transformedChar = rhubarber(charStr);
        if (transformedChar != charStr) {
            insertTextAtCursor(transformedChar);
            return false;
        }
    }
});


