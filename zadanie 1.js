let arrayOfEmails = new Array();
let blackList = new Array();

arrayOfEmails = ['gay@mail.ru', 'negr@mail.ru', 'obeziana@mail.ru', 'makaka@mail.ru', 'monkedanil@mail.ru'];
blackList = ['gay@mail.ru', 'negr@mail.ru'];


console.log("Все эмайлы:\n" + arrayOfEmails.join("|") );
console.log("черный список:\n" + blackList.join("|") );
filter(arrayOfEmails, blackList);
function filter(allEmails, blackList) {
  for (let i = 0; i < allEmails.length; ++i) {
    for (let n = 0; n < blackList.length; n++) {
      if (allEmails[i] == blackList[n]) {
        allEmails.splice(i, 1);
        --i;
      }
    }
  }
  console.log("оставшиеся:\n" + allEmails.join("|") + "\n______");
  
 
}
