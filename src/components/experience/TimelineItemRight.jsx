function TimelineItemRight({timelineItem}) {
    return(
        <div className="flex items-center justify-center gap-8 -my-5">
            <div className="flex-1"></div>
            <div className="flex flex-col items-center relative">
                <div className="timeline-circle w-15">
                    <div className="timeline-circle-inner"></div>
                </div>
                <div className="w-12 h-0.5 box-connector-right"></div>
            </div>
            <div className="flex-1 p-3xl text-accent-dark-blue">
                <div className="timeline-box rounded-xl">
                    <div className="timeline-box-inner rounded-xl p-4 flex flex-col gap-4">
                        <div>
                            <h2 className="text-xl font-bold text-primary-accent">{timelineItem.position}</h2>
                            <h3 className="text-md text-primary-accent">{timelineItem.company}</h3>
                            <p className="text-secondary-accent font-bold">{timelineItem.duration}</p>
                        </div>
                        <p dangerouslySetInnerHTML={{ __html: timelineItem.description }}></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimelineItemRight;