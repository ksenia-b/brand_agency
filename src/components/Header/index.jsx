import { Button } from "..";

import logo from "../../assets/i/logo.png";

export const Header = () => {
    return (
        <div className="bg-white">
            <div className={"mx-auto max-w-screen-xl bg-background"}>
                <div
                    className={
                        "flex h-[60px] flex-row items-center justify-between bg-white px-4 py-3 lg:px-0 md:px-8 lg:px-14"
                    }
                >
                    <img src={logo} alt={"Logo BrandMasters"} />
                    <div className={"flex flex-row gap-[10px]"}>
                        <Button>Users</Button>
                        <Button>Sign up</Button>
                    </div>
                </div>
            </div>
        </div>

    );
};
