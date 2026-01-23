import Modal from "../modal/Modal";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Separator from "../Separator";

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
            <div className="grid grid-cols-1 md:grid-cols-4 bg-primary-background">
                <div className="col-span-1 md:col-span-3">
                    {project?.previewImages &&
                    project?.previewImages.length > 0 ? (
                        <Carousel
                            responsive={responsive}
                            infinite={true}
                            className="skill-slider"
                        >
                            {project?.previewImages.map((i, k) => {
                                return (
                                    <div
                                        className="item overflow-hidden rounded-lg"
                                        key={k}
                                    >
                                        <img src={i} alt={`Preview ${k + 1}`} />
                                    </div>
                                );
                            })}
                        </Carousel>
                    ) : (
                        <p>No preview images available.</p>
                    )}
                </div>
                <div className="col-span-1 px-4 pb-4">
                    <div className="contact-section p-2 mt-4 md:mt-0 rounded-lg">
                        <div className="contact-inner p-6 rounded-lg">
                            <h2 className="md:text-2xl text-primary-text font-bold">
                                {project?.title}
                            </h2>
                            <Separator className="my-2" />
                            <p
                                className="text-accent-dark-blue text-sm md:text-lg"
                                dangerouslySetInnerHTML={{
                                    __html: project?.description,
                                }}
                            ></p>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default PreviewImagesModal;
