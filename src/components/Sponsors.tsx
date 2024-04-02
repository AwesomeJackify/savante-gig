import Marquee from "react-fast-marquee";
import useImage from "src/utils/useImage";

const Sponsors = () => {
    const sponsorImages = [
        "lotto.png", "ministry.png", "skycity.png", "todd.png"
    ]

    return (
        <div className="flex flex-col">
            <Marquee autoFill={true}>
                {
                    sponsorImages.map(img => {
                        const { loading, error, image } = useImage(`../assets/images/sponsors/${img}`);
                        if (image) {
                            return (
                                <img
                                    key={img}
                                    src={`${(image as any).src}`}
                                    alt="sponsor"
                                    className="w-52 max-md:w-20"
                                />
                            );
                        }
                    })
                }
            </Marquee>
        </div>
    );
};

export default Sponsors;
