// -- creando template

// --- Creando elemento
// const container = document.getElementById("container");
// const formElem = document.createElement("form");
// formElem.innerHTML = viewHome;
// --- Mostrando template

// container.appendChild(formElem);
export default () => {
  const container = document.getElementById('container');
  const formElem = document.createElement('form');
  const viewHome = `<header></header>
    <main class="intro">
      <section class="punchLine">
        <section class="punchStarter">
          <h2>Why?</h2>
        </section>
        <section class="punchText">
          <p>
            Because we’re fun, art driven, and look so freeking good in our
            outfits !!!
          </p>
        </section>
      </section>
      <section class="stats">
        <table>
          <tr>
            <th>GROWING MARKET</th>
            <th>ART SHOW CASE</th>
            <th>IT’S LIKE A BIG FAMILY</th>
          </tr>
          <tr>
            <td>
              Cosplayers spend more<br />
              than $23.6 billion on<br />
              costumes each year
            </td>
            <td>
              The events host artists<br />
              like illustrators, sculptures,<br />
              writers and other
            </td>
            <td>
              Cosplayers reach out to<br />
              each other for advice and<br />
              complement on their work
            </td>
          </tr>
        </table>
      </section>
      <section class="videoIntro">
        <img class="video" src="images\index_video_img.png" />
      </section>
    </main>
    <aside class="join">
      <section class="ilustration">
        <img class="anime" src="images\index_mayoi_neko.png" width="470px" />
      </section>
      <section class="home_form">
        <table>
          <tr>
            <th>LOG IN</th>
            <th>SIGN IN</th>
          </tr>
        </table>
        <form>
          <input type="text" placeholder="Email" id="emailInput" />
          <input type="text" placeholder="Password" id="passwordInput" />
          <button type="button" class="logInButton">LOG IN</button>
          <p>or</p>
          <button type="button" class="logInWithFacebookButton">
            LOG IN WITH FACEBOOK
          </button>
        </form>
        <p>COSplay</p>
      </section>
    </aside>`;
    container.appendChild(formElem);
  formElem.innerHTML = viewHome;
  
  return formElem;
};
