const res = fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=c')
var e = ``
res.then(resolve => resolve.json()).then(val => {

  // console.log(val);


  val.meals.forEach((element,item) => {
    if(Number(element.idMeal)<53077){
    e += `
  
 <div class="card col-lg-3 col-sm-2 col-md-5 my-3 mx-auto shadow d1" style="border:0px ">
  <img src="${element.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${element.strMeal}</h5>
    <p class="card-text">${element.strCategory}</p>
    <button type="button" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#exampleModal-${item}" style="border-radius:50px">
    View more
</button>
  </div>
</div> 


<!-- Button trigger modal -->


<!-- Modal -->
<div class="modal fade m" id="exampleModal-${item}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">${element.strMeal}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
            <div class="text-start">
        <h3>Cuisine:<span class="fs-5 ms-2">${element.strCategory}</span></h3>
        
        <hr>
        <h3>Instructions:</h3>
        <p class="mt-2">${element.strInstructions}</p>
    </div>      
        
      </div>
      <div class="modal-footer text-center">
      <a href="${element.strYoutube}" class="btn btn-outline-dark">Watch video</a>
      </div>
    </div>
  </div>
</div>

  `}

  })
  c.innerHTML = e

}).catch(err => console.log(err))

//  =========
var a = ``
const res2 = fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
res2.then(resolvee => resolvee.json()).then(value => {
  value.categories.forEach(item => {
    if(Number(item.idCategory)<=12){

      
    a += ` <div class="card col-lg-3 col-sm-2 col-md-5 my-3 mx-auto shadow d1"  style="border-radius:200px; border:0px ;cursor:pointer">
  <img src="${item.strCategoryThumb}" class="card-img-top img-fluid" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.strCategory}</h5>
  </div>
</div> 
`
    }

  })
  cat.innerHTML = a
}).catch(err => console.log(err)
)

