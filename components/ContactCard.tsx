interface ContactCardProps {
  heading?: string;
  email?: string;
  phone?: string;
}

export default function ContactCard({
  heading = 'Contact Me',
  email = 'steve.ward@wolfenterprises.co',
  phone = '+1 301 646 5465',
}: ContactCardProps) {
  return (
    <article className="p-4 border-l-4 border-gold bg-light-gray rounded">
      <h2 className="text-xl font-bold mb-2">{heading}</h2>
      <p className="text-muted mb-1">
        <strong>Email:</strong>{' '}
        <a href={`mailto:${email}`} className="text-gold-dark hover:underline">{email}</a>
      </p>
      <p className="text-muted">
        <strong>Phone:</strong>{' '}
        <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-gold-dark hover:underline">{phone}</a>
      </p>
    </article>
  );
}
