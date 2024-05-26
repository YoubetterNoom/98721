document.addEventListener("DOMContentLoaded", function () {
    const pageFlip = new St.PageFlip(document.getElementById("example"), {
        width: 800,
        height: 700,
        size: "fixed",
        minWidth: 315,
        maxWidth: 1000,
        minHeight: 400,
        maxHeight: 1350,
        drawShadow: true,
        flippingTime: 800,
        usePortrait: true,
        startZIndex: 0,
        autoSize: true,
        maxShadowOpacity: 0.5,
        showCover: true,
        mobileScrollSupport: true,
    });

    pageFlip.loadFromHTML(document.querySelectorAll(".page"));

    document.getElementById('nextBtn').addEventListener('click', () => {
        pageFlip.flipNext('bottom');
    });

    document.getElementById('prevBtn').addEventListener('click', () => {
        pageFlip.flipPrev('bottom');
    });
});
