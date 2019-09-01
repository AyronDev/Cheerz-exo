var myUrl = 'https://live.cheerz.com/locations/6NTXQ.json?token=97708656fa84355530cc08df696f16e967e8c921';

	var proxy = 'https://cors-anywhere.herokuapp.com/';

	var finalURL = proxy + myUrl;

	// With the get JSON (frequently used) method
	$.getJSON(finalURL, function( data ) {
    console.log(data.location.customization.Pola.texts[0].font);

	var imagesvg = document.createElementNS("http://www.w3.org/2000/svg", 'image');
	imagesvg.setAttributeNS( "http://www.w3.org/1999/xlink","href", data.location.customization.Pola.images[0].url);
	imagesvg.setAttribute("width", data.location.customization.Pola.images[0].width);
	imagesvg.setAttribute("height", data.templates[1].printing_format.height);
	imagesvg.setAttribute("id", "pola");
	$('#svgpola').html(imagesvg);

	var imagesvg1 = document.createElementNS("http://www.w3.org/2000/svg", 'image');
	imagesvg1.setAttributeNS( "http://www.w3.org/1999/xlink","href", data.location.customization.Pola.images[1].url);
	imagesvg1.setAttribute("width", data.location.customization.Pola.images[1].width);
	imagesvg1.setAttribute("height", data.location.customization.Pola.images[1].width);
	imagesvg1.setAttribute("y", data.location.customization.Pola.images[1].y);
	imagesvg1.setAttribute("x", data.location.customization.Pola.images[1].x);
	imagesvg1.setAttribute("id", "cheerz");
	$('#svgpola').append(imagesvg1);

	var mariage = document.createElementNS("http://www.w3.org/2000/svg", 'text');
	mariage.setAttribute("font-size", data.location.customization.Pola.texts[0].size);
	mariage.setAttribute("y", data.location.customization.Pola.texts[0].y);
	mariage.setAttribute("x", data.location.customization.Pola.texts[0].x);
	mariage.setAttribute('fill', data.location.customization.Pola.texts[0].color);
	mariage.setAttribute('font-family', data.location.customization.Pola.texts[0].font);
	mariage.setAttribute('id', 'mariage');
	mariage.setAttribute('text-anchor', 'middle');

	mariage.textContent= data.location.customization.Pola.texts[0].text;
	$('#svgpola').append(mariage);


	var  date = document.createElementNS("http://www.w3.org/2000/svg", 'text');
	date.setAttribute("font-size", data.location.customization.Pola.texts[1].size);
	date.setAttribute("y", data.location.customization.Pola.texts[1].y);
	date.setAttribute("x", data.location.customization.Pola.texts[1].x);
	date.setAttribute('fill', data.location.customization.Pola.texts[1].color);
	date.setAttribute('font-family', data.location.customization.Pola.texts[1].font);
	date.setAttribute('id', 'date');
	date.setAttribute('text-anchor', 'middle');

	date.textContent= data.location.customization.Pola.texts[1].text;
	$('#svgpola').append(date);

	var  emmabenoit = document.createElementNS("http://www.w3.org/2000/svg", 'text');
	emmabenoit.setAttribute("font-size", data.location.customization.Pola.texts[2].size);
	emmabenoit.setAttribute("y", data.location.customization.Pola.texts[2].y);
	emmabenoit.setAttribute("x", data.location.customization.Pola.texts[2].x);
	emmabenoit.setAttribute('fill', data.location.customization.Pola.texts[2].color);
	emmabenoit.setAttribute('font-family', data.location.customization.Pola.texts[2].font);
	emmabenoit.setAttribute('id', 'emmabenoit');
	emmabenoit.setAttribute('text-anchor', 'middle');
	emmabenoit.textContent= data.location.customization.Pola.texts[2].text;
	$('#svgpola').append(emmabenoit);

 	});
