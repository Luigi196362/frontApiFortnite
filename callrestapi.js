var url="http://localhost:8080/api/Fortnite";

function postImagen(){

console.log(url);

var myName= $('#name').val();
var myDescripcion=$('#descripcion').val();
var myImg=$('#img').val();

var myuser={
	name: myName,
	descripcion:myDescripcion,
	img:myImg,
};
console.log(myuser);

$.ajax({
	url:url,
	type:'post',
	dataType: 'json',
	contentType: 'application/json',
	success:function (data){
		console.log(data),
			$('#resultado').html(JSON.stringify(data.user));
	},
	data: JSON.stringify(myuser)
});
}

function getImagen(){
	console.log(url);

	$.getJSON(url,
		function(json){
		console.log(json);

		var arrUsers = json.users;

		var htmlTableUsers='<table border=1>';

		arrUsers.forEach(function(item){
			console.log(item);
			htmlTableUsers+='<tr>' +
				'<td>'+item.id+'</td>'+
				'<td>'+item.name+'</td>'+
				'<td><img src="'+item.img+'" alt="Imagen" style="max-width: 150px; max-height: 150px;"></td>'+
				'<td>'+item.descripcion+'</td>'+
				'</tr>';
		});
	htmlTableUsers+= '</table>';

	$('#resultado').html(htmlTableUsers);
}
);
}
