
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DOM Manipulation</title>
</head>
<body>
  <div id="container">
    <h1>My List</h1>
    <ul id="myList">
      <li class="item">Item 1</li>
      <li class="item">Item 2</li>
      <li class="item">Item 3</li>
    </ul>
    <button id="addButton">Add Item</button>
  </div>

  <script>
    document.getElementById("addButton").addEventListener("click", function() {
      const ul = document.getElementById("myList");
      const newItem = document.createElement("li");
      newItem.classList.add("item");
      newItem.textContent = "New Item";
      ul.appendChild(newItem);
    });

    document.getElementById("myList").addEventListener("click", function(event) {
      if (event.target && event.target.matches("li.item")) {
        event.target.remove();
      }
    });
  </script>
</body>
</html>
