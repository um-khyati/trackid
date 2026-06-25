import { useTrack } from "../../context/TrackContext";

function Fork() {
  const { activeTrack, setActiveTrack } = useTrack();

  console.log("Current activeTrack:", activeTrack);

  const handleSelect = (track) => {
    console.log("Selected:", track);

    setActiveTrack(track);

    const section = document.getElementById(`${track}-track`);

    console.log("Found section:", section);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl font-bold text-center mb-12">
          Choose Your Path
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Institution Card */}
          <div
            onClick={() => handleSelect("institution")}
            className={`cursor-pointer rounded-2xl border p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
              activeTrack === "institution"
                ? "border-4 border-red-500 bg-red-100 shadow-2xl"
                : "border-gray-300"
            }`}
          >
            <h3 className="text-2xl font-semibold">
              For Schools & Institutions
            </h3>

            <p className="mt-4 text-gray-600">
              Safety, visibility, and peace of mind for educational
              organizations.
            </p>
          </div>

          {/* Family Card */}
          <div
            onClick={() => handleSelect("family")}
            className={`cursor-pointer rounded-2xl border p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
              activeTrack === "family"
                ? "border-4 border-red-500 bg-red-100 shadow-2xl"
                : "border-gray-300"
            }`}
          >
            <h3 className="text-2xl font-semibold">
              For Families
            </h3>

            <p className="mt-4 text-gray-600">
              A beautiful and secure way to stay connected with loved ones.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Fork;