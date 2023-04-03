export interface Mission {
  flight_number: number;
  mission_name: string;
  launch_year: string;
  details: string;
  links: {
    mission_patch_small: string;
    article_lik: string;
    video_link: string;
  };
  launch_success: boolean;
  rocket: {
    rocket_id: number;
    rocket_name: string;
    rocket_type: string;
  };
  launch_site: {
    site_id: number;
    site_name: string;
    site_name_long: string;
  };
}
