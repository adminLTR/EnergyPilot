export default function Gadget({title, number, units, children}) {
    return (
        <div className="font-bold p-4">
            <h3 className="text-white mb-3">
                {title}
            </h3>
            <p className="text-soft-gray text-3xl mb-2">
                {number}
                {units && <span className="text-blue text-sm">(kWh)</span>}
            </p>    
            {children}
        </div>
    );
}