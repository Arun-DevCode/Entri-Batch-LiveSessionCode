import UserInput from "../UserInput";
import UserButton from "../UserButton";

function HeroSection() {
  return (
    <>
      <section className="flex justify-center items-center md:mx-auto md:max-w-[80%] md:p-4">
        <div className="">
          {/* User Search Bar */}
          <div className="w-full shadow p-4 flex justify-between items-center space-x-12 mb-12 rounded-lg">
            <div>
              {/* SVG ICONs*/}
              <div>
                <h1>Where</h1>
                <UserInput
                  placeholder={"Search destinations"}
                  typeValue={"text"}
                />
              </div>
            </div>
            {/* Date */}
            <div>
              {/* SVG ICONs*/}
              <div>
                <h1>When</h1>
                <UserInput
                  placeholder={"Search destinations"}
                  typeValue={"date"}
                />
              </div>
            </div>
            {/* Tour */}
            <div>
              {/* SVG ICONs*/}
              <div>
                <h1>Tour Type</h1>
                <UserInput placeholder={"All Tour"} typeValue={"text"} />
              </div>
            </div>

            {/* Search Button */}
            <UserButton name={"Search"} classValue={"btn-primary"} />
          </div>
          {/* Banner */}
          <div className="flex space-x-5 overflow-hidden items-center">
            <div className="flex-1/2 text-start px-12">
              <h1 className="text-5xl text-balance">Grab up to 35% off on your favorite <br /> Destination</h1>
              <p className="text-md text-gray-400 my-4">Limited time offer, don't miss the opportunity.</p>
              <UserButton
                type={"button"}
                classValue={
                  "text-orange-500 shadow px-8 font-medium py-5 bg-white rounded-lg text-center"
                }
                name={"Book Now"}
              />
            </div>
            <img
              src="https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1471"
              alt="Travel"
              className="max-w-4xl flex-1/2"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
