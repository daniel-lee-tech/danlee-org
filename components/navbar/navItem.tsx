import Link from "next/link";

function NavItem({ item }: { item: INavData }): JSX.Element  {
    return (
        <li className="text-white">
            <Link href={item.href}>
                {item.name}
            </Link>
        </li>
    );
}

interface INavData {
    name: string;
    href: string;
}

export default NavItem;
export type { INavData };