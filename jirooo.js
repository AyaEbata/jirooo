function ookisa() {
	var radioList = document.getElementsByName("seibetu");
	var tenpo = document.forms.selectForm.tenpo;
	var ryou = document.forms.selectForm.ryou;

	ryou.options.length = 0;

	if (radioList[1].checked && tenpo.options[tenpo.selectedIndex].value == "新代田") {
		ryou.options[0] = new Option("--選択してね--");
		ryou.options[1] = new Option("大盛り");
		ryou.options[2] = new Option("特盛り");
		ryou.options[3] = new Option("メガ盛り");
		ryou.options[3] = new Option("超メガ盛り");
	}
	else {
		ryou.options[0] = new Option("--選択してね--");
		ryou.options[1] = new Option("並盛り");
		ryou.options[2] = new Option("大盛り");
		ryou.options[3] = new Option("特盛り");
		ryou.options[4] = new Option("メガ盛り");
	}
}

function select() {
	var s1 = document.forms.selectForm.tenpo; //変数s1を宣言
	var s2 = document.forms.selectForm.ninniku; //変数s2を宣言
	var s3 = document.forms.selectForm.yasai;
	var s4 = document.forms.selectForm.abura;
	var s5 = document.forms.selectForm.karame;

	s2.options.length = 0; // 選択肢の数がそれぞれに異なる場合、これが重要
	s3.options.length = 0; // 選択肢の数がそれぞれに異なる場合、これが重要
	s4.options.length = 0; // 選択肢の数がそれぞれに異なる場合、これが重要
	s5.options.length = 0; // 選択肢の数がそれぞれに異なる場合、これが重要

	s2.options[0] = new Option("なし");
	s2.options[1] = new Option("普通");
	s2.options[2] = new Option("多め");

	s3.options[0] = new Option("普通");
	s3.options[1] = new Option("多め");

	s4.options[0] = new Option("普通");
	s4.options[1] = new Option("多め");

	s5.options[0] = new Option("普通");
	s5.options[1] = new Option("多め");

	if (s1.options[s1.selectedIndex].value == "本店" || s1.options[s1.selectedIndex].value == "新代田") {
		console.log("本店！");
		s2.options[3] = new Option("かなり多め");
		s3.options[2] = new Option("かなり多め");
		s4.options[2] = new Option("かなり多め");
		s5.options[2] = new Option("かなり多め");
	}

	else if (s1.options[s1.selectedIndex].value == "スモジ") {
		console.log("スモジ！");
	}
}

function namunamu() {
	var radioList = document.getElementsByName("seibetu");
	var tenpo = document.forms.selectForm.tenpo;
	var ryou = document.forms.selectForm.ryou;
	var ninniku = document.forms.selectForm.ninniku;
	var yasai = document.forms.selectForm.yasai;
	var abura = document.forms.selectForm.abura;
	var karame = document.forms.selectForm.karame;

   	namu1 = document.getElementById("jumon1");
   	namu2 = document.getElementById("jumon2");

	if (radioList[0].checked || (radioList[1].checked && tenpo.options[tenpo.selectedIndex].value != "新代田")) {
		console.log("女");
		if (ryou.options[ryou.selectedIndex].value == "並盛り") {
			namu1.innerHTML = "麺の量：客「小の半分で！」";
		}
		else if (ryou.options[ryou.selectedIndex].value == "大盛り") {
			namu1.innerHTML = "麺の量：客「小の少なめで！」";
		}
		else if (ryou.options[ryou.selectedIndex].value == "特盛り") {
			namu1.innerHTML = "麺の量：客「小で！」";
		}
		else if (ryou.options[ryou.selectedIndex].value == "メガ盛り") {
			namu1.innerHTML = "麺の量：客「大で！」";
		}
	}
	else if (radioList[1].checked) {
		console.log("男");
		if (tenpo.options[tenpo.selectedIndex].value == "新代田") {
			if (ryou.options[ryou.selectedIndex].value == "大盛り") {
				 namu1.innerHTML = "麺の量：客「小の半分で！」";
			}
			else if (ryou.options[ryou.selectedIndex].value == "特盛り") {
				namu1.innerHTML = "麺の量：客「小の少なめで！」";
			}
			else if (ryou.options[ryou.selectedIndex].value == "メガ盛り") {
				namu1.innerHTML = "麺の量：客「小で！」";
			}
			else if (ryou.options[ryou.selectedIndex].value == "超メガ盛り") {
				namu1.innerHTML = "麺の量：客「大で！」";
			}
		}
	}

	if (ninniku.options[ninniku.selectedIndex].value == "普通" && yasai.options[yasai.selectedIndex].value == "普通" && abura.options[abura.selectedIndex].value == "普通" && karame.options[karame.selectedIndex].value == "普通") {
		namu2.innerHTML = "店員「ニンニクはいれますか？」<br />客「そのままで！」";
	}
	else if (ninniku.options[ninniku.selectedIndex].value == "なし" && yasai.options[yasai.selectedIndex].value == "普通" && abura.options[abura.selectedIndex].value == "普通" && karame.options[karame.selectedIndex].value == "普通") {
		namu2.innerHTML = "店員「ニンニクはいれますか？」<br />客「ニンニク抜きで！」";		
	}
	else if (ninniku.options[ninniku.selectedIndex].value == "かなり多め" && yasai.options[yasai.selectedIndex].value == "かなり多め" && abura.options[abura.selectedIndex].value == "かなり多め" && karame.options[karame.selectedIndex].value == "かなり多め") {
		namu2.innerHTML = "店員「ニンニクはいれますか？」<br />客「で！」";		
	}
	else {
		switch (ninniku.options[ninniku.selectedIndex].value) {
			case "なし":
				namu2.innerHTML = "店員「ニンニクはいれますか？」<br />客「";
				break;
			case "普通":
				namu2.innerHTML = "店員「ニンニクはいれますか？」<br />客「ニンニク";
				break;
			case "多め":
				namu2.innerHTML = "店員「ニンニクはいれますか？」<br />客「ニンニクマシ";
				break;
			case "かなり多め":
				namu2.innerHTML = "店員「ニンニクはいれますか？」<br />客「ニンニクマシマシ";
				break;
		}
		switch (yasai.options[yasai.selectedIndex].value) {
			case "なし":
				namu2.innerHTML += "";
				break;
			case "普通":
				namu2.innerHTML += "ヤサイ";
				break;
			case "多め":
				namu2.innerHTML += "ヤサイマシ";
				break;
			case "かなり多め":
				namu2.innerHTML += "ヤサイマシマシ";
				break;
		}
		switch (abura.options[abura.selectedIndex].value) {
			case "なし":
				namu2.innerHTML += "";
				break;
			case "普通":
				namu2.innerHTML += "アブラ";
				break;
			case "多め":
				namu2.innerHTML += "アブラマシ";
				break;
			case "かなり多め":
				namu2.innerHTML += "アブラマシマシ";
				break;
		}
		switch (karame.options[karame.selectedIndex].value) {
			case "なし":
				namu2.innerHTML += "で！」";
				break;
			case "普通":
				namu2.innerHTML += "カラメで！」";
				break;
			case "多め":
				namu2.innerHTML += "カラメマシで！」";
				break;
			case "かなり多め":
				namu2.innerHTML += "カラメマシマシで！」";
				break;
		}
	}
}