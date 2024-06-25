import { Button } from "..";

export const Banner = () => {
    return (
        <div
            className={
                "flex h-[500px] w-full flex-col items-center justify-center bg-home-bg bg-cover bg-no-repeat px-4 md:px-8 lg:h-[650px] lg:px-14"
            }
        >
            <div className={"max-w-[380px] pb-[30px] text-center md:pb-0"}>
                <h2 className={"mb-5 text-4xl font-normal text-gray"}>
                    Welcome to BrandMasters
                </h2>
                <h3 className={" text-disabled"}>The Ultimate Solution for Your Marketing Needs</h3>
                <p className={"mb-8 text-base text-black"}>
                    At BrandMasters, we understand that a successful marketing strategy requires more than just expertise;
                    it demands creativity, innovation, and a deep understanding of your audience.

                </p>
                <Button>Sign up</Button>
            </div>
        </div>
    );
};
