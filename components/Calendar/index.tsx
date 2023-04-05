import { SyntheticEvent, useState } from "react";

import ApiCalendar from "react-google-calendar-api";

const config = {
  client_id: process.env.NEXT_GOOGLE_CALENDAR_CLIENT_ID,
  clientId: process.env.NEXT_GOOGLE_CALENDAR_CLIENT_ID,
  apiKey: process.env.NEXT_GOOGLE_CALENDAR_API_KEY,
  scope: "https://www.googleapis.com/auth/calendar",
  discoveryDocs: [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ],
};

const apiCalendar = new ApiCalendar(config);

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [calendars, setCalendars] = useState([]);
  const handleItemClick = (event: SyntheticEvent<any>, name: string): void => {
    if (name === "sign-in") {
      apiCalendar.handleAuthClick();
    } else if (name === "sign-out") {
      apiCalendar.handleSignoutClick();
    }
  };
  return (
    <div>
      <div className="inline-flex px-4 py-3 sm:px-6">
        <div className="mx-auto space-x-1 overflow-hidden p-1">
          <span className="group relative flex items-center text-slate-200">
            <button
              name="sign-in"
              className="ml-2 rounded-md bg-slate-800 py-2 px-4 text-slate-200 shadow-lg hover:bg-red-600 hover:shadow-red-700/50"
              onClick={(e) => handleItemClick(e, "sign-in")}
            >
              Log in
            </button>
            <button
              name="sign-out"
              className="ml-2 rounded-md bg-slate-800 py-2 px-4 text-slate-200 shadow-lg hover:bg-red-600 hover:shadow-red-700/50"
              onClick={(e) => handleItemClick(e, "sign-out")}
            >
              Log Out
            </button>
          </span>
        </div>
      </div>
      <div style={{ padding: "0.5em" }}>
        <button
          className="ml-2 rounded-md bg-slate-800 py-2 px-4 text-slate-200 shadow-lg hover:bg-red-600 hover:shadow-red-700/50"
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          onClick={(e) => {
            // eslint-disable-next-line @typescript-eslint/ban-types
            const eventFromNow: object = {
              summary: "Poc Dev From Now",
              time: 480,
            };

            apiCalendar
              .createEventFromNow(eventFromNow)
              // eslint-disable-next-line @typescript-eslint/ban-types
              .then((result: object) => {
                console.log(result);
              })
              .catch((error: any) => {
                console.log(error);
              });
          }}
        >
          Create Event from now
        </button>
      </div>
      <div style={{ padding: "0.5em" }}>
        <button
          className="ml-2 rounded-md bg-slate-800 py-2 px-4 text-slate-200 shadow-lg hover:bg-red-600 hover:shadow-red-700/50"
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          onClick={(e) => {
            apiCalendar.listUpcomingEvents(10).then(({ result }: any) => {
              console.log(result.items);
              setEvents(result.items);
            });
          }}
        >
          List upcoming events
        </button>
        <div>
          <h4>Events</h4>
          {events.length === 0 && <p>No events to show</p>}
          {events.map((event) => (
            <p key={event.id}>{JSON.stringify(event)}</p>
          ))}
        </div>
      </div>
      <div style={{ padding: "0.5em" }}>
        <button
          className="ml-2 rounded-md bg-slate-800 py-2 px-4 text-slate-200 shadow-lg hover:bg-red-600 hover:shadow-red-700/50"
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          onClick={(e) => {
            apiCalendar.listCalendars().then(({ result }: any) => {
              console.log(result.items);
              setCalendars(result.items);
            });
          }}
        >
          List calendars
        </button>
        <div>
          <h4>Calendars</h4>
          {calendars.length === 0 && <p>No calendars to show</p>}
          {calendars.map((calendar) => (
            <p key={calendar.id}>{JSON.stringify(calendar)}</p>
          ))}
        </div>
      </div>
      <div style={{ padding: "0.5em" }}>
        <button
          className="ml-2 rounded-md bg-slate-800 py-2 px-4 text-slate-200 shadow-lg hover:bg-red-600 hover:shadow-red-700/50"
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          onClick={(e) => {
            apiCalendar
              .createCalendar("myCalendar2")
              .then(({ result }: any) => {
                console.log(result);
              });
          }}
        >
          Create calendar
        </button>
      </div>
    </div>
  );
};

export default Calendar;
