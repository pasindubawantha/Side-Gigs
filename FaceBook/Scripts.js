var count = 1;
var countLimit = 50
var time = 250
function hehe()
{
    count = count +1;
    var field = document.querySelector('[aria-label="Confirm"]');
    if(field === null)
    {
        console.log("Done");
    }else if(count === countLimit)
    {
        console.log("count reached");
    }
    else
    {
        field.click();
        setTimeout(() => {  hehe(); }, time);
        console.log("confirmed")
    };
};

setTimeout(() => {  hehe(); }, time);
