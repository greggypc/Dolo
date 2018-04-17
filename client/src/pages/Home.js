import React from "react";
import Hero from "../components/main/Hero";
import Footer from "../components/main/Footer";


const Home = () => (
  <div>
    <section>
  <div class="hero is-info is-mobile">
      <div class="container has-text-centered is-info" id="hero-margin">
        <h1 class="title" id="main-title">
          We Make Donating Simple 
        </h1>
        <h2 class="subtitle" id="subtitle1">
            Welcome to Donation Location. We inspire the people to make a difference in their community by connecting them with local organizations on one easy-to-use platform where they can donate items to charities in their neighborhood.
        </h2>
        <br />
          <div class="container">
            <div class="section-body">
              <div class="columns is-centered">
                <div class="column is-4">
                    <div class="box hero border-shadow is-signup" id="box-signin">
                        <div class="box-body">
                            <span class="icon">
                                <i class="fa fa-user fa-lg" aria-hidden="true"></i>
                            </span>
                          <h2 class="box-title is-left">Individual Sign In</h2>
                          <p>As an individual you can donate items that nonprofit organizations in your local communities might need. </p>
                        </div>
                        <div class="box-footer">
                          <br />
                          <a class="button is-info is-focused is-outlined is-small is-wide" href="./login.html">Get Started</a>
                        </div>
                      </div>
                </div> 
                <div class="column is-4">
                  <div class="box hero border-shadow is-signup" id="box-signin">
                    <div class="box-body">
                        <span class="icon">
                            <i class="fa fa-users fa-lg" aria-hidden="true"></i>
                        </span>
                      <h2 class="box-title">Organization Sign In</h2>
                      <p>As an organization you can submit requests for items that are needed or search through our donation posts. </p>
                    </div>
                    <div class="box-footer is-right">
                      <br />
                      <a class="button is-info is-focused is-outlined is-small is-right" href="./login.html">Get Started</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="hero-buttons is-centered">
              <a class="button is-info is-link is-small" href="./signup.html">
                  <span><strong>Not a member? Create a profile</strong></span>
              </a>
            </div>
      </div>
    </div>
  </section>

  {/* <!-- Experimental Container --> */}
  <section class="section app hero is-light is-mobile">
      <div class="tile is-ancestor is-mobile">
      <div class="tile is-vertical">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification  border-shadow ">
                <p class="title has-text-info has-text-centered">Easily find local charities that are in need.</p>
                <p>Imperdiet dui accumsan sit amet nulla facilisi morbi. Fusce ut placerat orci nulla pellentesque dignissim enim. Libero id faucibus nisl tincidunt eget nullam. Commodo viverra maecenas accumsan lacus vel facilisis.</p>
                <br />
                <p href="./about.html">Learn more</p>
            </article>
            </div>
            <div class="tile is-parent is-vertical">
            <article class="tile is-child notification border-shadow">
              <p class="title has-text-info has-text-centered">Organizations only get donations they need</p>
                <p>Imperdiet dui accumsan sit amet nulla facilisi morbi. Fusce ut placerat orci nulla pellentesque dignissim enim. Libero id faucibus nisl tincidunt eget nullam. Commodo viverra maecenas accumsan lacus vel facilisis.</p>
                <br />
                <p href="./about.html">Learn more</p>
            </article>
          </div>
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification border-shadow">
              <p class="title has-text-info has-text-centered">Community news and contacts</p>
                <p>Imperdiet dui accumsan sit amet nulla facilisi morbi. Fusce ut placerat orci nulla pellentesque dignissim enim. Libero id faucibus nisl tincidunt eget nullam. Commodo viverra maecenas accumsan lacus vel facilisis.</p>
                <br />
                <p href="./about.html">Learn more</p>
            </article>
            </div>
        </div>
      </div>
      </div>

      <div class="tile is-ancestor is-mobile">
        <div class="tile is-parent">
              <article class="tile border-shadow is-child notification is-info stat-tile">
                <div class="level">
                <div class="column level-left">
                  <p class="title has-text-white">Donation Location <strong>Newsletter</strong></p>
                  <p class="subtitle has-text-white">Get notified when we launch!</p>
                </div>
                  <div class="colum level-right">
                    <form>
                      <div class="field is-grouped">
                        <div class="control has-icons-left is-medium">
                          <input type="email" value="" name="email" class="input is-flat required email" placeholder="email address" required="" />
                          <span class="icon is-small is-left">
                              <i class="fa fa-envelope" aria-hidden="true"></i>
                          </span>
                        </div>
                        <div class="control">
                          <div class="is-hidden">
                            <input type="text" name="hp" id="hp" />
                          </div>
                          <input type="hidden" name="list" value="So5UY3O9gHJkq892bn763Tyf4A" />
                          <input type="submit" value="Subscribe" name="submit" id="mc-embedded-subscribe" class="button is-white is-outlined" />
                        </div>
                      </div>
                   </form>
                  </div>
                </div>
                </article>
        </div>
                <div class="tile is-parent is-4">
                <article class="tile border-shadow is-child notification is-info has-text-centered stat-tile">
                    <p class="title has-text-white">Follow Us!</p>
                      <p><i class="fa fa-twitter fa fa-2x"></i></p>
                  </article>
                </div>
      </div>
  </section>
  </div>
);

export default Home;