// complete the JS code
const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const scores = document.getElementById("scores");

// Save score to Local Storage
function saveScore() {
// complete the code here

	let name = nameInput.value;
	let score = scoreInput.value;
	let obj = {name, score};

	let scoreArr = localStorage.getItem("highScore");
	
	 if(scoreArr !== null){
		 let newArr = [...scoreArr];
		   newArr.push(obj);
		   localStorage.setItem("highScore", JSON.stringify(newArr));
	 }
	else{
		localStorage.setItem("highScore", JSON.stringify([{...obj}]));
	}
  showScores();
}

// Show scores in div
function showScores() {
  // complete the code
     scores.innerHTML = "";  // clear the prevoius data 
    // localStorage.removeItem("highScore")  // testing perpose
	
	
	let objArr = JSON.parse(localStorage.getItem("highScore"));

	if(objArr === null){
		scores.innerHTML = "No scores yet";
	}
	else{
		let ta = document.createElement("table");
		
		let th1 = document.createElement("th");
		     th1.innerHTML = "Name"
		let th2 = document.createElement("th");
		     th2.innerHTML = "Score"
		let tr1 = document.createElement("tr");
		     tr1.append(th1,th2);
		     ta.append(tr1)
		

		objArr.map(({name, score})=>{
			 let td1 = document.createElement("td");
				  td1.innerHTML = name;
			 let td2 = document.createElement("td");
				  td2.innerHTML = score
			 let tr2 = document.createElement("tr");
				  tr2.append(td1,td2);
			
		   ta.append(tr2)  
		})

	  scores.append(ta)   // add the whole table to score div	
	}
	
}
