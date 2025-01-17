import * as io from "io-ts";

export const activityValidator = io.type({
  startTime: io.string,
  duration: io.string,
  title: io.string,
  speaker: io.string,
});

export const activityArrayValidator = io.array(activityValidator);

export type IActivity = io.TypeOf<typeof activityValidator>;
export type ActivityArray = io.TypeOf<typeof activityArrayValidator>;

export const sponsorsingPackageValidator = io.type({
  title: io.string,
  bronze: io.string,
  silver: io.string,
  gold: io.string,
  platinum: io.string,
  platinumPlus: io.string,
  diamond: io.string,
  hide: io.boolean,
});

export const sponsorsingPackageArrayValidator = io.array(
  sponsorsingPackageValidator
);

export type ISponsorsingPackage = io.TypeOf<typeof sponsorsingPackageValidator>;
export type SponsorsingPackageArray = io.TypeOf<
  typeof sponsorsingPackageArrayValidator
>;

export const sponsorValidator = io.type({
  hide: io.boolean,
  name: io.string,
  web: io.string,
  logo: io.string,
});

export type ISponsor = io.TypeOf<typeof sponsorValidator>;

export const sponsorsValidator = io.type({
  silver: io.array(sponsorValidator),
  gold: io.array(sponsorValidator),
  platinum: io.array(sponsorValidator),
  platinumPlus: io.array(sponsorValidator),
  diamond: io.array(sponsorValidator),
  presenting: io.array(sponsorValidator),
  media: io.array(sponsorValidator),
  community: io.array(sponsorValidator),
  others: io.array(sponsorValidator),
});

export type ISponsors = io.TypeOf<typeof sponsorsValidator>;

export const awardValidator = io.type({
  hide: io.boolean,
  name: io.string,
  description: io.string,
  icon: io.string,
  nominationLink: io.string,
  disabled: io.boolean,
});

export const awardsValidator = io.type({
  categories: io.array(awardValidator),
});

export type IAward = io.TypeOf<typeof awardValidator>;
export type IAwards = io.TypeOf<typeof awardsValidator>;

export const speakerLinksValidator = io.partial({
  twitter: io.string,
  web: io.string,
  github: io.string,
  medium: io.string,
  linkedin: io.string,
  youtube: io.string,
});

export const talkValidator = io.partial({
  title: io.string,
  abstract: io.string,
});

export const speakerValidator = io.type({
  name: io.string,
  company: io.union([io.string, io.undefined]),
  role: io.string,
  city: io.union([io.string, io.undefined]),
  country: io.union([io.string, io.undefined]),
  pic: io.string,
  bio: io.string,
  links: speakerLinksValidator,
  hide: io.boolean,
  talk: talkValidator,
});

export const speakerArrayValidator = io.array(speakerValidator);

export type SpeakerArray = io.TypeOf<typeof speakerArrayValidator>;
export type ISpeaker = io.TypeOf<typeof speakerValidator>;

export const ticketValidator = io.type({
  type: io.string,
  price: io.string,
  isSoldOut: io.boolean,
  isRemote: io.boolean,
});

export const ticketArrayValidator = io.array(ticketValidator);

export type ITicket = io.TypeOf<typeof ticketValidator>;
export type TicketArray = io.TypeOf<typeof ticketArrayValidator>;

export const blogEntryValidator = io.type({
  visible: io.boolean,
  id: io.string,
  date: io.string,
  title: io.string,
  summary: io.string,
  thumbnail: io.string,
});

export const blogEntryArrayValidator = io.array(blogEntryValidator);

export type IBlogEntry = io.TypeOf<typeof blogEntryValidator>;
export type BlogEntryArray = io.TypeOf<typeof blogEntryArrayValidator>;

export const hashTagValidator = io.type({
  hashtag: io.string,
  isPrimary: io.boolean,
});

export const hashTagArrayValidator = io.array(hashTagValidator);

export const trendingTopicsValidator = io.type({
  yearOne: hashTagArrayValidator,
});

export type IHashTag = io.TypeOf<typeof hashTagValidator>;
export type HashTagArray = io.TypeOf<typeof hashTagArrayValidator>;
export type TrendingTopic = io.TypeOf<typeof trendingTopicsValidator>;
export const urlArrayValidator = io.array(io.string);
export type GalleryUrl = io.TypeOf<typeof urlArrayValidator>;

export const infoEntryValidator = io.type({
  id: io.string,
  title: io.string,
  summary: io.string,
  thumbnail: io.string,
});

export const infoEntryArrayValidator = io.array(infoEntryValidator);
export type IInfoEntry = io.TypeOf<typeof infoEntryValidator>;
export type InfoEntryArray = io.TypeOf<typeof infoEntryArrayValidator>;
