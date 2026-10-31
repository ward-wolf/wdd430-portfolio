interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}
        
export default function ProjectCard({title, description, technologies, link}: ProjectCardProps) {
  return (
    <article className="p-4 border-l-4 border-gold bg-light-gray rounded">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-muted mb-3">{description}</p>
      <p className="text-sm text-muted">
        <strong>Technologies:</strong> {technologies.join(', ')}
      </p>
      {link && (
        <p className="mt-2">
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-gold-dark hover:underline">View Project</a>
        </p>
      )}
    </article>
  );
}