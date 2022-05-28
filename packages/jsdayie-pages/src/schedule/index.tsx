import React from "react";
import { Section, Table, Container, Spinner } from "@jsdayie/components";
import {
  ActivityArray,
  activityArrayValidator
} from "@jsdayie/domain";
import { RESOURCES } from "@jsdayie/config";

interface ScheduleProps {}

interface ScheduleState {}

export class Schedule extends React.Component<ScheduleProps, ScheduleState> {
  public render() {
    return (
      <Container>
        <Section title="Schedule" size={1}>
          <p>
            JSDayIE is a single-track 1-day tech conference featuring 12 talks
            from some of the best JavaScript professionals!
          </p>
          <Fetchable
            url={RESOURCES.schedule}
            validator={activityArrayValidator}
            loading={() => <Spinner size={100} />}
            error={(e: Error) => <div>Error: {e.message}</div>}
            success={(data: ActivityArray) => {
              return (
                <Table
                  headers={["Time", "Duration", "Speaker", "Activity"]}
                  rows={data.map(a => [
                    `${a.startTime}`,
                    a.duration,
                    a.speaker,
                    a.title
                  ])}
                  rowClass={row => (row[2] === "--" ? "schedule_break" : "")}
                />
              );
            }}
          />
          <a
            className="btn btn-outline-warning btn-lg"
            href="https://ti.to/wolk-software-limited/jsdayie-2023/"
          >
            Get your ticket now!
          </a>
        </Section>
      </Container>
    );
  }
}
