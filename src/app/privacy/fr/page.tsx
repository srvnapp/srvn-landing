import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité — SRVN",
  description: "Politique de confidentialité — SRVN Digital Inc.",
};

// French version of /privacy. The root layout sets lang="en", so lang is set on
// the wrapper here for screen readers and browser translation. Section numbers
// come from the .legal CSS counter and must keep matching the English page.
export default function PrivacyFr() {
  return (
    <div className="container" lang="fr-CA">
      <nav>
        <Link className="nav-logo" href="/">
          SRVN
        </Link>
        <Link className="back-link" href="/">
          ← Retour
        </Link>
      </nav>

      <article className="legal">
        <header className="legal-header">
          <h1>Politique de confidentialité de SRVN</h1>
          <p className="legal-meta">
            Date d’entrée en vigueur : 1er novembre 2026 · SRVN Digital Inc. · <Link href="/privacy" lang="en">English</Link>
          </p>
        </header>

        <section className="legal-intro">
          <p>SRVN (également appelé « Srvnapp », « nous », « notre » ou « nos ») est un service de découverte de restaurants et d’expériences culinaires exploité par SRVN Digital Inc. La présente politique décrit la façon dont nous recueillons, utilisons, communiquons, conservons et protégeons les renseignements personnels lorsque vous utilisez l’application mobile SRVN, notre site <Link href="/">srvnapp.com</Link>, notre service de soutien et les fonctionnalités connexes (ensemble, les « Services »).</p>
          <p>L’essentiel : SRVN est réservé aux personnes âgées d’au moins 18 ans. Les profils et les avis font partie d’une communauté sociale et sont visibles par d’autres utilisateurs. Vous choisissez d’ajouter ou non des identifiants de réseaux sociaux et d’autoriser ou non l’accès à la localisation de votre appareil. Notre infrastructure principale et notre base de données sont hébergées aux États-Unis. Lorsque vous supprimez votre compte, les renseignements liés au compte sont retirés des systèmes actifs, mais les noms de plats et les photographies de plats peuvent rester disponibles comme contenu autonome de référence sur les restaurants. Les modalités sont expliquées ci-dessous.</p>
        </section>

        <section>
          <h2>Responsable des renseignements personnels</h2>
          <p>SRVN Digital Inc. est responsable des renseignements personnels traités dans le cadre des Services. Il s’agit d’une société constituée sous le régime fédéral canadien, dont le siège social est situé au 108 Peter St, bureau 1020, Toronto (Ontario) M5V 0W2, Canada.</p>
          <p>Pour toute question, demande ou plainte concernant la confidentialité, écrivez à <a href="mailto:support@srvnapp.com">support@srvnapp.com</a> ou utilisez notre <Link href="/support">formulaire de soutien</Link>. Les demandes relatives aux renseignements personnels reçues par ces moyens sont acheminées à SRVN pour traitement.</p>
        </section>

        <section>
          <h2>Renseignements recueillis</h2>
          <p>Nous recueillons les renseignements que vous nous fournissez, ceux qui découlent de votre utilisation des Services et certaines données provenant des services que vous choisissez de connecter.</p>
          <h3>Compte et identité</h3>
          <p>Ces renseignements peuvent comprendre le nom, le nom d’utilisateur, l’adresse courriel, le numéro de téléphone, la date de naissance, la photo de profil, les préférences, les cuisines sélectionnées, la ville choisie, les éléments d’authentification, les identifiants du compte et les confirmations d’acceptation de nos Conditions d’utilisation et de la présente politique. La date de naissance sert à déterminer l’admissibilité; elle n’apparaît pas sur le profil public.</p>
          <p>Si vous vous connectez par Google ou Apple, nous recevons les identifiants d’authentification et les renseignements de compte que le fournisseur rend accessibles, selon les réglages et choix applicables. Nous n’obtenons pas votre mot de passe Google ou Apple.</p>
          <h3>Contenu et activité sociale</h3>
          <p>Nous traitons les avis sur les restaurants et les plats, les évaluations, les textes, les noms et prix de plats fournis, les photos et vidéos téléversées, les commentaires et réponses, les mentions « J’aime », les abonnements, les abonnés, les blocages, les restaurants enregistrés, les activités de partage et les signalements. Nous traitons également les identifiants ou liens Instagram et TikTok que vous décidez d’ajouter à votre profil.</p>
          <p>Vos publications peuvent révéler vos préférences et habitudes. Évitez d’y inclure des renseignements privés concernant vous-même ou un tiers que vous ne souhaitez pas rendre publics.</p>
          <h3>Localisation et recherche</h3>
          <p>Lorsque vous autorisez l’accès à la localisation, nous utilisons la position de l’appareil pour proposer des restaurants, des cartes, des itinéraires et des résultats pertinents. La localisation peut être précise selon vos autorisations et réglages. Vous pouvez aussi sélectionner une ville sans autoriser SRVN à accéder à la localisation de votre appareil. Nous traitons les recherches de restaurants, les demandes volontairement soumises à la fonction Découverte par IA et les préférences de recherche.</p>
          <h3>Données techniques, de sécurité et de diagnostic</h3>
          <p>Nous pouvons traiter l’adresse IP, les données sur l’appareil et le système d’exploitation, la version de l’application, les erreurs et plantages, les horodatages, les données de session et d’authentification, la localisation approximative déduite du réseau, les jetons de notification et les journaux techniques pertinents. Ces données servent au fonctionnement, à la sécurité, à la prévention des abus, au dépannage et à l’envoi des notifications autorisées.</p>
          <h3>Soutien et signalements</h3>
          <p>Quand vous nous contactez par le formulaire ou par courriel, nous recevons les renseignements transmis, notamment vos coordonnées, la description du problème, les détails d’un signalement et les pièces jointes. Nous les utilisons pour vous répondre, examiner les plaintes, traiter les enjeux de sécurité et conserver les dossiers nécessaires à leur résolution.</p>
        </section>

        <section>
          <h2>Utilisation des renseignements</h2>
          <p>Nous utilisons les renseignements personnels pour :</p>
          <ul>
            <li>Créer et sécuriser les comptes, vérifier l’admissibilité, authentifier les utilisateurs et conserver les préférences.</li>
            <li>Fournir la découverte de restaurants et de plats, la recherche selon la localisation, les cartes, les listes enregistrées, les fils d’actualité, les profils et les interactions sociales.</li>
            <li>Publier les avis, évaluations, commentaires et médias que vous choisissez de partager et permettre leur consultation et les interactions correspondantes.</li>
            <li>Personnaliser les fils et recommandations selon les interactions, les préférences, la localisation choisie et les demandes soumises.</li>
            <li>Traiter les demandes de Découverte par IA afin de produire des suggestions et explications.</li>
            <li>Envoyer les notifications relatives au compte, à l’activité et à la sécurité selon vos choix et autorisations.</li>
            <li>Recevoir les signalements, faire appliquer les règles communautaires, examiner les abus présumés et protéger les utilisateurs.</li>
            <li>Répondre aux demandes de soutien et aux demandes liées à la vie privée.</li>
            <li>Mesurer la performance, diagnostiquer les erreurs, améliorer la fiabilité et comprendre l’utilisation globale du site.</li>
            <li>Respecter nos obligations légales, défendre nos droits, régler les différends et préserver l’intégrité des Services.</li>
          </ul>
          <p>Les fonctions de recommandation de restaurants ne servent pas à prendre, à votre égard, des décisions ayant des conséquences juridiques ou des effets comparables concernant l’emploi, le crédit, l’admissibilité ou l’accès à des services essentiels.</p>
        </section>

        <section>
          <h2>Consentement et autres fondements juridiques</h2>
          <p>Le fondement juridique dépend de la finalité et de la législation applicable. Au Canada, nous demandons un consentement valable et éclairé lorsque la loi l’exige et nous offrons des choix pour les utilisations facultatives. Au Nigeria, le traitement peut reposer, selon le cas, sur le consentement, l’exécution d’un contrat, une obligation légale, des intérêts légitimes ne prévalant pas sur vos droits ou un autre fondement permis.</p>
          <p>Les autorisations facultatives, notamment pour la localisation de l’appareil ou les notifications, sont demandées au moyen des contrôles appropriés. Vous pouvez ensuite les modifier. Lorsque le traitement repose sur le consentement, vous pouvez le retirer, sous réserve de la loi et de l’effet sur les fonctionnalités qui nécessitent ces renseignements. L’acceptation des Conditions d’utilisation ne constitue pas un consentement général à tous les traitements facultatifs.</p>
        </section>

        <section>
          <h2>Renseignements visibles par d’autres personnes</h2>
          <p>SRVN repose sur le partage de contributions et la découverte communautaire. Les autres utilisateurs peuvent voir votre nom, votre nom d’utilisateur, votre photo de profil publique, vos avis publiés, les photos et vidéos associées ainsi que l’activité sociale rendue visible dans les Services. Vos identifiants ou liens Instagram et TikTok sont visibles lorsque vous choisissez de les ajouter. L’activité publique peut comprendre les évaluations, les commentaires, les mentions « J’aime » et les relations d’abonnement présentées dans l’application.</p>
          <p>Certains profils, avis, restaurants et plats peuvent être partagés par lien. Les destinataires peuvent consulter le contenu dans les Services, sous réserve des exigences d’accès et de la validité du lien. D’autres personnes peuvent enregistrer, copier, capturer ou repartager le contenu visible; nous ne contrôlons pas les copies diffusées à l’extérieur de SRVN.</p>
          <p>Votre adresse courriel, votre numéro de téléphone, votre date de naissance, vos identifiants d’authentification et vos coordonnées GPS précises ne sont pas affichés comme éléments publics du profil. Les restaurants enregistrés et les réglages du compte ne sont pas destinés à figurer dans le profil public.</p>
          <p>La suppression d’un contenu sur SRVN ne supprime pas automatiquement les copies enregistrées ou diffusées indépendamment par des tiers.</p>
        </section>

        <section>
          <h2>Découverte par IA et personnalisation</h2>
          <p>Lorsque vous soumettez une demande en langage naturel à la fonction Découverte par IA, nous traitons votre demande, la localisation choisie ou autorisée et les renseignements pertinents sur les restaurants pour générer des suggestions et explications. Des fournisseurs de technologies d’IA peuvent traiter les renseignements nécessaires pour fournir cette fonction en notre nom.</p>
          <p>Les explications générées par IA sont des suggestions, et non des faits vérifiés indépendamment sur les restaurants. Ne saisissez pas de renseignements personnels sensibles dans ces demandes. Nous utilisons notamment vos interactions, vos abonnements et les restaurants enregistrés pour organiser et personnaliser certaines parties du service.</p>
        </section>

        <section>
          <h2>Communication des renseignements</h2>
          <p>Nous communiquons les renseignements nécessaires au fonctionnement des Services, notamment aux catégories de destinataires suivantes :</p>
          <ul>
            <li>Hébergement et infrastructure : Render (serveur d’application), DigitalOcean (base de données), Redis Cloud et Vercel (site et infrastructure connexe).</li>
            <li>Médias et opérations mobiles : Cloudinary (gestion des médias), Expo EAS et l’infrastructure associée (création de l’application et services liés aux notifications), ainsi que Sentry (surveillance et diagnostics).</li>
            <li>Connexion au compte : Google ou Apple, selon la méthode choisie.</li>
            <li>Fonctionnalités : fournisseurs de données sur les restaurants, de cartographie, de géocodage, de recommandations par IA, de courriels, de SMS et de notifications lorsque cela est nécessaire au service demandé.</li>
            <li>Autres utilisateurs : lorsque vous publiez ou partagez volontairement des éléments du profil, des avis, des médias ou d’autres contributions.</li>
            <li>Obligations légales et sécurité : autorités compétentes, conseillers ou autres destinataires lorsque la loi l’exige ou que cela est nécessaire pour protéger des droits, assurer la sécurité ou enquêter sur des fraudes ou incidents.</li>
            <li>Opérations commerciales : parties participant à une véritable fusion, opération de financement, restructuration ou cession d’actifs, avec des garanties de confidentialité et de légalité appropriées.</li>
          </ul>
          <p>Chaque fournisseur reçoit les données correspondant à son rôle; tous les fournisseurs n’obtiennent pas l’ensemble des renseignements décrits ici. Les sites et services tiers que vous ouvrez, notamment ceux des restaurants, d’Instagram ou de TikTok, appliquent leurs propres règles et politiques de confidentialité.</p>
        </section>

        <section>
          <h2>Analyse du site, diagnostics et technologies d’appareil</h2>
          <p>Nous utilisons Vercel Web Analytics pour comprendre la fréquentation et la performance du site à l’aide de mesures globales conçues pour protéger la vie privée. Vercel Web Analytics est conçu pour fonctionner sans témoins tiers de suivi. Nous utilisons Sentry afin de détecter les plantages, les erreurs et les problèmes de performance. Les diagnostics peuvent contenir des renseignements techniques sur l’appareil, le réseau et le contexte d’un incident.</p>
          <p>Le site et l’application peuvent aussi utiliser des informations de session essentielles, des préférences enregistrées localement, des jetons d’authentification, des identifiants de notification et d’autres technologies nécessaires au fonctionnement et à la sécurité. Les choix concernant les témoins et les autres technologies non essentielles dépendent de la fonctionnalité et de la loi applicable. Vous pouvez gérer les autorisations et certaines préférences dans votre appareil ou dans SRVN.</p>
        </section>

        <section>
          <h2>Traitement et hébergement internationaux</h2>
          <p>SRVN est exploité par une société canadienne, mais utilise une infrastructure internationale. Son serveur d’application est hébergé chez Render, en Virginie (région US East), aux États-Unis, et sa base de données de production chez DigitalOcean, dans la région NYC2 de New York, aux États-Unis. Les renseignements provenant du Canada, y compris du Québec, et du Nigeria sont donc traités à l’extérieur de ces territoires pour ces fonctions.</p>
          <p>D’autres fournisseurs peuvent traiter ou transmettre des renseignements dans d’autres pays selon leurs propres infrastructures. Les lois sur la protection des renseignements varient d’un pays à l’autre et des autorités étrangères peuvent présenter des demandes d’accès légalement autorisées. Nous prenons des mesures pour protéger les traitements internationaux grâce à des garanties contractuelles, organisationnelles et techniques adaptées aux renseignements et aux exigences légales applicables.</p>
        </section>

        <section>
          <h2>Conservation et suppression du compte</h2>
          <p>Nous conservons les renseignements personnels pendant la durée nécessaire à la fourniture des Services et aux fins légitimes de sécurité, d’exploitation, de conformité, de règlement des différends et de respect des lois.</p>
          <p>Suppression du compte : vous pouvez demander la suppression de votre compte dans SRVN. Après la confirmation de la suppression, les renseignements du compte et du profil, ainsi que les données directement liées à ce compte, sont retirés des systèmes actifs de gestion des comptes. L’accès au compte et les associations avec les appareils prennent fin.</p>
          <p>Exception pour le contenu relatif aux plats : SRVN peut continuer à conserver et afficher les noms de plats et les photographies de plats comme contenu autonome de référence sur les restaurants et les plats, pour une durée indéterminée, y compris après la suppression du compte ayant fourni ces éléments. Ces éléments ne sont pas présentés comme un profil d’utilisateur actif ni comme une approbation continue de l’ancien titulaire. L’exception concerne le nom du plat, et non le nom de la personne qui l’a publié. Lorsqu’une photographie conservée permet d’identifier une personne ou contient d’autres renseignements personnels, nous prenons en compte les droits applicables à la suppression et à l’opposition et retirons ou adaptons le contenu lorsque la loi l’exige.</p>
          <p>Autres dossiers : certains renseignements limités peuvent être conservés lorsque cela est raisonnablement nécessaire au respect de la loi, à la sécurité, à la prévention des fraudes ou au traitement des différends et plaintes. Les copies techniques, sauvegardes et caches de tiers peuvent ne pas disparaître au même instant que les données du compte actif; ils sont traités dans le cadre des processus de sauvegarde, de conservation et de suppression applicables. Les copies publiques enregistrées indépendamment par d’autres personnes échappent au contrôle de SRVN.</p>
          <p>Pour poser une question sur des données particulières ou demander l’examen du retrait d’un média conservé, écrivez à <a href="mailto:support@srvnapp.com">support@srvnapp.com</a>.</p>
        </section>

        <section>
          <h2>Vos droits et choix</h2>
          <p>Selon les lois applicables, vous pouvez avoir le droit :</p>
          <ul>
            <li>D’obtenir l’accès aux renseignements personnels que nous détenons et à l’information sur leur utilisation.</li>
            <li>De demander la correction de renseignements inexacts ou incomplets.</li>
            <li>De demander la suppression ou l’anonymisation de renseignements, sous réserve des exceptions légales.</li>
            <li>De retirer un consentement et de vous opposer à certains traitements ou d’en demander la limitation.</li>
            <li>D’obtenir certains renseignements dans un format portable lorsque la loi le prévoit.</li>
            <li>De contester certaines décisions automatisées ou d’obtenir des explications dans les cas prévus par la loi.</li>
            <li>De déposer une plainte auprès d’une autorité compétente.</li>
          </ul>
          <p>Vous pouvez modifier certains renseignements de profil, gérer les autorisations et notifications, supprimer vos propres avis et commentaires, bloquer des utilisateurs et demander la suppression du compte à l’aide des contrôles offerts. Si un droit ne peut être exercé directement dans l’application, communiquez avec <a href="mailto:support@srvnapp.com">support@srvnapp.com</a> ou utilisez <Link href="/support">srvnapp.com/support</Link>.</p>
          <p>Pour protéger vos renseignements, nous pouvons vérifier votre identité avant de communiquer, modifier ou supprimer des données. Nous répondons conformément aux délais et exigences de la loi applicable et expliquons, le cas échéant, toute exception légale.</p>
        </section>

        <section>
          <h2>Communications promotionnelles et de service</h2>
          <p>Nous pouvons vous transmettre les messages nécessaires au fonctionnement du compte, à la sécurité, aux notifications activées, au soutien et aux changements importants des Services. Lorsque nous envoyons des communications électroniques promotionnelles, nous respectons les règles applicables en matière de consentement et de prospection, notamment la Loi canadienne anti-pourriel. Vous pouvez utiliser le mécanisme de désabonnement fourni ou nous contacter pour ne plus recevoir de communications promotionnelles. Ce choix ne bloque pas les communications essentielles à votre compte ou à sa sécurité.</p>
        </section>

        <section>
          <h2>Sécurité des renseignements</h2>
          <p>Nous appliquons des mesures techniques et organisationnelles adaptées à la nature des renseignements et aux risques, notamment des contrôles d’accès, des mesures de surveillance de la sécurité et des procédures de gestion des incidents présumés. Aucun service en ligne ne peut garantir une sécurité absolue. Protégez vos identifiants, mettez vos appareils à jour et signalez toute compromission soupçonnée à <a href="mailto:support@srvnapp.com">support@srvnapp.com</a>.</p>
        </section>

        <section>
          <h2>Âge minimal</h2>
          <p>Les comptes et fonctions associées sont réservés aux personnes âgées d’au moins 18 ans. Nous demandons la date de naissance pour déterminer l’admissibilité. Si nous apprenons qu’un compte appartient à une personne de moins de 18 ans, nous pouvons le restreindre ou le fermer et prendre les mesures appropriées pour supprimer les renseignements concernés, conformément à la loi. Les parents et tuteurs qui croient qu’un mineur utilise SRVN peuvent nous joindre par les moyens indiqués.</p>
        </section>

        <section>
          <h2>Renseignements pour les utilisateurs au Canada</h2>
          <p>Au Canada, les renseignements personnels peuvent être régis par la Loi sur la protection des renseignements personnels et les documents électroniques (LPRPDE) ainsi que, selon la province et l’activité, par des lois provinciales applicables au secteur privé, notamment au Québec, en Alberta et en Colombie-Britannique. Nous respectons les droits à l’accès, à la rectification, au consentement valable et les autres droits applicables.</p>
          <p>Pour les résidents du Québec, la <em>Loi sur la protection des renseignements personnels dans le secteur privé</em> prévoit, lorsque applicable, des protections relatives à la confidentialité, à l’accès, à la rectification, à la portabilité de certains renseignements informatisés et à certaines décisions automatisées. Le traitement transfrontalier est décrit à la section 9. Vous pouvez exercer vos droits ou déposer une plainte auprès de SRVN en utilisant la section 17.</p>
          <p>Si votre préoccupation demeure sans solution après nous avoir contactés, vous pouvez notamment vous adresser au <a href="https://www.priv.gc.ca/fr/signaler-un-probleme/">Commissariat à la protection de la vie privée du Canada</a> ou à l’autorité provinciale compétente, y compris la <a href="https://www.cai.gouv.qc.ca/">Commission d’accès à l’information du Québec</a>, selon le cas.</p>
        </section>

        <section>
          <h2>Renseignements pour les utilisateurs au Nigeria</h2>
          <p>Pour les personnes situées au Nigeria, la Nigeria Data Protection Act 2023 et les règles applicables de la Nigeria Data Protection Commission (NDPC) peuvent régir nos traitements. Selon les circonstances, vous pouvez demander l’accès, la rectification, l’effacement, le retrait du consentement, exercer un droit d’opposition ou de limitation et exercer les autres droits légaux. Nos traitements internationaux sont décrits à la section 9.</p>
          <p>Transmettez vos demandes et plaintes à SRVN en utilisant les coordonnées ci-dessous. Vous pouvez également contacter la <a href="https://ndpc.gov.ng/">Nigeria Data Protection Commission</a> pour les questions relevant de sa compétence.</p>
        </section>

        <section>
          <h2>Modifications et coordonnées</h2>
          <p>Nous pouvons mettre à jour cette politique lorsque les Services, les exigences légales ou nos pratiques évoluent. Nous afficherons la nouvelle date d’entrée en vigueur et donnerons tout avis supplémentaire ou solliciterons tout consentement requis par la loi. Vos droits concernant les renseignements recueillis auparavant demeurent régis par la législation applicable.</p>
          <p>
            SRVN Digital Inc.<br />
            108 Peter St, bureau 1020<br />
            Toronto (Ontario) M5V 0W2<br />
            Canada<br />
            Courriel : <a href="mailto:support@srvnapp.com">support@srvnapp.com</a><br />
            Soutien et demandes de confidentialité : <Link href="/support">https://srvnapp.com/support</Link>
          </p>
        </section>
      </article>

      <footer>
        &copy; 2026 SRVN Digital Inc. &nbsp;&middot;&nbsp;
        <Link href="/terms/fr">Conditions d’utilisation</Link> &nbsp;&middot;&nbsp;
        <Link href="/support">Soutien</Link>
      </footer>
    </div>
  );
}
