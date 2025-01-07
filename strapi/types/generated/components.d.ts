import type { Schema, Struct } from '@strapi/strapi';

export interface LienLien extends Struct.ComponentSchema {
  collectionName: 'components_lien_liens';
  info: {
    description: '';
    displayName: 'lien';
    icon: 'link';
  };
  attributes: {
    lien: Schema.Attribute.String & Schema.Attribute.Required;
    titre: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Voir le projet'>;
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
    texte_1: Schema.Attribute.Blocks & Schema.Attribute.Required;
    texte_2: Schema.Attribute.Blocks;
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

export interface ProjetProjetDefaut extends Struct.ComponentSchema {
  collectionName: 'components_projet_projet_defauts';
  info: {
    displayName: 'projet_defaut';
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'lien.lien': LienLien;
      'paragraphe.paragraphe': ParagrapheParagraphe;
      'projet.images': ProjetImages;
      'projet.images-branding': ProjetImagesBranding;
      'projet.images-mockup': ProjetImagesMockup;
      'projet.projet-defaut': ProjetProjetDefaut;
    }
  }
}
