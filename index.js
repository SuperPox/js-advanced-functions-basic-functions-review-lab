// Your code here


function saturdayFun (string='roller-skate')
{
    return `This Saturday, I want to ${string}!`
}

function mondayWork(string="go to the office")
{
    return `This Monday, I will ${string}.`
}

let wrapAdjective = function(cool="*") {
  return function(adj="special") {
    return `You are ${cool}${adj}${cool}!`
  }
}

const Calculator = 
{
    add: function(a,b)
    {
        return a+b;
    },
    subtract: function(a,b)
    {
        return a-b;
    },
    multiply: function(a,b)
    {
        return a*b;
    },
    divide: function(a,b)
    {
        return a/b;
    }
}

let actionApplyer = function (int, arr)
{
    let a = int
    for (let i = 0; i < arr.length; i++)
    {
        a = arr[i](a)
    }
    return a
}