var xhr = new XMLHttpRequest();

if (xhr) {

//	xhr.open('POST','http://dev.domain.us/API/v02/json/V02');
	xhr.open('POST','http://localhost:3000/posts');

	xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

	var article = JSON.stringify({
		
		author: "Max Porrini",
		title: "La Dynamique Moléculaire",
		content: "La dynamique moléculaire (MD) est une technique de simulation à l'ordinateur qui nous permet de connaitre les proprietés des systemes moleculaires complexes",
		tags: "simulations/mechanique statistique/champ de force"

	});

/*
	var jsonStr = JSON.stringify({

    			  name: 'John Frog',

    			  address: '8 rue des Nénuphars, 45200 La Mare'

  	});
*/

  	xhr.send(article);

}
