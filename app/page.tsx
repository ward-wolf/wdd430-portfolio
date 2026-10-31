import ProjectList from '@/components/ProjectList';
const projects = [
  {
    title: 'Books API',
    description: 'A REST API for managing books and authors, with full CRUD routes, request validation, and Swagger documentation.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Swagger'],
    link: 'https://github.com/ward-wolf/cse341-books'
  },
  {
    title: 'Recipe Wizards',
    description: 'A recipe search app that calculates nutrition for each recipe. Users can edit ingredients, enter their own recipes, plan a day of meals, and export the results.',
    technologies: ['JavaScript', 'Node.js', 'Express', 'EJS'],
    link: 'https://github.com/ward-wolf/wdd330-final'
  },
  {
    title: 'Community Service Network',
    description: 'A web app that connects volunteers with service opportunities, with user accounts and listings for organizations, projects, and categories.',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'EJS'],
    link: 'https://github.com/ward-wolf/cse340'
  }
];

export default function Home() { 
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-muted">
          I am a tech executive with businesses in AI/ML, cyber security, and teaching programming. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}
