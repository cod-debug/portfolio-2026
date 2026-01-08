function Button({ children, btnType = "light" }) {
    let output = function () {
        return (
            <div className="learn-more-button-container-light w-fit rounded-2xl">
                <button className="learn-more-button w-fit text-primary-accent cursor-pointer px-4 py-2 rounded-xl">
                    {children}
                </button>
            </div>
        );
    };

    switch (btnType) {
        case "primary":
            output = function () {
                return (
                    <div className="learn-more-button-container-dark p-0.5 rounded-xl text-white">
                        <button className="rounded-xl px-4 py-2">
                            {children}
                        </button>
                    </div>
                );
            };
            break;
    }

    return output();
}

export default Button;
