import React from "react";
import { useHMSStore, selectLocalPeerRole } from "@100mslive/react-sdk";
import Chat from "./Chat";
import Participants from "./Participants";
import ScheduleSidebar from "@components/schedule-sidebar-individual";
import { Stage } from "@lib/types";
import * as Tabs from "@radix-ui/react-tabs";

type SidebarProps = {
  allStages: Stage[];
};

const Sidebar = ({ allStages }: SidebarProps) => {
  const localRole = useHMSStore(selectLocalPeerRole);
  console.log("ROLE CHANGE");
  return (
    <Tabs.Root asChild defaultValue="1">
      <div className="sidebar-container">
        <Tabs.List className="tabs w-full px-4">
          <Tabs.Trigger asChild value="1">
            <button className="h-[35px] w-1/2 rounded-l-md border border-solid border-slate-700 text-[14px] text-slate-300">
              Chat
            </button>
          </Tabs.Trigger>

          {localRole?.name === "viewer" || localRole?.name === "invitee" ? (
            <Tabs.Trigger asChild value="3">
              <button className="h-[35px]  w-1/2 rounded-r-md border border-solid border-slate-700 text-[14px] text-slate-300">
                Schedule
              </button>
            </Tabs.Trigger>
          ) : (
            <Tabs.Trigger asChild value="2">
              <button className="h-[35px]  w-1/2 rounded-r-md border border-solid border-slate-700 text-[14px] text-slate-300">
                Participants
              </button>
            </Tabs.Trigger>
          )}
        </Tabs.List>
        <Tabs.Content asChild value="1">
          <Chat />
        </Tabs.Content>
        <Tabs.Content asChild value="2">
          <Participants />
        </Tabs.Content>
        <Tabs.Content asChild value="3">
          <ScheduleSidebar allStages={allStages} />
        </Tabs.Content>
      </div>
    </Tabs.Root>
  );
};

export default Sidebar;
