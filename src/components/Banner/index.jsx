import { Button } from "..";

export const Banner = () => {
    return (
        <div
            className={
                "flex h-[500px] w-full flex-col items-center justify-center bg-home-bg bg-cover bg-no-repeat px-4 md:px-8 lg:h-[650px] lg:px-14"
            }
        >
            <div className={"max-w-[380px] pb-[30px] text-center md:pb-0"}>
                <h2 className={"mb-5 text-4xl font-normal text-white"}>
                    Test assignment for front-end developer
                </h2>
                <p className={"mb-8 text-base text-white"}>
                    What defines a good front-end developer is one that has skilled
                    knowledge of HTML, CSS, JS with a vast understanding of User design
                    thinking as they'll be building web interfaces with accessibility in
                    mind. They should also be excited to learn, as the world of Front-End
                    Development keeps evolving.
                </p>
                <Button>Sign up</Button>
            </div>
        </div>
    );
};
