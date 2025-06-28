import React, { useEffect, useState } from "react";

const categories = ["Skills", "My Projects", "Certifications"];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("Skills");
  const [mediaList, setMediaList] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [certExpanded, setCertExpanded] = useState(false);

  useEffect(() => {
    const storedMedia =
      JSON.parse(localStorage.getItem("portfolioMedia")) || [];
    setMediaList(storedMedia);
  }, []);

  const filteredMedia = mediaList.filter((media) => {
    if (selectedCategory === "My Projects") return media.category === "Project";
    if (selectedCategory === "Certifications")
      return media.category === "Certifications";
    return false;
  });

  return (
    <section className="py-12 px-6 bg-black text-white" id="portfolio">
      <h2 className="text-4xl font-bold text-center mb-10">My Portfolio</h2>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setShowAll(false);
              setCertExpanded(false);
            }}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-xl ${
              selectedCategory === cat
                ? "bg-white text-black border border-white"
                : "bg-orange-500/90 text-white hover:bg-orange-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Section */}
      {selectedCategory === "Skills" && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {mediaList
            .filter((media) => media.category === "Skills")
            .map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-gray-900 p-4 rounded-lg hover:shadow-xl transition duration-300"
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-[100px] h-[100px] object-contain mb-2"
                />
                <p className="text-sm font-medium">{skill.name}</p>
              </div>
            ))}
        </div>
      )}

      {/* Projects & Certifications */}
      {(selectedCategory === "My Projects" ||
        selectedCategory === "Certifications") && (
        <>
          {filteredMedia.length > 0 ? (
            <>
              {selectedCategory === "My Projects" ? (
                <>
                  <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
                    {(showAll ? filteredMedia : filteredMedia.slice(0, 4)).map(
                      (media, idx) => (
                        <div
                          key={idx}
                          className="relative group overflow-hidden rounded-lg border border-gray-700 hover:shadow-lg transition p-6"
                        >
                          {media.type === "video" ? (
                            <video
                              src={media.url}
                              controls
                              className="w-full h-[250px] object-cover"
                            />
                          ) : (
                            <img
                              src={media.url}
                              alt={media.category}
                              className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          )}

                          {/* Hover Description */}
                          {media.description && (
                            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/60 to-transparent text-white opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-4 text-sm">
                              <p>{media.description}</p>
                            </div>
                          )}
                        </div>
                      )
                    )}
                  </div>

                  {/* View More */}
                  {filteredMedia.length > 4 && (
                    <div className="text-center mt-6">
                      <button
                        onClick={() => setShowAll(!showAll)}
                        className="text-3xl text-white hover:text-orange-500 transition"
                        title={showAll ? "Show Less" : "View More"}
                      >
                        {showAll ? "▲" : "⋯"}
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <div className="space-y-4">
                    {(certExpanded
                      ? filteredMedia
                      : filteredMedia.slice(0, 3)
                    ).map((media, idx) => (
                      <div
                        key={idx}
                        className="flex gap-4 items-center bg-gray-900 rounded-lg p-4 border border-gray-700"
                      >
                        <img
                          src={media.url}
                          alt="certificate"
                          className="w-24 h-24 object-cover rounded"
                        />
                        <div>
                          <h4 className="text-lg font-semibold mb-1">
                            {media.description || "Certification"}
                          </h4>
                          <p className="text-sm text-gray-400">
                            Issuer: {media.issuer || "Unknown"} <br />
                            Date: {media.date || "N/A"}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {filteredMedia.length > 3 && (
                    <div className="text-center mt-4">
                      <button
                        onClick={() => setCertExpanded(!certExpanded)}
                        className="text-sm text-white underline hover:text-orange-500"
                      >
                        {certExpanded ? "Show Less" : "View More"}
                      </button>
                    </div>
                  )}
                </>
              )}
            </>
          ) : (
            <p className="text-center text-gray-500 mt-8">
              No {selectedCategory.toLowerCase()} available yet.
            </p>
          )}
        </>
      )}
    </section>
  );
}
