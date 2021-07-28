const menu = [
  {
    id: 1,
    title: "Pancakes",
    category: "Breakfast",
    price: 8.99,
    img: "./img/pancake.jpg",
    details:
      "Pancakes, This is just some random text to fill the space. It gives a clear impression of how it would look like when it's replaced with some meaningful text.",
  },
  {
    id: 2,
    title: "Pizza",
    category: "Lunch",
    price: 6.99,
    img: "./img/Pizza.jpg",
    details:
      "Pica, This is just some random text to fill the space. It gives a clear impression of how it would look like when it's replaced with some meaningful text.",
  },
  {
    id: 3,
    title: "Thai Noodles",
    category: "Lunch",
    price: 7.99,
    img: "./img/noodles.jpg",
    details:
      "Veg, This is just some random text to fill the space. It gives a clear impression of how it would look like when it's replaced with some meaningful text.",
  },
  {
    id: 4,
    title: "Salad",
    category: "Breakfast",
    price: 7.99,
    img: "./img/salad.jpg",
    details:
      "Veg, This is just some random text to fill the space. It gives a clear impression of how it would look like when it's replaced with some meaningful text.",
  },
  {
    id: 5,
    title: "Pasta",
    category: "Dinner",
    price: 7.99,
    img: "./img/pasta.jpg",
    details:
      "Veg, This is just some random text to fill the space. It gives a clear impression of how it would look like when it's replaced with some meaningful text.",
  },
  {
    id: 6,
    title: "Bread",
    category: "Breakfast",
    price: 1.99,
    img: "./img/bread.jpg",
    details:
      "Veg, This is just some random text to fill the space. It gives a clear impression of how it would look like when it's replaced with some meaningful text.",
  },
  {
    id: 7,
    title: "Hamburger",
    category: "Lunch",
    price: 4.99,
    img: "./img/hamburger.jpg",
    details:
      "Veg, This is just some random text to fill the space. It gives a clear impression of how it would look like when it's replaced with some meaningful text.",
  },
  {
    id: 8,
    title: "Pumpkin-Soup",
    category: "Dinner",
    price: 9.99,
    img: "./img/pumpkin-soup.jpg",
    details:
      "Veg, This is just some random text to fill the space. It gives a clear impression of how it would look like when it's replaced with some meaningful text.",
  },
  {
    id: 8,
    title: "French Fries",
    category: "Munching",
    price: 9.99,
    img: "./img/french-fries.jpg",
    details:
      "Chips, This is just some random text to fill the space. It gives a clear impression of how it would look like when it's replaced with some meaningful text.",
  },
];

const Section = document.querySelector(".single-item");
const btnContainer = document.querySelector("#btnContainer");
const h1 = document.querySelector("h1");

h1.innerHTML = "OUR MENU";

// --initial load---

window.addEventListener("DOMContentLoaded", () => {
  menuItemsDisplay(menu);
  menuButtonsDisplay();
  // console.log(displayMenu);
});

// ----Item Display Function --------------------------------

function menuItemsDisplay(menuItem) {
  let displayMenu = menuItem.map((item) => {
    // console.log(item);
    return ` <div class="menu-items">
    <img src= ${item.img} class="pic">
    <div class="item-info">
          <header class="heading-items">
                <h4>${item.title}</h4>
                <h3 class="price">$${item.price}</h3>
          </header>
          <hr>
          <p class="item-text">

          ${item.details}
          </p>
    </div>
</div>`;
  });
  displayMenu = displayMenu.join("");
  Section.innerHTML = displayMenu;
}

function menuButtonsDisplay() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }

      return values;
    },
    ["All"]
  );

  // console.log(categories);

  const categoryBtn = categories
    .map(function (category) {
      return `<button class="btn" type="button" data-id=${category}>${category}</button>`;
    })
    .join("");
  btnContainer.innerHTML = categoryBtn;
  const filterBtn = document.querySelectorAll(".btn");

  // console.log(categoryBtn);
  // filtering -------------------------------------

  filterBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // console.log(e.currentTarget.dataset.id);
      const category = e.currentTarget.dataset.id;

      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);

        if (menuItem.category === category) {
          return menuItem;
        }
      });
      // console.log(menuCategory);

      if (category === "All") {
        menuItemsDisplay(menu);
      } else {
        menuItemsDisplay(menuCategory);
      }
      // console.log(menuCategory);
    });
  });
}
