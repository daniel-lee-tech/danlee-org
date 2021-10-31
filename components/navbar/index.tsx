import useScreenSizes from "../../utils/screenSizes";
import { useState } from "react";
import NavItem from "./navItem";
import BurgerButton from "./burgerButton";

import type { IScreenSizes } from "../../utils/screenSizes";
import type { INavData } from "./navItem";

const navItems : INavData[] = [
    { name: "about", href:"about" },
    { name: "career", href:"career" },
    { name: "chronology", href:"chronology" },
    { name: "blog", href:"blog" },
    { name: "photos", href:"photos" },
];

export default function Index(): JSX.Element {
    const screenSizes: IScreenSizes = useScreenSizes();

    const [mobileMenuHidden, setMobileMenuHidden] = useState(true);

    let jsx: JSX.Element = <></>;

    if (screenSizes.isMobileAndSmaller) {
        jsx = (
            <>
                <div className="flex mb-3">
                    <BurgerButton clickHandler={() => setMobileMenuHidden(!mobileMenuHidden)} />
                    <h1 className="text-white">
                        Daniel Lee
                    </h1>
                </div>
                <nav className={`${mobileMenuHidden ? "hidden" : ""} flex flex-col justify-around flex-wrap`}>
                    <ul>
                        {navItems.map((item: INavData) => <NavItem key={item.name} item={item} />)}
                    </ul>
                </nav>
            </>
        );
    }

    if (screenSizes.isBiggerThanMobile) {
        if (mobileMenuHidden == false) setMobileMenuHidden(true);
        jsx = (
            <>
                <nav
                    className={`${mobileMenuHidden ? "" : "hidden"} flex items-center justify-between flex-wrap w-screen`}>
                    <ul className="flex items-center justify-between w-full max-w-lg mx-auto">
                        {navItems.map((item: INavData) => <NavItem key={item.name} item={item} />)}
                    </ul>
                </nav>
            </>
        );
    }

    return jsx;
}