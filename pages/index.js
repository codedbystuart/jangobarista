import Head from 'next/head';
import Image from 'next/image';
import Slider from './components/Home/Slider';
import OurStory from './components/Home/OurStory';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jango Barista</title>
        <meta name="description" content="Jango Barista is a platform to educate baristas and the coffee lovers the definition quality of coffee means and how to archieve it." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Slider />

      <section className="ftco-intro">
    		<div className="container-wrap">
    			<div className="wrap d-md-flex align-items-xl-end">
    				<div className="info">
    					<div className="row no-gutters">
    						<div className="col-md-4 d-flex ftco-animate">
    							<div className="icon"><span className="icon-phone"></span></div>
    							<div className="text">
    								<h3>+256 7xxxxxxx</h3>
    								<p>A Jungle Barista website is here!.</p>
    							</div>
    						</div>
    						<div className="col-md-4 d-flex ftco-animate">
    							<div className="icon"><span className="icon-my_location"></span></div>
    							<div className="text">
    								<h3>110 7th Street  industrial Area</h3>
    								<p> 203 Fake St. Mountain View, San Francisco, California, USA</p>
    							</div>
    						</div>
    						<div className="col-md-4 d-flex ftco-animate">
    							<div className="icon"><span className="icon-clock-o"></span></div>
    							<div className="text">
    								<h3>Open Monday-Friday</h3>
    								<p>8:00am - 9:00pm</p>
    							</div>
    						</div>
    					</div>
    				</div>

            </div>
    		</div>
    	</section>

      <OurStory />
    </div>
  )
}
