import Marquee from "react-fast-marquee";
import lottoImg from "@assets/images/sponsors/lotto.png";
import ministryImg from "@assets/images/sponsors/ministry.png";
import skycityImg from "@assets/images/sponsors/skycity.png";
import toddImg from "@assets/images/sponsors/todd.png";

const images = [lottoImg, ministryImg, skycityImg, toddImg]

const Sponsors = () => {

    return (
        <div className="flex flex-col">
            <Marquee autoFill={true} speed={40}>
                {
                    images.map(img => {

                        return (
                            <img
                                key={img.src}
                                src={`${img.src}`}
                                alt="sponsor"
                                className="w-32 max-md:w-12 mx-4"
                            />
                        );

                    })
                }
            </Marquee>
        </div>
    );
};

export default Sponsors;
