/* eslint-disable no-plusplus */
import postView from './post.js';
import { postController } from '../view-controler/post-controller.js';
/* eslint-disable no-console */
/* eslint-disable no-undef */

export default () => {
  const homeView = `
    <section class="homeBodyWrapper">
      <aside class="leftHome">
        <section class="myProfileTab">
          <table class="linkTab">
            <tr>
              <td class="iconLeft">
                <i class="fas fa-user-circle"></i>
              </td>
              <td class="rightText">
                <p>LoggedUser</p>
              </td>
            </tr>
            <tr>
              <td class="iconLeft">
                <i class="fas fa-user-friends"></i>
              </td>
              <td class="rightText">
                <p>Friends</p>
              </td>
            </tr>
            <tr>
              <td class="iconLeft">
                <i class="fas fa-users"></i>
              </td>
              <td class="rightText">
                <p>Groups</p>
              </td>
            </tr>
            <tr>
              <td class="iconLeft">
                <i class="fas fa-video"></i>
              </td>
              <td class="rightText">
                <p>Videos</p>
              </td>
            </tr>
            <tr>
              <td class="iconLeft">
                <i class="fas fa-calendar-day"></i>
              </td>
              <td class="rightText">
                <p>Events</p>
              </td>
            </tr>
            <tr>
              <td class="iconLeft">
                <i class="fas fa-history"></i>
              </td>
              <td class="rightText">
                <p>History</p>
              </td>
            </tr>          
            <tr>
              <th colspan="2" class="subtitle">My Accounts</th>
            </tr>
            <tr>
              <td class="iconLeft">
                <i class="fas fa-user-circle"></i>
              </td>
              <td class="rightText">
                <p>MySecondaryAccount</p>
              </td>
            </tr>
            <tr>
              <td class="iconLeftLast">
                <i class="fas fa-user-circle"></i>
              </td>
              <td class="rightTextLast">
                <p>MyTradingAccount</p>
              </td>
            </tr>
          </table>
          <table class="iconLinkTab">
            <tr>
              <td class="iconMobile">
                <i class="fas fa-user-circle"></i>
              </td>
              <td class="iconMobile">
                <i class="fas fa-user-friends"></i>
              </td>
              <td class="iconMobile">
                <i class="fas fa-users"></i>
              </td>
              <td class="iconMobile">
                <i class="fas fa-video"></i>
              </td>
              <td class="iconMobile">
                <i class="fas fa-calendar-day"></i>
              </td>
              <td class="iconMobile">
                <i class="fas fa-history"></i>
              </td>
            </tr>
          </table>
          <section class="bottom">
            <hr class="sepUserData">
            <p class="footerSideText">
              @<span class="footerBold">COS</span>play |
              <span class="footerBold">Developed by</span>: Team 4 | Social Network | Laboratoria | 2020
            </p>
          </section>
        </section>
      </aside>
      <main class="mainHome">
        <section class="postContainer" id="postContainer">          
        </section>
      </main>
      <aside></aside>
    </section>
  `;
  // Insertando el template en la interfaz
  const sectionElement = document.createElement('section');
  //sectionElement.classList.add('position');
  sectionElement.innerHTML = homeView;

  // Mostrando todos los post al cargar la página
  const sectionPost = sectionElement.querySelector('#postContainer');
  sectionPost.appendChild(postView());
  
  return sectionElement;  
};
