import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import ProjectCard from "@/components/ProjectCard";

// JSON data
import projects from "@/data/projects.json";

export default function page() {
  return (
    <main>
      <section>
        <Wrapper>
          <Title className="mb-30 text-center">Latest Projects</Title>

          {/* List of projects */}
          <div className="flex flex-col gap-20 tablet:flex-row">
            {projects.map((project) => (
              <ProjectCard
                className="tablet:min-w-min tablet:max-w-max"
                key={project.id}
                img={project.coverImg}
                name={project.name}
                brief={project.brief}
                siteUrl={project.siteUrl}
              />
            ))}
          </div>
        </Wrapper>
      </section>
    </main>
  );
}
