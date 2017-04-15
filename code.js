reload();

function reload()   {
    $("ol").empty()
    $.getJSON('http://api.open-notify.org/astros.json', gotdata);
}

function gotdata(data)  {
    var n = data.people.length;
    var heading = "Humans in Outer Space right now : " + "<span id=\"bold\">" + n + "</strong>" ;
    $('#header').html(heading);

    for(var i = 0; i < n ; i++) {
        var person = data.people[i].name;
        var craft = data.people[i].craft;
        var output = "<li>" + person + " - " + craft + "</li>";
        
        $("ol").append(output);
    }
    var source = "Code : <a href=\"https://github.com/adityathebe/Space.git/\" target=\"_blank\">Github</a>";
    $('#footer').html(source);
}

setInterval(reload, 1000 * 60 * 10 );