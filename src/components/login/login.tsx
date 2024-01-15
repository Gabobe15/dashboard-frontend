import { Button } from '@mui/material';
import { useSession, signIn, signOut } from 'next-auth/react';
export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <Button variant="contained" color={'error'} onClick={() => signOut()}>
          Sign out
        </Button>
      </>
    );
  }
  return (
    <>
      <Button variant={'contained'} color={'success'} onClick={() => signIn()}>
        Sign in
      </Button>
    </>
  );
}
