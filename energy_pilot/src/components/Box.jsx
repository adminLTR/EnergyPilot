
export default function Box({children}) {
    return (
        <div className="rounded-md bg-dark-gray p-4">
            {children}
        </div>
    );
}