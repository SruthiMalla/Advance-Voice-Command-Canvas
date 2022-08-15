x = 0;
y = 0;

var to_number = 0;

draw_apple = "";

var apple = "";

function preload()
{
    apple = loadImage("apple.png");
}

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "System is listening; Please Speak: ";
    recognition.start();
}

recognition.onresult = function(event)
{
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "The speech has been recognized as: " + content;

    to_number = Number(content);

    if(Number.isInteger(to_number))
    {
        document.getElementById("status").innerHTML = "Started drawing apple.";
        draw_apple = "set";
    }
}

function setup()
{
    canvas = createCanvas(900, 600);
}

function draw()
{
    if(draw_apple == "set")
    {
        for(i = 1; i <= to_number; i++)
        {
            x = Math.floor(Math.random()*900);
            y = Math.floor(Math.random()*600);
            image(apple, x, y, 50, 50);
        }

        document.getElementById("status").innerHTML = "Apple is drawn.";
        draw_apple = "";
    }
}