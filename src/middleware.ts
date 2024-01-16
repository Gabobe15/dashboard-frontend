export { default } from 'next-auth/middleware';
export const config = {
  matcher: [
    '/dashboard/analytics',
    '/dashboard/profile',
    '/dashboard/settings',
  ],
};
