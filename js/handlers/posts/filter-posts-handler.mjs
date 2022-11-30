export function filterPostHandler(postAuthor) {
   const filterBtn = document.querySelector("#filter-btn");
   const filterDropdown = document.querySelector(".dropdown-menu");
   const parser = new DOMParser();
   const parserDocument = parser.parseFromString(
      `
      <li class="dropdown-item">${postAuthor}</li>
   `,
      "text/html"
   );

   const authorNameOption = parserDocument.querySelector(".dropdown-item");

   const childrenObject = filterDropdown.children;

   const isList = Object.values(childrenObject).some(({ innerText }) => innerText === authorNameOption.innerText);

   if (!isList) {
      filterDropdown.appendChild(authorNameOption);
   }

   filterBtn.addEventListener("click", (event) => {
      console.log(event.target);
   });
}
