const Button = ({children}) =>{
    return (
        <>
            <div className="relative">
                <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"/>
                <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Choose File
                </button>
            </div>
        </>

    )
}
export default Button;