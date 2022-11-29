export const colorToRgba = (color: string) => {
  const canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = 1;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 1, 1);
  const data = ctx.getImageData(0, 0, 1, 1).data;

  const array = Array.from(data);
  array[3] = Number((array[3] / 255).toFixed(2));
  console.log(array);

  return `rgba(${array.toString()})`;
};
