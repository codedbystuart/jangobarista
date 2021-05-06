const AboutUs = () => {
  return (
    <div>
      <section className="home-slider owl-carousel">
        <div className="slider-item" style={{ backgroundImage: "url(/images/bg_3.jpg)" }} data-stellar-background-ratio="0.5">
          <div className="overlay"></div>
          <div className="container">
            <div className="row slider-text justify-content-center align-items-center">

              <div className="col-md-7 col-sm-12 text-center ftco-animate">
                <h1 className="mb-3 mt-5 bread">About Us</h1>
                <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span> <span>About</span></p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="ftco-about d-md-flex">
        <div className="one-half img" style={{ backgroundImage: "url(images/about.jpg)" }}></div>
        <div className="one-half ftco-animate">
          <div className="overlap">
            <div className="heading-section ftco-animate ">
              <span className="subheading">Discover</span>
              <h2 className="mb-4">Our Story</h2>
            </div>
            <div>
              <p>In my Village Bududa and Uganda, my country people grow coffee. Uganda has one of the best coffee in the world both Arabica and Robusta. However, my people don't take coffee ironically speaking. Most of us Ugandans were raised knowing coffee is just a cash crop.
              But we believe if we can learn to drink and taste our coffee a lot can be improved Economically and innovatively, many lives will be changed, jobs will be created as we believe Value addition will be done at the birthplace and Farmers who are the most important in the value chain will be recognized and appreciated.
              Our mission is to teach people in Our country how to brew coffee better, in restaurants, hotels, offices, and at home. Training is to be done anywhere of convenience once you reach out to Jango Barista, (home, offices, and restaurants, coffee shops, after being authorized by the Owner)
              We are on our way to bring knowledge by offering courses to baristas to improve their brewing skills as we know we Baristas are the face and coffee influencers.
              If Baristas learn to brew coffee better, they can influence people to love coffee and teach how to brew better at their home and offices, and also help coffee lovers brewing from home how to get the best out of their coffee. The training and our learning material are to be engaging, innovative, and easy to understand.
              In addition, we believe our project will improve coffee traceability and sustainability in Uganda as coffee takers will be interested in the origin, and everyone involved in the value chain.
              In the Jungle I was born, the great forests of Mt Elgon Eastern region of Uganda, so I chose Jango the native version of Jungle.
</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
