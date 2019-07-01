/*Israel Ben Menachem
  305394454
  05/09/18
  Pushkar Square
*/


var pushkarSquare = function()
{
  var imgArray = [
    { name: 0, image: '2C', value: 2 },
    { name: 1, image: '2D', value: 2 },
    { name: 2, image: '2H', value: 2 },
    { name: 3, image: '2S', value: 2 },
    { name: 4, image: '3C', value: 3 },
    { name: 5, image: '3D', value: 3 },
    { name: 6, image: '3H', value: 3 },
    { name: 7, image: '3S', value: 3 },
    { name: 8, image: '4C', value: 4 },
    { name: 9, image: '4D', value: 4 },
    { name: 10, image: '4H', value: 4 },
    { name: 11, image: '4S', value: 4 },
    { name: 12, image: '5C', value: 5 },
    { name: 13, image: '5D', value: 5 },
    { name: 14, image: '5H', value: 5 },
    { name: 15, image: '5S', value: 5 },
    { name: 16, image: '6C', value: 6 },
    { name: 17, image: '6D', value: 6 },
    { name: 18, image: '6H', value: 6 },
    { name: 19, image: '6S', value: 6 },
    { name: 20, image: '7C', value: 7 },
    { name: 21, image: '7D', value: 7 },
    { name: 22, image: '7H', value: 7 },
    { name: 23, image: '7S', value: 7 },
    { name: 24, image: '8C', value: 8 },
    { name: 25, image: '8D', value: 8 },
    { name: 26, image: '8H', value: 8 },
    { name: 27, image: '8S', value: 8 },
    { name: 28, image: '9C', value: 9 },
    { name: 29, image: '9D', value: 9 },
    { name: 30, image: '9H', value: 9 },
    { name: 31, image: '9S', value: 9 },
    { name: 32, image: '10C', value: 10 },
    { name: 33, image: '10D', value: 10 },
    { name: 34, image: '10H', value: 10 },
    { name: 35, image: '10S', value: 10 },
    { name: 36, image: 'JC', value: 11 },
    { name: 37, image: 'JD', value: 11 },
    { name: 38, image: 'JH', value: 11 },
    { name: 39, image: 'JS', value: 11 },
    { name: 40, image: 'QC', value: 12 },
    { name: 41, image: 'QD', value: 12 },
    { name: 42, image: 'QH', value: 12 },
    { name: 43, image: 'QS', value: 12 },
    { name: 44, image: 'KC', value: 13 },
    { name: 45, image: 'KD', value: 13 },
    { name: 46, image: 'KH', value: 13 },
    { name: 47, image: 'KS', value: 13 },
    { name: 48, image: 'AC', value: 1 },
    { name: 49, image: 'AD', value: 1 },
    { name: 50, image: 'AH', value: 1 },
    { name: 51, image: 'AS', value: 1 },
    { name: 52, image: 'JR1', value: 14 },
    { name: 53, image: 'JR2', value: 14 }
  ];
  var random = imgArray[Math.floor(Math.random() * imgArray.length)];
  var takeOfValue = 0;
  var squaresArray = [
    { bool : 0, name : 'ba1' , card : '', value: -2, mode: 0 },
    { bool : 0, name : 'ba2' , card : '', value: -2, mode: 0  },
    { bool : 0, name : 'ba3' , card : '', value: -2, mode: 0  },
    { bool : 0, name : 'ba4' , card : '', value: -2, mode: 0 },
    { bool : 0, name : 'bb1' , card : '', value: -2, mode: 0  },
    { bool : 0, name : 'bb2' , card : '', value: -2, mode: 0  },
    { bool : 0, name : 'bb3' , card : '', value: -2, mode: 0  },
    { bool : 0, name : 'bb4' , card : '', value: -2, mode: 0  },
    { bool : 0, name : 'bc1' , card : '', value: -2, mode: 0  },
    { bool : 0, name : 'bc2' , card : '', value: -2, mode: 0  },
    { bool : 0, name : 'bc3' , card : '', value: -2, mode: 0  },
    { bool : 0, name : 'bc4' , card : '', value: -2, mode: 0  },
    { bool : 0, name : 'bd1' , card : '', value: -2, mode: 0  },
    { bool : 0, name : 'bd2' , card : '', value: -2, mode: 0  },
    { bool : 0, name : 'bd3' , card : '', value: -2, mode: 0  },
    { bool : 0, name : 'bd4' , card : '', value: -2, mode: 0  }
  ];


  var initModule = function()
  {
    var urlString = 'url(js/back.JPG';
    document.getElementById("pocket").style.backgroundImage = urlString;
    document.getElementById("pocket").style.backgroundSize = "275px 325px";
    setTimeout(nextCard, 1500, random.image);


    $("#bng").click(clickListener);

      $("#ba1").click(clickListener);
      $("#ba2").click(clickListener);
      $("#ba3").click(clickListener);
      $("#ba4").click(clickListener);
      $("#bb1").click(clickListener);
      $("#bb2").click(clickListener);
      $("#bb3").click(clickListener);
      $("#bb4").click(clickListener);
      $("#bc1").click(clickListener);
      $("#bc2").click(clickListener);
      $("#bc3").click(clickListener);
      $("#bc4").click(clickListener);
      $("#bd1").click(clickListener);
      $("#bd2").click(clickListener);
      $("#bd3").click(clickListener);
      $("#bd4").click(clickListener);

  };

  var clickListener = function(e)
  {
      if(e.target.id == "bng")
      {
        location.reload();
      }
      else
      {
        var booli = 0;
        for(var x = 0; x < squaresArray.length; x++)
        {
          if(squaresArray[x].mode == 1)
            booli = 1;
        }
        for(x = 0; x < squaresArray.length; x++)
        {
          if(booli == 1 && squaresArray[x].name == e.target.id && squaresArray[x].mode == 0)
            return;
          if(squaresArray[x].name == e.target.id && squaresArray[x].mode == 1)
          {
            if(takeOfValue == 0 && squaresArray[x].value != 10)
              takeOfValue = squaresArray[x].value;
            else
              takeOfValue = 0;
            document.getElementById(squaresArray[x].name).style.backgroundImage = '';
            document.getElementById(squaresArray[x].name).style.border = "";
            squaresArray[x].bool = 0;
            squaresArray[x].card = '';
            squaresArray[x].value = -2;
            squaresArray[x].mode = 0;
            document.getElementById(squaresArray[x].name).disabled = false;
            redCards();
            random = imgArray[Math.floor(Math.random() * imgArray.length)];//new random
            nextCard(random.image);
            ifLose();
            return;
          }
        }

        if(random.value == 11 && e.target.id != 'bb1' && e.target.id != 'bb4' && e.target.id != 'bc1' && e.target.id != 'bc4')
            return;
        if(random.value == 12 && e.target.id != 'ba2' && e.target.id != 'ba3' && e.target.id != 'bd2' && e.target.id != 'bd3')
            return;
        if(random.value == 13 && e.target.id != 'ba1' && e.target.id != 'ba4' && e.target.id != 'bd1' && e.target.id != 'bd4')
            return;
        urlString = 'url(js/' + random.image + '.JPG';
        document.getElementById(e.target.id).style.backgroundImage = urlString;
        document.getElementById(e.target.id).style.backgroundSize = "120px 150px";

        for(var i = 0; i < squaresArray.length; i++)
        {
          if(squaresArray[i].name == e.target.id)
          {
              squaresArray[i].bool = 1;
              squaresArray[i].card = random.image;
              squaresArray[i].value = random.value;
              if(random.image != 'JR1' &&  random.image != 'JR2')
                document.getElementById(e.target.id).disabled = true;
          }
        }

        for (var j = 0; j < imgArray.length; j++)
        {
          if(random.name === imgArray[j].name)
            imgArray.splice(j ,1);//cut the current random
        }

        urlString = 'url(js/back.JPG';
        document.getElementById("pocket").style.backgroundImage = urlString;
        document.getElementById("pocket").style.backgroundSize = "275px 325px";
        if(imgArray.length > 0)
          random = imgArray[Math.floor(Math.random() * imgArray.length)];//new random
        else
          random.value = -2;;

        setTimeout(nextCard, 800, random.image);

        fullSquare();
        ifLose();
      }
  };


  function checkTheSquare()
  {
    var k1 = false, k2 = false, k3 = false, k4 = false;
    var q1 = false, q2 = false, q3 = false, q4 = false;
    var j1 = false, j2 = false, j3 = false, j4 = false;

    if(squaresArray[0].card === 'KC' || squaresArray[0].card === 'KD' || squaresArray[0].card === 'KH' || squaresArray[0].card === 'KS')
      k1 = true;
    if(squaresArray[3].card === 'KC' || squaresArray[3].card === 'KD' || squaresArray[3].card === 'KH' || squaresArray[3].card === 'KS')
      k2 = true;
    if(squaresArray[12].card === 'KC' || squaresArray[12].card === 'KD' || squaresArray[12].card === 'KH' || squaresArray[12].card === 'KS')
      k3 = true;
    if(squaresArray[15].card === 'KC' || squaresArray[15].card === 'KD' || squaresArray[15].card === 'KH' || squaresArray[15].card === 'KS')
      k4 = true;

    if(squaresArray[1].card === 'QC' || squaresArray[1].card === 'QD' || squaresArray[1].card === 'QH' || squaresArray[1].card === 'QS')
      q1 = true;
    if(squaresArray[2].card === 'QC' || squaresArray[2].card === 'QD' || squaresArray[2].card === 'QH' || squaresArray[2].card === 'QS')
      q2 = true;
    if(squaresArray[13].card === 'QC' || squaresArray[13].card === 'QD' || squaresArray[13].card === 'QH' || squaresArray[13].card === 'QS')
      q3 = true;
    if(squaresArray[14].card === 'QC' || squaresArray[14].card === 'QD' || squaresArray[14].card === 'QH' || squaresArray[14].card === 'QS')
      q4 = true;

    if(squaresArray[4].card === 'JC' || squaresArray[4].card === 'JD' || squaresArray[4].card === 'JH' || squaresArray[4].card === 'JS')
      j1 = true;
    if(squaresArray[7].card === 'JC' || squaresArray[7].card === 'JD' || squaresArray[7].card === 'JH' || squaresArray[7].card === 'JS')
      j2 = true;
    if(squaresArray[8].card === 'JC' || squaresArray[8].card === 'JD' || squaresArray[8].card === 'JH' || squaresArray[8].card === 'JS')
      j3 = true;
    if(squaresArray[11].card === 'JC' || squaresArray[11].card === 'JD' || squaresArray[11].card === 'JH' || squaresArray[11].card === 'JS')
      j4 = true;

    if(k1 && k2 && k3 && k4 && q1 && q2 && q3 && q4 && j1 && j2 && j3 && j4)//success
      return true;
    return false;
  }


function ifLose()
{
  if(!checkIfFull())//full square
  {
    if(!checkIfLs() && thereIsJoker() == 0)
    {
      setTimeout(youLose, 3000);
      return;
    }
    if(!checkIfLs() && thereIsJoker() == 1)
    {
      if(random.value == 11 && squaresArray[4].value != 14 && squaresArray[7].value != 14 && squaresArray[8].value != 14 && squaresArray[11].value != 14)
      {
        setTimeout(youLose, 3000);
        return;
      }
      if(random.value == 12 && squaresArray[1].value != 14 && squaresArray[2].value != 14 && squaresArray[13].value != 14 && squaresArray[14].value != 14)
      {
        setTimeout(youLose, 3000);
        return;
      }
      if(random.value == 13 && squaresArray[0].value != 14 && squaresArray[3].value != 14 && squaresArray[12].value != 14 && squaresArray[15].value != 14)
      {
        setTimeout(youLose, 3000);
        return;
      }
    }
  }
  else
  {
    for(var i = 0; i < squaresArray.length; i++)
    {
      if(squaresArray[i].mode == 1)
        return;
    }
    if(random.value == 11 && squaresArray[4].bool == 1 && squaresArray[7].bool == 1 && squaresArray[8].bool == 1 && squaresArray[11].bool == 1)
    {
      if(squaresArray[4].value !=14 && squaresArray[7].value != 14 && squaresArray[8].value != 14 && squaresArray[11].value != 14 )
      {
        setTimeout(youLose, 3000);
        return;
      }
    }
    if(random.value == 12 && squaresArray[1].bool == 1 && squaresArray[2].bool == 1 && squaresArray[13].bool == 1 && squaresArray[14].bool == 1)
    {
      if(squaresArray[1].value !=14 && squaresArray[2].value != 14 && squaresArray[13].value != 14 && squaresArray[14].value != 14 )
      {
        setTimeout(youLose, 3000);
        return;
      }
    }
    if(random.value == 13 && squaresArray[0].bool == 1 && squaresArray[3].bool == 1 && squaresArray[12].bool == 1 && squaresArray[15].bool == 1)
    {
      if(squaresArray[0].value !=14 && squaresArray[3].value != 14 && squaresArray[12].value != 14 && squaresArray[15].value != 14 )
      {
        setTimeout(youLose, 3000);
        return;
      }
    }
  }
}


  function checkIfLs()
  {
    var check = false;
    for(var i = 0; i < squaresArray.length; i++)
    {
      if(squaresArray[i].value == 10)
        check = true;
      else if(squaresArray[i].value == 5)
        for(var j = i+1; j < squaresArray.length; j++)
        {
          if(squaresArray[j].value == 5)
            check = true;
        }
      else if(squaresArray[i].value > 0 && squaresArray[i].value < 10)
        for(j = 0; j < squaresArray.length; j++)
        {
          if(squaresArray[j].value + squaresArray[i].value == 10)
            check = true;
        }
    }
    return check;
  }



  function fullSquare()//check if the square is full. if it is, it calls to redCards()
  {
    if(!checkIfFull())//full square
    {
      redCards();
    }
  }

  function checkIfFull()//check if the square is full
  {
    var empthy = false;
    for(var k = 0; k < squaresArray.length; k++)
    {
      if(squaresArray[k].bool == 0)
        empthy = true;
    }
    return empthy;
  }

  function redCards()//choose what cards will be available to take of
  {
    if(takeOfValue > 0)
    {
      for(var v = 0; v < squaresArray.length; v++)
      {
        if(squaresArray[v].value + takeOfValue == 10)
        {
          document.getElementById(squaresArray[v].name).style.border = "solid blue";
          squaresArray[v].mode = 1;
          document.getElementById(squaresArray[v].name).disabled = false;
        }
        else if(squaresArray[v].mode == 1)
        {
          document.getElementById(squaresArray[v].name).style.border = "";
          document.getElementById(squaresArray[v].name).disabled = true;``
        }
      }
      return;
    }
    for(var i = 0; i < squaresArray.length; i++)
      if(squaresArray[i].mode == 1)
      {
        document.getElementById(squaresArray[i].name).style.border = "";
        document.getElementById(squaresArray[i].name).disabled = true;
        squaresArray[i].mode = 0;
      }
    for(i = 0; i < squaresArray.length; i++)
    {
      if(squaresArray[i].value == 10)
      {
        document.getElementById(squaresArray[i].name).style.border = "solid blue";
        squaresArray[i].mode = 1;
        document.getElementById(squaresArray[i].name).disabled = false;
      }
      else if(squaresArray[i].value == 5)
      {
        for(var z = i+1; z < squaresArray.length; z++)
        {
          if(squaresArray[z].value == 5)
          {
            document.getElementById(squaresArray[i].name).style.border = "solid blue";
            squaresArray[i].mode = 1;
            document.getElementById(squaresArray[i].name).disabled = false;
            document.getElementById(squaresArray[z].name).style.border = "solid blue";
            squaresArray[z].mode = 1;
            document.getElementById(squaresArray[z].name).disabled = false;
          }
        }
      }
      else if(squaresArray[i].value > 0 && squaresArray[i].value < 10)
      {
        for(var j = 0; j < squaresArray.length; j++)
        {
          if(squaresArray[i].value + squaresArray[j].value == 10)
          {
            document.getElementById(squaresArray[i].name).style.border = "solid blue";
            squaresArray[i].mode = 1;
            document.getElementById(squaresArray[i].name).disabled = false;
            document.getElementById(squaresArray[j].name).style.border = "solid blue";
            squaresArray[j].mode = 1;
            document.getElementById(squaresArray[j].name).disabled = false;
          }
        }
      }
    }
  }
  function thereIsJoker()
  {
    var check = 0;
    for(var j = 0; j < squaresArray.length; j++)
    {
      if(squaresArray[j].value == 14)
        check = 1;
    }
    return check;
  }

function youLose()
{
  document.getElementById("pocket").style.backgroundImage = 'url(js/lose.JPG';
  document.getElementById("pocket").style.backgroundSize = "280px 350px";
  document.body.style.backgroundColor = "#ff99bb";
}

function nextCard(e)
{
  if(checkTheSquare())//if win
  {
    for(var j = 0;  j< squaresArray.length; j++)
      document.getElementById(squaresArray[j].name).disabled = true;
    document.getElementById("pocket").style.backgroundImage = 'url(js/win.JPG';
    document.getElementById("pocket").style.backgroundSize = "275px 325px";
    document.body.style.backgroundColor = "lightgreen";
    return;
  }
  var counter = 0;
  for(var i = 0; i < squaresArray.length; i++)
  {
    if(squaresArray[i].mode == 1)
      counter++;
  }
  if(counter >= 1)
    return;
  if(!checkIfFull() && thereIsJoker() == 0)
    return;
  counter = 0;
  var urlString = 'url(js/' + e + '.JPG';
  document.getElementById("pocket").style.backgroundImage = urlString;
  document.getElementById("pocket").style.backgroundSize = "275px 325px";
}

  return {initModule : initModule};
}();

$(document).ready(function() {pushkarSquare.initModule();});
