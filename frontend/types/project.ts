export interface ProjectType {
  id: number;
  title: string;
  homepage_image: string;
  homepage_image_color: string;
  projectspage_image: string;
  category:
    | "Ui/Ux Design"
    | "Audiovisuel"
    | "Design Graphique"
    | "Communication";
  year: string;
  image_main: string;
  description: string;
  paragraph_title: string;
  paragraph_content: [string, string?];
  link?: string;
  link_text?: string;
  images?: [string, string, string, string?];
  what_comes_form_it?: string;
  mockup_images?: [string, string, string, string];
  branding_images?: [string, string, string, string, string, string?];
  without_background_image?: string;
  full_width_image?: string;
  video?: string;
}
