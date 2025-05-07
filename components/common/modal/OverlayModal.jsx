const OverlayModal = ({ content }) => {
  return (
    <section
      className="fixed inset-0 z-50 flex h-screen w-full cursor-pointer items-center justify-center backdrop-blur-none backdrop-brightness-75 backdrop-filter"
    >
      <div className="w-[90%] xl:w-[50%]" onClick={(e) => e.stopPropagation()}>
        {content}
      </div>
    </section>
  );
};

export default OverlayModal;
