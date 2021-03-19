
export const functionalities = (() => {
  const storageMyLibrary = (myLibrary) => {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
  };

  const remove = (id) => {
    id = id.slice(6);
    const myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
    myLibrary.splice(id, 1);
    storageMyLibrary(myLibrary);
  };
  const reloadPage = () => {
    window.location.reload();
  };
  return {
    storageMyLibrary,
    reloadPage,
    remove,
  };
})();
export default function Book(title, author, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}
