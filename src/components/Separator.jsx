function Separator({ className, ...props }){
    return(
        <div className={`h-px bg-muted-labels opacity-20 ${className}`} {...props}></div>
    )
}

export default Separator;