"use client";

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Crypto Tracker",
    image: "/projects/crypto.png",
    link: "https://yourproject1.com",
  },
  {
    title: "Portfolio Website",
    image: "/projects/portfolio.png",
    link: "https://yourproject2.com",
  },
  {
    title: "NFT Drop Page",
    image: "/projects/nft.png",
    link: "https://yourproject3.com",
  },
];

const ProjectShowcase = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12 lg:px-24 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-12">My Projects</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map(({ title, image, link }, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-2xl shadow-xl border border-white/10 bg-[#0c0c0c]"
            >
              <Image
                src={image}
                alt={title}
                width={600}
                height={400}
                className="object-cover w-full h-64 group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <Link href={link} target="_blank">
                  <span className="text-white px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full text-sm tracking-wide uppercase hover:bg-white/20 transition">
                    View Project
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
