function pesquisaCEP(cep) {
	let url =  `https://viacep.com.br/ws/${cep}/json/unicode/ `;
	let xmlHttp = new XMLHttpRequest();

	console.log(url);

	xmlHttp.open('GET', url);
	xmlHttp.onreadystatechange = () => {
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
			let obj = JSON.parse(xmlHttp.responseText);

			document.getElementById('endereco').value = obj.logradouro;
			document.getElementById('bairro').value = obj.bairro;
			document.getElementById('cidade').value = obj.localidade;
			document.getElementById('uf').value = obj.uf;
		}
	}

	xmlHttp.send();
}