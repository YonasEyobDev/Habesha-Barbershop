import Container from "./Container";
import Reveal from "./Reveal";

// Shared wrapper: centered gold title, then the section content
export default function Section({ id, title, intro, children }) {
  return (
    <section id={id} className="scroll-mt-20 py-20">
      <Container>
        <Reveal className="mb-12 text-center">
          <h2 className="gold text-4xl font-extrabold md:text-5xl"><span className="u-hover">{title}</span></h2>
          {intro && <p className="muted mx-auto mt-3 max-w-lg">{intro}</p>}
        </Reveal>
        {children}
      </Container>
    </section>
  );
}