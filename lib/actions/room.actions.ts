"use server";

import { nanoid } from "nanoid";
import liveblocks from "../liveblocks";
import { revalidatePath } from "next/cache";
import { parseStringify } from "../utils";

export const createDocument = async ({
  userId,
  email,
}: CreateDocumentParams) => {
  const roomId = nanoid();

  try {
    const metadata = {
      creatorId: userId,
      email,
      title: "Untitled Document",
    };

    const usersAccesses: RoomAccesses = {
      [email]: ["room:write"],
    };

    const room = await liveblocks.createRoom(roomId, {
      // Private room
      defaultAccesses: [],
      // Only the creator can edit
      usersAccesses,
      metadata,
    });

    revalidatePath("/");

    return parseStringify(room);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create document");
  }
};
