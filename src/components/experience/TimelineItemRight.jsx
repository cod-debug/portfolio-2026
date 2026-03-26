function TimelineItemRight({timelineItem}) {
    return(
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:-my-5">
            <div className="flex-1"></div>
            <div className="hidden md:flex flex-col items-center relative">
                <div className="timeline-circle w-15">
                    <div className="timeline-circle-inner"></div>
                </div>
                <div className="w-12 h-0.5 box-connector-right"></div>
            </div>
            <div className="flex-1 p-3xl text-light">
                <div className="timeline-box rounded-xl bg-linear-to-tr from-secondary-background to-primary-background">
                    <div className="timeline-box-inner rounded-xl p-4 flex flex-col gap-4">
                        <div>
                            <h2 className="text-xl font-bold text-secondary-accent">{timelineItem.position}</h2>
                            <h3 className="text-md text-secondary-accent">{timelineItem.company}</h3>
                            <p className="text-muted-labels">{timelineItem.duration}</p>
                        </div>
                        <p dangerouslySetInnerHTML={{ __html: timelineItem.description }}></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimelineItemRight;