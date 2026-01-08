function Container({children, className, ...props}){
    return(
        <div className={`w-6xl max-w-full px-4 mx-auto ${className}`} {...props}>
            {children}
        </div>
    )
}

export default Container;