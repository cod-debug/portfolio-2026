function Button({ children, btnType = "light", ...props }) {
    let output = function () {
        return (
            <div className="learn-more-button-container-light w-fit rounded-2xl">
                <a {...props} className="block learn-more-button w-fit text-primary-accent cursor-pointer px-4 py-2 rounded-xl">
                    {children}
                </a>
            </div>
        );
    };

    switch (btnType) {
        case "primary":
            output = function () {
                return (
                    <div className="learn-more-button-container-dark p-0.5 rounded-sm text-white">
                        <a className="block rounded-sm px-3 bg-accent-blue py-1" {...props}>
                            {children}
                        </a>
                    </div>
                );
            };
            break;
    }

    return output();
}

export default Button;
