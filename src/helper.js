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

export function getItemsFromLocalStorge(key) {
  const locelStorge = localStorage.getItem(key);
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
    'cartList',
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
export function creditCardValidation(Yup){
  
 return Yup.object().shape({
    creditCard: Yup.string()
      .matches(/^\d+$/, "Credit card number must contain only digits")
      .length(16, "Credit card number must be exactly 16 digits long")
      .required("Credit card number is required"),
    expiredDate: Yup.string()
      .matches(
        /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
        "Expiry date must be in MM/YY format"
      )
      .test("is-expiry-date-valid", "Credit card has expired", (value) => {
        if (!value) {
          return false;
        }
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1;
        const [expMonth, expYear] = value
          .split("/")
          .map((val) => parseInt(val, 10));
        const expiryYearFull = 2000 + expYear;

        if (expiryYearFull < currentYear) {
          return false;
        }
        if (expiryYearFull === currentYear && expMonth < currentMonth) {
          return false;
        }
        return true;
      })
      .required("Expiry date is required"),
  });
}
export function userInformationValidation(Yup){
return Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    streetAdress: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
    zipCode: Yup.string()
    .matches(/^[0-9]{5}(-[0-9]{4})?$/, 'Please enter a valid ZIP code')
.required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});}
