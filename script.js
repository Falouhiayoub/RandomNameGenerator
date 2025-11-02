    const nameInput = document.getElementById('nameInput');
    const addBtn = document.getElementById('addBtn');
    const nameList = document.getElementById('nameList');
    const chooseBtn = document.getElementById('chooseBtn');
    const popupOverlay = document.getElementById('popupOverlay');
    const chosenName = document.getElementById('chosenName');
    const closePopup = document.getElementById('closePopup');

    let names = [];

    addBtn.addEventListener('click', () => {
      const name = nameInput.value // the name variable takes the nameInput value
      if (name) {
        names.push(name); //push the name into the list
        updateList(); // to refresh the displayed list including the new added name
        nameInput.value = ''; // set the input to a empty string so the user add new names
      }
    });

    function updateList() {
      nameList.textContent = names.join(' - '); // create a single string between the names so is seperated
    }

    chooseBtn.addEventListener('click', () => {
      if (names.length === 0) { // check if the list doosn't contain any name
        alert("Aucun nom disponible !");
        return;
      }

      const randomIndex = Math.floor(Math.random() * names.length); //
      const selectedName = names[randomIndex];

      chosenName.textContent = selectedName;
      popupOverlay.style.display = 'flex';

      names.splice(randomIndex, 1);
      updateList(); //refresh the page so it show the list with the deleted element
    });

    closePopup.addEventListener('click', () => {
      popupOverlay.style.display = 'none';
    });