function Container({children, className}){
    return(
        <div className={`w-6xl max-w-full px-4 mx-auto ${className}`}>
            {children}
        </div>
    )
}

export default Container;