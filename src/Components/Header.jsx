function Header(){
    return(
        <>
            <div className="flex justify-between w-full bg-black items-center border-b border-b-gray-800 p-2 px-32 fixed z-50">
                <div className="[font-family:'Syne'] text-3xl font-bold">Ankit Saini</div>
                <div>
                    <i class="fa-solid fa-bars text-2xl"></i>
                </div>
            </div>
        </>
    )
}

export default Header