axios.get('https://icanhazdadjoke.com/', {
headers: {
"Accept": 'application/json'
  },
}).then((res) => {
  console.log('res', res);
  div  =  document.createElement('div');
  document.body.append(div);
  div.innerHTML = res.joke
  img = document.createElement('img')
  img.classList.add('w-30')
  document.body.append(img)
  var changeImage = () => {axios.get('https://dog.ceo/api/breeds/image/random').then(function(res){img.src = res.message 
  setTimeout(changeImage, 3000)})}
  changeImage()
})

