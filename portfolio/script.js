const projectDetails = {
  gesticom: {
    kicker: "PROJET ACADÉMIQUE · WEB & MOBILE",
    title: "GESTICOM — Gestion des PME commerciales",
    intro: "Conception d’une plateforme hybride destinée à faciliter la gestion quotidienne des PME commerciales.",
    technologies: ["Flutter", "PHP", "MySQL"],
    sections: [
      ["Objectif", "Centraliser des opérations de gestion dans une solution accessible depuis une interface mobile et une partie web."],
      ["Périmètre annoncé", "Gestion des stocks, suivi des ventes, facturation et suivi des clients."],
      ["À montrer dans la version finale", "Captures réelles des écrans, aperçu des parcours utilisateurs et liens vers les parties du projet disponibles."]
    ],
    demo: "gesticom"
  },
  couture: {
    kicker: "APPLICATION ANDROID",
    title: "Application de couture",
    intro: "Application mobile réalisée en Java avec Android Studio.",
    technologies: ["Java", "Android Studio"],
    sections: [
      ["Présentation", "Cette fiche servira à expliquer le besoin auquel l’application répond et les fonctionnalités que tu as réellement développées."],
      ["Démonstration", "Ajoute des captures d’écran de l’application ou une courte vidéo pour illustrer son fonctionnement."]
    ],
    demo: "mobile"
  },
  moutons: {
    kicker: "APPLICATION ANDROID",
    title: "Application de vente de moutons",
    intro: "Projet mobile réalisé en Java avec Android Studio, autour de la vente de moutons.",
    technologies: ["Java", "Android Studio"],
    sections: [
      ["Présentation", "La fiche détaillera le public visé, le parcours utilisateur et les fonctions réellement présentes dans ton application."],
      ["Démonstration", "Les captures et la vidéo du projet permettront de montrer l’interface réelle."]
    ],
    demo: "mobile"
  },
  scolaire: {
    kicker: "APPLICATION ANDROID",
    title: "Application de gestion scolaire",
    intro: "Projet mobile réalisé en Java avec Android Studio.",
    technologies: ["Java", "Android Studio"],
    sections: [
      ["Présentation", "La description finale précisera les tâches scolaires prises en charge par ton application, selon les fonctionnalités existantes."],
      ["Démonstration", "Les écrans de l’application seront ajoutés dès que les captures auront été sélectionnées."]
    ],
    demo: "mobile"
  },
  depenses: {
    kicker: "APPLICATION ANDROID",
    title: "Application de suivi des dépenses",
    intro: "Application Android réalisée en Java autour du suivi des dépenses.",
    technologies: ["Java", "Android Studio"],
    sections: [
      ["Présentation", "La fiche expliquera le besoin couvert par l’application et les actions réellement possibles dans sa version actuelle."],
      ["Démonstration", "Une galerie de captures ou une courte vidéo sera privilégiée pour présenter l’application."]
    ],
    demo: "mobile"
  },
  hopital: {
    kicker: "JAVA · PROGRAMMATION ORIENTÉE OBJET",
    title: "Gestion d’un hôpital ou centre de santé",
    intro: "Projet Java mettant en pratique les principes de la programmation orientée objet dans un contexte de gestion d’établissement de santé.",
    technologies: ["Java", "Programmation orientée objet"],
    sections: [
      ["Présentation", "La fiche présentera l’organisation du programme et les fonctionnalités réellement implémentées."],
      ["Démonstration", "Selon le format du projet, nous ajouterons des captures de l’interface ou un aperçu du code pertinent."]
    ],
    demo: "hospital"
  },
  wordpress: {
    kicker: "CRÉATION WEB",
    title: "Site vitrine informatique",
    intro: "Site vitrine réalisé avec WordPress pour présenter une activité ou des services informatiques.",
    technologies: ["WordPress"],
    sections: [
      ["Présentation", "La fiche mettra en avant la structure des pages, le design et les éléments que tu as personnalisés."],
      ["Démonstration", "Si le site est toujours accessible, un lien vers la version en ligne pourra être ajouté. Sinon, nous utiliserons des captures authentiques."]
    ],
    demo: "website"
  }
};

const skillDetails = {
  java: {title:"Java", kicker:"LANGAGE DE PROGRAMMATION", intro:"Utilisé dans plusieurs de tes projets Android et dans ton projet de gestion d’un établissement de santé.", tags:["Programmation orientée objet","Applications Android"], sections:[["Projets associés","Application de couture, vente de moutons, gestion scolaire, suivi des dépenses et gestion d’un hôpital ou centre de santé."],["Exemple pédagogique","Une petite classe Java peut représenter un objet métier et regrouper ses données et comportements. L’exemple sera adapté à tes projets si tu souhaites partager du code."]]},
  android: {title:"Android Studio", kicker:"ENVIRONNEMENT MOBILE", intro:"Environnement utilisé pour développer tes applications Android en Java.", tags:["Java","Android"], sections:[["Dans tes projets","Préparation des écrans, logique applicative et tests sur appareil ou émulateur, selon le travail effectué."],["À présenter","Captures réelles de l’application, parcours de démonstration et éventuellement vidéo."]]},
  flutter: {title:"Flutter", kicker:"DÉVELOPPEMENT MULTIPLATEFORME", intro:"Technologie utilisée pour le volet mobile de GESTICOM.", tags:["Flutter","Dart"], sections:[["Projet associé","GESTICOM."],["À présenter","Structure de l’interface et parcours fonctionnels réellement développés. Le langage Dart est associé à Flutter."]]},
  web: {title:"HTML, CSS et JavaScript", kicker:"DÉVELOPPEMENT WEB", intro:"Technologies pour structurer, mettre en forme et rendre interactives les interfaces web.", tags:["HTML","CSS","JavaScript"], sections:[["Dans le portfolio","HTML structure le contenu, CSS gère le thème responsive et JavaScript pilote les filtres, fenêtres de détail et interactions."],["Mini-exemple","Les interactions de ce portfolio sont réalisées en JavaScript natif, sans framework côté navigateur."]]},
  php: {title:"PHP & MySQL", kicker:"WEB & DONNÉES", intro:"Technologies prévues pour la partie serveur et la base de données de GESTICOM.", tags:["PHP","MySQL"], sections:[["Projet associé","GESTICOM."],["À présenter","Les responsabilités du serveur et la structure de données, en fonction du code réellement disponible. Ne publie jamais de mots de passe ou de données réelles sensibles."]]},
  wordpress: {title:"WordPress", kicker:"CRÉATION DE SITES", intro:"Plateforme utilisée pour réaliser le site vitrine informatique.", tags:["WordPress","Site vitrine"], sections:[["Projet associé","Site vitrine informatique."],["À présenter","Organisation des pages, personnalisation visuelle et résultat réel du site."]]},
  git: {title:"Git & GitHub", kicker:"GESTION DE VERSION", intro:"Outils utiles pour versionner le code et partager des projets.", tags:["Git","GitHub"], sections:[["État actuel","Aucun projet n’est encore publié sur ton compte GitHub, d’après les informations fournies."],["Prochaine étape","Préparer un dépôt par projet partageable, ajouter un README, vérifier les fichiers et retirer les secrets avant publication."]]}
};

const infoDetails = {
  formation: {title:"Ma formation", kicker:"PARCOURS", sections:[["Formation","Licence 3 Informatique de Gestion à ENSUP Afrique."],["Approche","Mon parcours m’a permis d’aborder les systèmes d’information, la programmation et la conception de solutions informatiques."]]},
  domaine: {title:"Mon domaine", kicker:"CENTRES D’INTÉRÊT", sections:[["Développement","Applications Android en Java, développement web et réalisation de solutions mobiles."],["Conception","Comprendre un besoin, structurer une solution et travailler sur une interface utilisable."]]},
  objectif: {title:"Mon objectif", kicker:"PROCHAINE ÉTAPE", sections:[["Emploi","Rejoindre une équipe où je pourrai contribuer à des projets et continuer à progresser."],["Études","Présenter un dossier cohérent pour poursuivre mes études en Master."],["Freelance","Développer progressivement des prestations réalistes autour de mes compétences."]]}
};

const modalBackdrop = document.getElementById("modalBackdrop");
const modalClose = document.getElementById("modalClose");
const modalTitle = document.getElementById("modalTitle");
const modalKicker = document.getElementById("modalKicker");
const modalContent = document.getElementById("modalContent");
let lastFocusedElement = null;

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;"
  }[char]));
}

function openModal(data, options = {}) {
  lastFocusedElement = document.activeElement;
  modalKicker.textContent = data.kicker || "DÉTAILS";
  modalTitle.textContent = data.title || "Détails";
  const intro = data.intro ? `<p>${escapeHtml(data.intro)}</p>` : "";
  const tags = data.technologies || data.tags;
  const tagHtml = tags?.length ? `<div class="modal-tags">${tags.map(tag => `<span>${escapeHtml(tag)}</span>`).join("")}</div>` : "";
  const sections = (data.sections || []).map(([heading, body]) => `<h3>${escapeHtml(heading)}</h3><p>${escapeHtml(body)}</p>`).join("");
  const demo = options.demo ? buildDemo(options.demo) : "";
  const actions = options.actions || "";
  modalContent.innerHTML = `${intro}${tagHtml}${sections}${demo}${actions}`;
  modalBackdrop.hidden = false;
  document.body.classList.add("modal-open");
  modalClose.focus();
}

function closeModal() {
  modalBackdrop.hidden = true;
  document.body.classList.remove("modal-open");
  modalContent.innerHTML = "";
  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") lastFocusedElement.focus();
}

function buildDemo(type) {
  if (type === "gesticom") {
    return `<div class="demo-panel"><h3>Mini-démo interactive — aperçu illustratif</h3><p>Teste un petit calcul de stock. Cette simulation démontre une interaction du portfolio ; elle n’est pas connectée au système réel de GESTICOM.</p><label for="demoStock">Stock initial</label><input id="demoStock" type="number" min="0" value="25"><label for="demoSold">Quantité vendue</label><input id="demoSold" type="number" min="0" value="4"><button class="button button-primary" type="button" id="runStockDemo" style="margin-top:12px">Calculer le stock restant</button><div class="demo-result" id="stockResult" aria-live="polite">Stock restant : 21 unités</div><p class="demo-disclaimer">Exemple pédagogique, pas une capture ni une fonctionnalité authentifiée de l’application.</p></div>`;
  }
  if (type === "mobile") {
    return `<div class="demo-panel"><h3>Présentation interactive</h3><p>Les applications Android ne s’exécutent pas directement dans cette page. Choisis ce que tu souhaites consulter en attendant l’ajout des fichiers réels.</p><label for="mobileView">Contenu à afficher</label><select id="mobileView"><option value="screens">Captures d’écran</option><option value="video">Vidéo de démonstration</option><option value="apk">Informations sur l’APK</option></select><div class="demo-result" id="mobileResult" aria-live="polite">Les captures réelles seront ajoutées dans le dossier images du projet.</div><p class="demo-disclaimer">Cette interaction est un aperçu de présentation, pas l’exécution de l’application Android.</p></div>`;
  }
  if (type === "hospital") {
    return `<div class="demo-panel"><h3>Mini-démo Java — modèle pédagogique</h3><p>Ce formulaire illustre un enregistrement fictif et localement simulé. Il ne représente pas la base de données réelle du projet.</p><label for="patientName">Nom fictif</label><input id="patientName" type="text" placeholder="Ex. : Patient Démo"><label for="serviceName">Service</label><select id="serviceName"><option>Consultation</option><option>Accueil</option><option>Suivi</option></select><button class="button button-primary" id="runPatientDemo" type="button" style="margin-top:12px">Créer l’aperçu</button><div class="demo-result" id="patientResult" aria-live="polite">Aucune fiche créée.</div><p class="demo-disclaimer">N’utilise pas de données médicales ou personnelles réelles dans cette démonstration.</p></div>`;
  }
  if (type === "website") {
    return `<div class="demo-panel"><h3>Aperçu de structure de site</h3><p>Cette interaction montre une structure illustrative. Elle ne remplace pas le lien vers le site WordPress réel.</p><label for="sitePage">Choisir une page</label><select id="sitePage"><option value="Accueil">Accueil</option><option value="Services">Services</option><option value="À propos">À propos</option><option value="Contact">Contact</option></select><div class="demo-result" id="siteResult">Page sélectionnée : Accueil</div><p class="demo-disclaimer">Les captures du vrai site seront utilisées dès qu’elles seront disponibles.</p></div>`;
  }
  return "";
}

document.addEventListener("click", event => {
  const projectCard = event.target.closest("[data-project]");
  if (projectCard) {
    const data = projectDetails[projectCard.dataset.project];
    if (data) openModal(data, {demo: data.demo});
  }
  const skillCard = event.target.closest("[data-skill]");
  if (skillCard) {
    const data = skillDetails[skillCard.dataset.skill];
    if (data) openModal(data);
  }
  const infoCard = event.target.closest("[data-info]");
  if (infoCard) {
    const data = infoDetails[infoCard.dataset.info];
    if (data) openModal(data);
  }
});

modalClose.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", event => { if (event.target === modalBackdrop) closeModal(); });
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !modalBackdrop.hidden) closeModal();
});

modalContent.addEventListener("click", event => {
  if (event.target.id === "runStockDemo") {
    const initial = Math.max(0, Number(document.getElementById("demoStock").value) || 0);
    const sold = Math.max(0, Number(document.getElementById("demoSold").value) || 0);
    const remaining = initial - sold;
    document.getElementById("stockResult").textContent = remaining < 0
      ? "La quantité vendue dépasse le stock initial."
      : `Stock restant : ${remaining} unité${remaining === 1 ? "" : "s"}.`;
  }
  if (event.target.id === "runPatientDemo") {
    const name = document.getElementById("patientName").value.trim();
    const service = document.getElementById("serviceName").value;
    document.getElementById("patientResult").textContent = name
      ? `Aperçu fictif : ${name} · Service : ${service}.`
      : "Saisis un nom fictif pour afficher l’aperçu.";
  }
});
modalContent.addEventListener("change", event => {
  if (event.target.id === "mobileView") {
    const messages = {
      screens: "Les captures réelles seront ajoutées dans le dossier images du projet.",
      video: "Une vidéo pourra être intégrée après avoir sélectionné un enregistrement de l’application.",
      apk: "Un APK ne sera proposé que si le fichier est vérifié et si tu souhaites le partager."
    };
    document.getElementById("mobileResult").textContent = messages[event.target.value];
  }
  if (event.target.id === "sitePage") {
    document.getElementById("siteResult").textContent = `Page sélectionnée : ${event.target.value}.`;
  }
});

document.querySelectorAll("[data-filter]").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-filter]").forEach(item => item.classList.toggle("active", item === button));
    const filter = button.dataset.filter;
    document.querySelectorAll(".project-card").forEach(card => {
      const categories = (card.dataset.categories || "").split(" ");
      card.hidden = filter !== "all" && !categories.includes(filter);
    });
  });
});

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Ouvrir le menu");
}));

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("senderName").value.trim();
  const email = document.getElementById("senderEmail").value.trim();
  const message = document.getElementById("senderMessage").value.trim();
  const subject = encodeURIComponent(`Message portfolio — ${name}`);
  const body = encodeURIComponent(`Bonjour Laobe,\n\n${message}\n\nNom : ${name}\nE-mail : ${email}`);
  document.getElementById("formNote").textContent = "Ta messagerie va s’ouvrir. Vérifie le message puis envoie-le.";
  window.location.href = `mailto:Laobesene28@gmail.com?subject=${subject}&body=${body}`;
});

document.getElementById("currentYear").textContent = new Date().getFullYear();

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.12});
  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add("is-visible"));
}

const navLinks = document.querySelectorAll(".nav-link");
const sections = [...document.querySelectorAll("main section[id]")];
if ("IntersectionObserver" in window) {
  const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
      }
    });
  }, {rootMargin:"-35% 0px -55% 0px"});
  sections.forEach(section => navObserver.observe(section));
}
