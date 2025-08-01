export default function Download() {
  return (
    <section className="py-5 download_section" id="download-app">
      <div className="container py-5">
        <div className="d-flex flex-column gap-2">
          <h2 className="display-5 text-center fw-bold">
            Have Question In Mind?
          </h2>
          <div className="position-relative">
            <h3 className="text-center display-5 m-auto fw-bold download-desc">
              Download App Now and Let Us Help You
            </h3>
            <div className="download-img m-auto">
              <img src="/images/Vector.png" alt="download app" />
            </div>
          </div>
          <div class="download-app-img m-auto mt-3">
            <img src="/images/downloadApp.png" alt="download app" />
          </div>
        </div>
      </div>
    </section>
  );
}
