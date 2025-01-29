export default function SlideClose(arr) {
  arr.forEach((el, i) => {
    // Apply closing animation instantly if first element
    if (i === 0) return;

    // Set time out
    setTimeout(() => {
      // Apply closing animation
    }, 300);
  });
}
