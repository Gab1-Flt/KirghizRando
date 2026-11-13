import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  page: string;
}

export default function LegalModal({ isOpen, onClose, page }: LegalModalProps) {
  if (!isOpen) return null;

  const getContent = () => {
    switch (page) {
      case 'mentions':
        return {
          title: 'Mentions Légales',
          content: (
            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold text-forest-800 mb-3">
                  Éditeur du site
                </h3>
                <p className="text-forest-700">
                  <strong>Raison sociale :</strong> LLC «Cavalier»
                  <br />
                  <strong>Siège social :</strong> 233A, rue Ibraimov, Bichkek, 720011, Kirghizstan
                  <br />
                  <strong>Licence d'État Kirghiz :</strong> 164566-3301-ЖЧК 29768897 ГРЮ №0036400
                  <br />
                  <strong>Email :</strong> kirghizrandoequestre@gmail.com
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-forest-800 mb-3">
                  Directeur de la publication
                </h3>
                <p className="text-forest-700">
                  Nurlan Akparaliev, en qualité de gérant de la société.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-forest-800 mb-3">
                  Hébergeur du site
                </h3>
                <p className="text-forest-700">
                  <strong>Nom :</strong> Netlify, Inc.
                  <br />
                  <strong>Adresse :</strong> 44 Montgomery Street, Suite 300, San Francisco, CA 94104, USA
                  <br />
                  <strong>Site web :</strong> www.netlify.com
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-forest-800 mb-3">
                  Législation applicable
                </h3>
                <p className="text-forest-700">
                  LLC «Cavalier» est une agence de voyage locale kirghize opérant sous la législation de la République kirghize.
                  <br />
                  Les prestations sont régies par le droit kirghiz.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-forest-800 mb-3">
                  Garantie Financière et Assurances
                </h3>
                <p className="text-forest-700">
                  <strong>Garantie Financière :</strong> [À compléter selon la législation kirghize]
                  <br />
                  <strong>Assurance Responsabilité Civile Professionnelle :</strong> [À compléter selon la législation kirghize]
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-forest-800 mb-3">
                  Propriété intellectuelle
                </h3>
                <p className="text-forest-700">
                  L'ensemble des contenus (textes, images, vidéos, logos)
                  présents sur ce site sont protégés par le droit d'auteur et
                  appartiennent à Kirghiz Rando Équestre ou à ses partenaires.
                  Toute reproduction, représentation, modification ou exploitation
                  commerciale, même partielle, sans autorisation préalable écrite
                  est strictement interdite.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-forest-800 mb-3">
                  Crédits photographiques
                </h3>
                <p className="text-forest-700">
                  Les photographies utilisées sur ce site proviennent de Pexels
                  et sont soumises à leur licence respective.
                </p>
              </section>
            </div>
          ),
        };

      case 'confidentialite':
        return {
          title: 'Politique de Confidentialité (RGPD)',
          content: (
            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold text-forest-800 mb-3">
                  Responsable du traitement des données
                </h3>
                <p className="text-forest-700">
                  LLC «Cavalier», 233A, rue Ibraimov, Bichkek, 720011, Kirghizstan, kirghizrandoequestre@gmail.com
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-forest-800 mb-3">
                  1. Données collectées
                </h3>
                <p className="text-forest-700 mb-2">
                  Nous collectons uniquement les données personnelles suivantes :
                </p>
                <ul className="list-disc list-inside text-forest-700 space-y-1">
                  <li>
                    Identité : nom, prénom, adresse email, numéro de téléphone (lorsque vous nous contactez)
                  </li>
                  <li>
                    Données de navigation : cookies techniques nécessaires au fonctionnement du site
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-forest-800 mb-3">
                  2. Finalités du traitement
                </h3>
                <p className="text-forest-700 mb-2">
                  Vos données sont utilisées uniquement pour :
                </p>
                <ul className="list-disc list-inside text-forest-700 space-y-1">
                  <li>
                    Répondre à vos demandes de contact et d'information
                  </li>
                  <li>Gérer la relation client et organiser votre voyage</li>
                  <li>
                    Assurer le bon fonctionnement technique du site (cookies)
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-forest-800 mb-3">
                  3. Base légale du traitement
                </h3>
                <p className="text-forest-700">
                  Le traitement de vos données repose sur l'exécution du contrat
                  de prestation, le respect d'obligations légales, et votre
                  consentement pour les communications marketing.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-forest-800 mb-3">
                  4. Durée de conservation
                </h3>
                <p className="text-forest-700">
                  Vos données sont conservées pendant la durée de la relation
                  commerciale et 3 ans après la dernière interaction, sauf
                  obligation légale de conservation plus longue.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-forest-800 mb-3">
                  5. Vos droits
                </h3>
                <p className="text-forest-700 mb-2">
                  Conformément au RGPD, vous disposez des droits suivants :
                </p>
                <ul className="list-disc list-inside text-forest-700 space-y-1">
                  <li>Droit d'accès à vos données personnelles</li>
                  <li>Droit de rectification des données inexactes</li>
                  <li>Droit à l'effacement (droit à l'oubli)</li>
                  <li>Droit à la limitation du traitement</li>
                  <li>Droit à la portabilité de vos données</li>
                  <li>Droit d'opposition au traitement</li>
                  <li>
                    Droit de définir des directives post-mortem
                  </li>
                </ul>
                <p className="text-forest-700 mt-3">
                  Pour exercer ces droits, contactez-nous à
                  kirghizrandoequestre@gmail.com ou par courrier à notre adresse.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-forest-800 mb-3">
                  6. Sécurité des données
                </h3>
                <p className="text-forest-700">
                  Nous mettons en œuvre des mesures techniques et
                  organisationnelles appropriées pour protéger vos données contre
                  toute perte, utilisation abusive ou accès non autorisé.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-forest-800 mb-3">
                  7. Cookies
                </h3>
                <p className="text-forest-700">
                  Notre site utilise des cookies pour améliorer votre expérience
                  de navigation. Vous pouvez gérer vos préférences via la bannière
                  de consentement ou les paramètres de votre navigateur.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-forest-800 mb-3">
                  8. Réclamation
                </h3>
                <p className="text-forest-700">
                  Si vous estimez que vos droits ne sont pas respectés, vous
                  pouvez déposer une réclamation auprès de la CNIL (Commission
                  Nationale de l'Informatique et des Libertés) : www.cnil.fr
                </p>
              </section>
            </div>
          ),
        };

      case 'cgv':
        return {
          title: 'Conditions Générales de Vente',
          content: (
            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold text-forest-800 mb-3">
                  Article 1 - Objet
                </h3>
                <p className="text-forest-700">
                  Les présentes Conditions Générales de Vente (CGV) régissent les
                  relations contractuelles entre LLC «Cavalier», agence de voyage locale
                  au Kirghizistan (Licence d'État 164566-3301-ЖЧК 29768897 ГРЮ №0036400),
                  et ses clients pour l'organisation de séjours équestres au Kirghizistan.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-forest-800 mb-3">
                  Article 2 - Prix
                </h3>
                <p className="text-forest-700">
                  Les prix ne sont pas affichés sur le site. Pour obtenir un devis détaillé et personnalisé,
                  veuillez nous contacter directement par email ou WhatsApp.
                </p>
                <p className="text-forest-700 mt-3">
                  Les tarifs comprennent généralement : l'hébergement, les repas, l'encadrement par un guide certifié,
                  la location des chevaux, les transferts internes et l'assurance rapatriement.
                </p>
                <p className="text-forest-700 mt-2">
                  Sont exclus : les vols internationaux, les assurances annulation/bagages,
                  les boissons alcoolisées et les dépenses personnelles.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-forest-800 mb-3">
                  Article 3 - Réservation et paiement
                </h3>
                <p className="text-forest-700 mb-3 font-semibold">
                  <strong>Important :</strong> Toute réservation nécessite impérativement un contact préalable avec notre agence
                  par email (kirghizrandoequestre@gmail.com) ou WhatsApp (+996 (0) 773 174 758).
                </p>
                <p className="text-forest-700 mb-3">
                  Après validation de votre demande et réception du devis personnalisé, vous devrez verser
                  un acompte de 30% du prix du voyage pour confirmer votre réservation.
                </p>
                <p className="text-forest-700 mb-3">
                  Vous pouvez verser cet acompte par virement sur le compte de notre agence au Kirghizistan :
                </p>
                <p className="text-forest-700 font-semibold mb-3">
                  KICB - KYRGYZ INVESTMENT AND CREDIT BANK<br />
                  Compte № 1280016032637681
                </p>
                <p className="text-forest-700">
                  Le reste du montant devra obligatoirement être réglé avant le début du voyage en liquide.
                </p>
                <p className="text-forest-700 mt-3 text-sm italic">
                  <strong>Attention :</strong> Très souvent le départ d'Europe doit se faire un jour avant le début du
                  circuit car à cause du décalage horaire vous arrivez le jour après votre départ.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-forest-800 mb-3">
                  Article 4 - Annulation par le client
                </h3>
                <p className="text-forest-700 mb-3">
                  Toute annulation doit être notifiée par écrit. En cas d'annulation,
                  les sommes suivantes seront retenues sur l'acompte versé :
                </p>
                <ul className="list-disc list-inside text-forest-700 space-y-1">
                  <li>En cas d'annulation plus d'un mois avant la date du voyage : <strong>20%</strong> du prix de l'acompte versé seront retenus</li>
                  <li>De 30 à 7 jours avant la date du premier jour de circuit : <strong>50%</strong> du prix de l'acompte versé seront retenus</li>
                  <li>Moins de 7 jours avant le départ : la <strong>totalité</strong> du prix de l'acompte versé sera retenue</li>
                </ul>
                <p className="text-forest-700 mt-3 font-semibold">
                  Pas de remboursements possibles après le début du voyage.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-forest-800 mb-3">
                  Article 5 - Annulation par notre agence
                </h3>
                <p className="text-forest-700">
                  Notre agence se réserve le droit d'annuler un voyage si celui-ci ne peut pas être réalisé
                  en cas de forces majeures (guerre, actes de terrorisme, grèves, catastrophes
                  naturelles/climatiques…).
                </p>
                <p className="text-forest-700 mt-3 font-semibold">
                  Dans ce cas, notre agence rembourse au client la totalité de l'acompte versé.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-forest-800 mb-3">
                  Article 6 - Modifications
                </h3>
                <p className="text-forest-700">
                  Kirghiz Rando Équestre se réserve le droit de modifier
                  l'itinéraire pour des raisons de sécurité, météorologiques ou
                  techniques, sans que cela n'ouvre droit à remboursement.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-forest-800 mb-3">
                  Article 7 - Responsabilité et assurances
                </h3>
                <p className="text-forest-700">
                  LLC «Cavalier» opère selon la législation de la République kirghize.
                </p>
                <p className="text-forest-700 mt-3">
                  <strong>Assurances :</strong> Toutes les informations concernant les assurances (rapatriement, responsabilité civile professionnelle, garantie financière)
                  sont à vérifier et seront communiquées sur demande lors de votre prise de contact avec l'agence.
                </p>
                <p className="text-forest-700 mt-3">
                  Il est fortement recommandé aux participants de souscrire individuellement une assurance annulation/bagages/assistance avant le départ.
                </p>
              </section>



              <section>
                <h3 className="text-xl font-semibold text-forest-800 mb-3">
                  Article 8 - Réclamations et litiges
                </h3>
                <p className="text-forest-700">
                  Toute réclamation doit être adressée par écrit dans les 30 jours
                  suivant le retour. En cas de litige, les parties s'efforceront
                  de trouver une solution amiable.
                </p>
                <p className="text-forest-700 mt-3">
                  <strong>Droit applicable :</strong> Les présentes conditions sont régies par le droit de la République kirghize.
                  En cas de litige non résolu à l'amiable, les tribunaux compétents de Bichkek, Kirghizstan, seront seuls compétents.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-forest-800 mb-3">
                  Article 9 - Médiation
                </h3>
                <p className="text-forest-700">
                  <strong>Note :</strong> Cet article fait référence à la législation française (Code de la consommation).
                  LLC «Cavalier» étant une agence kirghize, la médiation s'effectuera selon les dispositions
                  de la législation de la République kirghize en vigueur.
                </p>
                <p className="text-forest-700 mt-3 text-sm italic">
                  Les références au Médiateur du Tourisme et du Voyage (MTV) et au Code de la consommation français
                  ne s'appliquent pas à notre agence locale kirghize.
                </p>
              </section>
            </div>
          ),
        };

      default:
        return { title: '', content: null };
    }
  };

  const { title, content } = getContent();

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-forest-900/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="absolute inset-0 overflow-y-auto">
        <div className="min-h-full flex items-center justify-center p-4">
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full my-8">
            <div className="sticky top-0 bg-white border-b border-sand-200 rounded-t-2xl px-6 py-4 flex items-center justify-between z-10">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-forest-800">
                {title}
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-sand-100 rounded-lg transition"
                aria-label="Fermer"
              >
                <X className="h-6 w-6 text-forest-700" />
              </button>
            </div>

            <div className="px-6 py-8 md:px-10 md:py-10 text-forest-700 leading-relaxed">
              {content}
            </div>

            <div className="sticky bottom-0 bg-sand-50 border-t border-sand-200 rounded-b-2xl px-6 py-4 flex justify-end">
              <button
                onClick={onClose}
                className="bg-forest-700 hover:bg-forest-800 text-white px-6 py-2.5 rounded-lg font-medium transition"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
