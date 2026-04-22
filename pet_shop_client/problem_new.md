1. проблеми з бібліотекою.
важко переробити на свій лав по макету, до прикладу стрілка.
Спершу шукала назви компонентів і їх стилі в інструментах розробника, потім почала перебивати !important;

2. проблема при створенні універсальної каруселі: 
передати компонент з пропсами як пропс. 
передала як шаблон.

3. Дізналась як можна створити навігацію по сторінці.

4. дуже складно зробити в одній сторінці 3 переходи сторінок....
import { useSearchParams } from "react-router-dom";
const [params] = useSearchParams();

const type = params.get("type");
const category = params.get("category");
const discountProducts = products.filter(
  (item) => item.discont_price !== null
); мої знижки;

const categoryProducts = category
  ? products.filter((item) => item.categoryId === Number(category))
  : [];
  let dataToShow = products;
  if (type === "discount") {
  dataToShow = discountProducts;
}
  if (category) {
  dataToShow = categoryProducts;
}
міняю свій масив на універсальний dataToShow?
тепер мої 
URL: 
/allProducts?type=discount міняю в шляхах хедера навігатор
/allProducts?category= в кожного продукта є категорії номер от по ньому і виводимо всі продукти

!!! І ось тут Панаса понесло: який продукт куди і яка категорія куди іде що на відображення а що на перехід сторінки в нас і запити і продукти відфільтровані

5. Спершу додала преход по лінку в карусель компонент, потім зрозуміла що універсальніше буде якщо поставити перехід при створенні карточки тоді з будь якої сторінки де перебераємо масиви кінцевий результат карта продукта

6. Почала використовувати:
&& перевіряє truthy / falsy
?. перевіряє тільки null або undefined

7. Продумати куди який масив передати для відображення хлібних крихт, щоб компонент був універсальним

8. Проблема який товар показати как дізнатись id.
Рішення: import { useParams } from "react-router-dom";
const { id } = useParams();

9. export const cartLocalStorageMiddleware = 
(store) => (next) => (action) => {
const result = next(action);
localStorage.setItem(
  "cart",
   JSON.stringify(store.getState().cart.cart)
)
return result;
}

МЕТОДИ store:
це все є
console.log(store);
const store = {
  dispatch: function(action) {},
  getState: function() {},
  subscribe: function() {},
};
store = керує всім Redux станом
getState = читання
dispatch = зміна
subscribe = слідкування
аналогія
store = банк
getState = подивитись баланс
dispatch = зробити операцію
subscribe = отримати SMS про зміну

(store.getState().cart.cart
 це як 
Redux store = велика коробка
getState() = відкрити коробку
cart.cart = дістати конкретний пакет
або 
весь store → cart slice → масив товарів)

10. не знала як підтягнути з локал сторедж на сторінку 
cart: JSON.parse(localStorage.getItem("cart")) || [],