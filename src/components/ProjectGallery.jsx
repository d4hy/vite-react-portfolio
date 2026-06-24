import { ChevronLeft, ChevronRight, Maximize2, X, ZoomIn, ZoomOut } from "lucide-react";
import { useEffect, useId, useState } from "react";

const defaultImageFrameClassName = (item) =>
  item.featured ? "h-80 md:h-[32rem]" : "h-64";

const defaultImageClassName = () =>
  "h-full w-full object-contain p-3 transition duration-300 group-hover:scale-[1.03]";

export const ProjectGallery = ({
  items,
  gridClassName = "grid grid-cols-1 md:grid-cols-2 gap-5",
  getCardClassName,
  getImageFrameClassName = defaultImageFrameClassName,
  getImageClassName = defaultImageClassName,
  renderEyebrow,
  renderTitle,
}) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const titleId = useId();
  const activeItem = activeIndex === null ? null : items[activeIndex];

  const showPreviousItem = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === null
        ? items.length - 1
        : (currentIndex - 1 + items.length) % items.length
    );
  };

  const showNextItem = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === null ? 0 : (currentIndex + 1) % items.length
    );
  };

  const zoomOut = () => setZoomLevel((currentZoom) => Math.max(1, currentZoom - 0.25));
  const zoomIn = () => setZoomLevel((currentZoom) => Math.min(2.5, currentZoom + 0.25));
  const handleImageWheel = (event) => {
    if (!event.ctrlKey && !event.metaKey) {
      return;
    }

    event.preventDefault();
    if (event.deltaY < 0) {
      zoomIn();
      return;
    }

    zoomOut();
  };

  const toggleImageZoom = () => {
    setZoomLevel((currentZoom) => (currentZoom === 1 ? 1.75 : 1));
  };

  useEffect(() => {
    if (activeIndex !== null) {
      setZoomLevel(1);
    }
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === null) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      const isSystemZoomShortcut = event.ctrlKey || event.metaKey;

      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowLeft") {
        showPreviousItem();
      }

      if (event.key === "ArrowRight") {
        showNextItem();
      }

      if (event.key === "+" || event.key === "=") {
        if (isSystemZoomShortcut) {
          event.preventDefault();
        }

        zoomIn();
      }

      if (event.key === "-") {
        if (isSystemZoomShortcut) {
          event.preventDefault();
        }

        zoomOut();
      }

      if (event.key === "0") {
        if (isSystemZoomShortcut) {
          event.preventDefault();
        }

        setZoomLevel(1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeIndex, items.length]);

  return (
    <>
      <div className={gridClassName}>
        {items.map((item, index) => (
          <button
            type="button"
            key={item.title}
            onClick={() => setActiveIndex(index)}
            aria-label={`Open ${item.title}`}
            className={`group overflow-hidden rounded-lg border border-border bg-background text-left shadow-sm transition hover:-translate-y-1 hover:border-primary/70 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary ${
              item.featured ? "md:col-span-2" : ""
            } ${getCardClassName ? getCardClassName(item) : ""}`}
          >
            <div className={`relative overflow-hidden bg-foreground/5 ${getImageFrameClassName(item)}`}>
              <img
                src={item.image}
                alt={item.alt}
                className={getImageClassName(item)}
              />
              <span className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-background/90 px-3 py-1.5 text-xs font-semibold text-foreground opacity-0 shadow-sm transition group-hover:opacity-100 group-focus-visible:opacity-100">
                <Maximize2 size={14} />
                Open
              </span>
            </div>
            <div className="p-4">
              {renderEyebrow && renderEyebrow(item)}
              <h4 className="font-semibold mb-1 inline-flex items-center gap-2">
                {renderTitle ? renderTitle(item) : item.title}
              </h4>
              <p className="text-sm text-foreground">{item.description}</p>
            </div>
          </button>
        ))}
      </div>

      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-lg border border-border bg-card shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-border p-4">
              <div>
                <p className="text-xs font-semibold uppercase text-primary">
                  Screenshot {activeIndex + 1} of {items.length}
                </p>
                <h4 id={titleId} className="text-lg font-bold">
                  {activeItem.title}
                </h4>
                <p className="mt-1 text-sm text-foreground">{activeItem.description}</p>
              </div>
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:border-primary"
                aria-label="Close gallery image"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 border-b border-border p-3">
              <button
                type="button"
                onClick={zoomOut}
                disabled={zoomLevel <= 1}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-sm font-semibold transition hover:border-primary disabled:cursor-not-allowed disabled:opacity-50"
              >
                <ZoomOut size={15} />
                Zoom out
              </button>
              <button
                type="button"
                onClick={() => setZoomLevel(1)}
                className="rounded-full border border-border bg-background px-3 py-1.5 text-sm font-semibold transition hover:border-primary"
              >
                {Math.round(zoomLevel * 100)}%
              </button>
              <button
                type="button"
                onClick={zoomIn}
                disabled={zoomLevel >= 2.5}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-sm font-semibold transition hover:border-primary disabled:cursor-not-allowed disabled:opacity-50"
              >
                <ZoomIn size={15} />
                Zoom in
              </button>
            </div>

            <div
              className="relative min-h-0 flex-1 overflow-auto bg-black/30 p-3"
              onWheel={handleImageWheel}
            >
              <img
                src={activeItem.image}
                alt={activeItem.alt}
                className={`mx-auto h-auto max-w-none object-contain ${
                  zoomLevel === 1 ? "cursor-zoom-in" : "cursor-zoom-out"
                }`}
                onDoubleClick={toggleImageZoom}
                style={{
                  width: zoomLevel === 1 ? "auto" : `${zoomLevel * 100}%`,
                  maxWidth: zoomLevel === 1 ? "100%" : "none",
                  maxHeight: zoomLevel === 1 ? "68vh" : "none",
                }}
              />
            </div>

            <div className="flex items-center justify-between gap-3 border-t border-border p-4">
              <button
                type="button"
                onClick={showPreviousItem}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold transition hover:border-primary"
              >
                <ChevronLeft size={16} />
                Previous
              </button>
              <button
                type="button"
                onClick={showNextItem}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold transition hover:border-primary"
              >
                Next
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
