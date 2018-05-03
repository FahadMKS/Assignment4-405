var rows = document.getElementById('numR').innerHTML
var books=[];

for(var i = 0;i< rows;i++){
var tit = document.getElementById('title'+i)
var date = document.getElementById('date'+i)
var Author = document.getElementById('author'+i)
var rev = document.getElementById('reviews'+i)
var Rate = document.getElementById('rate'+i)
var price = document.getElementById('price'+i)
var Img = document.getElementById('img'+i)
var Url = document.getElementById('url'+i)

books.push({title: tit.innerHTML,
    date_published: date.innerHTML,
    author: Author.innerHTML,
    reviews: rev.innerHTML,
    rate: Rate.innerHTML,
    Price: price.innerHTML,
    img: Img.innerHTML,
    url: Url.innerHTML,})
}

// Default sort
sortByReviews()
upDateDOM()

function createBookItem(bookObj) {
  /*
      <li>
        <a href="#">React Quickly: Painless web apps with React, JSX, Redux, and GraphQL</a>
        <img src="https://images-na.ssl-images-amazon.com/images/I/5159foIB0EL._AC_US218_.jpg"/>
          <ul>
            <li>Sep 28, 2017 </li>
            <li>Azat Mardan</li>
            <li>34 reviews</li>
            <li>4.7 stars</li>
          </ul>
      </li>
    */
  var liElem = document.createElement('li')

  var img = document.createElement('img');
  img.src = bookObj.img;
  img.width = 100;
  img.height = 150;
  liElem.appendChild(img);

  //var ul = document.createElement('ul');
  //liElem.appendChild(ul);

  var titleLi = document.createElement("div")
  var titles = document.createTextNode('Title: ');  
  var a = document.createElement('a')
  var aText = document.createTextNode(bookObj.title)
  a.appendChild(aText)
  a.href = bookObj.url
  
  titleLi.appendChild(titles);
  titleLi.appendChild(a);
  
  liElem.appendChild(titleLi)
  
  var authorLi = document.createElement('div')
  authorLi.appendChild(document.createTextNode("Author: " + bookObj.author))
  liElem.appendChild(authorLi)

  var dateLi = document.createElement('div');
  dateLi.appendChild(document.createTextNode("Published Date: " + bookObj.date_published))
  liElem.appendChild(dateLi);

  var reviewsLi = document.createElement('div');
  reviewsLi.appendChild(document.createTextNode("Reviews: " + bookObj.reviews))
  liElem.appendChild(reviewsLi);

  var rateLi = document.createElement('div');
  rateLi.appendChild(document.createTextNode("Rating: " + bookObj.rate + "/5"))
  liElem.appendChild(rateLi);

  var priceLi = document.createElement('div');
  priceLi.appendChild(document.createTextNode("Price: " + bookObj.Price + " $"))
  liElem.appendChild(priceLi);
  liElem.appendChild(document.createElement("br"));

  // create the remaining elements
  return liElem;
}

function sortByReviews() {
  books.sort(function (a, b) {
    return b.reviews - a.reviews;
  })
}
function sortByPriceLow() {
  books.sort(function (a, b) {
    return a.Price - b.Price;
  })
}
function sortByPriceHigh() {
  books.sort(function (a, b) {
    return b.Price - a.Price;

  })
}
function sortByRating() {
  books.sort(function (a, b) {
    return b.rate - a.rate;

  })
}
function sortByNewest() {
  books.sort(function (a, b) {
    var dataAString = Date.parse(a.date_published);
    var dataBString = Date.parse(b.date_published);
    return dataBString - dataAString;
  })
} function sortByOldest() {
  books.sort(function (a, b) {
    var dataAString = Date.parse(a.date_published);
    var dataBString = Date.parse(b.date_published);
    return dataAString - dataBString;
  })
}

function upDateDOM() {
  var ulBooks = document.getElementById('books-list')
  ulBooks.innerHTML = ''
  for (item of books) {
    ulBooks.appendChild(createBookItem(item));
  }
}

// Sort by, select event
var select = document.getElementById("sort-books")
select.onchange = function () {
  if (select.value === 'Default') {
    sortByReviews()
    upDateDOM()
  }
  else if (select.value === 'PriceLow') {
    sortByPriceLow()
    upDateDOM()
  }
  else if (select.value === 'PriceHigh') {
    sortByPriceHigh()
    upDateDOM()
  }
  else if (select.value === 'Rating') {
    sortByRating()
    upDateDOM()
  }
  else if (select.value === 'New') {
    console.log("test")
    sortByNewest()
    upDateDOM()
  }
  else if (select.value === 'Old') {
    sortByOldest()
    upDateDOM()
  }
}