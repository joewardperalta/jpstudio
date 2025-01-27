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
          <Title className="text-center">Latest Projects</Title>

          {/* List of projects */}
          <div className="flex gap-20">
            {projects.map((project) => (
              <ProjectCard
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
