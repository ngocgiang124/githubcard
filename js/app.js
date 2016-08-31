$(document).ready(function () {
    $("input").keypress(function (event) {
        if(event.which==13){
            var username = $("input").val();
            $.get('https://api.github.com/users/'+username, function(data){
                var anh=data.avatar_url;
                var name=data.name;
                if(name==null){name=username;}
                var flow=data.followers;
                $('.container').append('<div class="card"><img class="avatar" src="'+anh+'"><p class="name">'+name+'<span class="flow"> ' +flow+'</spam></p></div>');
            });
        }

    });
});