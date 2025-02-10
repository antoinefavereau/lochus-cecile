import type { Schema, Struct } from '@strapi/strapi';

export interface AccueilCompetence extends Struct.ComponentSchema {
  collectionName: 'components_accueil_competences';
  info: {
    displayName: 'competence';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    titre: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AccueilParcours extends Struct.ComponentSchema {
  collectionName: 'components_accueil_parcours';
  info: {
    description: '';
    displayName: 'parcours';
  };
  attributes: {
    date: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    lieu: Schema.Attribute.String & Schema.Attribute.Required;
    titre: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LienLien extends Struct.ComponentSchema {
  collectionName: 'components_lien_liens';
  info: {
    description: '';
    displayName: 'lien';
    icon: 'link';
  };
  attributes: {
    lien: Schema.Attribute.String & Schema.Attribute.Required;
    titre: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ParagrapheParagraphe extends Struct.ComponentSchema {
  collectionName: 'components_paragraphe_paragraphes';
  info: {
    description: '';
    displayName: 'paragraphe';
    icon: 'filter';
  };
  attributes: {
    texte_1: Schema.Attribute.Text & Schema.Attribute.Required;
    texte_2: Schema.Attribute.Text;
    titre: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProjetImages extends Struct.ComponentSchema {
  collectionName: 'components_projet_images';
  info: {
    displayName: 'images';
  };
  attributes: {
    image_1: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    image_2: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    image_3: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    image_4: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface ProjetImagesBranding extends Struct.ComponentSchema {
  collectionName: 'components_projet_images_brandings';
  info: {
    displayName: 'images_branding';
  };
  attributes: {
    image_1: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    image_2: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    image_3: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    image_4: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    image_5: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    image_6: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface ProjetImagesMockup extends Struct.ComponentSchema {
  collectionName: 'components_projet_images_mockups';
  info: {
    displayName: 'images_mockup';
  };
  attributes: {
    image_1: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    image_2: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    image_3: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    image_4: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface ProjetProjetAudiovisuel extends Struct.ComponentSchema {
  collectionName: 'components_projet_projet_audiovisuels';
  info: {
    displayName: 'Projet Audiovisuel';
  };
  attributes: {
    video: Schema.Attribute.Media<'files' | 'videos'> &
      Schema.Attribute.Required;
  };
}

export interface ProjetProjetCommunication extends Struct.ComponentSchema {
  collectionName: 'components_projet_projet_communications';
  info: {
    displayName: 'Projet Communication';
  };
  attributes: {
    image_large: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    image_sans_fond: Schema.Attribute.Media<'files' | 'images'> &
      Schema.Attribute.Required;
  };
}

export interface ProjetProjetDefaut extends Struct.ComponentSchema {
  collectionName: 'components_projet_projet_defauts';
  info: {
    description: '';
    displayName: 'Projet Defaut';
  };
  attributes: {
    annee: Schema.Attribute.Date & Schema.Attribute.Required;
    categorie: Schema.Attribute.Relation<
      'oneToOne',
      'api::categorie.categorie'
    >;
    couleur_image_home: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    image_home: Schema.Attribute.Media<'images' | 'files' | 'videos'> &
      Schema.Attribute.Required;
    image_principale: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    image_projets: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    lien: Schema.Attribute.Component<'lien.lien', false>;
    paragraphe: Schema.Attribute.Component<'paragraphe.paragraphe', false> &
      Schema.Attribute.Required;
    titre: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface ProjetProjetDesignGraphique extends Struct.ComponentSchema {
  collectionName: 'components_projet_projet_design_graphiques';
  info: {
    displayName: 'Projet Design Graphique';
  };
  attributes: {
    images_branding: Schema.Attribute.Component<
      'projet.images-branding',
      false
    > &
      Schema.Attribute.Required;
    images_mockup: Schema.Attribute.Component<'projet.images-mockup', false> &
      Schema.Attribute.Required;
  };
}

export interface ProjetProjetDeveloppementWeb extends Struct.ComponentSchema {
  collectionName: 'components_projet_projet_developpement_webs';
  info: {
    description: '';
    displayName: 'Projet Developpement web';
  };
  attributes: {
    image_1: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    image_2: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    image_3: Schema.Attribute.Media<'images' | 'files'>;
    texte_1: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ProjetProjetUiUxDesign extends Struct.ComponentSchema {
  collectionName: 'components_projet_projet_ui_ux_designs';
  info: {
    displayName: 'Projet Ui/Ux Design';
  };
  attributes: {
    ce_qui_en_decoule: Schema.Attribute.Text & Schema.Attribute.Required;
    images: Schema.Attribute.Component<'projet.images', false> &
      Schema.Attribute.Required;
  };
}

export interface TextesTexte extends Struct.ComponentSchema {
  collectionName: 'components_textes_textes';
  info: {
    displayName: 'texte';
  };
  attributes: {
    texte: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'accueil.competence': AccueilCompetence;
      'accueil.parcours': AccueilParcours;
      'lien.lien': LienLien;
      'paragraphe.paragraphe': ParagrapheParagraphe;
      'projet.images': ProjetImages;
      'projet.images-branding': ProjetImagesBranding;
      'projet.images-mockup': ProjetImagesMockup;
      'projet.projet-audiovisuel': ProjetProjetAudiovisuel;
      'projet.projet-communication': ProjetProjetCommunication;
      'projet.projet-defaut': ProjetProjetDefaut;
      'projet.projet-design-graphique': ProjetProjetDesignGraphique;
      'projet.projet-developpement-web': ProjetProjetDeveloppementWeb;
      'projet.projet-ui-ux-design': ProjetProjetUiUxDesign;
      'textes.texte': TextesTexte;
    }
  }
}
