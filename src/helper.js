export function countTotal(list) {
  const total = list.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0
  );
  return total;
}

export function findItem(list, id) {
  let item = list.find((item) => item.id === id);
  return item;
}

export function updateCartQuantity(list, id, newQuantity) {
  const newList = [...list];
  const findProduct = findItem(list, id);
  findProduct.quantity = newQuantity;
  return newList;
}

export function getItemsFromLocalStorge() {
  const locelStorge = localStorage.getItem('cartlist');
  if (locelStorge) {
    return JSON.parse(locelStorge);
  }
  return [];
}
export function setItemInLocalStorge(key, list) {
  return localStorage.setItem(key, JSON.stringify(list));
}

export function addNewItemToCart(list, product, newCount) {
  return localStorage.setItem(
    'cartlist',
    JSON.stringify([
      ...list,
      {
        title: product.title,
        price: product.price,
        id: product.id,
        image: product.images[0],
        quantity: newCount,
      },
    ])
  );
}

export function countQuantity(list) {
  const sum = list.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0
  );
  return sum;
}
