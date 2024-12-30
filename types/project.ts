export interface Project {
  id: number;
  title: string;
  homepage_image: string;
  homepage_image_color: string;
  projectspage_image: string;
  category: "Ui/Ux Design" | "Audiovisuel" | "Branding" | "Communication";
  year: string;
  image_main: string;
  description: string;
  paragraph_title: string;
  paragraph_content: [string, string?];
  link?: string;
  link_text?: string;
}

export interface DesignProject extends Project {
  images: [string, string, string, string?];
  what_comes_form_it: string;
}

export interface BrandingProject extends Project {
  mockup_images: [string, string, string, string?];
  branding_images: [string, string, string, string, string, string?];
}

export interface SoacialMediasProject extends Project {
  without_background_image: string;
  full_width_image: string;
}

export interface AudiovisualProject extends Project {
  video: string;
}
