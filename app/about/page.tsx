import ContactCard from '@/components/ContactCard';

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-lg text-muted">
        S. Lee Ward is an opera singer turned nuclear engineer turned entrepreneur.
        He has spent his diverse career performing for thousands of people,
        protecting the world from nuclear weapons, managing energy mega projects,
        and building businesses in agriculture, tech, health and fitness, education,
        and more. He is an expert in process optimization and operational efficiency.
        His most recent endeavor is applying his acute knowledge of security and
        threat assessment from the nuclear industry to AI & ML by building
        customizable software that provides operational boundaries for corporate AI
        tools. In his spare time, Lee studies 12 foreign languages, competes in
        ballroom dance competitions, and loves serving around the world with his
        church. He has lived and worked in the US, Russia, the United Arab Emirates,
        and the Philippines.
      </p>
      <div className="mt-8">
        <ContactCard />
      </div>
    </main>
  );
}