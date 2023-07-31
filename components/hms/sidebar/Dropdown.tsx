import React from "react";
import { FC } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import HorizontalMenuIcon from "@components/icons/icon-menu-hor";
import {
  selectLocalPeerRole,
  useHMSActions,
  useHMSStore,
} from "@100mslive/react-sdk";
import { InviteStageIcon, RemoveUserIcon } from "@100mslive/react-icons";

const Dropdown: FC<{ id: string; role: string }> = ({ id, role }) => {
  const actions = useHMSActions();
  const changeRole = async () => {
    const nextRole = role === "viewer" ? "invitee" : "viewer";
    try {
      if (nextRole === "invitee") {
        await actions.changeRole(id, nextRole, false);
      } else {
        await actions.changeRole(id, nextRole, true);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  const removePeer = async () => {
    try {
      await actions.removePeer(id, "Bye");
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  const localRole = useHMSStore(selectLocalPeerRole);
  return (
    <>
      {role === "backstage" ? null : (
        <div>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button type="button">
                <HorizontalMenuIcon />
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="min-w-[220px] rounded-lg bg-slate-700">
              <DropdownMenu.Item asChild>
                <button
                  className={`flex w-full items-center rounded-lg px-2 py-3 text-sm focus:bg-slate-600 focus:outline-none`}
                  onClick={changeRole}
                >
                  <InviteStageIcon className="mr-2" />
                  {role === "viewer"
                    ? "Bring user to stage"
                    : "Remove user from stage"}
                </button>
              </DropdownMenu.Item>
              {localRole?.name === "backstage" ? (
                <DropdownMenu.Item asChild>
                  <button
                    className="flex w-full items-center rounded-lg px-2 py-3 text-sm focus:bg-slate-600 focus:outline-none"
                    onClick={removePeer}
                  >
                    <RemoveUserIcon className="mr-2" /> Remove user
                  </button>
                </DropdownMenu.Item>
              ) : null}
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      )}
    </>
  );
};

export default Dropdown;
