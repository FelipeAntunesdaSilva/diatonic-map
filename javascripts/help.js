/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function printHelp() {
    var doc = document.getElementById("helpContainer");
    var mTop = doc.style.marginTop;
    var bWid = doc.style.borderWidth ;
    var pad = doc.style.padding;
    document.getElementById("helpHeader").style.display = 'none';
    doc.style.marginTop = '20px';
    doc.style.borderWidth = '0px';
    doc.style.padding = '0px';
    window.print();
    doc.style.padding = pad;
    doc.style.marginTop = mTop;
    doc.style.borderWidth = bWid;
    document.getElementById("helpHeader").style.display = 'inline';
};


function resizeHelp() {
    var height = document.documentElement.clientHeight;
    var h = document.getElementById( 'helpHeader');
    var c = document.getElementById( 'helpFrame');

    c.style.height = (height - h.clientHeight) -20 + "px";
};
