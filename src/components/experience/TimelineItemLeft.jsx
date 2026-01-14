function TimelineItemLeft() {
    return(
        <div className="flex items-center justify-center gap-8 -my-5">
            <div className="flex-1 p-3xl text-accent-dark-blue ">
                <div className="timeline-box rounded-xl">
                    <div className="timeline-box-inner rounded-xl p-4 flex flex-col gap-4">
                        <div>
                            <h2 className="text-xl font-bold text-primary-accent">Software Engineer</h2>
                            <h3 className="text-md text-primary-accent">Telcom Live Content, Inc.</h3>
                            <p className="text-secondary-accent font-bold">February 2021 - April 2023 (full-time)</p>
                        </div>
                        <p>Responsible for leading a front-end team, developing and maintaining websites/web applications, and collaborating with Project Managers and System Analysts. Technologies used: <strong>Laravel, CodeIgniter, Nodejs (Express), Vuejs (NuxtJs and Quasar), ReactJs, React Native, Docker.</strong></p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center relative">
                <div className="timeline-circle w-15">
                    <div className="timeline-circle-inner"></div>
                </div>
                <div className="w-12 box-connector-left"></div>
            </div>
            <div className="flex-1"></div>
        </div>
    )
}

export default TimelineItemLeft;