export const DB_PATH = `${process.env.XATA_URL}/db/Linktree:${process.env.XATA_BRANCH}`;

export async function getXataHeaders() {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.XATA_API_KEY}`,
  };
}
