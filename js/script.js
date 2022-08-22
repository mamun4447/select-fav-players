//Add five players
function addFive(singleOne) {
    const fivePlayers = document.getElementById("playerName");
    const ol = document.createElement('ol');
    ol.innerHTML = `
       <li>${singleOne}</li>
      `;
    fivePlayers.appendChild(ol);
}

let count = 0;

//Select-V players section start
const selectBtn = document.getElementsByClassName('selectBtn');
for (let Select of selectBtn) {
    Select.addEventListener('click', function(event) {
        const playerName = event.target.parentNode.parentNode.firstChild.nextSibling.innerText;


        event.target.style.disabled = 'true';
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
document.getElementById()