export default function Home() {
  return (
    <main className="relative w-screen h-screen overflow-hidden bg-black flex items-center justify-center">
      <picture className="w-full h-full block">
        <source media="(min-width: 768px)" srcSet="/desktop.png" />
        <img
          src="/mobile.jpeg"
          alt="Manuveda - Launching Soon"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
      </picture>
    </main>
  );
}

