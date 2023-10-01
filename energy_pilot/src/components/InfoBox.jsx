
export default function InfoBox({children, title, number, units}) {
    return (
        <div className="">
            <p className="text-white font-bold">
                {title}
            </p>
            <p className="text-3xl text-soft-gray">
                {number} <span className="text-blue-900">{units}</span>
            </p>
            <p>
                {children}
            </p>
        </div>
    );
}