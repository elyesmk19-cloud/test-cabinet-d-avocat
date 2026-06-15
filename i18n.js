(function () {
  'use strict';

  var TRANSLATIONS = {
    fr: {
      /* Navigation */
      'nav.cabinet':     'Cabinet',
      'nav.equipe':      'Équipe',
      'nav.expertises':  'Expertises',
      'nav.contact':     'Contact',

      /* Hero — index */
      'hero.eyebrow':  'Cabinet d\'avocats — Algérie',
      'hero.h1':       'L\'excellence juridique<br>au service de vos droits',
      'hero.subtitle': 'Conseil, plaidoirie et défense de vos intérêts devant toutes juridictions.',
      'hero.cta':      'Prendre contact',

      /* Intro — index */
      'intro.label': 'Le Cabinet',
      'intro.h2':    'Un conseil ancré<br>dans la pratique',
      'intro.text':  'Le cabinet accompagne particuliers, entreprises et institutions dans l\'ensemble de leurs besoins juridiques, du conseil préventif à la défense contentieuse. Nous intervenons devant toutes les juridictions algériennes, y compris dans les litiges opposant nos clients à des personnes publiques ou à l\'État. Notre approche conjugue rigueur académique et sens pratique du dossier : écouter, analyser, défendre avec conviction.',
      'intro.quote': '« Écouter, analyser,\ndéfendre avec conviction. »',

      /* Teasers — index */
      'teaser1.label': 'Notre équipe',
      'teaser1.h3':    'Des avocats engagés dans chaque dossier',
      'teaser1.text':  'Menée par Narimene Moukneche, docteure en droit public et habilitée à diriger des recherches, notre équipe réunit des profils complémentaires couvrant l\'ensemble des disciplines du droit.',
      'teaser1.cta':   'Découvrir l\'équipe',
      'teaser2.label': 'Nos expertises',
      'teaser2.h3':    'Un accompagnement sur l\'ensemble du spectre juridique',
      'teaser2.text':  'Droit de la famille, droit des affaires, droit administratif, défense pénale, droit du travail, audit et prévention : nous traitons chaque affaire avec la même exigence.',
      'teaser2.cta':   'Voir nos domaines d\'intervention',

      /* Équipe — en-tête de page */
      'equipe.header.label': 'Notre équipe',
      'equipe.header.h1':    'Des avocats engagés<br>dans chaque dossier',
      'equipe.header.p':     'Une équipe pluridisciplinaire au service des particuliers, des entreprises et des institutions, formée à la rigueur académique et à la pratique judiciaire.',

      /* Équipe — membres */
      'member1.role':    'Avocate au Barreau d\'Algérie',
      'member1.degree1': 'Doctorat en droit public',
      'member1.degree2': 'Habilitation à Diriger des Recherches (HDR)',
      'member1.degree3': 'Master en Management des Organisations',
      'member1.degree4': 'Master en Droit des Affaires',
      'member1.bio':     'Titulaire d\'un doctorat en droit public et de l\'Habilitation à Diriger des Recherches, Maître Moukneche conjugue une expertise académique reconnue à une pratique contentieuse étendue. Elle conseille entreprises, institutions et particuliers sur les questions de droit public, de droit des affaires et de procédure devant les juridictions administratives et judiciaires.',

      'member2.role':    'Avocat au Barreau d\'Algérie',
      'member2.degree1': 'Master en droit privé — [Université]',
      'member2.degree2': 'Licence en sciences juridiques',
      'member2.bio':     'Leila Boudjarda intervient en droit civil et en droit de la famille, assistant les particuliers dans leurs démarches judiciaires et amiables. Il accompagne ses clients avec méthode dans les procédures de divorce, de garde d\'enfants et de règlement successoral.',

      'member3.role':    'Avocate au Barreau d\'Algérie',
      'member3.degree1': 'Master en droit pénal — [Université]',
      'member3.degree2': 'Licence en sciences juridiques',
      'member3.bio':     'Sofia Cherif est spécialisée en droit pénal. Elle assure la défense de ses clients à tous les stades de la procédure, de l\'instruction au jugement en appel, en veillant au strict respect des droits de la défense.',

      /* Expertises — en-tête */
      'exp.header.label': 'Domaines d\'intervention',
      'exp.header.h1':    'Un accompagnement sur<br>l\'ensemble du spectre juridique',
      'exp.header.p':     'Du conseil préventif à la défense contentieuse, le cabinet intervient dans les principales disciplines du droit, avec la même exigence quelle que soit la nature du litige.',

      /* Expertises — cartes */
      'exp1.title': 'Droit de la famille',
      'exp1.text':  'Divorce et séparation, garde d\'enfants et droit de visite, règlement des successions et partage du patrimoine familial.',
      'exp2.title': 'Droit des affaires',
      'exp2.text':  'Rédaction et négociation de contrats commerciaux, constitution et gouvernance de sociétés, litiges entre associés et contentieux commercial.',
      'exp3.title': 'Droit administratif & public',
      'exp3.text':  'Recours devant les juridictions administratives, contentieux contre l\'État et les collectivités, marchés publics et droit de l\'urbanisme.',
      'exp4.title': 'Droit pénal',
      'exp4.text':  'Défense des personnes physiques et morales à tous les stades de la procédure pénale : garde à vue, instruction, jugement et appel.',
      'exp5.title': 'Droit du travail',
      'exp5.text':  'Relations employeur–salarié, licenciements et ruptures contractuelles, litiges devant le tribunal, négociation d\'accords collectifs.',
      'exp6.title': 'Conseil & Prévention',
      'exp6.text':  'Audit juridique préventif, rédaction et sécurisation de contrats, accompagnement stratégique pour anticiper les risques contentieux.',

      /* Contact — en-tête */
      'contact.header.label': 'Nous contacter',
      'contact.header.h1':    'Prenons le temps<br>d\'étudier votre dossier',
      'contact.header.p':     'Décrivez brièvement votre situation. Nous reviendrons vers vous dans les meilleurs délais pour convenir d\'un premier rendez-vous.',

      /* Contact — coordonnées */
      'contact.info.label':          'Coordonnées',
      'contact.detail.adresse.label':'Adresse',
      'contact.detail.tel.label':    'Téléphone',
      'contact.detail.email.label':  'Email',
      'contact.detail.horaires.label':'Horaires',
      'contact.detail.horaires.val': 'Dimanche – Jeudi : 9h – 17h',
      'contact.confidential':        'Toute consultation est soumise au secret professionnel. Les informations transmises via ce formulaire sont strictement confidentielles.',

      /* Formulaire */
      'form.nom.label':         'Nom complet',
      'form.nom.placeholder':   'Votre nom',
      'form.email.label':       'Adresse email',
      'form.email.placeholder': 'votre@email.com',
      'form.objet.label':       'Objet',
      'form.objet.placeholder': 'Nature de votre demande',
      'form.message.label':     'Message',
      'form.message.placeholder':'Décrivez brièvement votre situation…',
      'form.submit':            'Envoyer le message',
      'form.note':              'Réponse sous 48 h ouvrées',
      'form.success':           'Votre message a bien été transmis. Nous vous répondrons dans les meilleurs délais.',

      /* Footer */
      'footer.tagline':       'Cabinet d\'avocats à Alger',
      'footer.nav.title':     'Navigation',
      'footer.contact.title': 'Contact',
      'footer.copy':          '© 2025 Cabinet Avocats. Tous droits réservés.',
      'footer.confidential':  'Toute consultation est soumise au secret professionnel.'
    },

    en: {
      /* Navigation */
      'nav.cabinet':    'The Firm',
      'nav.equipe':     'Team',
      'nav.expertises': 'Practice Areas',
      'nav.contact':    'Contact',

      /* Hero — index */
      'hero.eyebrow':  'Law Firm — Algeria',
      'hero.h1':       'Legal excellence<br>in the service of your rights',
      'hero.subtitle': 'Advisory, litigation and defence of your interests before all courts.',
      'hero.cta':      'Get in touch',

      /* Intro — index */
      'intro.label': 'The Firm',
      'intro.h2':    'Counsel grounded<br>in practice',
      'intro.text':  'The firm advises individuals, businesses and institutions across all areas of law, from preventive counsel to courtroom defence. We appear before all Algerian courts, including in disputes between our clients and public authorities or the State. Our approach combines academic rigour with a practical command of each case: listening, analysing, defending with conviction.',
      'intro.quote': '"Listen, analyse,\ndefend with conviction."',

      /* Teasers — index */
      'teaser1.label': 'Our team',
      'teaser1.h3':    'Lawyers committed to every case',
      'teaser1.text':  'Led by Narimene Moukneche, PhD in public law and qualified to supervise research, our team brings together complementary profiles covering all disciplines of law.',
      'teaser1.cta':   'Meet the team',
      'teaser2.label': 'Our practice areas',
      'teaser2.h3':    'Comprehensive legal representation',
      'teaser2.text':  'Family law, business law, administrative law, criminal defence, labour law, and legal audit: we handle every matter with the same level of commitment.',
      'teaser2.cta':   'View our practice areas',

      /* Équipe — page header */
      'equipe.header.label': 'Our team',
      'equipe.header.h1':    'Lawyers committed<br>to every case',
      'equipe.header.p':     'A multidisciplinary team at the service of individuals, businesses and institutions, trained in both academic rigour and judicial practice.',

      /* Équipe — members */
      'member1.role':    'Attorney at the Algerian Bar',
      'member1.degree1': 'PhD in Public Law',
      'member1.degree2': 'Habilitation to Supervise Research (HDR)',
      'member1.degree3': 'Master\'s in Organizational Management',
      'member1.degree4': 'Master\'s in Business Law',
      'member1.bio':     'Holding a PhD in public law and the Habilitation to Supervise Research, Maître Moukneche combines recognised academic expertise with extensive litigation experience. She advises businesses, institutions and individuals on public law, business law and procedure before administrative and judicial courts.',

      'member2.role':    'Attorney at the Algerian Bar',
      'member2.degree1': 'Master\'s in Private Law — [University]',
      'member2.degree2': 'Bachelor\'s in Legal Sciences',
      'member2.bio':     '[First Name Last Name] practises civil law and family law, assisting individuals in court proceedings and amicable settlement. They guide clients through divorce proceedings, child custody disputes and estate matters.',

      'member3.role':    'Attorney at the Algerian Bar',
      'member3.degree1': 'Master\'s in Criminal Law — [University]',
      'member3.degree2': 'Bachelor\'s in Legal Sciences',
      'member3.bio':     '[First Name Last Name] specialises in criminal law, defending clients at every stage of criminal proceedings from investigation through to judgment and appeal, with a particular focus on the rights of the defence.',

      /* Expertises — page header */
      'exp.header.label': 'Practice Areas',
      'exp.header.h1':    'Comprehensive legal<br>representation',
      'exp.header.p':     'From preventive counsel to contentious defence, the firm practises across the main areas of law with the same rigour, regardless of the nature of the dispute.',

      /* Expertises — cards */
      'exp1.title': 'Family Law',
      'exp1.text':  'Divorce and separation, child custody and visitation rights, estate settlement and division of family assets.',
      'exp2.title': 'Business Law',
      'exp2.text':  'Drafting and negotiating commercial contracts, company formation and governance, shareholder disputes and commercial litigation.',
      'exp3.title': 'Administrative & Public Law',
      'exp3.text':  'Appeals before administrative courts, disputes against the State and local authorities, public procurement and planning law.',
      'exp4.title': 'Criminal Law',
      'exp4.text':  'Defence of individuals and legal entities at every stage of criminal proceedings: detention, investigation, trial and appeal.',
      'exp5.title': 'Employment Law',
      'exp5.text':  'Employer–employee relations, dismissals and termination, employment tribunal litigation, collective agreement negotiation.',
      'exp6.title': 'Legal Counsel & Risk Prevention',
      'exp6.text':  'Preventive legal audits, contract drafting and review, strategic advisory to anticipate and mitigate legal exposure.',

      /* Contact — page header */
      'contact.header.label': 'Contact us',
      'contact.header.h1':    'Let us take the time<br>to review your case',
      'contact.header.p':     'Briefly describe your situation. We will respond as soon as possible to arrange an initial consultation.',

      /* Contact — details */
      'contact.info.label':           'Contact Details',
      'contact.detail.adresse.label': 'Address',
      'contact.detail.tel.label':     'Phone',
      'contact.detail.email.label':   'Email',
      'contact.detail.horaires.label':'Hours',
      'contact.detail.horaires.val':  'Sunday – Thursday: 9am – 5pm',
      'contact.confidential':         'All consultations are subject to professional secrecy. Information submitted through this form is strictly confidential.',

      /* Form */
      'form.nom.label':          'Full name',
      'form.nom.placeholder':    'Your name',
      'form.email.label':        'Email address',
      'form.email.placeholder':  'your@email.com',
      'form.objet.label':        'Subject',
      'form.objet.placeholder':  'Nature of your request',
      'form.message.label':      'Message',
      'form.message.placeholder':'Briefly describe your situation…',
      'form.submit':             'Send message',
      'form.note':               'Response within 48 business hours',
      'form.success':            'Your message has been sent. We will reply as soon as possible.',

      /* Footer */
      'footer.tagline':       'Law firm in Algiers',
      'footer.nav.title':     'Navigation',
      'footer.contact.title': 'Contact',
      'footer.copy':          '© 2025 Cabinet Avocats. All rights reserved.',
      'footer.confidential':  'All consultations are subject to professional secrecy.'
    }
  };

  function applyLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;

    /* textContent updates */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.dataset.i18n;
      if (TRANSLATIONS[lang][key] !== undefined) {
        el.textContent = TRANSLATIONS[lang][key];
      }
    });

    /* innerHTML updates (for <br> tags etc.) */
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.dataset.i18nHtml;
      if (TRANSLATIONS[lang][key] !== undefined) {
        el.innerHTML = TRANSLATIONS[lang][key];
      }
    });

    /* placeholder updates */
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.dataset.i18nPlaceholder;
      if (TRANSLATIONS[lang][key] !== undefined) {
        el.placeholder = TRANSLATIONS[lang][key];
      }
    });

    /* Mark active language button */
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    /* Update html[lang] attribute for accessibility */
    document.documentElement.lang = lang;

    /* Persist choice */
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  function init() {
    /* Attach click handlers */
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLanguage(btn.dataset.lang);
      });
    });

    /* Apply saved language on load */
    var saved = 'fr';
    try { saved = localStorage.getItem('lang') || 'fr'; } catch (e) {}
    applyLanguage(saved);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
