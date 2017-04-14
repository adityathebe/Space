$.getJSON('http://api.open-notify.org/astros.json', gotdata);

function gotdata(data)	{
	var n = data.people.length;
	var heading = "People in Outer Space right now : " + "<span id=\"bold\">" + n + "</strong>" ;
	$('#header').html(heading);

	for(var i = 0; i < n ; i++)	{
    	var person = data.people[i].name;
    	var craft = data.people[i].craft;
    	var output = "<li>" + person + " - " + craft + "</li>";
    	
        $("ol").append(output);
    }
    var source = "Source : <a href=\"http://open-notify.org/\" target=\"_blank\">Open Notify</a>";
    $('#footer').html(source);
}

 