export default function LinkButton({children, img, active}) {
    return (
        <div className="flex gap-1 items-center">
            <img src={img!=null ? img : ''} alt="" />
            <p>
                {children}
            </p>
        </div>
    );
}