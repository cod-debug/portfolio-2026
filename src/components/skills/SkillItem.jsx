function SkillItem({ logo = null, skillName }) {
    return (
        <div className="flex items-center gap-4">
            <div className="skill-icon p-0.25 w-fit rounded-full overflow-hidden">
                {logo && (
                    <img
                        src={logo}
                        alt={`${skillName} Logo`}
                        className="skill-logo w-8 grayscale-75 transition-all duration-300 group-hover:grayscale-0"
                    />
                )}
            </div>
            <div>{skillName}</div>
        </div>
    );
}

export default SkillItem;
