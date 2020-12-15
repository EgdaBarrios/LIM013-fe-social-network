import { postController } from '../view-controler/post-controller.js';

export default () => {
    const postView = `
        <section class="postWrapper">
            <section class="newPostContainer" id="newPostContainer">
                <form class="newPostForm" id="newPostForm">
                    <section class="form-groupPost">
                        <input type="text" placeholder="What have you been up to lately?" id="newPostText" name="newPostText" class="newPostInputText" ><br>
                        <hr class="separator">
                    </section>
                    <section class="form-groupPost">
                        <section class="callToAction">
                            <button type="button" class="postButton" id="postButton">POST</button>
                        </section>
                    </section>
                </form>
            </section>
            <ul class="postList" id="postList"></ul>
            <ul class="userPostList" id="userPostList"></ul>
        </section>
    `;
  
  // Insertando el template en la interfaz
  const sectionElement = document.createElement('section');
  //sectionElement.classList.add('position');
  sectionElement.innerHTML = postView;

  // Accion del boton POST (newPost)
  const postBtn = sectionElement.querySelector('#postButton');
  postBtn.addEventListener('click', () => {
    postController.actionPost(sectionElement);
  });

  // Pintando post en el home
  const ulElement = sectionElement.querySelector('#postList');
  const printPost = (dataPost) => {
    const liTemplate = `
      <section class="postContainer">
        <form class="postForm" id="postForm">
          <section class="form-groupPost">
            <table class="topUserData">
              <tr class="topUDContainer">
                <td class="iconLeftPost">
                </td>
                <td class="rightTextPost">
                  <p class="loggedUsr">${dataPost.loggedUser}<br>
                  <span class="postDate">${dataPost.date}</span></p>
                </td>
                <td class="deletePost">
                  <button type="button" class="deletePostButton" id="deletePostButton"><i class="far fa-window-close"></i></button>
                </td>
              </tr>
            </table>
            <hr class="separator">
          <section class="form-groupPost">
            <p class="postInputTextContent">${dataPost.postTextContent}</p>
            <hr class="separator">
          </section>
          <section class="form-groupPost">
            <section class="otherUsersReaction">
              <button type="button" class="likeButton" id="likeButton"></button>
              <button type="button" class="shareButton" id="shareButton"></button>
            </section>
          </section>
        </form>
      </section>     
    `;

    // Insertando el template en la interfaz
    const liElement = document.createElement('li');

    liElement.innerHTML = liTemplate;
    ulElement.appendChild(liElement);
  };

  const printPostList = (userPosts) => {
    ulElement.innerHTML = '';
    userPosts.forEach((post) => {
      printPost(post);
    });
  };

  // listado
  const fs = firebase.firestore();
  fs.collection('userPosts').orderBy('date', 'desc').onSnapshot((querySnapshot) => {
    const posts = [];
    querySnapshot.forEach((doc) => {
      posts.push(doc.data());
    });
    printPostList(posts);
  });

  // Eliminar post
  /*
  const liElement = document.querySelector('#postList');
  console.log(liElement);
  const deletePostBtn = document.querySelector('#deletePostButton');
  console.log(deletePostBtn);
  deletePostBtn.addEventListener('click', () => {
    console.log('borrar post');
    //deletePost(docRef.id);
  });
  */

  return sectionElement;
}

/*
te iba diciendo que puedes colocar
template.querySelector('.botonEliminar')
y pruebas con el console losg
luego una vez que estes accediendo correctamente a los botones de 
eliminar, pones un console log dentro del evento y verificas que al 
darle click a todos te imprima el mensajito de 'eliminar posts?
luego de eso a traves del evento pasale el id del post para que firebase
sepa que post debe eliminar
Cualquier cosa me escribes al slack estoy como Mery Cardenas
:)
*/