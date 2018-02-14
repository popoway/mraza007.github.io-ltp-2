consoleText(['From Ming <3  Feb/14/2018', 'Desire H','To Helena\:','H is a letter','with so many meanings —','heat from the hot tea,','hit when he’s late to meet.','Health across head to feet,','and keep hope as a guarantee.','Desire is a word','stands for strong wishing —','holding hands if wind’s blowing,','hugging me when he’s suffering.','Enjoying the sweetest apple,','and lovely cheek nowhere to see.','Desire H is a string','connecting you and me.','Even the Wi-Fi is weak or poor,','powerful girl can always be sought.','Believe one day dreaming is there,','and even hearts will be odd.','From Ming <3  Feb/14/2018'], 'text',['white']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 100)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 900)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 110)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}
