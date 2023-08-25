function calculatePageNumbers(totalItems, size) {
    var totalPages = Math.ceil(totalItems / size);
    var pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
    return pageNumbers;
}
  
export { calculatePageNumbers };