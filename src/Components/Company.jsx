import React from "react";

function Company() {
  return (
    <div className="lg:h-[40vh] max-h-fit lg:py-0 lg:px-0 px-3 py-20 flex justify-center items-center lg:pt-20 w-auto">
      <div className="flex items-center flex-col lg:flex-row gap-14 justify-center">
        <div className="flex gap-5 lg:gap-14">
          <img
            src="	https://static.canva.com/anon_home/logos/salesforce-grayscale.png"
            width={110}
            alt=""
          />
          <img
            src="	https://static.canva.com/anon_home/logos/sony-music-monochrome.png
"
            alt=""
            width={110}
          />
          <img
            src="https://static.canva.com/anon_home/logos/skyscanner-grayscale.png
"
            alt=""
            width={120}
          />
        </div>
        <div className="flex gap-8 lg:gap-14">
          <img
            src="https://static.canva.com/anon_home/logos/hubspot-monochrome.png
"
            alt=""
            width={90}
          />
          <img
            src="https://static.canva.com/anon_home/logos/danone-grayscale.png
"
            alt=""
            width={90}
            className="mt-3"
          />
          <img
            src="https://static.canva.com/anon_home/logos/reddit-monochrome.png
"
            alt=""
            width={100}
          />
        </div>
      </div>
    </div>
  );
}

export default Company;
