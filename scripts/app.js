var app = angular.module("angularApp", []);

function onLoad()
{
    //alert('Gerrie Govaerts');
    //document.getElementById('timestamp').innerHTML = Date();
}

function checkNumber()
{
    alert('button clicked');
}

var worker = function()
{
    console.log('worker function');
}

var doWork = function(f)
{
    console.log('start');
    f();
    console.log('stop');
}

doWork(worker);


