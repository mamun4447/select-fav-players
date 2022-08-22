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
function getValueFromInputField(id) {
    const valueString = document.getElementById(id).value;
    const value = parseFloat(valueString);

    if (isNaN(value)) {
        alert('Input value have to be a number!!');
    } else {
        return value;
    }
    document.getElementById(id).value = "";


}

//set out put on text field
function getOutputOnField(id, output) {
    const fields = document.getElementById(id);

    fields.innerText = output;

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
            count--;
        }
    });
}
//Select-V players section end


//Budget section
// calculate player cost
document.getElementById("playersCostBtn").addEventListener('click', function() {
    const perPlayer = getValueFromInputField("perPlayerInputField");
    const playersTotalCost = perPlayer * count;


    getOutputOnField("playersCostOutput", playersTotalCost);
});

// calculate total cost
document.getElementById("calculateTotalBtn").addEventListener('click', function() {
    const managerCost = getValueFromInputField("managerInputField");
    const coachCost = getValueFromInputField("coachInputField");
    const playescostOutputField = document.getElementById("playersCostOutput");
    const playerCostString = playescostOutputField.innerText;
    const playersCost = parseFloat(playerCostString);

    const totalCost = managerCost + coachCost + playersCost;

    getOutputOnField("totalField", totalCost);
});