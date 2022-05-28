import React from "react";
import { Spinner, Section, Table, Button, Container } from "@jsdayie/components";
import { ISponsors, sponsorsValidator, sponsorsingPackageArrayValidator, SponsorsingPackageArray } from "@jsdayie/domain/types";
import { Fetchable } from "react-fetchable";
import { SponsorGroup } from "./sponsor_group";
import { RESOURCES } from "@jsdayie/config";

export class Sponsors extends React.Component {
  render() {
    return (
      <Container>
        <Section title="A shout out to our amazing sponsors!" size={1}>
          <p>
            JSDayIE 2023 would not be possible without the support of the following organizations.
            Would you like to add your name to the list? Check out our sponsorship opportunities!
          </p>
          <Fetchable
              url={RESOURCES.sponsors}
              validator={sponsorsValidator}
              loading={() => <Spinner size={100}/>}
              error={(e: Error) => <div>Error: {e.message}</div>}
              success={(data: ISponsors) => {
                return (
                  <React.Fragment>
                    <SponsorGroup group="presenting" label="Presenting Sponsor" sponsors={data} />
                    <SponsorGroup group="diamond" label="Diamond Sponsor" sponsors={data} />
                    <SponsorGroup group="platinumPlus" label="Platinum Plus Sponsors" sponsors={data} />
                    <SponsorGroup group="platinum" label="Platinum Sponsors" sponsors={data} />
                    <SponsorGroup group="gold" label="Gold Sponsors" sponsors={data} />
                    <SponsorGroup group="silver" label="Silver Sponsors" sponsors={data} />
                    <SponsorGroup group="media" label="Media Sponsors" sponsors={data} />
                    <SponsorGroup group="community" label="Community Partners" sponsors={data} />
                    <SponsorGroup group="others" label="Community Sponsors" sponsors={data} />
                  </React.Fragment>
                );
              }}
          />
        </Section>
        <Section title="Would you like to sponsor JSdayIE 2023?" size={1}>
          <p>
            Sponsoring JSDayIE is a great way to contribute to the healthy
            growth of the JavaScript community in Ireland. Please join us 
            in creating an amazing experience for each and every attendee.
          </p>
          <Fetchable
            url={RESOURCES.sponsorship}
            validator={sponsorsingPackageArrayValidator}
            loading={() => <Spinner size={100}/>}
            error={(e: Error) => <div>Error: {e.message}</div>}
            success={(data: SponsorsingPackageArray) => {
              return (
                <Table
                  headers={[
                    "",
                    "Silver",
                    "Gold",
                    "Platinum",
                    "Platinum Plus",
                    "Diamond"
                  ]}
                  rows={
                    data.map(a => [
                      a.title,
                      a.silver,
                      a.gold,
                      a.platinum,
                      a.platinumPlus,
                      a.diamond
                    ])
                  }
                />
              );
            }}
          />
          <p>* Fees are displayed excluding 23% VAT</p>
          <p>
            Sponsoring offers a unique opportunity to expose your brand
            and find talent specialized in JavaScript technologies
            in Ireland.
          </p>
          <Button href="mailto:info@jsday.ie">
            Contact us to become a sponsor now!
          </Button>
        </Section>
      </Container>
    );
  }
}
