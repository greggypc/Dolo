import React from "react";
import "../css/style.css";
import Footer from "../components/main/Footer";


const Home = () => (
  <div>
    <section>
  <div className="hero is-info is-mobile">
      <div className="container has-text-centered is-info" id="hero-margin">
        <h1 className="title" id="main-title">
          We Make Donating Simple 
        </h1>
        <h2 className="subtitle" id="subtitle1">
            Welcome to Donation Location. We inspire the people to make a difference in their community by connecting them with local organizations on one easy-to-use platform where they can donate items to charities in their neighborhood.
        </h2>
        <br />
          <div className="container">
            <div className="section-body">
              <div className="columns is-centered">
                <div className="column is-4">
                    <div className="box hero border-shadow is-signup" id="box-signin">
                        <div className="box-body">
                            <span className="icon">
                                <i className="fa fa-user fa-lg" aria-hidden="true"></i>
                            </span>
                          <h2 className="box-title is-left">Individual Sign In</h2>
                          <p>As an individual you can donate items that nonprofit organizations in your local communities might need. </p>
                        </div>
                        <div className="box-footer">
                          <br />
                          <a className="button is-info is-focused is-outlined is-small is-wide" href="./login.html">Get Started</a>
                        </div>
                      </div>
                </div> 
                <div className="column is-4">
                  <div className="box hero border-shadow is-signup" id="box-signin">
                    <div className="box-body">
                        <span className="icon">
                            <i className="fa fa-users fa-lg" aria-hidden="true"></i>
                        </span>
                      <h2 className="box-title">Organization Sign In</h2>
                      <p>As an organization you can submit requests for items that are needed or search through our donation posts. </p>
                    </div>
                    <div className="box-footer is-right">
                      <br />
                      <a className="button is-info is-focused is-outlined is-small is-right" href="./login.html">Get Started</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-buttons is-centered">
              <a className="button is-info is-link is-small" href="./signup.html">
                  <span><strong>Not a member? Create a profile</strong></span>
              </a>
            </div>
      </div>
    </div>
  </section>

  {/* <!-- Experimental Container --> */}
  <section className="section app hero is-light is-mobile">
      <div className="tile is-ancestor is-mobile">
      <div className="tile is-vertical">
        <div className="tile">
          <div className="tile is-parent is-vertical">
            <article className="tile is-child notification  border-shadow ">
                <p className="title has-text-info has-text-centered">Easily find local charities that are in need.</p>
                <p>Imperdiet dui accumsan sit amet nulla facilisi morbi. Fusce ut placerat orci nulla pellentesque dignissim enim. Libero id faucibus nisl tincidunt eget nullam. Commodo viverra maecenas accumsan lacus vel facilisis.</p>
                <br />
                <p href="./about.html">Learn more</p>
            </article>
            </div>
            <div className="tile is-parent is-vertical">
            <article className="tile is-child notification border-shadow">
              <p className="title has-text-info has-text-centered">Organizations only get donations they need</p>
                <p>Imperdiet dui accumsan sit amet nulla facilisi morbi. Fusce ut placerat orci nulla pellentesque dignissim enim. Libero id faucibus nisl tincidunt eget nullam. Commodo viverra maecenas accumsan lacus vel facilisis.</p>
                <br />
                <p href="./about.html">Learn more</p>
            </article>
          </div>
          <div className="tile is-parent is-vertical">
            <article className="tile is-child notification border-shadow">
              <p className="title has-text-info has-text-centered">Community news and contacts</p>
                <p>Imperdiet dui accumsan sit amet nulla facilisi morbi. Fusce ut placerat orci nulla pellentesque dignissim enim. Libero id faucibus nisl tincidunt eget nullam. Commodo viverra maecenas accumsan lacus vel facilisis.</p>
                <br />
                <p href="./about.html">Learn more</p>
            </article>
            </div>
        </div>
      </div>
      </div>

      <div className="tile is-ancestor is-mobile">
        <div className="tile is-parent">
              <article className="tile border-shadow is-child notification is-info stat-tile">
                <div className="level">
                <div className="column level-left">
                  <p className="title has-text-white">Donation Location <strong>Newsletter</strong></p>
                  <p className="subtitle has-text-white">Get notified when we launch!</p>
                </div>
                  <div className="colum level-right">
                    <form>
                      <div className="field is-grouped">
                        <div className="control has-icons-left is-medium">
                          <input type="email" value="" name="email" className="input is-flat required email" placeholder="email address" required="" />
                          <span className="icon is-small is-left">
                              <i className="fa fa-envelope" aria-hidden="true"></i>
                          </span>
                        </div>
                        <div className="control">
                          <div className="is-hidden">
                            <input type="text" name="hp" id="hp" />
                          </div>
                          <input type="hidden" name="list" value="So5UY3O9gHJkq892bn763Tyf4A" />
                          <input type="submit" value="Subscribe" name="submit" id="mc-embedded-subscribe" className="button is-white is-outlined" />
                        </div>
                      </div>
                   </form>
                  </div>
                </div>
                </article>
        </div>
                <div className="tile is-parent is-4">
                <article className="tile border-shadow is-child notification is-info has-text-centered stat-tile">
                    <p className="title has-text-white">Follow Us!</p>
                      <p><i className="fa fa-twitter fa fa-2x"></i></p>
                  </article>
                </div>
      </div>
  </section>
  <Footer />
  </div>
);

export default Home;