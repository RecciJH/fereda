const postList = document.querySelector(".posts");

export const setupPosts = (data) => {
  if (data.length) {

    let html = ''
    data.forEach((doc) => {
     
      const post = doc.data();
      const li = `
      <li class="list-group-item list-group-item-action list-group-item-success">
      <h5>${post.title}</h5>
      <p>${post.content}</p>
      </li>
      ` //NO BORRES EL ACENTO QUE ESTA AHI <---- ES IMPORTANTE//

      html += li

    })

    postList.innerHTML = html
  } else {
    postList.innerHTML = "<h2>Acceso solo para administrativos</h2>";
  }
};
