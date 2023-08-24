function calculatePageNumbers(totalItems, size) {
    var pages = Math.ceil(totalItems / size);
    return pages;
}
  
export { calculatePageNumbers };