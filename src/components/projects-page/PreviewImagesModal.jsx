import Modal from "../modal/Modal";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function PreviewImagesModal({
    project,
    isOpenPreviewImagesModal,
    setIsOpenPreviewImagesModal,
}) {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    return (
        <Modal
            onClose={() => setIsOpenPreviewImagesModal(false)}
            isOpen={isOpenPreviewImagesModal}
        >
            <div className="rounded-lg p-4 overflow-hidden">
                {project?.previewImages && project?.previewImages.length > 0 ? (
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        className="skill-slider"
                    >
                        {project?.previewImages.map((i, k) => {
                            return (
                                <div className="item overflow-hidden rounded-lg" key={k}>
                                    <img src={i} alt={`Preview ${k + 1}`} />
                                </div>
                            );
                        })}
                    </Carousel>
                ) : (
                    <p>No preview images available.</p>
                )}
                <h2 className="md:text-2xl my-4 text-primary-text font-bold">
                    {project?.title}
                </h2>
                <p className="text-accent-dark-blue" dangerouslySetInnerHTML={{ __html: project?.description }}></p>
            </div>
        </Modal>
    );
}

export default PreviewImagesModal;
