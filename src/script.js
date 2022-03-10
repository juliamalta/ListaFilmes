var listafilme = [
  "https://intratecal.files.wordpress.com/2010/10/star-wars-ep-52.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/9/97/BackFuturePoster.jpg/225px-BackFuturePoster.jpg",
  "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-12561-9x29vp_d58d0519.jpeg"
];

for (var i = 0; i < listafilme.length; i++) {
  document.write("<img src=" + listafilme[i] + ">");
}
