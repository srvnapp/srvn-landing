import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conditions d’utilisation — SRVN",
  description: "Conditions d’utilisation — SRVN Digital Inc.",
};

// French version of /terms. The root layout sets lang="en", so lang is set on the
// wrapper here for screen readers and browser translation. Section numbers come
// from the .legal CSS counter and must keep matching the English page.
export default function TermsFr() {
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
          <h1>Conditions d’utilisation de SRVN</h1>
          <p className="legal-meta">
            Date d’entrée en vigueur : 1er novembre 2026 · SRVN Digital Inc. · <Link href="/terms" lang="en">English</Link>
          </p>
        </header>

        <section className="legal-intro">
          <p>Bienvenue sur SRVN, également appelé Srvnapp. Les présentes Conditions d’utilisation (les « Conditions ») régissent votre accès à l’application mobile SRVN, au site <Link href="/">srvnapp.com</Link> ainsi qu’aux contenus et services connexes (ensemble, les « Services »). Les Services sont fournis par SRVN Digital Inc., société constituée sous le régime fédéral canadien (« SRVN », « nous », « notre » ou « nos »).</p>
          <p>Veuillez lire attentivement ces Conditions. En créant un compte, en acceptant les Conditions dans l’application ou en utilisant une fonction nécessitant un compte, vous acceptez d’être lié par elles. Si vous ne les acceptez pas, ne créez pas de compte et n’utilisez pas ces fonctions. Les présentes Conditions s’appliquent conjointement avec notre <Link href="/privacy/fr">Politique de confidentialité</Link>.</p>
        </section>

        <section>
          <h2>Admissibilité : 18 ans ou plus</h2>
          <p>Vous devez être âgé d’au moins 18 ans pour créer un compte et utiliser les Services nécessitant un compte. Vous devez fournir des renseignements exacts concernant votre compte et votre date de naissance, et posséder la capacité juridique exigée par la loi applicable pour accepter les présentes Conditions. Il est interdit d’utiliser l’identité d’autrui ou un service de connexion tiers pour contourner la règle d’âge. Nous pouvons suspendre ou fermer un compte qui ne respecte pas ces exigences.</p>
        </section>

        <section>
          <h2>Votre compte</h2>
          <p>Vous pouvez vous inscrire au moyen des options proposées, notamment par courriel, téléphone ou connexion tierce, dont Google ou Apple lorsqu’elles sont disponibles. Vous devez fournir des renseignements exacts, protéger la confidentialité de vos identifiants et assumer les activités effectuées au moyen de votre compte, sauf disposition légale contraire. Il est interdit de communiquer vos identifiants, d’usurper l’identité d’un tiers ou d’accéder sans autorisation à un compte.</p>
          <p>Signalez sans délai tout accès suspect à <a href="mailto:support@srvnapp.com">support@srvnapp.com</a>. Nous pouvons appliquer des mesures raisonnables de vérification pour protéger votre compte et respecter les exigences légales.</p>
        </section>

        <section>
          <h2>Description des Services</h2>
          <p>SRVN aide les utilisateurs à trouver des restaurants, à découvrir des plats et à partager des expériences culinaires. Ses fonctionnalités comprennent la recherche de restaurants, la découverte assistée par intelligence artificielle, les évaluations et avis, les photographies et vidéos de plats, les profils sociaux, les abonnements, les mentions « J’aime », les commentaires, les restaurants enregistrés, les notifications et le partage de contenu. Certaines fonctionnalités varient selon l’appareil, la région, l’état du compte ou la disponibilité.</p>
          <p>SRVN est un service de découverte et de communauté. SRVN ne confirme pas qu’un auteur d’avis a réellement fréquenté un restaurant; les avis expriment les opinions des contributeurs. Les renseignements relatifs aux restaurants, aux heures d’ouverture, aux menus, aux prix, aux régimes alimentaires et à la disponibilité peuvent changer. Vérifiez directement auprès du restaurant tout renseignement important avant de vous déplacer ou de vous y fier.</p>
          <p>À moins d’une indication explicite dans une offre distincte, SRVN n’exploite pas les restaurants, ne prend pas de réservations, ne vend pas de repas et ne fournit pas de livraison alimentaire au moyen des présents Services.</p>
        </section>

        <section>
          <h2>Profils publics et interactions sociales</h2>
          <p>SRVN est une plateforme sociale. Votre nom, nom d’utilisateur, photo de profil, avis et autres contributions peuvent être visibles par d’autres utilisateurs. Les identifiants Instagram ou TikTok que vous choisissez d’ajouter peuvent également être visibles. Les destinataires de liens partagés peuvent accéder au contenu concerné, selon les exigences d’accès aux Services et la validité du lien.</p>
          <p>Vous êtes responsable du contenu que vous publiez. Ne communiquez pas de coordonnées personnelles, de renseignements privés concernant autrui, de renseignements confidentiels ou de données que vous n’êtes pas autorisé à révéler. Nous ne pouvons empêcher les autres utilisateurs de prendre des captures d’écran, de copier ou de diffuser du contenu qu’ils peuvent légalement consulter.</p>
          <p>Le fait de suivre un compte ne constitue pas une approbation, une amitié, une vérification d’identité ou une relation professionnelle. Les contrôles de blocage disponibles ne suppriment pas les copies de contenu déjà obtenues par des tiers.</p>
        </section>

        <section>
          <h2>Avis, photographies, vidéos et autres contributions</h2>
          <p>Vous pouvez transmettre des avis écrits, des évaluations, des noms et prix de plats, des photos, des vidéos, des commentaires, des renseignements de profil et d’autres contenus (le « Contenu utilisateur »). Vous êtes responsable de ce contenu et devez détenir les droits, permissions et consentements nécessaires à sa publication. Ne téléversez pas notamment de médias qui portent atteinte au droit d’auteur, révèlent des renseignements confidentiels ou présentent des personnes identifiables d’une manière qui contrevient à leurs droits.</p>
          <p>Les avis doivent exprimer des opinions sincères et être véridiques quant à votre expérience ou au fondement de l’évaluation. Vous ne devez pas prétendre avoir visité un restaurant si ce n’est pas le cas, inventer des expériences ou recevoir une contrepartie non divulguée en échange d’un avis. Les prix, notes et descriptions fournis par les contributeurs ne correspondent pas nécessairement au menu actuel des restaurants.</p>
          <p>Vous restez titulaire des droits sur le contenu original que vous créez, sous réserve des droits de tiers. Le téléversement ne transfère pas à SRVN la propriété de ce contenu.</p>
        </section>

        <section>
          <h2>Licence accordée pour l’exploitation des Services</h2>
          <p>En soumettant du Contenu utilisateur, vous accordez à SRVN une licence non exclusive, mondiale et libre de redevances permettant d’héberger, de conserver, de reproduire, d’adapter le format technique, de distribuer, d’afficher et de rendre disponible ce contenu aux fins de l’exploitation, de la fourniture, de la protection et de la promotion des Services. La licence couvre notamment la présentation dans les fils, pages de restaurants, résultats de recherche, notifications et liens partagés. Elle permet aussi à nos fournisseurs de réaliser ces opérations pour notre compte.</p>
          <p>La licence demeure en vigueur tant que le contenu est disponible dans les Services et prend fin lorsque le contenu concerné est retiré, sauf pour les droits et contenus qui subsistent selon les dispositions ci-dessous, les copies techniques supprimées suivant les processus normaux et les utilisations permises ou exigées par la loi.</p>
          <p>Conservation du contenu relatif aux plats : lorsque vous fournissez un nom de plat et une photographie d’un plat, vous autorisez également SRVN à conserver, héberger, reproduire et afficher ce nom de plat et cette photographie comme contenu autonome de référence sur le restaurant ou le plat, pour une durée indéterminée, y compris après la suppression de votre compte. Cette licence continue ne nous autorise pas à conserver votre compte supprimé en tant que profil actif ni à laisser croire que vous approuvez encore ce contenu. Elle est soumise aux lois applicables sur la vie privée, le droit d’auteur et les autres droits, ainsi qu’aux demandes auxquelles nous devons légalement donner suite. Si une photo représente une autre personne identifiable, vous devez avoir une justification légale pour la soumettre et la partager.</p>
          <p>Vous pouvez retirer vos propres avis et autres contenus grâce aux contrôles disponibles, sous réserve de cette exception relative au contenu des plats et des exigences légales décrites ici et dans notre Politique de confidentialité.</p>
        </section>

        <section>
          <h2>Règles de conduite</h2>
          <p>Vous vous engagez à ne pas :</p>
          <ul>
            <li>Menacer, harceler, intimider, traquer ou discriminer des personnes, ni publier du contenu haineux ou d’exploitation sexuelle.</li>
            <li>Publier du contenu illégal, des menaces de violence, du contenu sexuel impliquant des mineurs ou du contenu mettant autrui en danger.</li>
            <li>Usurper l’identité d’autrui, publier sans autorisation des renseignements privés ou présenter faussement un lien avec un restaurant, une entreprise ou une personne.</li>
            <li>Publier de faux avis, des pourriels, du contenu trompeur ou manipulé, des avis rémunérés non divulgués ou fausser automatiquement les notes et interactions.</li>
            <li>Violer des droits d’auteur, des marques de commerce ou des droits à la vie privée, à l’image ou autres.</li>
            <li>Introduire des logiciels malveillants, tenter un accès non autorisé, contourner les protections techniques ou perturber les Services.</li>
            <li>Extraire systématiquement des données de la plateforme ou des renseignements sur les utilisateurs sans autorisation de SRVN ni autre justification légale.</li>
            <li>Utiliser les Services pour des promotions non sollicitées, des fraudes, de l’hameçonnage ou d’autres messages abusifs.</li>
            <li>Abuser des outils de signalement, notamment en faisant sciemment de faux signalements pour faire taire d’autres utilisateurs.</li>
          </ul>
          <p>Ces règles s’appliquent aux profils, avis, photos, vidéos, commentaires et autres activités. Des règles complémentaires adaptées au contexte peuvent être appliquées pour protéger les utilisateurs et respecter les lois.</p>
        </section>

        <section>
          <h2>Signalements et modération</h2>
          <p>Vous pouvez signaler les avis ou commentaires que vous estimez contraires à nos règles. Lorsqu’un signalement est accepté par le système, le contenu visé est immédiatement masqué au public tant que le dossier de signalement demeure ouvert. Cette mesure provisoire ne signifie pas qu’une infraction aux règles a été établie.</p>
          <p>Un modérateur examine le signalement et peut rétablir le contenu, le supprimer, en limiter la visibilité ou prendre une mesure appropriée à l’égard d’un compte. Nous pouvons examiner les abus du système, dont les signalements malveillants ou coordonnés. Les décisions tiennent compte du contexte, de la sécurité, de la loi applicable, des manquements répétés et des autres facteurs pertinents. Nous pouvons retirer un contenu illégal ou dangereux même sans signalement préalable.</p>
          <p>Pour contester une décision, signaler un contenu ou déposer une plainte, utilisez <Link href="/support">srvnapp.com/support</Link> ou écrivez à <a href="mailto:support@srvnapp.com">support@srvnapp.com</a>. Un signalement ne garantit ni un résultat particulier ni un délai de traitement précis. Lorsque cela est possible et approprié, nous pouvons informer les utilisateurs concernés des décisions importantes de modération.</p>
        </section>

        <section>
          <h2>Recommandations assistées par IA</h2>
          <p>La fonction Découverte par IA peut proposer des restaurants et des explications en fonction des données accessibles à SRVN et de votre demande. Les résultats peuvent être incomplets, inexacts, périmés ou inadaptés. Ils ne garantissent ni les heures d’ouverture, ni la disponibilité, ni l’innocuité alimentaire, ni les ingrédients, allergènes, mesures d’accessibilité ou prix.</p>
          <p>Vous devez vérifier directement auprès du restaurant ou d’une source fiable les renseignements importants, particulièrement ceux concernant les allergies, l’alimentation, la santé ou la sécurité. Ne saisissez pas de données personnelles sensibles dans les demandes à l’IA. Vous ne devez pas présenter un contenu généré comme une affirmation vérifiée par SRVN ou par le restaurant.</p>
        </section>

        <section>
          <h2>Informations et liens de tiers</h2>
          <p>SRVN peut afficher des informations provenant des restaurants, des fournisseurs de cartographie et d’autres tiers à côté du contenu communautaire. Ces sources peuvent comporter des erreurs ou omissions. Les liens peuvent mener à des sites de tiers, des applications de navigation ou des profils sociaux. SRVN ne contrôle pas ces services; leurs propres conditions et politiques s’appliquent.</p>
          <p>Sauf indication explicite, la présence d’un restaurant sur SRVN ne signifie pas qu’il nous commandite ou nous approuve ni que toutes les données à son sujet ont été vérifiées. Les avis externes et résumés générés par IA sont distincts des contributions communautaires de SRVN.</p>
        </section>

        <section>
          <h2>Localisation, autorisations et notifications</h2>
          <p>L’accès à la localisation est facultatif : vous pouvez choisir une ville sans autoriser la localisation de votre appareil. Les fonctions faisant appel à la localisation, à la photothèque ou aux notifications peuvent se comporter différemment si vous refusez ou retirez une autorisation. Les réglages de l’appareil contrôlent généralement la réception des notifications poussées. SRVN peut transmettre des notifications de compte, de sécurité, de soutien et d’activité choisie comme indiqué dans notre Politique de confidentialité.</p>
        </section>

        <section>
          <h2>Propriété intellectuelle de SRVN</h2>
          <p>Sous réserve du Contenu utilisateur et des éléments de tiers, SRVN et ses concédants détiennent les droits sur les Services, notamment les logiciels, la conception, la marque, les signes distinctifs, l’interface et le contenu original. Nous vous accordons une licence limitée, personnelle, non exclusive, non cessible et révocable pour utiliser les Services conformément à leur destination et aux présentes Conditions.</p>
          <p>Vous ne pouvez copier, modifier, revendre, décompiler ou redistribuer les logiciels ou contenus exclusifs de SRVN, sauf dans la mesure permise par la loi applicable ou avec notre autorisation préalable.</p>
        </section>

        <section>
          <h2>Disponibilité et modifications des Services</h2>
          <p>Nous pouvons améliorer, modifier, suspendre ou interrompre des fonctions afin de préserver la sécurité, le fonctionnement, la conformité légale et la qualité. Nous ne garantissons pas que chaque restaurant, plat ou fonction soit toujours disponible ou accessible dans toute région. Les frais d’accès à Internet et de données mobiles sont à votre charge.</p>
        </section>

        <section>
          <h2>Suspension et résiliation</h2>
          <p>Nous pouvons restreindre, suspendre ou fermer un compte lorsque cela est raisonnablement nécessaire en raison d’une menace de sécurité, d’une fraude présumée, d’infractions répétées, de l’inadmissibilité, d’actes illégaux ou d’un risque sérieux pour les utilisateurs ou les Services. Lorsque cela est approprié, nous prenons des mesures proportionnées et permettons de présenter des observations au soutien. Rien ne nous empêche d’agir rapidement pour protéger les personnes ou respecter la loi.</p>
          <p>Vous pouvez cesser d’utiliser SRVN à tout moment et demander la suppression de votre compte dans l’application. La suppression met fin à votre accès au compte. Le traitement des renseignements liés au compte, des noms de plats et des photographies conservées est expliqué dans notre <Link href="/privacy/fr">Politique de confidentialité</Link> et à la section 6 des présentes Conditions.</p>
        </section>

        <section>
          <h2>Absence de garanties supplémentaires</h2>
          <p>Nous nous efforçons de rendre SRVN utile et fiable, mais les Services sont fournis « selon leur disponibilité ». Dans la mesure permise par la loi applicable, nous ne garantissons pas un fonctionnement ininterrompu, des données exemptes d’erreur ou l’exactitude, l’exhaustivité et l’adéquation du Contenu utilisateur, des informations de tiers ou des suggestions générées par IA.</p>
          <p>Aucune disposition des présentes Conditions ne supprime les garanties, recours ou droits qui ne peuvent légalement être exclus en vertu des lois de protection du consommateur ou d’autres lois applicables.</p>
        </section>

        <section>
          <h2>Limitation de responsabilité</h2>
          <p>Dans la mesure permise par la loi, SRVN Digital Inc. n’est pas responsable des pertes indirectes ou consécutives liées à l’utilisation des Services, notamment les occasions ou profits perdus, lorsque de telles exclusions sont légalement autorisées. Rien dans les présentes Conditions ne limite la responsabilité en cas de fraude, de faute intentionnelle ou de responsabilité qui ne peut être légalement limitée, ni vos droits impératifs en matière de confidentialité, de consommation ou d’autres lois applicables.</p>
          <p>Les Services ne remplacent pas les conseils de restaurants ou de professionnels compétents en matière de sécurité alimentaire, d’allergies, de santé ou d’autres questions de sécurité.</p>
        </section>

        <section>
          <h2>Responsabilité liée à votre conduite</h2>
          <p>Dans la mesure permise par la loi, vous êtes responsable des pertes ou réclamations de tiers causées par votre Contenu utilisateur illégal, votre utilisation délibérément abusive des Services ou l’atteinte aux droits d’autrui. Cette disposition ne vous oblige pas à indemniser SRVN pour ses propres actes illégaux ou sa négligence et ne prive pas les consommateurs de leurs protections légales.</p>
        </section>

        <section>
          <h2>Confidentialité</h2>
          <p>Notre <Link href="/privacy/fr">Politique de confidentialité</Link> explique l’utilisation des renseignements personnels, leur hébergement, la nature publique de certaines contributions, la suppression des comptes et la conservation éventuelle des noms et photographies de plats. Veuillez la consulter avant de publier des données personnelles ou des médias.</p>
        </section>

        <section>
          <h2>Mise à jour des Conditions</h2>
          <p>Nous pouvons modifier les présentes Conditions lorsque les Services ou les exigences légales évoluent. Nous publierons la nouvelle date d’entrée en vigueur et fournirons tout avis requis. Si une modification touche substantiellement vos droits, nous respecterons les exigences de notification et de consentement applicables. La poursuite de l’utilisation vaut acceptation des nouvelles Conditions uniquement dans la mesure permise par la loi.</p>
        </section>

        <section>
          <h2>Droit applicable et différends</h2>
          <p>Les présentes Conditions sont généralement régies par les lois de l’Ontario et les lois fédérales canadiennes qui y sont applicables, sans application de règles de conflit de lois qui retireraient des droits impératifs. Les tribunaux de l’Ontario peuvent connaître des différends, sauf lorsque des dispositions impératives de protection du consommateur, de confidentialité ou de procédure permettent d’agir ailleurs ou interdisent une telle restriction. En particulier, les présentes Conditions ne retirent pas les droits impératifs applicables au Québec, dans d’autres provinces canadiennes ou au Nigeria.</p>
          <p>Avant d’engager une procédure, nous vous invitons à communiquer avec <a href="mailto:support@srvnapp.com">support@srvnapp.com</a> afin de rechercher une solution. Cela ne vous empêche pas de saisir une autorité de contrôle ou d’exercer les recours prévus par la loi.</p>
        </section>

        <section>
          <h2>Dispositions générales</h2>
          <p>Si une disposition est jugée inapplicable, les autres continuent de produire leurs effets dans la mesure permise par la loi. L’absence d’exercice immédiat d’un droit ne vaut pas renonciation. Vous ne pouvez céder votre compte ou les droits découlant des présentes Conditions sans notre accord. Nous pouvons transférer nos droits et obligations à l’occasion d’une restructuration réelle ou d’un transfert des Services, conformément à la loi. Les présentes Conditions et les politiques qui y sont expressément intégrées constituent l’accord relatif à l’utilisation des Services.</p>
        </section>

        <section>
          <h2>Coordonnées</h2>
          <p>
            SRVN Digital Inc.<br />
            108 Peter St, bureau 1020<br />
            Toronto (Ontario) M5V 0W2<br />
            Canada<br />
            Courriel : <a href="mailto:support@srvnapp.com">support@srvnapp.com</a><br />
            Soutien et plaintes : <Link href="/support">https://srvnapp.com/support</Link>
          </p>
        </section>
      </article>

      <footer>
        &copy; 2026 SRVN Digital Inc. &nbsp;&middot;&nbsp;
        <Link href="/privacy/fr">Politique de confidentialité</Link> &nbsp;&middot;&nbsp;
        <Link href="/support">Soutien</Link>
      </footer>
    </div>
  );
}
