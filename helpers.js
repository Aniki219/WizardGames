function placeFree(rect) {
  let solids = walls;
  for(var solid of solids) {
    if (collision(rect, solid)) {
      return false;
    }
  }
  return true;
}

function collision(rect1, rect2) {
  if (rect1.x + rect1.w > rect2.x &&
    rect1.x < rect2.x + rect2.w &&
    rect1.y + rect1.h > rect2.y &&
    rect1.y < rect2.y + rect2.h) {
      return true;
    }
  return false;
}
