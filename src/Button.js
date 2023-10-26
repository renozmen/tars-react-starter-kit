import classNames from "classnames"

function Button({ children,variant ='default'}){
    return(
        <button className={classNames({
            "p-4 h-10 flex items-center border-2 border-gray-400 rounded-lg":true,
            "bg-gray-100 ": variant=='default',
            "bg-green-500 hover:bg-green-700 text-white border-aqua-500": variant=="success",
            "bg-red-500 hover:bg-red-700 text-white":variant=="warning",
            "bg-yellow-500 hover:bg-yellow-700 text-white ": variant=="danger"
        })}>{children}</button>
    )
}

export default Button