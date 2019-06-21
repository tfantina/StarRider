import './style.css'
function component() {
  const element = document.createElement("div");

  element.innerHTML = "Hello Weback"

  return element
}
document.body.appendChild(component());


const contentful = require('contentful');


const client = contentful.createClient({
  space:'l228pzyrt8fo',
  accessToken:'fadaf48ef8017277714f0efd4f6889b590819a3dce56071412684bdbbb7ed61d',
});

client.getEntries({
   content_type: "images"
 }).then((response) => {
   console.log(response.items);
   const gallery = document.getElementById('image-array');
   response.items.forEach((res) => {

     let imgURL = "https:" + res.fields.image.fields.file.url;
     let imgDescription = res.fields.title;
     let imgClass = res.fields.size;
     let imgDiv = document.createElement("div");
     let imgFile = document.createElement("img");
     imgFile.src = imgURL;
     imgFile.alt = imgDescription;
     imgDiv.className = imgClass;

     imgDiv.appendChild(imgFile);
     gallery.appendChild(imgDiv);

     console.log(res.fields.title)
     console.log(res.fields.size)
     console.log(res.fields.image.fields.file.url)
   })



 }
)
.catch(function(e) {
  console.log(e);
});
