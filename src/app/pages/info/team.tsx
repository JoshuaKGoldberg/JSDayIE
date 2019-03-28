import * as React from "react";
import { Section, Container } from "../../../lib/components";
import { Speaker } from "../speakers/speaker";

export function Team() {
    return (
        <Container>
            <Section title="The organizing team" size={1}>
                <p>
                    JSDayIE is organized some by members of the dev community in Ireland.
                </p>
                <div className="row">
                    <div className="col-md-4">
                        <Speaker
                            details={{
                                hide: false,
                                name: "Irene Yeriskin",
                                company: "Inclusion and Diversity Chair",
                                bio: "Irene is a Software Engineer at Oliver Wyman, WomenWhoCode Dublin director and the Chair of Inclusion and Diversity of JSDayIE.",
                                links: {
                                    linkedin: "https://www.linkedin.com/in/irene-yeriskin-64328659/",
                                    twitter: "https://twitter.com/rene_iy",
                                },
                                pic: "/media/irene_yeriskin.jpg"
                            }}
                        />
                    </div>
                    <div className="col-md-4">
                        <Speaker
                            details={{
                                hide: false,
                                name: "Remo H. Jansen",
                                company: "General Chair",
                                bio: "Remo is the CEO of Wolk Software, a Microsoft MVP and the organizer of the Dublin TypeScript meetup and lead organizer of JSDayIE.",
                                links: {
                                    github: "https://github.com/remojansen",
                                    linkedin: "https://www.linkedin.com/in/remojansen/",
                                    twitter: "https://twitter.com/RemoHJansen",
                                    web: "http://www.remojansen.com/"
                                },
                                pic: "/media/remo_jansen.jpg"
                            }}
                        />
                    </div>
                    <div className="col-md-4">
                        <Speaker
                            details={{
                                hide: false,
                                name: "You! Maybe?",
                                company: "Accessibility Chair",
                                bio: "We are looking for someone to join us as the accessibility chair. Please contact us if you are interested.",
                                links: {
                                    linkedin: "https://www.linkedin.com/company/jsdayie/",
                                    twitter: "https://twitter.com/JSDayIE",
                                    web: "https://www.jsday.org"
                                },
                                pic: "/media/tbd.jpg"
                            }}
                        />
                    </div>
                </div>
            </Section>
        </Container>
    );
}