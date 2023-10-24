export default function LinkButton({children, img, active}) {
    return (
        <div className={`flex gap-4 items-center font-bold p-2 my-1 pill link ${active?'active text-white':'text-light-gray'}`}>
            <img src={img!=null ? img : ''} alt="" width={25} />
            <p>
                {children}
            </p>
        </div>
    );
}