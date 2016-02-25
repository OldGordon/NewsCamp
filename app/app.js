$(document).ready(function(){


var hot = "http://www.freecodecamp.com/news/hot";
    $.get(hot, function(campnew){

    	campnew.forEach(function(campernews){
	    	var headline = campernews.headline,
	    	link = campernews.link,
	    	author = campernews.author.username,
	    	pic = campernews.author.picture,
	    	rank = campernews.rank,
	    	date = new Date(campernews.timePosted).toUTCString().slice(0, 17);
            console.log(headline,link,author,rank,date);
            //Ahora hay que dibujar todos las news----
            spitNews(headline,link,author,pic,rank,date);

        });// fin foreach-----------------------

    });//fin $.get-------------------------------
});

function spitNews(headline,link,author,pic,rank,date){
    	pic = "<img class='avatar' src=" + pic + "' />";
    	headline = "<a href='" + link + "' >"  + headline + "</a>" ;
    	author = "<a href= 'http://www.freecodecamp.com/" + author + "'><p>" + author + "</p></a>";
    	rank = "<p>" + rank + " Upvotes</p>";
    	date = "<p>" + date + "</p>"
    	var box = document.createElement("div");
    	box.className = "box";
    	var post = $('body').append(box);
    	$(pic).appendTo(box);
    	$(headline).appendTo(box);
    	$(author).appendTo(box);
    	$(rank).appendTo(box);
    	$(date).appendTo(box);

};
