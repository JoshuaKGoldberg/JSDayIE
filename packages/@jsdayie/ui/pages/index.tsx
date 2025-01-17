import React from "react";
import {
  Home,
  HomeProps,
  getSponsorsingPackagesData,
  getSponsorsData,
  getInfoData,
  getGalleryData,
  getBlogData,
  getSpeakerData,
  getScheduleData,
  getTicketData,
} from "@jsdayie/pages";
import { Seo } from "@jsdayie/components";
import { PATHS, seoValues } from "@jsdayie/config";

export interface HomePageProps {
  props: HomeProps;
}

export async function getStaticProps(): Promise<HomePageProps> {
  const sponsorsingPackages = await getSponsorsingPackagesData();
  const sponsors = await getSponsorsData();
  const info = await getInfoData();
  const gallery = await getGalleryData();
  const blog = await getBlogData();
  const speakers = await getSpeakerData();
  const activity = await getScheduleData();
  const tickets = await getTicketData();
  if (sponsorsingPackages instanceof Error) {
    throw new Error(sponsorsingPackages.message);
  } else if (sponsors instanceof Error) {
    throw new Error(sponsors.message);
  } else if (info instanceof Error) {
    throw new Error(info.message);
  } else if (gallery instanceof Error) {
    throw new Error(gallery.message);
  } else if (blog instanceof Error) {
    throw new Error(blog.message);
  } else if (speakers instanceof Error) {
    throw new Error(speakers.message);
  } else if (activity instanceof Error) {
    throw new Error(activity.message);
  } else if (tickets instanceof Error) {
    throw new Error(tickets.message);
  } else {
    return {
      props: {
        blog: {
          data: blog,
        },
        speakers,
        activity,
        tickets,
        sponsorsingPackages,
        sponsors,
        info,
        venue: {
          isPreview: true,
          galleryData: {
            urls: gallery,
          },
        },
      },
    };
  }
}

const HomePage: React.FC<HomeProps> = (props) => {
  const {
    blog,
    speakers,
    activity,
    tickets,
    sponsorsingPackages,
    sponsors,
    info,
    venue,
  } = props;
  return (
    <>
      <Seo
        title={seoValues.title(
          "The first JavaScipt conference in Ireland is back!"
        )}
        description={seoValues.description}
        mainColorHex={seoValues.mainColorHex}
        author={seoValues.author}
        keywords={seoValues.keywords}
        url={seoValues.url(PATHS.home)}
        facebookThumbnailUrl={seoValues.facebookThumbnailUrl}
        twitterThumbnailUrl={seoValues.twitterThumbnailUrl}
        twitterUserName={seoValues.twitterUserName}
        GA_MEASUREMENT_ID={seoValues.GA_MEASUREMENT_ID}
      />
      <Home
        blog={blog}
        speakers={speakers}
        activity={activity}
        tickets={tickets}
        sponsorsingPackages={sponsorsingPackages}
        sponsors={sponsors}
        info={info}
        venue={venue}
      />
    </>
  );
};

export default HomePage;
