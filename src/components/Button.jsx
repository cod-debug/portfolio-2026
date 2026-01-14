import { Link } from "react-router-dom";

function Button({ className, link, children, btnType = "light", ...props }) {
    let output = function () {
        return (
            <div className="learn-more-button-container-light w-fit rounded-2xl {$cl}">
                {link && (
                    <Link
                        to={link}
                        {...props}
                        className={`block learn-more-button w-fit text-accent-dark-blue cursor-pointer px-4 py-2 rounded-xl tracking-wider font-medium ${
                            className || ""
                        }`}
                    >
                        {children}
                    </Link>
                )}
                {props.href && (
                    <a
                        {...props}
                        className={`block learn-more-button w-fit text-accent-dark-blue cursor-pointer px-4 py-2 rounded-xl tracking-wider font-medium ${
                            className || ""
                        }`}
                    >
                        {children}
                    </a>
                )}
                {!props.href && !link && (
                    <div
                        {...props}
                        className={`block learn-more-button w-fit text-accent-dark-blue cursor-pointer px-4 py-2 rounded-xl tracking-wider font-medium ${
                            className || ""
                        }`}
                    >
                        {children}
                    </div>
                )}
            </div>
        );
    };

    switch (btnType) {
        case "primary":
            output = function () {
                return (
                    <div className="learn-more-button-container-dark p-0.5 rounded-sm text-white">
                        {props.href && (
                            <a
                                className={`block rounded-sm px-3 bg-accent-blue py-1 tracking-wider font-medium ${
                                    className || ""
                                }`}
                                {...props}
                            >
                                {children}
                            </a>
                        )}
                        {!props.href && (
                            <div
                                className={`block rounded-sm px-3 bg-accent-blue py-1 tracking-wider font-medium ${
                                    className || ""
                                }`}
                                {...props}
                            >
                                {children}
                            </div>
                        )}
                    </div>
                );
            };
            break;
        case "light-lighter":
            output = function () {
                return (
                    <div
                        className={`learn-more-button-container-lighter w-fit rounded-2xl ${
                            className || ""
                        }`}
                    >
                        <a
                            {...props}
                            className={`block w-fit text-accent-dark-blue cursor-pointer px-4 py-1 rounded-xl tracking-wider font-medium ${
                                className || ""
                            }`}
                        >
                            {children}
                        </a>
                    </div>
                );
            };
    }

    return output();
}

export default Button;
