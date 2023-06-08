document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".item");
    const container2 = document.querySelectorAll(".container")[1];
  
    /* Adding event listeners for drag and drop functions */
    items.forEach(item => {
      item.addEventListener("dragstart", dragStart);
      item.addEventListener("dragend", dragEnd);
    });
  
    container2.addEventListener("dragover", dragOver);
    container2.addEventListener("dragenter", dragEnter);
    container2.addEventListener("dragleave", dragLeave);
    container2.addEventListener("drop", dragDrop);
  });
  
  function dragStart() {
    /* Adding styling to the dragged item */
    this.classList.add("dragging");
  }
  
  function dragEnd() {
    this.classList.remove("dragging"); // Removing styling from the dragged item
  }
  
  function dragOver(e) {
    e.preventDefault();
  }
  
  function dragEnter(e) {
    e.preventDefault();
    this.classList.add("hovered");
  }
  
  function dragLeave() {
    this.classList.remove("hovered");
  }
  
  function dragDrop() {
    const draggedItem = document.querySelector(".dragging");
    this.appendChild(draggedItem);
  
    this.classList.remove("hovered");
  
    // Displaying success message
    const successMessage = document.createElement("p");
    successMessage.textContent = "Item dropped successfully!";
    this.appendChild(successMessage);
  }
  
  
  function resetContainers() {
    const container1 = document.querySelectorAll(".container")[0];
    const container2 = document.querySelectorAll(".container")[1];
  
    // Clearing the 2nd container
    container2.innerHTML = "<h2>Container 2</h2>";
  
    // Reset the first container to its first state
    const originalItems = ["Item 1", "Item 2", "Item 3", "Item 4"];
    container1.innerHTML = "<h2>Container 1</h2>";
    originalItems.forEach(item => {
      const newItem = document.createElement("div");
      newItem.className = "item";
      newItem.draggable = true;
      newItem.textContent = item;
      container1.appendChild(newItem);
    });
  }
  
  