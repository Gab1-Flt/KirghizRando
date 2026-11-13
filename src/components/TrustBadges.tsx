import { Award, ShieldCheck, Lock } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    {
      icon: Award,
      title: 'Guide certifié-expérimenté',
      description: 'Professionnels qualifiés avec formation aux premiers secours',
    },
    {
      icon: Lock,
      title: 'Paiement Sécurisé',
      description: 'Transactions cryptées et conformes aux normes bancaires',
    },
    {
      icon: ShieldCheck,
      title: 'Assurance Professionnelle',
      description: 'Garantie responsabilité civile et rapatriement',
    },
  ];

  return (
    <section className="bg-forest-700 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {badges.map((badge, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-sand-400 rounded-full p-4 mb-4">
                <badge.icon className="h-8 w-8 text-forest-800" />
              </div>
              <p className="text-xl font-semibold text-white mb-2">
                {badge.title}
              </p>
              <p className="text-sand-200 text-sm">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
