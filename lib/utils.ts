
export const POSTS_PER_PAGE = 5;

export const getPageOffset = (pageNo) => {
  /**
   * Offset is how many posts are already shown ( meaning, after how many posts should we start qurying ).
   * @type {number}
   */
  let offset = 0;
  pageNo = Number(pageNo);
  if (1 === pageNo) {
    offset = 0;
  } else if (2 === pageNo) {
    offset = POSTS_PER_PAGE;
  } else {
    offset = POSTS_PER_PAGE + (pageNo - 2) * POSTS_PER_PAGE;
  }
  return offset;
};
