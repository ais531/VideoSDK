export const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiIwOGZhNDdhYi04NTJmLTRmZWUtYjk0Ny0zMGRjNzU4Y2UwZTkiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY3NDI1ODk5OSwiZXhwIjoxODMyMDQ2OTk5fQ.AdM0vGJeF3CM1xBlX5RwoTGx5yQ98UIsq_F23TSIwiI';
// API call to create meeting
export const createMeeting = async ({token}) => {
  const res = await fetch('https://api.videosdk.live/v2/rooms', {
    method: 'POST',
    headers: {
      authorization: `${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
  });

  const {roomId} = await res.json();
  return roomId;
};
