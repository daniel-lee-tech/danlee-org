import Index from "./navbar";

export default function Layout({ children }: {children: JSX.Element}): JSX.Element {
    return (
        <div className="bg-gray-800 h-full h-screen">
            <Index />
            <main>{children}</main>
        </div>
    );
}