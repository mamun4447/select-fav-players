//Add five players
function addFive(singleOne) {
    const fivePlayers = document.getElementById("playerName");
    const ol = document.createElement('ol');
    ol.innerHTML = `
       <li>${singleOne}</li>
      `;
    fivePlayers.appendChild(ol);
}

//get value by id
function getValueById(id) {
    const valueString = document.getElementById(id).value;
    const value = parseFloat(valueString);
    document.getElementById(id).value = "";

    return value;
}

//set out put on text field
function getOutputOnField(id, output) {
    const field = document.getElementById(id);
    field.innerText = output;

}




let count = 0;

//Select-V players section start
const selectBtn = document.getElementsByClassName('selectBtn');
for (let Select of selectBtn) {
    Select.addEventListener('click', function(event) {
        const playerName = event.target.parentNode.parentNode.firstChild.nextSibling.innerText;


        event.target.disabled = "disabled";
        count++;
        if (count <= 5) {
            addFive(playerName);
        } else {
            alert("Player can not more then five");
        }
    });
}
//Select-V players section end


//Budget section
// calculate player cost
document.getElementById("playersCostBtn").addEventListener('click', function() {
    const perPlayer = getValueById("perPlayerInputField");
    const playersTotalCost = perPlayer * count;

    getOutputOnField("playersCostOutput", playersTotalCost);
});

// calculate total cost
document.getElementById("")